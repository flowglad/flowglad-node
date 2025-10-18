// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'subscriptions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/subscriptions/{id}/adjust',
  operationId: 'subscriptions-adjust',
};

export const tool: Tool = {
  name: 'adjust_subscriptions',
  description:
    'Note: Immediate adjustments are in private preview (Please let us know you use this feature: https://github.com/flowglad/flowglad/issues/616). Adjustments at the end of the current billing period are generally available.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      adjustment: {
        anyOf: [
          {
            type: 'object',
            properties: {
              newSubscriptionItems: {
                type: 'array',
                items: {
                  anyOf: [
                    {
                      type: 'object',
                      properties: {
                        addedDate: {
                          type: 'integer',
                          description: 'Epoch milliseconds.',
                        },
                        priceId: {
                          type: 'string',
                        },
                        quantity: {
                          type: 'integer',
                          description: 'A positive integer',
                        },
                        subscriptionId: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                          enum: ['static'],
                        },
                        unitPrice: {
                          type: 'number',
                        },
                        expiredAt: {
                          type: 'integer',
                          description:
                            'Used as a flag to soft delete a subscription item without losing its history for auditability. If set, it will be removed from the subscription items list and will not be included in the billing period item list. Epoch milliseconds.',
                        },
                        externalId: {
                          type: 'string',
                        },
                        metadata: {
                          type: 'object',
                          description: 'JSON object',
                          additionalProperties: true,
                        },
                        name: {
                          type: 'string',
                        },
                      },
                      required: ['addedDate', 'priceId', 'quantity', 'subscriptionId', 'type', 'unitPrice'],
                    },
                    {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                        },
                        addedDate: {
                          type: 'integer',
                          description: 'Epoch milliseconds.',
                        },
                        createdAt: {
                          type: 'integer',
                          description: 'Epoch milliseconds.',
                        },
                        externalId: {
                          type: 'string',
                        },
                        livemode: {
                          type: 'boolean',
                        },
                        name: {
                          type: 'string',
                        },
                        priceId: {
                          type: 'string',
                        },
                        quantity: {
                          type: 'integer',
                          description: 'A positive integer',
                        },
                        subscriptionId: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                          enum: ['static'],
                        },
                        unitPrice: {
                          type: 'number',
                        },
                        updatedAt: {
                          type: 'integer',
                          description: 'Epoch milliseconds.',
                        },
                        expiredAt: {
                          type: 'integer',
                          description:
                            'Used as a flag to soft delete a subscription item without losing its history for auditability. If set, it will be removed from the subscription items list and will not be included in the billing period item list. Epoch milliseconds.',
                        },
                        metadata: {
                          type: 'object',
                          description: 'JSON object',
                          additionalProperties: true,
                        },
                      },
                      required: [
                        'id',
                        'addedDate',
                        'createdAt',
                        'externalId',
                        'livemode',
                        'name',
                        'priceId',
                        'quantity',
                        'subscriptionId',
                        'type',
                        'unitPrice',
                        'updatedAt',
                      ],
                    },
                  ],
                },
              },
              prorateCurrentBillingPeriod: {
                type: 'boolean',
              },
              timing: {
                type: 'string',
                description:
                  'Note: Immediate adjustments are in private preview. Please let us know you use this feature: https://github.com/flowglad/flowglad/issues/616.',
                enum: ['immediately'],
              },
            },
            required: ['newSubscriptionItems', 'prorateCurrentBillingPeriod', 'timing'],
          },
          {
            type: 'object',
            properties: {
              newSubscriptionItems: {
                type: 'array',
                items: {
                  anyOf: [
                    {
                      type: 'object',
                      properties: {
                        addedDate: {
                          type: 'integer',
                          description: 'Epoch milliseconds.',
                        },
                        priceId: {
                          type: 'string',
                        },
                        quantity: {
                          type: 'integer',
                          description: 'A positive integer',
                        },
                        subscriptionId: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                          enum: ['static'],
                        },
                        unitPrice: {
                          type: 'number',
                        },
                        expiredAt: {
                          type: 'integer',
                          description:
                            'Used as a flag to soft delete a subscription item without losing its history for auditability. If set, it will be removed from the subscription items list and will not be included in the billing period item list. Epoch milliseconds.',
                        },
                        externalId: {
                          type: 'string',
                        },
                        metadata: {
                          type: 'object',
                          description: 'JSON object',
                          additionalProperties: true,
                        },
                        name: {
                          type: 'string',
                        },
                      },
                      required: ['addedDate', 'priceId', 'quantity', 'subscriptionId', 'type', 'unitPrice'],
                    },
                    {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                        },
                        addedDate: {
                          type: 'integer',
                          description: 'Epoch milliseconds.',
                        },
                        createdAt: {
                          type: 'integer',
                          description: 'Epoch milliseconds.',
                        },
                        externalId: {
                          type: 'string',
                        },
                        livemode: {
                          type: 'boolean',
                        },
                        name: {
                          type: 'string',
                        },
                        priceId: {
                          type: 'string',
                        },
                        quantity: {
                          type: 'integer',
                          description: 'A positive integer',
                        },
                        subscriptionId: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                          enum: ['static'],
                        },
                        unitPrice: {
                          type: 'number',
                        },
                        updatedAt: {
                          type: 'integer',
                          description: 'Epoch milliseconds.',
                        },
                        expiredAt: {
                          type: 'integer',
                          description:
                            'Used as a flag to soft delete a subscription item without losing its history for auditability. If set, it will be removed from the subscription items list and will not be included in the billing period item list. Epoch milliseconds.',
                        },
                        metadata: {
                          type: 'object',
                          description: 'JSON object',
                          additionalProperties: true,
                        },
                      },
                      required: [
                        'id',
                        'addedDate',
                        'createdAt',
                        'externalId',
                        'livemode',
                        'name',
                        'priceId',
                        'quantity',
                        'subscriptionId',
                        'type',
                        'unitPrice',
                        'updatedAt',
                      ],
                    },
                  ],
                },
              },
              timing: {
                type: 'string',
                enum: ['at_end_of_current_billing_period'],
              },
            },
            required: ['newSubscriptionItems', 'timing'],
          },
        ],
      },
    },
    required: ['id', 'adjustment'],
  },
  annotations: {},
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptions.adjust(id, body));
};

export default { metadata, tool, handler };
