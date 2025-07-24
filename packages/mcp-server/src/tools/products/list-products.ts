// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@flowglad/node-mcp/filtering';
import { Metadata, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'products',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/products',
  operationId: 'products-list',
};

export const tool: Tool = {
  name: 'list_products',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Products\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          active: {\n            type: 'boolean'\n          },\n          catalogId: {\n            type: 'string'\n          },\n          createdAt: {\n            anyOf: [              {\n                type: 'string',\n                format: 'date-time'\n              },\n              {\n                type: 'string'\n              }\n            ],\n            description: 'safeZodDate'\n          },\n          createdByCommit: {\n            type: 'string'\n          },\n          default: {\n            type: 'boolean'\n          },\n          description: {\n            type: 'string'\n          },\n          displayFeatures: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                enabled: {\n                  type: 'boolean'\n                },\n                label: {\n                  type: 'string'\n                },\n                details: {\n                  type: 'string'\n                }\n              },\n              required: [                'enabled',\n                'label'\n              ]\n            }\n          },\n          imageURL: {\n            type: 'string'\n          },\n          livemode: {\n            type: 'boolean'\n          },\n          name: {\n            type: 'string'\n          },\n          organizationId: {\n            type: 'string'\n          },\n          pluralQuantityLabel: {\n            type: 'string'\n          },\n          singularQuantityLabel: {\n            type: 'string'\n          },\n          slug: {\n            type: 'string'\n          },\n          updatedAt: {\n            anyOf: [              {\n                type: 'string',\n                format: 'date-time'\n              },\n              {\n                type: 'string'\n              }\n            ],\n            description: 'safeZodDate'\n          },\n          updatedByCommit: {\n            type: 'string'\n          }\n        },\n        required: [          'id',\n          'active',\n          'catalogId',\n          'createdAt',\n          'createdByCommit',\n          'default',\n          'description',\n          'displayFeatures',\n          'imageURL',\n          'livemode',\n          'name',\n          'organizationId',\n          'pluralQuantityLabel',\n          'singularQuantityLabel',\n          'slug',\n          'updatedAt',\n          'updatedByCommit'\n        ]\n      }\n    },\n    hasMore: {\n      type: 'boolean'\n    },\n    total: {\n      type: 'number'\n    },\n    currentCursor: {\n      type: 'string'\n    },\n    nextCursor: {\n      type: 'string'\n    }\n  },\n  required: [    'data',\n    'hasMore',\n    'total'\n  ]\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.products.list(body)));
};

export default { metadata, tool, handler };
