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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Default Catalog for Organization",
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.catalogs.retrieveDefault());
};

export default { metadata, tool, handler };
