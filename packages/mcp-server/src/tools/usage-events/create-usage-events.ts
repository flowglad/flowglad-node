// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'usage_events',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/usage-events',
  operationId: 'usageEvents-create',
};

export const tool: Tool = {
  name: 'create_usage_events',
  description: 'Create Usage Event',
  inputSchema: {
    type: 'object',
    properties: {
      usageEvent: {
        type: 'object',
        properties: {
          amount: {
            type: 'integer',
          },
          priceId: {
            type: 'string',
          },
          subscriptionId: {
            type: 'string',
          },
          transactionId: {
            type: 'string',
            description:
              'A unique identifier for the transaction. This is used to prevent duplicate usage events from being created.',
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
        required: ['amount', 'priceId', 'subscriptionId', 'transactionId'],
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.usageEvents.create(body));
};

export default { metadata, tool, handler };
