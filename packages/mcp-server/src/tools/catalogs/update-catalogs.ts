// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  description: 'Update Catalog',
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
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.catalogs.update(id, body));
};

export default { metadata, tool, handler };
