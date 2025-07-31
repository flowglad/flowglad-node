// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'checkout_sessions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/checkout-sessions',
  operationId: 'checkoutSessions-list',
};

export const tool: Tool = {
  name: 'list_checkout_sessions',
  description: 'List Checkout Sessions',
  inputSchema: {
    type: 'object',
    properties: {
      cursor: {
        type: 'string',
      },
      limit: {
        type: 'number',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.checkoutSessions.list(body));
};

export default { metadata, tool, handler };
