// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'pricing_models',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/pricing-models/default',
  operationId: 'pricingModels-getDefault',
};

export const tool: Tool = {
  name: 'retrieve_default_pricing_models',
  description: 'Get Default Pricing Model for Organization',
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
  try {
    return asTextContentResult(await client.pricingModels.retrieveDefault());
  } catch (error) {
    if (error instanceof Flowglad.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
