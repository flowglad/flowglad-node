// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@flowglad/node-mcp/filtering';
import { Metadata, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'payment_methods',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/payment-methods/{id}',
  operationId: 'paymentMethods-get',
};

export const tool: Tool = {
  name: 'retrieve_payment_methods',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Payment Method\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    paymentMethod: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        billingDetails: {\n          type: 'object',\n          properties: {\n            address: {\n              type: 'object',\n              properties: {\n                city: {\n                  type: 'string'\n                },\n                country: {\n                  type: 'string'\n                },\n                line1: {\n                  type: 'string'\n                },\n                line2: {\n                  type: 'string'\n                },\n                postal_code: {\n                  type: 'string'\n                },\n                state: {\n                  type: 'string'\n                },\n                address: {\n                  type: 'object',\n                  properties: {\n                    city: {\n                      type: 'string'\n                    },\n                    country: {\n                      type: 'string'\n                    },\n                    line1: {\n                      type: 'string'\n                    },\n                    line2: {\n                      type: 'string'\n                    },\n                    postal_code: {\n                      type: 'string'\n                    },\n                    state: {\n                      type: 'string'\n                    },\n                    name: {\n                      type: 'string'\n                    }\n                  },\n                  required: [                    'city',\n                    'country',\n                    'line1',\n                    'line2',\n                    'postal_code',\n                    'state'\n                  ]\n                },\n                name: {\n                  type: 'string'\n                }\n              },\n              required: [                'city',\n                'country',\n                'line1',\n                'line2',\n                'postal_code',\n                'state'\n              ]\n            },\n            email: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            }\n          },\n          required: [            'address',\n            'email',\n            'name'\n          ]\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        createdByCommit: {\n          type: 'string'\n        },\n        customerId: {\n          type: 'string'\n        },\n        default: {\n          type: 'boolean'\n        },\n        livemode: {\n          type: 'boolean'\n        },\n        metadata: {\n          type: 'object',\n          additionalProperties: true\n        },\n        paymentMethodData: {\n          type: 'object',\n          additionalProperties: true\n        },\n        type: {\n          type: 'string',\n          enum: [            'card',\n            'link',\n            'us_bank_account',\n            'sepa_debit'\n          ]\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        updatedByCommit: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'billingDetails',\n        'createdAt',\n        'createdByCommit',\n        'customerId',\n        'default',\n        'livemode',\n        'metadata',\n        'paymentMethodData',\n        'type',\n        'updatedAt',\n        'updatedByCommit'\n      ]\n    }\n  },\n  required: [    'paymentMethod'\n  ]\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.paymentMethods.retrieve(id)));
};

export default { metadata, tool, handler };
