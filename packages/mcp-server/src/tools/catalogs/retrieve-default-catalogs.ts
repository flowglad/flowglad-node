// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'catalogs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/catalogs/default',
  operationId: 'catalogs-getDefault',
};

export const tool: Tool = {
  name: 'retrieve_default_catalogs',
  description: 'Get Default Catalog for Organization',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.catalogs.retrieveDefault());
};

export default { metadata, tool, handler };
