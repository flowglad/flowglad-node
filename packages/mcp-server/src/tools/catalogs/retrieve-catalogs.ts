// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'catalogs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/catalogs/{id}',
  operationId: 'catalogs-get',
};

export const tool: Tool = {
  name: 'retrieve_catalogs',
  description: 'Get Catalog',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.catalogs.retrieve(id));
};

export default { metadata, tool, handler };
