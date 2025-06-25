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
  httpPath: '/api/v1/usage-meters/{id}',
  operationId: 'usageMeters-get',
};

export const tool: Tool = {
  name: 'retrieve_usage_meters',
  description: 'Get Usage Meter',
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
  return asTextContentResult(await client.usageMeters.retrieve(id));
};

export default { metadata, tool, handler };
