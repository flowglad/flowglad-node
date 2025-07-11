// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'discounts',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/discounts/{id}',
  operationId: 'discounts-update',
};

export const tool: Tool = {
  name: 'update_discounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate Discount",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      discount: {
        anyOf: [
          {
            type: 'object',
            properties: {
              id: {
                type: 'string',
              },
              duration: {
                type: 'string',
                enum: ['once'],
              },
              numberOfPayments: {
                type: 'string',
                enum: ['null'],
              },
              active: {
                type: 'boolean',
              },
              amount: {
                type: 'number',
                description: 'safeZodPositiveInteger',
              },
              amountType: {
                type: 'string',
                enum: ['percent', 'fixed'],
              },
              code: {
                type: 'string',
              },
              createdAt: {
                type: 'string',
                format: 'date-time',
              },
              createdByCommit: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
              updatedAt: {
                type: 'string',
                format: 'date-time',
              },
              updatedByCommit: {
                type: 'string',
              },
            },
            required: ['id', 'duration', 'numberOfPayments'],
          },
          {
            type: 'object',
            properties: {
              id: {
                type: 'string',
              },
              duration: {
                type: 'string',
                enum: ['number_of_payments'],
              },
              numberOfPayments: {
                type: 'number',
                description: 'safeZodPositiveInteger',
              },
              active: {
                type: 'boolean',
              },
              amount: {
                type: 'number',
                description: 'safeZodPositiveInteger',
              },
              amountType: {
                type: 'string',
                enum: ['percent', 'fixed'],
              },
              code: {
                type: 'string',
              },
              createdAt: {
                type: 'string',
                format: 'date-time',
              },
              createdByCommit: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
              updatedAt: {
                type: 'string',
                format: 'date-time',
              },
              updatedByCommit: {
                type: 'string',
              },
            },
            required: ['id', 'duration', 'numberOfPayments'],
          },
          {
            type: 'object',
            properties: {
              id: {
                type: 'string',
              },
              duration: {
                type: 'string',
                enum: ['forever'],
              },
              numberOfPayments: {
                type: 'string',
                enum: ['null'],
              },
              active: {
                type: 'boolean',
              },
              amount: {
                type: 'number',
                description: 'safeZodPositiveInteger',
              },
              amountType: {
                type: 'string',
                enum: ['percent', 'fixed'],
              },
              code: {
                type: 'string',
              },
              createdAt: {
                type: 'string',
                format: 'date-time',
              },
              createdByCommit: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
              updatedAt: {
                type: 'string',
                format: 'date-time',
              },
              updatedByCommit: {
                type: 'string',
              },
            },
            required: ['id', 'duration', 'numberOfPayments'],
          },
        ],
        description:
          'A discount record, which describes a discount that can be applied to purchases or subscriptions. Discounts can be one-time, have a fixed number of payments, or be applied indefinitely.',
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.discounts.update(id, body));
};

export default { metadata, tool, handler };
