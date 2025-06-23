// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'discounts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/discounts',
  operationId: 'discounts-create',
};

export const tool: Tool = {
  name: 'create_discounts',
  description: 'Create Discount',
  inputSchema: {
    type: 'object',
    properties: {
      discount: {
        anyOf: [
          {
            type: 'object',
            properties: {
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
              duration: {
                type: 'string',
                enum: ['once'],
              },
              livemode: {
                type: 'boolean',
              },
              name: {
                type: 'string',
              },
              numberOfPayments: {
                type: 'string',
                enum: ['null'],
              },
              organizationId: {
                type: 'string',
              },
              active: {
                type: 'boolean',
              },
            },
            required: [
              'amount',
              'amountType',
              'code',
              'duration',
              'livemode',
              'name',
              'numberOfPayments',
              'organizationId',
            ],
          },
          {
            type: 'object',
            properties: {
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
              duration: {
                type: 'string',
                enum: ['number_of_payments'],
              },
              livemode: {
                type: 'boolean',
              },
              name: {
                type: 'string',
              },
              numberOfPayments: {
                type: 'number',
                description: 'safeZodPositiveInteger',
              },
              organizationId: {
                type: 'string',
              },
              active: {
                type: 'boolean',
              },
            },
            required: [
              'amount',
              'amountType',
              'code',
              'duration',
              'livemode',
              'name',
              'numberOfPayments',
              'organizationId',
            ],
          },
          {
            type: 'object',
            properties: {
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
              duration: {
                type: 'string',
                enum: ['forever'],
              },
              livemode: {
                type: 'boolean',
              },
              name: {
                type: 'string',
              },
              numberOfPayments: {
                type: 'string',
                enum: ['null'],
              },
              organizationId: {
                type: 'string',
              },
              active: {
                type: 'boolean',
              },
            },
            required: [
              'amount',
              'amountType',
              'code',
              'duration',
              'livemode',
              'name',
              'numberOfPayments',
              'organizationId',
            ],
          },
        ],
        description:
          'A discount record, which describes a discount that can be applied to purchases or subscriptions. Discounts can be one-time, have a fixed number of payments, or be applied indefinitely.',
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.discounts.create(body));
};

export default { metadata, tool, handler };
