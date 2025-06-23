// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description: 'Get Billing Details',
  inputSchema: {
    type: 'object',
    properties: {
      externalId: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { externalId, ...body } = args as any;
  return asTextContentResult(await client.customers.retrieveBilling(externalId));
};

export default { metadata, tool, handler };
