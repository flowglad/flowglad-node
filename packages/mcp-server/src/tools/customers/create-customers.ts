// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'customers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/customers',
  operationId: 'customers-create',
};

export const tool: Tool = {
  name: 'create_customers',
  description: 'Create Customer',
  inputSchema: {
    type: 'object',
    properties: {
      customer: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
          },
          externalId: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          archived: {
            type: 'boolean',
          },
          catalogId: {
            type: 'string',
          },
          domain: {
            type: 'string',
          },
          iconURL: {
            type: 'string',
          },
          logoURL: {
            type: 'string',
          },
          userId: {
            type: 'string',
          },
        },
        required: ['email', 'externalId', 'name'],
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.customers.create(body));
};

export default { metadata, tool, handler };
