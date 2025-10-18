// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@flowglad/node-mcp/filtering';
import { Metadata, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'pricing_models',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/pricing-models',
  operationId: 'pricingModels-create',
};

export const tool: Tool = {
  name: 'create_pricing_models',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Pricing Model\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/pricing_model_create_response',\n  $defs: {\n    pricing_model_create_response: {\n      type: 'object',\n      properties: {\n        pricingModel: {\n          $ref: '#/$defs/pricing_model_client_select_schema'\n        }\n      },\n      required: [        'pricingModel'\n      ]\n    },\n    pricing_model_client_select_schema: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        createdAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        isDefault: {\n          type: 'boolean'\n        },\n        livemode: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        organizationId: {\n          type: 'string'\n        },\n        updatedAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        }\n      },\n      required: [        'id',\n        'createdAt',\n        'isDefault',\n        'livemode',\n        'name',\n        'organizationId',\n        'updatedAt'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      pricingModel: {
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
      defaultPlanIntervalUnit: {
        type: 'string',
        enum: ['day', 'week', 'month', 'year'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['pricingModel'],
  },
  annotations: {},
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.pricingModels.create(body)));
};

export default { metadata, tool, handler };
