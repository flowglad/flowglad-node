// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@flowglad/node-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'customers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/customers',
  operationId: 'customers-list',
};

export const tool: Tool = {
  name: 'list_customers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Customers\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/customer_list_response',\n  $defs: {\n    customer_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/customer_client_select_schema'\n          }\n        },\n        hasMore: {\n          type: 'boolean'\n        },\n        total: {\n          type: 'number'\n        },\n        currentCursor: {\n          type: 'string'\n        },\n        nextCursor: {\n          type: 'string'\n        }\n      },\n      required: [        'data',\n        'hasMore',\n        'total'\n      ]\n    },\n    customer_client_select_schema: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        archived: {\n          type: 'boolean'\n        },\n        createdAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        domain: {\n          type: 'string'\n        },\n        email: {\n          type: 'string'\n        },\n        externalId: {\n          type: 'string'\n        },\n        iconURL: {\n          type: 'string'\n        },\n        invoiceNumberBase: {\n          type: 'string'\n        },\n        livemode: {\n          type: 'boolean'\n        },\n        logoURL: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        organizationId: {\n          type: 'string'\n        },\n        pricingModelId: {\n          type: 'string'\n        },\n        updatedAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        userId: {\n          type: 'string'\n        },\n        billingAddress: {\n          $ref: '#/$defs/billing_address'\n        }\n      },\n      required: [        'id',\n        'archived',\n        'createdAt',\n        'domain',\n        'email',\n        'externalId',\n        'iconURL',\n        'invoiceNumberBase',\n        'livemode',\n        'logoURL',\n        'name',\n        'organizationId',\n        'pricingModelId',\n        'updatedAt',\n        'userId'\n      ]\n    },\n    billing_address: {\n      type: 'object',\n      properties: {\n        address: {\n          type: 'object',\n          properties: {\n            country: {\n              type: 'string'\n            },\n            city: {\n              type: 'string'\n            },\n            line1: {\n              type: 'string'\n            },\n            line2: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            },\n            postal_code: {\n              type: 'string'\n            },\n            state: {\n              type: 'string'\n            }\n          },\n          required: [            'country'\n          ]\n        },\n        email: {\n          type: 'string'\n        },\n        firstName: {\n          type: 'string'\n        },\n        lastName: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        phone: {\n          type: 'string'\n        }\n      },\n      required: [        'address'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      cursor: {
        type: 'string',
      },
      limit: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.customers.list(body)));
  } catch (error) {
    if (error instanceof Flowglad.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
