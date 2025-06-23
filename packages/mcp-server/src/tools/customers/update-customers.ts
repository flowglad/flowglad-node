// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'customers',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/customers/{externalId}',
  operationId: 'customers-edit',
};

export const tool: Tool = {
  name: 'update_customers',
  description: 'Update Customer',
  inputSchema: {
    type: 'object',
    properties: {
      externalId: {
        type: 'string',
      },
      customer: {
        type: 'object',
        properties: {
          id: {
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
          email: {
            type: 'string',
          },
          externalId: {
            type: 'string',
          },
          iconURL: {
            type: 'string',
          },
          logoURL: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          userId: {
            type: 'string',
          },
        },
        required: ['id'],
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { externalId, ...body } = args as any;
  return asTextContentResult(await client.customers.update(externalId, body));
};

export default { metadata, tool, handler };
