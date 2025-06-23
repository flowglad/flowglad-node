// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'prices',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/prices',
  operationId: 'prices-create',
};

export const tool: Tool = {
  name: 'create_prices',
  description: 'Create Price',
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
              usageMeterId: {
                type: 'string',
              },
            },
            required: [
              'active',
              'intervalCount',
              'intervalUnit',
              'isDefault',
              'name',
              'productId',
              'setupFeeAmount',
              'trialPeriodDays',
              'type',
              'unitPrice',
              'usageMeterId',
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
              productId: {
                type: 'string',
              },
              type: {
                type: 'string',
                enum: ['single_payment'],
              },
              unitPrice: {
                type: 'number',
              },
              usageMeterId: {
                type: 'string',
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
            required: ['active', 'isDefault', 'name', 'productId', 'type', 'unitPrice', 'usageMeterId'],
          },
          {
            type: 'object',
            description: 'A usage price, which describes the price per unit of usage of a product.',
            properties: {
              active: {
                type: 'boolean',
              },
              createdByCommit: {
                type: 'string',
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
              type: {
                type: 'string',
                enum: ['usage'],
              },
              unitPrice: {
                type: 'number',
              },
              updatedByCommit: {
                type: 'string',
              },
              usageMeterId: {
                type: 'string',
                description:
                  'The usage meter that uses this price. All usage events on that meter must be associated with a price that is also associated with that usage meter.',
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
              'createdByCommit',
              'intervalCount',
              'intervalUnit',
              'isDefault',
              'name',
              'productId',
              'setupFeeAmount',
              'type',
              'unitPrice',
              'updatedByCommit',
              'usageMeterId',
            ],
          },
        ],
        description:
          'A subscription price, which will have details on the interval, default trial period, and setup fee (if any).',
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.prices.create(body));
};

export default { metadata, tool, handler };
