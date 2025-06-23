// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'subscriptions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/subscriptions',
  operationId: 'subscriptions-create',
};

export const tool: Tool = {
  name: 'create_subscriptions',
  description: 'Create Subscription',
  inputSchema: {
    type: 'object',
    properties: {
      customerId: {
        type: 'string',
        description: 'The customer for the subscription.',
      },
      priceId: {
        type: 'string',
        description:
          'The price to subscribe to. Used to determine whether the subscription is usage-based or not, and set other defaults such as trial period and billing intervals.',
      },
      backupPaymentMethodId: {
        type: 'string',
        description:
          'The payment method to try if charges for the subscription fail with the default payment method.',
      },
      defaultPaymentMethodId: {
        type: 'string',
        description:
          "The default payment method to use when attempting to run charges for the subscription.If not provided, the customer's default payment method will be used. If no default payment method is present, charges will not run. If no default payment method is provided and there is a trial period for the subscription, the subscription will enter 'trial_ended' status at the end of the trial period.",
      },
      interval: {
        type: 'string',
        description:
          'The interval of the subscription. If not provided, defaults to the interval of the price provided by `priceId`.',
        enum: ['day', 'week', 'month', 'year'],
      },
      intervalCount: {
        type: 'number',
        description:
          'The number of intervals that each billing period will last. If not provided, defaults to 1',
      },
      metadata: {
        type: 'object',
      },
      name: {
        type: 'string',
        description:
          "The name of the subscription. If not provided, defaults to the name of the product associated with the price provided by 'priceId'.",
      },
      quantity: {
        type: 'number',
        description: 'The quantity of the price purchased. If not provided, defaults to 1.',
      },
      startDate: {
        type: 'string',
        description: 'The time when the subscription starts. If not provided, defaults to current time.',
        format: 'date-time',
      },
      trialEnd: {
        type: 'number',
        description:
          "Epoch time in milliseconds of when the trial ends. If not provided, defaults to startDate + the associated price's trialPeriodDays",
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.subscriptions.create(body));
};

export default { metadata, tool, handler };
