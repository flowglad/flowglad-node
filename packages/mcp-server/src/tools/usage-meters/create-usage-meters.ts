// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'usage_meters',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/usage-meters',
  operationId: 'usageMeters-create',
};

export const tool: Tool = {
  name: 'create_usage_meters',
  description: 'Create UsageMeter',
  inputSchema: {
    type: 'object',
    properties: {
      usageMeter: {
        type: 'object',
        properties: {
          catalogId: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          aggregationType: {
            type: 'string',
            description:
              'The type of aggregation to perform on the usage meter. Defaults to "sum", which aggregates all the usage event amounts for the billing period. "count_distinct_properties" counts the number of distinct properties in the billing period for a given meter.',
            enum: ['sum', 'count_distinct_properties'],
          },
        },
        required: ['catalogId', 'name'],
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.usageMeters.create(body));
};

export default { metadata, tool, handler };
