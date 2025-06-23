// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'subscriptions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/subscriptions/{id}/cancel',
  operationId: 'subscriptions-cancel',
};

export const tool: Tool = {
  name: 'cancel_subscriptions',
  description: 'Cancel a Subscription',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      cancellation: {
        anyOf: [
          {
            type: 'object',
            properties: {
              timing: {
                type: 'string',
                enum: ['at_end_of_current_billing_period'],
              },
            },
            required: ['timing'],
          },
          {
            type: 'object',
            properties: {
              endDate: {
                type: 'string',
                format: 'date-time',
              },
              timing: {
                type: 'string',
                enum: ['at_future_date'],
              },
            },
            required: ['endDate', 'timing'],
          },
          {
            type: 'object',
            properties: {
              timing: {
                type: 'string',
                enum: ['immediately'],
              },
            },
            required: ['timing'],
          },
        ],
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptions.cancel(id, body));
};

export default { metadata, tool, handler };
