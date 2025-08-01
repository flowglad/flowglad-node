// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@flowglad/node-mcp/filtering';
import { Metadata, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Subscription\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    subscription: {\n      anyOf: [        {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            backupPaymentMethodId: {\n              type: 'string'\n            },\n            billingCycleAnchorDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            canceledAt: {\n              type: 'string',\n              format: 'date-time'\n            },\n            cancelScheduledAt: {\n              type: 'string',\n              format: 'date-time'\n            },\n            createdAt: {\n              type: 'string',\n              format: 'date-time'\n            },\n            createdByCommit: {\n              type: 'string'\n            },\n            current: {\n              type: 'boolean',\n              description: 'Whether the subscription is current (statuses \"active\", \"trialing\", \"past_due\", or \"cancellation_scheduled\")'\n            },\n            currentBillingPeriodEnd: {\n              type: 'string',\n              format: 'date-time'\n            },\n            currentBillingPeriodStart: {\n              type: 'string',\n              format: 'date-time'\n            },\n            customerId: {\n              type: 'string'\n            },\n            defaultPaymentMethodId: {\n              type: 'string'\n            },\n            interval: {\n              type: 'string',\n              enum: [                'day',\n                'week',\n                'month',\n                'year'\n              ]\n            },\n            intervalCount: {\n              type: 'number',\n              description: 'safeZodPositiveInteger'\n            },\n            livemode: {\n              type: 'boolean'\n            },\n            metadata: {\n              type: 'object'\n            },\n            name: {\n              type: 'string'\n            },\n            organizationId: {\n              type: 'string'\n            },\n            priceId: {\n              type: 'string'\n            },\n            runBillingAtPeriodStart: {\n              type: 'boolean'\n            },\n            startDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            status: {\n              type: 'string',\n              enum: [                'trialing',\n                'active',\n                'past_due',\n                'unpaid',\n                'cancellation_scheduled',\n                'incomplete',\n                'incomplete_expired',\n                'canceled',\n                'paused'\n              ]\n            },\n            trialEnd: {\n              type: 'string',\n              format: 'date-time'\n            },\n            updatedAt: {\n              type: 'string',\n              format: 'date-time'\n            },\n            updatedByCommit: {\n              type: 'string'\n            }\n          },\n          required: [            'id',\n            'backupPaymentMethodId',\n            'billingCycleAnchorDate',\n            'canceledAt',\n            'cancelScheduledAt',\n            'createdAt',\n            'createdByCommit',\n            'current',\n            'currentBillingPeriodEnd',\n            'currentBillingPeriodStart',\n            'customerId',\n            'defaultPaymentMethodId',\n            'interval',\n            'intervalCount',\n            'livemode',\n            'metadata',\n            'name',\n            'organizationId',\n            'priceId',\n            'runBillingAtPeriodStart',\n            'startDate',\n            'status',\n            'trialEnd',\n            'updatedAt',\n            'updatedByCommit'\n          ]\n        },\n        {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            backupPaymentMethodId: {\n              type: 'string',\n              enum: [                'null'\n              ]\n            },\n            billingCycleAnchorDate: {\n              type: 'string',\n              enum: [                'null'\n              ]\n            },\n            canceledAt: {\n              type: 'string',\n              enum: [                'null'\n              ]\n            },\n            cancelScheduledAt: {\n              type: 'string',\n              enum: [                'null'\n              ]\n            },\n            createdAt: {\n              type: 'string',\n              format: 'date-time'\n            },\n            createdByCommit: {\n              type: 'string'\n            },\n            current: {\n              type: 'boolean',\n              description: 'Whether the subscription is current (statuses \"active\", \"trialing\", \"past_due\", \"cancellation_scheduled\", or \"credit_trial\")'\n            },\n            currentBillingPeriodEnd: {\n              type: 'string',\n              enum: [                'null'\n              ]\n            },\n            currentBillingPeriodStart: {\n              type: 'string',\n              enum: [                'null'\n              ]\n            },\n            customerId: {\n              type: 'string'\n            },\n            defaultPaymentMethodId: {\n              type: 'string',\n              enum: [                'null'\n              ]\n            },\n            interval: {\n              type: 'string',\n              enum: [                'null'\n              ]\n            },\n            intervalCount: {\n              type: 'string',\n              enum: [                'null'\n              ]\n            },\n            livemode: {\n              type: 'boolean'\n            },\n            metadata: {\n              type: 'object'\n            },\n            name: {\n              type: 'string'\n            },\n            organizationId: {\n              type: 'string'\n            },\n            priceId: {\n              type: 'string'\n            },\n            runBillingAtPeriodStart: {\n              type: 'boolean'\n            },\n            startDate: {\n              type: 'string',\n              format: 'date-time'\n            },\n            status: {\n              type: 'string',\n              enum: [                'credit_trial'\n              ]\n            },\n            trialEnd: {\n              type: 'string',\n              enum: [                'null'\n              ]\n            },\n            updatedAt: {\n              type: 'string',\n              format: 'date-time'\n            },\n            updatedByCommit: {\n              type: 'string'\n            }\n          },\n          required: [            'id',\n            'backupPaymentMethodId',\n            'billingCycleAnchorDate',\n            'canceledAt',\n            'cancelScheduledAt',\n            'createdAt',\n            'createdByCommit',\n            'current',\n            'currentBillingPeriodEnd',\n            'currentBillingPeriodStart',\n            'customerId',\n            'defaultPaymentMethodId',\n            'interval',\n            'intervalCount',\n            'livemode',\n            'metadata',\n            'name',\n            'organizationId',\n            'priceId',\n            'runBillingAtPeriodStart',\n            'startDate',\n            'status',\n            'trialEnd',\n            'updatedAt',\n            'updatedByCommit'\n          ]\n        }\n      ]\n    }\n  },\n  required: [    'subscription'\n  ]\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['customerId', 'priceId'],
  },
  annotations: {},
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.subscriptions.create(body)));
};

export default { metadata, tool, handler };
