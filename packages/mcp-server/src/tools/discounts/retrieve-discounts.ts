// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@flowglad/node-mcp/filtering';
import { Metadata, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'discounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/discounts/{id}',
  operationId: 'discounts-get',
};

export const tool: Tool = {
  name: 'retrieve_discounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Discount\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    discount: {\n      anyOf: [        {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            active: {\n              type: 'boolean'\n            },\n            amount: {\n              type: 'number',\n              description: 'safeZodPositiveInteger'\n            },\n            amountType: {\n              type: 'string',\n              enum: [                'percent',\n                'fixed'\n              ]\n            },\n            code: {\n              type: 'string'\n            },\n            createdAt: {\n              type: 'string',\n              format: 'date-time'\n            },\n            createdByCommit: {\n              type: 'string'\n            },\n            duration: {\n              type: 'string',\n              enum: [                'forever'\n              ]\n            },\n            livemode: {\n              type: 'boolean'\n            },\n            name: {\n              type: 'string'\n            },\n            numberOfPayments: {\n              type: 'string',\n              enum: [                'null'\n              ]\n            },\n            organizationId: {\n              type: 'string'\n            },\n            updatedAt: {\n              type: 'string',\n              format: 'date-time'\n            },\n            updatedByCommit: {\n              type: 'string'\n            }\n          },\n          required: [            'id',\n            'active',\n            'amount',\n            'amountType',\n            'code',\n            'createdAt',\n            'createdByCommit',\n            'duration',\n            'livemode',\n            'name',\n            'numberOfPayments',\n            'organizationId',\n            'updatedAt',\n            'updatedByCommit'\n          ]\n        },\n        {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            active: {\n              type: 'boolean'\n            },\n            amount: {\n              type: 'number',\n              description: 'safeZodPositiveInteger'\n            },\n            amountType: {\n              type: 'string',\n              enum: [                'percent',\n                'fixed'\n              ]\n            },\n            code: {\n              type: 'string'\n            },\n            createdAt: {\n              type: 'string',\n              format: 'date-time'\n            },\n            createdByCommit: {\n              type: 'string'\n            },\n            duration: {\n              type: 'string',\n              enum: [                'number_of_payments'\n              ]\n            },\n            livemode: {\n              type: 'boolean'\n            },\n            name: {\n              type: 'string'\n            },\n            numberOfPayments: {\n              type: 'number',\n              description: 'safeZodPositiveInteger'\n            },\n            organizationId: {\n              type: 'string'\n            },\n            updatedAt: {\n              type: 'string',\n              format: 'date-time'\n            },\n            updatedByCommit: {\n              type: 'string'\n            }\n          },\n          required: [            'id',\n            'active',\n            'amount',\n            'amountType',\n            'code',\n            'createdAt',\n            'createdByCommit',\n            'duration',\n            'livemode',\n            'name',\n            'numberOfPayments',\n            'organizationId',\n            'updatedAt',\n            'updatedByCommit'\n          ]\n        },\n        {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            active: {\n              type: 'boolean'\n            },\n            amount: {\n              type: 'number',\n              description: 'safeZodPositiveInteger'\n            },\n            amountType: {\n              type: 'string',\n              enum: [                'percent',\n                'fixed'\n              ]\n            },\n            code: {\n              type: 'string'\n            },\n            createdAt: {\n              type: 'string',\n              format: 'date-time'\n            },\n            createdByCommit: {\n              type: 'string'\n            },\n            duration: {\n              type: 'string',\n              enum: [                'once'\n              ]\n            },\n            livemode: {\n              type: 'boolean'\n            },\n            name: {\n              type: 'string'\n            },\n            numberOfPayments: {\n              type: 'string',\n              enum: [                'null'\n              ]\n            },\n            organizationId: {\n              type: 'string'\n            },\n            updatedAt: {\n              type: 'string',\n              format: 'date-time'\n            },\n            updatedByCommit: {\n              type: 'string'\n            }\n          },\n          required: [            'id',\n            'active',\n            'amount',\n            'amountType',\n            'code',\n            'createdAt',\n            'createdByCommit',\n            'duration',\n            'livemode',\n            'name',\n            'numberOfPayments',\n            'organizationId',\n            'updatedAt',\n            'updatedByCommit'\n          ]\n        }\n      ],\n      description: 'A discount record, which describes a discount that can be applied to purchases or subscriptions. Discounts can be one-time, have a fixed number of payments, or be applied indefinitely.'\n    }\n  },\n  required: [    'discount'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.discounts.retrieve(id)));
};

export default { metadata, tool, handler };
