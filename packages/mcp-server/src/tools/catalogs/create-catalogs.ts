// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'catalogs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/catalogs',
  operationId: 'catalogs-create',
};

export const tool: Tool = {
  name: 'create_catalogs',
  description: 'Create Catalog',
  inputSchema: {
    type: 'object',
    properties: {
      catalog: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          isDefault: {
            type: 'boolean',
          },
        },
        required: ['name'],
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.catalogs.create(body));
};

export default { metadata, tool, handler };
