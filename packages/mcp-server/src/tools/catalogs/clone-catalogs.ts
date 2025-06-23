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
  httpPath: '/api/v1/catalogs/{id}/clone',
  operationId: 'catalogs-clone',
};

export const tool: Tool = {
  name: 'clone_catalogs',
  description: 'Clone a Catalog',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.catalogs.clone(id, body));
};

export default { metadata, tool, handler };
