// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@flowglad/node-mcp/filtering';
import { Metadata, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'subscriptions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/subscriptions/{id}',
  operationId: 'subscriptions-get',
};

export const tool: Tool = {
  name: 'retrieve_subscriptions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Subscription\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/subscription_retrieve_response',\n  $defs: {\n    subscription_retrieve_response: {\n      type: 'object',\n      properties: {\n        subscription: {\n          anyOf: [            {\n              $ref: '#/$defs/standard_subscription_record'\n            },\n            {\n              $ref: '#/$defs/non_renewing_subscription_record'\n            }\n          ]\n        }\n      },\n      required: [        'subscription'\n      ]\n    },\n    standard_subscription_record: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        backupPaymentMethodId: {\n          type: 'string'\n        },\n        cancellationReason: {\n          type: 'string'\n        },\n        createdAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        current: {\n          type: 'boolean',\n          description: 'Whether the subscription is current (statuses \"active\", \"trialing\", \"past_due\", or \"cancellation_scheduled\")'\n        },\n        customerId: {\n          type: 'string'\n        },\n        defaultPaymentMethodId: {\n          type: 'string'\n        },\n        interval: {\n          type: 'string',\n          enum: [            'day',\n            'week',\n            'month',\n            'year'\n          ]\n        },\n        intervalCount: {\n          type: 'integer',\n          description: 'A positive integer'\n        },\n        isFreePlan: {\n          type: 'boolean'\n        },\n        livemode: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        organizationId: {\n          type: 'string'\n        },\n        priceId: {\n          type: 'string'\n        },\n        renews: {\n          type: 'string',\n          enum: [            true\n          ]\n        },\n        replacedBySubscriptionId: {\n          type: 'string'\n        },\n        runBillingAtPeriodStart: {\n          type: 'boolean'\n        },\n        startDate: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        status: {\n          type: 'string',\n          enum: [            'trialing',\n            'active',\n            'past_due',\n            'unpaid',\n            'cancellation_scheduled',\n            'incomplete',\n            'incomplete_expired',\n            'canceled',\n            'paused'\n          ]\n        },\n        updatedAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        billingCycleAnchorDate: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        canceledAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        cancelScheduledAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        currentBillingPeriodEnd: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        currentBillingPeriodStart: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'JSON object',\n          additionalProperties: true\n        },\n        trialEnd: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        }\n      },\n      required: [        'id',\n        'backupPaymentMethodId',\n        'cancellationReason',\n        'createdAt',\n        'current',\n        'customerId',\n        'defaultPaymentMethodId',\n        'interval',\n        'intervalCount',\n        'isFreePlan',\n        'livemode',\n        'name',\n        'organizationId',\n        'priceId',\n        'renews',\n        'replacedBySubscriptionId',\n        'runBillingAtPeriodStart',\n        'startDate',\n        'status',\n        'updatedAt'\n      ]\n    },\n    non_renewing_subscription_record: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        backupPaymentMethodId: {\n          type: 'string'\n        },\n        billingCycleAnchorDate: {\n          type: 'null',\n          description: 'Omitted.'\n        },\n        cancellationReason: {\n          type: 'string'\n        },\n        createdAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        current: {\n          type: 'boolean',\n          description: 'Whether the subscription is current (statuses \"active\", \"trialing\", \"past_due\", \"cancellation_scheduled\", or \"credit_trial\")'\n        },\n        currentBillingPeriodEnd: {\n          type: 'null',\n          description: 'Omitted.'\n        },\n        currentBillingPeriodStart: {\n          type: 'null',\n          description: 'Omitted.'\n        },\n        customerId: {\n          type: 'string'\n        },\n        defaultPaymentMethodId: {\n          type: 'string'\n        },\n        interval: {\n          type: 'null',\n          description: 'Omitted.'\n        },\n        intervalCount: {\n          type: 'null',\n          description: 'Omitted.'\n        },\n        isFreePlan: {\n          type: 'boolean'\n        },\n        livemode: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        organizationId: {\n          type: 'string'\n        },\n        priceId: {\n          type: 'string'\n        },\n        renews: {\n          type: 'boolean'\n        },\n        replacedBySubscriptionId: {\n          type: 'string'\n        },\n        runBillingAtPeriodStart: {\n          type: 'boolean'\n        },\n        startDate: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        status: {\n          type: 'string',\n          enum: [            'active',\n            'canceled',\n            'credit_trial'\n          ]\n        },\n        trialEnd: {\n          type: 'null',\n          description: 'Omitted.'\n        },\n        updatedAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        canceledAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        cancelScheduledAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        metadata: {\n          type: 'object',\n          description: 'JSON object',\n          additionalProperties: true\n        }\n      },\n      required: [        'id',\n        'backupPaymentMethodId',\n        'billingCycleAnchorDate',\n        'cancellationReason',\n        'createdAt',\n        'current',\n        'currentBillingPeriodEnd',\n        'currentBillingPeriodStart',\n        'customerId',\n        'defaultPaymentMethodId',\n        'interval',\n        'intervalCount',\n        'isFreePlan',\n        'livemode',\n        'name',\n        'organizationId',\n        'priceId',\n        'renews',\n        'replacedBySubscriptionId',\n        'runBillingAtPeriodStart',\n        'startDate',\n        'status',\n        'trialEnd',\n        'updatedAt'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.subscriptions.retrieve(id)));
};

export default { metadata, tool, handler };
