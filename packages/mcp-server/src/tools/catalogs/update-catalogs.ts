// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@flowglad/node-mcp/filtering';
import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'catalogs',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/catalogs/{id}',
  operationId: 'catalogs-update',
};

export const tool: Tool = {
  name: 'update_catalogs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate Catalog\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    catalog: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        createdAt: {\n          anyOf: [            {\n              type: 'string',\n              format: 'date-time'\n            },\n            {\n              type: 'string'\n            }\n          ],\n          description: 'safeZodDate'\n        },\n        createdByCommit: {\n          type: 'string'\n        },\n        isDefault: {\n          type: 'boolean'\n        },\n        livemode: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        organizationId: {\n          type: 'string'\n        },\n        updatedAt: {\n          anyOf: [            {\n              type: 'string',\n              format: 'date-time'\n            },\n            {\n              type: 'string'\n            }\n          ],\n          description: 'safeZodDate'\n        },\n        updatedByCommit: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'createdAt',\n        'createdByCommit',\n        'isDefault',\n        'livemode',\n        'name',\n        'organizationId',\n        'updatedAt',\n        'updatedByCommit'\n      ]\n    }\n  },\n  required: [    'catalog'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      catalog: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          isDefault: {
            type: 'boolean',
          },
          name: {
            type: 'string',
          },
        },
        required: ['id'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.catalogs.update(id, body)));
};

export default { metadata, tool, handler };
