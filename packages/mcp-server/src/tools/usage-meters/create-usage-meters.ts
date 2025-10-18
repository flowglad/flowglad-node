// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@flowglad/node-mcp/filtering';
import { Metadata, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Usage Meter\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/usage_meter_create_response',\n  $defs: {\n    usage_meter_create_response: {\n      type: 'object',\n      properties: {\n        usageMeter: {\n          $ref: '#/$defs/usage_meter_client_select_schema'\n        }\n      },\n      required: [        'usageMeter'\n      ]\n    },\n    usage_meter_client_select_schema: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        aggregationType: {\n          type: 'string',\n          description: 'The type of aggregation to perform on the usage meter. Defaults to \"sum\", which aggregates all the usage event amounts for the billing period. \"count_distinct_properties\" counts the number of distinct properties in the billing period for a given meter.',\n          enum: [            'sum',\n            'count_distinct_properties'\n          ]\n        },\n        createdAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        livemode: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        organizationId: {\n          type: 'string'\n        },\n        pricingModelId: {\n          type: 'string'\n        },\n        slug: {\n          type: 'string'\n        },\n        updatedAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        }\n      },\n      required: [        'id',\n        'aggregationType',\n        'createdAt',\n        'livemode',\n        'name',\n        'organizationId',\n        'pricingModelId',\n        'slug',\n        'updatedAt'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      usageMeter: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          pricingModelId: {
            type: 'string',
          },
          slug: {
            type: 'string',
          },
          aggregationType: {
            type: 'string',
            description:
              'The type of aggregation to perform on the usage meter. Defaults to "sum", which aggregates all the usage event amounts for the billing period. "count_distinct_properties" counts the number of distinct properties in the billing period for a given meter.',
            enum: ['sum', 'count_distinct_properties'],
          },
        },
        required: ['name', 'pricingModelId', 'slug'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['usageMeter'],
  },
  annotations: {},
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.usageMeters.create(body)));
};

export default { metadata, tool, handler };
