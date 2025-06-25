// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'prices',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/prices/{id}',
  operationId: 'prices-edit',
};

export const tool: Tool = {
  name: 'update_prices',
  description: 'Update Price',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      price: {
        anyOf: [
          {
            type: 'object',
            description:
              'A subscription price, which will have details on the interval, default trial period, and setup fee (if any).',
            properties: {
              id: {
                type: 'string',
              },
              type: {
                type: 'string',
                enum: ['subscription'],
              },
              active: {
                type: 'boolean',
              },
              intervalCount: {
                type: 'number',
                description: 'safeZodPositiveInteger',
              },
              intervalUnit: {
                type: 'string',
                enum: ['day', 'week', 'month', 'year'],
              },
              isDefault: {
                type: 'boolean',
              },
              name: {
                type: 'string',
              },
              overagePriceId: {
                type: 'string',
                description: 'safeZodNullishString',
              },
              productId: {
                type: 'string',
              },
              setupFeeAmount: {
                anyOf: [
                  {
                    type: 'number',
                    description: 'safeZodPositiveInteger',
                  },
                  {
                    type: 'string',
                    description: 'safeZodPositiveInteger',
                    enum: [0],
                  },
                ],
                description: 'safeZodPositiveInteger',
              },
              slug: {
                type: 'string',
              },
              startsWithCreditTrial: {
                type: 'boolean',
              },
              trialPeriodDays: {
                anyOf: [
                  {
                    type: 'number',
                    description: 'safeZodPositiveInteger',
                  },
                  {
                    type: 'string',
                    description: 'safeZodPositiveInteger',
                    enum: [0],
                  },
                ],
                description: 'safeZodPositiveInteger',
              },
              unitPrice: {
                type: 'number',
              },
              usageEventsPerUnit: {
                anyOf: [
                  {
                    type: 'string',
                    enum: ['null'],
                  },
                  {
                    type: 'object',
                  },
                ],
                description: 'safeZodNullOrUndefined',
              },
              usageMeterId: {
                anyOf: [
                  {
                    type: 'string',
                    enum: ['null'],
                  },
                  {
                    type: 'object',
                  },
                ],
                description: 'safeZodNullOrUndefined',
              },
            },
            required: ['id', 'type'],
          },
          {
            type: 'object',
            description:
              'A single payment price, which only gets paid once. Subscriptions cannot be made from single payment prices. Purchases, though, can.',
            properties: {
              id: {
                type: 'string',
              },
              type: {
                type: 'string',
                enum: ['single_payment'],
              },
              active: {
                type: 'boolean',
              },
              intervalCount: {
                anyOf: [
                  {
                    type: 'string',
                    enum: ['null'],
                  },
                  {
                    type: 'object',
                  },
                ],
                description: 'safeZodNullOrUndefined',
              },
              intervalUnit: {
                anyOf: [
                  {
                    type: 'string',
                    enum: ['null'],
                  },
                  {
                    type: 'object',
                  },
                ],
                description: 'safeZodNullOrUndefined',
              },
              isDefault: {
                type: 'boolean',
              },
              name: {
                type: 'string',
              },
              overagePriceId: {
                anyOf: [
                  {
                    type: 'string',
                    enum: ['null'],
                  },
                  {
                    type: 'object',
                  },
                ],
                description: 'safeZodNullOrUndefined',
              },
              productId: {
                type: 'string',
              },
              setupFeeAmount: {
                anyOf: [
                  {
                    type: 'string',
                    enum: ['null'],
                  },
                  {
                    type: 'object',
                  },
                ],
                description: 'safeZodNullOrUndefined',
              },
              slug: {
                type: 'string',
              },
              startsWithCreditTrial: {
                anyOf: [
                  {
                    type: 'string',
                    enum: ['null'],
                  },
                  {
                    type: 'object',
                  },
                ],
                description: 'safeZodNullOrUndefined',
              },
              trialPeriodDays: {
                anyOf: [
                  {
                    type: 'string',
                    enum: ['null'],
                  },
                  {
                    type: 'object',
                  },
                ],
                description: 'safeZodNullOrUndefined',
              },
              unitPrice: {
                type: 'number',
              },
              usageEventsPerUnit: {
                anyOf: [
                  {
                    type: 'string',
                    enum: ['null'],
                  },
                  {
                    type: 'object',
                  },
                ],
                description: 'safeZodNullOrUndefined',
              },
              usageMeterId: {
                anyOf: [
                  {
                    type: 'string',
                    enum: ['null'],
                  },
                  {
                    type: 'object',
                  },
                ],
                description: 'safeZodNullOrUndefined',
              },
            },
            required: ['id', 'type'],
          },
          {
            type: 'object',
            description: 'A usage price, which describes the price per unit of usage of a product.',
            properties: {
              id: {
                type: 'string',
              },
              type: {
                type: 'string',
                enum: ['usage'],
              },
              active: {
                type: 'boolean',
              },
              intervalCount: {
                type: 'number',
                description: 'safeZodPositiveInteger',
              },
              intervalUnit: {
                type: 'string',
                enum: ['day', 'week', 'month', 'year'],
              },
              isDefault: {
                type: 'boolean',
              },
              name: {
                type: 'string',
              },
              overagePriceId: {
                anyOf: [
                  {
                    type: 'string',
                    enum: ['null'],
                  },
                  {
                    type: 'object',
                  },
                ],
                description: 'safeZodNullOrUndefined',
              },
              productId: {
                type: 'string',
              },
              setupFeeAmount: {
                anyOf: [
                  {
                    type: 'string',
                    enum: ['null'],
                  },
                  {
                    type: 'object',
                  },
                ],
                description: 'safeZodNullOrUndefined',
              },
              slug: {
                type: 'string',
              },
              startsWithCreditTrial: {
                type: 'boolean',
              },
              trialPeriodDays: {
                anyOf: [
                  {
                    type: 'string',
                    enum: ['null'],
                  },
                  {
                    type: 'object',
                  },
                ],
                description: 'safeZodNullOrUndefined',
              },
              unitPrice: {
                type: 'number',
              },
              usageEventsPerUnit: {
                type: 'number',
                description: 'safeZodPositiveInteger',
              },
              usageMeterId: {
                type: 'string',
                description:
                  'The usage meter that uses this price. All usage events on that meter must be associated with a price that is also associated with that usage meter.',
              },
            },
            required: ['id', 'type'],
          },
        ],
        description:
          'A subscription price, which will have details on the interval, default trial period, and setup fee (if any).',
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.prices.update(id, body));
};

export default { metadata, tool, handler };
