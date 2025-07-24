// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@flowglad/node-mcp/filtering';
import { Metadata, asTextContentResult } from '@flowglad/node-mcp/tools/types';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Customers\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          archived: {\n            type: 'boolean'\n          },\n          billingAddress: {\n            type: 'object',\n            properties: {\n              address: {\n                type: 'object',\n                properties: {\n                  city: {\n                    type: 'string'\n                  },\n                  country: {\n                    type: 'string'\n                  },\n                  line1: {\n                    type: 'string'\n                  },\n                  line2: {\n                    type: 'string'\n                  },\n                  postal_code: {\n                    type: 'string'\n                  },\n                  state: {\n                    type: 'string'\n                  },\n                  name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'city',\n                  'country',\n                  'line1',\n                  'line2',\n                  'postal_code',\n                  'state'\n                ]\n              },\n              email: {\n                type: 'string'\n              },\n              firstName: {\n                type: 'string'\n              },\n              lastName: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              phone: {\n                type: 'string'\n              }\n            },\n            required: [              'address'\n            ]\n          },\n          catalogId: {\n            type: 'string'\n          },\n          createdAt: {\n            type: 'string',\n            format: 'date-time'\n          },\n          createdByCommit: {\n            type: 'string'\n          },\n          domain: {\n            type: 'string'\n          },\n          email: {\n            type: 'string'\n          },\n          externalId: {\n            type: 'string'\n          },\n          iconURL: {\n            type: 'string'\n          },\n          invoiceNumberBase: {\n            type: 'string'\n          },\n          livemode: {\n            type: 'boolean'\n          },\n          logoURL: {\n            type: 'string'\n          },\n          name: {\n            type: 'string'\n          },\n          organizationId: {\n            type: 'string'\n          },\n          updatedAt: {\n            type: 'string',\n            format: 'date-time'\n          },\n          updatedByCommit: {\n            type: 'string'\n          },\n          userId: {\n            type: 'string'\n          }\n        },\n        required: [          'id',\n          'archived',\n          'billingAddress',\n          'catalogId',\n          'createdAt',\n          'createdByCommit',\n          'domain',\n          'email',\n          'externalId',\n          'iconURL',\n          'invoiceNumberBase',\n          'livemode',\n          'logoURL',\n          'name',\n          'organizationId',\n          'updatedAt',\n          'updatedByCommit',\n          'userId'\n        ]\n      }\n    },\n    hasMore: {\n      type: 'boolean'\n    },\n    total: {\n      type: 'number'\n    },\n    currentCursor: {\n      type: 'string'\n    },\n    nextCursor: {\n      type: 'string'\n    }\n  },\n  required: [    'data',\n    'hasMore',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      cursor: {
        type: 'string',
      },
      limit: {
        type: 'number',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.customers.list(body)));
};

export default { metadata, tool, handler };
