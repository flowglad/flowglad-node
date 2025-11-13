// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@flowglad/node-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@flowglad/node-mcp/tools/types';

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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Product\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/product_create_response',\n  $defs: {\n    product_create_response: {\n      type: 'object',\n      properties: {\n        product: {\n          $ref: '#/$defs/product_client_select_schema'\n        }\n      },\n      required: [        'product'\n      ]\n    },\n    product_client_select_schema: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        active: {\n          type: 'boolean'\n        },\n        createdAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        default: {\n          type: 'boolean'\n        },\n        description: {\n          type: 'string'\n        },\n        imageURL: {\n          type: 'string'\n        },\n        livemode: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        organizationId: {\n          type: 'string'\n        },\n        pluralQuantityLabel: {\n          type: 'string'\n        },\n        pricingModelId: {\n          type: 'string'\n        },\n        singularQuantityLabel: {\n          type: 'string'\n        },\n        slug: {\n          type: 'string'\n        },\n        updatedAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        }\n      },\n      required: [        'id',\n        'active',\n        'createdAt',\n        'default',\n        'description',\n        'imageURL',\n        'livemode',\n        'name',\n        'organizationId',\n        'pluralQuantityLabel',\n        'pricingModelId',\n        'singularQuantityLabel',\n        'slug',\n        'updatedAt'\n      ]\n    }\n  }\n}\n```",
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
            required: ['intervalCount', 'intervalUnit', 'isDefault', 'type', 'unitPrice'],
          },
          {
            type: 'object',
            properties: {
              isDefault: {
                type: 'boolean',
                description: 'Whether or not this price is the default price for the product.',
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
            required: ['isDefault', 'type', 'unitPrice'],
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
              'type',
              'unitPrice',
              'usageEventsPerUnit',
              'usageMeterId',
            ],
          },
        ],
      },
      product: {
        type: 'object',
        properties: {
          active: {
            type: 'boolean',
          },
          name: {
            type: 'string',
          },
          pricingModelId: {
            type: 'string',
          },
          default: {
            type: 'boolean',
          },
          description: {
            type: 'string',
          },
          imageURL: {
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
        required: ['active', 'name', 'pricingModelId'],
      },
      featureIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['price', 'product'],
  },
  annotations: {},
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.products.create(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
