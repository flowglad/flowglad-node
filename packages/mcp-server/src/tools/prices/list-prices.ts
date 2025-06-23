// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'prices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/prices',
  operationId: 'prices-list',
};

export const tool: Tool = {
  name: 'list_prices',
  description: 'List Prices',
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
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.prices.list(body));
};

export default { metadata, tool, handler };
