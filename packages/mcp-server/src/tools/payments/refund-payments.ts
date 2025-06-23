// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'payments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/payments/{id}/refund',
  operationId: 'payments-refund',
};

export const tool: Tool = {
  name: 'refund_payments',
  description: 'Refund a Payment',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      partialAmount: {
        type: 'number',
        description:
          'The amount to refund. If not provided, the entire amount will be refunded. Cannot exceed the amount of the associated payment.',
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.payments.refund(id, body));
};

export default { metadata, tool, handler };
