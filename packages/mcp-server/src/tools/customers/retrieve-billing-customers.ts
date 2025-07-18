// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'customers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/customers/{externalId}/billing',
  operationId: 'customers-getBilling',
};

export const tool: Tool = {
  name: 'retrieve_billing_customers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Billing Details",
  inputSchema: {
    type: 'object',
    properties: {
      externalId: {
        type: 'string',
      },
    },
    required: ['externalId'],
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { externalId, ...body } = args as any;
  return asTextContentResult(await client.customers.retrieveBilling(externalId));
};

export default { metadata, tool, handler };
