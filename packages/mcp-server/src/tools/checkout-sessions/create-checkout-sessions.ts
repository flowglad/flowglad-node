// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'checkout_sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/checkout-sessions',
  operationId: 'checkoutSessions-create',
};

export const tool: Tool = {
  name: 'create_checkout_sessions',
  description: 'Create Checkout Session',
  inputSchema: {
    type: 'object',
    properties: {
      checkoutSession: {
        anyOf: [
          {
            type: 'object',
            properties: {
              cancelUrl: {
                type: 'string',
                description: 'The URL to redirect to after the purchase is canceled or fails',
              },
              customerExternalId: {
                type: 'string',
                description: 'The id of the Customer for this purchase session, as defined in your system',
              },
              priceId: {
                type: 'string',
                description: 'The ID of the price the customer shall purchase',
              },
              successUrl: {
                type: 'string',
                description: 'The URL to redirect to after the purchase is successful',
              },
              type: {
                type: 'string',
                enum: ['product'],
              },
              outputMetadata: {
                type: 'object',
                description:
                  'Metadata that will get added to the purchase or subscription created when this checkout session succeeds. Ignored if the checkout session is of type `invoice`.',
              },
              outputName: {
                type: 'string',
                description:
                  'The name of the purchase or subscription created when this checkout session succeeds. Ignored if the checkout session is of type `invoice`.',
              },
              quantity: {
                type: 'number',
                description:
                  'The quantity of the purchase or subscription created when this checkout session succeeds. Ignored if the checkout session is of type `invoice`.',
              },
            },
            required: ['cancelUrl', 'customerExternalId', 'priceId', 'successUrl', 'type'],
          },
          {
            type: 'object',
            properties: {
              cancelUrl: {
                type: 'string',
                description: 'The URL to redirect to after the purchase is canceled or fails',
              },
              customerExternalId: {
                type: 'string',
                description: 'The id of the Customer for this purchase session, as defined in your system',
              },
              successUrl: {
                type: 'string',
                description: 'The URL to redirect to after the purchase is successful',
              },
              type: {
                type: 'string',
                enum: ['add_payment_method'],
              },
              automaticallyUpdateSubscriptions: {
                type: 'boolean',
                description:
                  'Whether to automatically update all current subscriptions to the new payment method. Defaults to false.',
              },
              outputMetadata: {
                type: 'object',
                description:
                  'Metadata that will get added to the purchase or subscription created when this checkout session succeeds. Ignored if the checkout session is of type `invoice`.',
              },
              outputName: {
                type: 'string',
                description:
                  'The name of the purchase or subscription created when this checkout session succeeds. Ignored if the checkout session is of type `invoice`.',
              },
              targetSubscriptionId: {
                type: 'string',
                description:
                  'The id of the subscription that the payment method will be added to as the default payment method.',
              },
            },
            required: ['cancelUrl', 'customerExternalId', 'successUrl', 'type'],
          },
          {
            type: 'object',
            properties: {
              cancelUrl: {
                type: 'string',
                description: 'The URL to redirect to after the purchase is canceled or fails',
              },
              customerExternalId: {
                type: 'string',
                description: 'The id of the Customer for this purchase session, as defined in your system',
              },
              priceId: {
                type: 'string',
              },
              successUrl: {
                type: 'string',
                description: 'The URL to redirect to after the purchase is successful',
              },
              targetSubscriptionId: {
                type: 'string',
              },
              type: {
                type: 'string',
                enum: ['activate_subscription'],
              },
              outputMetadata: {
                type: 'object',
                description:
                  'Metadata that will get added to the purchase or subscription created when this checkout session succeeds. Ignored if the checkout session is of type `invoice`.',
              },
              outputName: {
                type: 'string',
                description:
                  'The name of the purchase or subscription created when this checkout session succeeds. Ignored if the checkout session is of type `invoice`.',
              },
            },
            required: [
              'cancelUrl',
              'customerExternalId',
              'priceId',
              'successUrl',
              'targetSubscriptionId',
              'type',
            ],
          },
        ],
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.checkoutSessions.create(body));
};

export default { metadata, tool, handler };
