// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'prices',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/prices/{id}',
  operationId: 'prices-update',
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
            properties: {
              id: {
                type: 'string',
              },
              isDefault: {
                type: 'boolean',
                description: 'Whether or not this price is the default price for the product.',
              },
              type: {
                type: 'string',
                enum: ['subscription'],
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
            },
            required: ['id', 'isDefault', 'type'],
          },
          {
            type: 'object',
            properties: {
              id: {
                type: 'string',
              },
              isDefault: {
                type: 'boolean',
                description: 'Whether or not this price is the default price for the product.',
              },
              type: {
                type: 'string',
                enum: ['single_payment'],
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
            },
            required: ['id', 'isDefault', 'type'],
          },
          {
            type: 'object',
            properties: {
              id: {
                type: 'string',
              },
              isDefault: {
                type: 'boolean',
                description: 'Whether or not this price is the default price for the product.',
              },
              type: {
                type: 'string',
                enum: ['usage'],
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
            },
            required: ['id', 'isDefault', 'type'],
          },
        ],
      },
    },
    required: ['id', 'price'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.prices.update(id, body));
};

export default { metadata, tool, handler };
