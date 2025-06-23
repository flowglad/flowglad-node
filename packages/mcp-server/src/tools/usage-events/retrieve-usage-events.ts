// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'usage_events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/usage-events/{id}',
  operationId: 'usageEvents-get',
};

export const tool: Tool = {
  name: 'retrieve_usage_events',
  description: 'Get UsageEvent',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.usageEvents.retrieve(id));
};

export default { metadata, tool, handler };
