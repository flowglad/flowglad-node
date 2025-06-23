// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'usage_meters',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/usage-meters',
  operationId: 'usageMeters-list',
};

export const tool: Tool = {
  name: 'list_usage_meters',
  description: 'List UsageMeters',
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
  return asTextContentResult(await client.usageMeters.list(body));
};

export default { metadata, tool, handler };
