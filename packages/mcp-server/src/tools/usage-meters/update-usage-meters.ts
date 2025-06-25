// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'usage_meters',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/usage-meters/{id}',
  operationId: 'usageMeters-update',
};

export const tool: Tool = {
  name: 'update_usage_meters',
  description: 'Update Usage Meter',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      usageMeter: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          aggregationType: {
            type: 'string',
            description:
              'The type of aggregation to perform on the usage meter. Defaults to "sum", which aggregates all the usage event amounts for the billing period. "count_distinct_properties" counts the number of distinct properties in the billing period for a given meter.',
            enum: ['sum', 'count_distinct_properties'],
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
          },
          createdByCommit: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          slug: {
            type: 'string',
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
          },
          updatedByCommit: {
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
  return asTextContentResult(await client.usageMeters.update(id, body));
};

export default { metadata, tool, handler };
