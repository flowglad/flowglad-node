// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'pricing_models',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/pricing-models/{id}',
  operationId: 'pricingModels-get',
};

export const tool: Tool = {
  name: 'retrieve_pricing_models',
  description: 'Get Pricing Model',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  try {
    return asTextContentResult(await client.pricingModels.retrieve(id));
  } catch (error) {
    if (error instanceof Flowglad.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
