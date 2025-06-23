// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'usage_events',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/usage-events/{id}',
  operationId: 'usageEvents-update',
};

export const tool: Tool = {
  name: 'update_usage_events',
  description: 'Update UsageEvent',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      usageEvent: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          amount: {
            type: 'integer',
          },
          priceId: {
            type: 'string',
          },
          properties: {
            type: 'object',
            description:
              'Properties for the usage event. Only required when using the "count_distinct_properties" aggregation type.',
          },
          usageDate: {
            type: 'number',
            description:
              'The date the usage occurred in unix epoch milliseconds. If not provided, the current timestamp will be used.',
          },
        },
        required: ['id'],
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.usageEvents.update(id, body));
};

export default { metadata, tool, handler };
