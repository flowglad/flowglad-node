// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@flowglad/node-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Discount\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/discount_create_response',\n  $defs: {\n    discount_create_response: {\n      type: 'object',\n      properties: {\n        discount: {\n          anyOf: [            {\n              $ref: '#/$defs/forever_discount_client_select_schema'\n            },\n            {\n              $ref: '#/$defs/number_of_payments_discount_client_select_schema'\n            },\n            {\n              $ref: '#/$defs/default_discount_client_select_schema'\n            }\n          ],\n          description: 'A discount record, which describes a discount that can be applied to purchases or subscriptions. Discounts can be one-time, have a fixed number of payments, or be applied indefinitely.'\n        }\n      },\n      required: [        'discount'\n      ]\n    },\n    forever_discount_client_select_schema: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        active: {\n          type: 'boolean'\n        },\n        amount: {\n          type: 'integer',\n          description: 'A positive integer'\n        },\n        amountType: {\n          type: 'string',\n          enum: [            'percent',\n            'fixed'\n          ]\n        },\n        code: {\n          type: 'string',\n          description: 'The discount code, must be unique and between 3 and 20 characters.'\n        },\n        createdAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        duration: {\n          type: 'string',\n          enum: [            'forever'\n          ]\n        },\n        livemode: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        organizationId: {\n          type: 'string'\n        },\n        updatedAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        numberOfPayments: {\n          type: 'null'\n        }\n      },\n      required: [        'id',\n        'active',\n        'amount',\n        'amountType',\n        'code',\n        'createdAt',\n        'duration',\n        'livemode',\n        'name',\n        'organizationId',\n        'updatedAt'\n      ]\n    },\n    number_of_payments_discount_client_select_schema: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        active: {\n          type: 'boolean'\n        },\n        amount: {\n          type: 'integer',\n          description: 'A positive integer'\n        },\n        amountType: {\n          type: 'string',\n          enum: [            'percent',\n            'fixed'\n          ]\n        },\n        code: {\n          type: 'string',\n          description: 'The discount code, must be unique and between 3 and 20 characters.'\n        },\n        createdAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        duration: {\n          type: 'string',\n          enum: [            'number_of_payments'\n          ]\n        },\n        livemode: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        numberOfPayments: {\n          type: 'integer',\n          description: 'A positive integer'\n        },\n        organizationId: {\n          type: 'string'\n        },\n        updatedAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        }\n      },\n      required: [        'id',\n        'active',\n        'amount',\n        'amountType',\n        'code',\n        'createdAt',\n        'duration',\n        'livemode',\n        'name',\n        'numberOfPayments',\n        'organizationId',\n        'updatedAt'\n      ]\n    },\n    default_discount_client_select_schema: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        active: {\n          type: 'boolean'\n        },\n        amount: {\n          type: 'integer',\n          description: 'A positive integer'\n        },\n        amountType: {\n          type: 'string',\n          enum: [            'percent',\n            'fixed'\n          ]\n        },\n        code: {\n          type: 'string',\n          description: 'The discount code, must be unique and between 3 and 20 characters.'\n        },\n        createdAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        duration: {\n          type: 'string',\n          enum: [            'once'\n          ]\n        },\n        livemode: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        organizationId: {\n          type: 'string'\n        },\n        updatedAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        numberOfPayments: {\n          type: 'null'\n        }\n      },\n      required: [        'id',\n        'active',\n        'amount',\n        'amountType',\n        'code',\n        'createdAt',\n        'duration',\n        'livemode',\n        'name',\n        'organizationId',\n        'updatedAt'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      discount: {
        anyOf: [
          {
            type: 'object',
            properties: {
              amount: {
                type: 'integer',
                description: 'A positive integer',
              },
              amountType: {
                type: 'string',
                enum: ['percent', 'fixed'],
              },
              code: {
                type: 'string',
                description: 'The discount code, must be unique and between 3 and 20 characters.',
              },
              duration: {
                type: 'string',
                enum: ['once'],
              },
              name: {
                type: 'string',
              },
              active: {
                type: 'boolean',
              },
              numberOfPayments: {
                type: 'null',
              },
            },
            required: ['amount', 'amountType', 'code', 'duration', 'name'],
          },
          {
            type: 'object',
            properties: {
              amount: {
                type: 'integer',
                description: 'A positive integer',
              },
              amountType: {
                type: 'string',
                enum: ['percent', 'fixed'],
              },
              code: {
                type: 'string',
                description: 'The discount code, must be unique and between 3 and 20 characters.',
              },
              duration: {
                type: 'string',
                enum: ['number_of_payments'],
              },
              name: {
                type: 'string',
              },
              numberOfPayments: {
                type: 'integer',
                description: 'A positive integer',
              },
              active: {
                type: 'boolean',
              },
            },
            required: ['amount', 'amountType', 'code', 'duration', 'name', 'numberOfPayments'],
          },
          {
            type: 'object',
            properties: {
              amount: {
                type: 'integer',
                description: 'A positive integer',
              },
              amountType: {
                type: 'string',
                enum: ['percent', 'fixed'],
              },
              code: {
                type: 'string',
                description: 'The discount code, must be unique and between 3 and 20 characters.',
              },
              duration: {
                type: 'string',
                enum: ['forever'],
              },
              name: {
                type: 'string',
              },
              active: {
                type: 'boolean',
              },
              numberOfPayments: {
                type: 'null',
              },
            },
            required: ['amount', 'amountType', 'code', 'duration', 'name'],
          },
        ],
        description:
          'A discount record, which describes a discount that can be applied to purchases or subscriptions. Discounts can be one-time, have a fixed number of payments, or be applied indefinitely.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['discount'],
  },
  annotations: {},
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.discounts.create(body)));
  } catch (error) {
    if (error instanceof Flowglad.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
