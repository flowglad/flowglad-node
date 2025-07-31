// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'products',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/products',
  operationId: 'products-create',
};

export const tool: Tool = {
  name: 'create_products',
  description: 'Create Product',
  inputSchema: {
    type: 'object',
    properties: {
      price: {
        anyOf: [
          {
            type: 'object',
            description:
              'A subscription price, which will have details on the interval, default trial period, and setup fee (if any).',
            properties: {
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
              type: {
                type: 'string',
                enum: ['subscription'],
              },
              unitPrice: {
                type: 'number',
              },
              overagePriceId: {
                type: 'string',
                description: 'safeZodNullishString',
              },
              startsWithCreditTrial: {
                type: 'boolean',
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
            required: [
              'active',
              'intervalCount',
              'intervalUnit',
              'isDefault',
              'name',
              'setupFeeAmount',
              'slug',
              'trialPeriodDays',
              'type',
              'unitPrice',
            ],
          },
          {
            type: 'object',
            description:
              'A single payment price, which only gets paid once. Subscriptions cannot be made from single payment prices. Purchases, though, can.',
            properties: {
              active: {
                type: 'boolean',
              },
              isDefault: {
                type: 'boolean',
              },
              name: {
                type: 'string',
              },
              slug: {
                type: 'string',
              },
              type: {
                type: 'string',
                enum: ['single_payment'],
              },
              unitPrice: {
                type: 'number',
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
            required: ['active', 'isDefault', 'name', 'slug', 'type', 'unitPrice'],
          },
          {
            type: 'object',
            description: 'A usage price, which describes the price per unit of usage of a product.',
            properties: {
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
              slug: {
                type: 'string',
              },
              type: {
                type: 'string',
                enum: ['usage'],
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
            },
            required: [
              'active',
              'intervalCount',
              'intervalUnit',
              'isDefault',
              'name',
              'slug',
              'type',
              'unitPrice',
              'usageEventsPerUnit',
              'usageMeterId',
            ],
          },
        ],
        description:
          'A subscription price, which will have details on the interval, default trial period, and setup fee (if any).',
      },
      product: {
        type: 'object',
        properties: {
          active: {
            type: 'boolean',
          },
          catalogId: {
            type: 'string',
          },
          default: {
            type: 'boolean',
          },
          description: {
            type: 'string',
          },
          displayFeatures: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                },
                label: {
                  type: 'string',
                },
                details: {
                  type: 'string',
                },
              },
              required: ['enabled', 'label'],
            },
          },
          imageURL: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          pluralQuantityLabel: {
            type: 'string',
          },
          singularQuantityLabel: {
            type: 'string',
          },
          slug: {
            type: 'string',
          },
        },
        required: [
          'active',
          'catalogId',
          'default',
          'description',
          'displayFeatures',
          'imageURL',
          'name',
          'pluralQuantityLabel',
          'singularQuantityLabel',
          'slug',
        ],
      },
      featureIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
    required: ['price', 'product'],
  },
  annotations: {},
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.products.create(body));
};

export default { metadata, tool, handler };
