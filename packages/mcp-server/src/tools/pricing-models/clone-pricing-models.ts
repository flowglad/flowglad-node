// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'pricing_models',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/pricing-models/{id}/clone',
  operationId: 'pricingModels-clone',
};

export const tool: Tool = {
  name: 'clone_pricing_models',
  description: 'Clone a PricingModel',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'The name of the new pricing model.',
      },
      destinationEnvironment: {
        type: 'string',
        enum: ['livemode', 'testmode'],
      },
    },
    required: ['id', 'name'],
  },
  annotations: {},
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.pricingModels.clone(id, body));
};

export default { metadata, tool, handler };
