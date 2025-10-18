// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
            properties: {
              intervalCount: {
                type: 'integer',
                description: 'A positive integer',
              },
              intervalUnit: {
                type: 'string',
                enum: ['day', 'week', 'month', 'year'],
              },
              isDefault: {
                type: 'boolean',
                description: 'Whether or not this price is the default price for the product.',
              },
              productId: {
                type: 'string',
              },
              type: {
                type: 'string',
                enum: ['subscription'],
              },
              unitPrice: {
                type: 'number',
                description:
                  'The price per unit. This should be in the smallest unit of the currency. For example, if the currency is USD, GBP, CAD, EUR or SGD, the price should be in cents.',
              },
              active: {
                type: 'boolean',
              },
              name: {
                type: 'string',
              },
              slug: {
                type: 'string',
              },
              trialPeriodDays: {
                type: 'number',
                description:
                  'The trial period in days. If the trial period is 0 or null, there will be no trial period.',
              },
              usageEventsPerUnit: {
                type: 'null',
                description: 'Omitted.',
              },
              usageMeterId: {
                type: 'null',
                description: 'Omitted.',
              },
            },
            required: ['intervalCount', 'intervalUnit', 'isDefault', 'productId', 'type', 'unitPrice'],
          },
          {
            type: 'object',
            properties: {
              isDefault: {
                type: 'boolean',
                description: 'Whether or not this price is the default price for the product.',
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
                description:
                  'The price per unit. This should be in the smallest unit of the currency. For example, if the currency is USD, GBP, CAD, EUR or SGD, the price should be in cents.',
              },
              active: {
                type: 'boolean',
              },
              intervalCount: {
                type: 'null',
                description: 'Omitted.',
              },
              intervalUnit: {
                type: 'null',
                description: 'Omitted.',
              },
              name: {
                type: 'string',
              },
              slug: {
                type: 'string',
              },
              trialPeriodDays: {
                type: 'null',
                description: 'Omitted.',
              },
              usageEventsPerUnit: {
                type: 'null',
                description: 'Omitted.',
              },
              usageMeterId: {
                type: 'null',
                description: 'Omitted.',
              },
            },
            required: ['isDefault', 'productId', 'type', 'unitPrice'],
          },
          {
            type: 'object',
            properties: {
              intervalCount: {
                type: 'integer',
                description: 'A positive integer',
              },
              intervalUnit: {
                type: 'string',
                enum: ['day', 'week', 'month', 'year'],
              },
              isDefault: {
                type: 'boolean',
                description: 'Whether or not this price is the default price for the product.',
              },
              productId: {
                type: 'string',
              },
              type: {
                type: 'string',
                enum: ['usage'],
              },
              unitPrice: {
                type: 'number',
                description:
                  'The price per unit. This should be in the smallest unit of the currency. For example, if the currency is USD, GBP, CAD, EUR or SGD, the price should be in cents.',
              },
              usageEventsPerUnit: {
                type: 'integer',
                description:
                  'The number of usage events per unit. Used to determine how to map usage events to quantities when raising invoices for usage.',
              },
              usageMeterId: {
                type: 'string',
                description:
                  'The usage meter that uses this price. All usage events on that meter must be associated with a price that is also associated with that usage meter.',
              },
              active: {
                type: 'boolean',
              },
              name: {
                type: 'string',
              },
              slug: {
                type: 'string',
              },
              trialPeriodDays: {
                type: 'null',
                description: 'Omitted.',
              },
            },
            required: [
              'intervalCount',
              'intervalUnit',
              'isDefault',
              'productId',
              'type',
              'unitPrice',
              'usageEventsPerUnit',
              'usageMeterId',
            ],
          },
        ],
      },
    },
    required: ['price'],
  },
  annotations: {},
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.prices.create(body));
};

export default { metadata, tool, handler };
