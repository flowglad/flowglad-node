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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Products\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/product_list_response',\n  $defs: {\n    product_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/product_client_select_schema'\n          }\n        },\n        hasMore: {\n          type: 'boolean'\n        },\n        total: {\n          type: 'number'\n        },\n        currentCursor: {\n          type: 'string'\n        },\n        nextCursor: {\n          type: 'string'\n        }\n      },\n      required: [        'data',\n        'hasMore',\n        'total'\n      ]\n    },\n    product_client_select_schema: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        active: {\n          type: 'boolean'\n        },\n        createdAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        default: {\n          type: 'boolean'\n        },\n        description: {\n          type: 'string'\n        },\n        imageURL: {\n          type: 'string'\n        },\n        livemode: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        organizationId: {\n          type: 'string'\n        },\n        pluralQuantityLabel: {\n          type: 'string'\n        },\n        pricingModelId: {\n          type: 'string'\n        },\n        singularQuantityLabel: {\n          type: 'string'\n        },\n        slug: {\n          type: 'string'\n        },\n        updatedAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        }\n      },\n      required: [        'id',\n        'active',\n        'createdAt',\n        'default',\n        'description',\n        'imageURL',\n        'livemode',\n        'name',\n        'organizationId',\n        'pluralQuantityLabel',\n        'pricingModelId',\n        'singularQuantityLabel',\n        'slug',\n        'updatedAt'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.products.list(body)));
};

export default { metadata, tool, handler };
