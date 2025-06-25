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
  httpPath: '/api/v1/subscriptions/{id}/adjust',
  operationId: 'subscriptions-adjust',
};

export const tool: Tool = {
  name: 'adjust_subscriptions',
  description: 'Adjust a Subscription',
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
                      description:
                        'A static subscription item, representing a fixed fee component of a subscription.',
                      properties: {
                        addedDate: {
                          type: 'string',
                          format: 'date-time',
                        },
                        expiredAt: {
                          type: 'string',
                          description:
                            'Used as a flag to soft delete a subscription item without losing its history for auditability. If set, it will be removed from the subscription items list and will not be included in the billing period item list.',
                          format: 'date-time',
                        },
                        externalId: {
                          type: 'string',
                        },
                        metadata: {
                          type: 'object',
                        },
                        name: {
                          type: 'string',
                        },
                        quantity: {
                          type: 'number',
                          description: 'safeZodPositiveInteger',
                        },
                        type: {
                          type: 'string',
                          enum: ['static'],
                        },
                        unitPrice: {
                          anyOf: [
                            {
                              type: 'number',
                              description: 'safeZodPositiveInteger',
                            },
                            {
                              type: 'string',
                              description: 'safeZodPositiveInteger',
                              enum: [0],
                            },
                          ],
                          description: 'safeZodPositiveInteger',
                        },
                        usageEventsPerUnit: {
                          type: 'string',
                          description: 'Usage events per unit must be null for static subscription items.',
                          enum: ['null'],
                        },
                        usageMeterId: {
                          type: 'string',
                          description: 'Usage meter ID must be null for static subscription items.',
                          enum: ['null'],
                        },
                      },
                      required: [
                        'addedDate',
                        'expiredAt',
                        'externalId',
                        'metadata',
                        'name',
                        'quantity',
                        'type',
                        'unitPrice',
                        'usageEventsPerUnit',
                        'usageMeterId',
                      ],
                    },
                    {
                      type: 'object',
                      description:
                        'A usage-based subscription item, where charges are based on recorded usage events.',
                      properties: {
                        addedDate: {
                          type: 'string',
                          format: 'date-time',
                        },
                        expiredAt: {
                          type: 'string',
                          description:
                            'Used as a flag to soft delete a subscription item without losing its history for auditability. If set, it will be removed from the subscription items list and will not be included in the billing period item list.',
                          format: 'date-time',
                        },
                        externalId: {
                          type: 'string',
                        },
                        livemode: {
                          type: 'boolean',
                        },
                        metadata: {
                          type: 'object',
                        },
                        name: {
                          type: 'string',
                        },
                        priceId: {
                          type: 'string',
                        },
                        quantity: {
                          type: 'number',
                          description: 'safeZodPositiveInteger',
                        },
                        subscriptionId: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                          enum: ['usage'],
                        },
                        unitPrice: {
                          anyOf: [
                            {
                              type: 'number',
                              description: 'safeZodPositiveInteger',
                            },
                            {
                              type: 'string',
                              description: 'safeZodPositiveInteger',
                              enum: [0],
                            },
                          ],
                          description: 'safeZodPositiveInteger',
                        },
                        usageEventsPerUnit: {
                          type: 'number',
                          description: 'The number of usage events that constitute one unit for billing.',
                        },
                        usageMeterId: {
                          type: 'string',
                          description: 'The usage meter associated with this usage-based subscription item.',
                        },
                      },
                      required: [
                        'addedDate',
                        'expiredAt',
                        'externalId',
                        'livemode',
                        'metadata',
                        'name',
                        'priceId',
                        'quantity',
                        'subscriptionId',
                        'type',
                        'unitPrice',
                        'usageEventsPerUnit',
                        'usageMeterId',
                      ],
                    },
                    {
                      type: 'object',
                      description:
                        'A static subscription item, representing a fixed fee component of a subscription.',
                      properties: {
                        id: {
                          type: 'string',
                        },
                        addedDate: {
                          type: 'string',
                          format: 'date-time',
                        },
                        createdAt: {
                          type: 'string',
                          format: 'date-time',
                        },
                        createdByCommit: {
                          type: 'string',
                        },
                        expiredAt: {
                          type: 'string',
                          description:
                            'Used as a flag to soft delete a subscription item without losing its history for auditability. If set, it will be removed from the subscription items list and will not be included in the billing period item list.',
                          format: 'date-time',
                        },
                        externalId: {
                          type: 'string',
                        },
                        livemode: {
                          type: 'boolean',
                        },
                        metadata: {
                          type: 'object',
                        },
                        name: {
                          type: 'string',
                        },
                        priceId: {
                          type: 'string',
                        },
                        quantity: {
                          type: 'number',
                          description: 'safeZodPositiveInteger',
                        },
                        subscriptionId: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                          enum: ['static'],
                        },
                        unitPrice: {
                          anyOf: [
                            {
                              type: 'number',
                              description: 'safeZodPositiveInteger',
                            },
                            {
                              type: 'string',
                              description: 'safeZodPositiveInteger',
                              enum: [0],
                            },
                          ],
                          description: 'safeZodPositiveInteger',
                        },
                        updatedAt: {
                          type: 'string',
                          format: 'date-time',
                        },
                        updatedByCommit: {
                          type: 'string',
                        },
                        usageEventsPerUnit: {
                          type: 'string',
                          description: 'Usage events per unit must be null for static subscription items.',
                          enum: ['null'],
                        },
                        usageMeterId: {
                          type: 'string',
                          description: 'Usage meter ID must be null for static subscription items.',
                          enum: ['null'],
                        },
                      },
                      required: [
                        'id',
                        'addedDate',
                        'createdAt',
                        'createdByCommit',
                        'expiredAt',
                        'externalId',
                        'livemode',
                        'metadata',
                        'name',
                        'priceId',
                        'quantity',
                        'subscriptionId',
                        'type',
                        'unitPrice',
                        'updatedAt',
                        'updatedByCommit',
                        'usageEventsPerUnit',
                        'usageMeterId',
                      ],
                    },
                    {
                      type: 'object',
                      description:
                        'A usage-based subscription item, where charges are based on recorded usage events.',
                      properties: {
                        id: {
                          type: 'string',
                        },
                        addedDate: {
                          type: 'string',
                          format: 'date-time',
                        },
                        createdAt: {
                          type: 'string',
                          format: 'date-time',
                        },
                        createdByCommit: {
                          type: 'string',
                        },
                        expiredAt: {
                          type: 'string',
                          description:
                            'Used as a flag to soft delete a subscription item without losing its history for auditability. If set, it will be removed from the subscription items list and will not be included in the billing period item list.',
                          format: 'date-time',
                        },
                        externalId: {
                          type: 'string',
                        },
                        livemode: {
                          type: 'boolean',
                        },
                        metadata: {
                          type: 'object',
                        },
                        name: {
                          type: 'string',
                        },
                        priceId: {
                          type: 'string',
                        },
                        quantity: {
                          type: 'number',
                          description: 'safeZodPositiveInteger',
                        },
                        subscriptionId: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                          enum: ['usage'],
                        },
                        unitPrice: {
                          anyOf: [
                            {
                              type: 'number',
                              description: 'safeZodPositiveInteger',
                            },
                            {
                              type: 'string',
                              description: 'safeZodPositiveInteger',
                              enum: [0],
                            },
                          ],
                          description: 'safeZodPositiveInteger',
                        },
                        updatedAt: {
                          type: 'string',
                          format: 'date-time',
                        },
                        updatedByCommit: {
                          type: 'string',
                        },
                        usageEventsPerUnit: {
                          type: 'number',
                          description: 'The number of usage events that constitute one unit for billing.',
                        },
                        usageMeterId: {
                          type: 'string',
                          description: 'The usage meter associated with this usage-based subscription item.',
                        },
                      },
                      required: [
                        'id',
                        'addedDate',
                        'createdAt',
                        'createdByCommit',
                        'expiredAt',
                        'externalId',
                        'livemode',
                        'metadata',
                        'name',
                        'priceId',
                        'quantity',
                        'subscriptionId',
                        'type',
                        'unitPrice',
                        'updatedAt',
                        'updatedByCommit',
                        'usageEventsPerUnit',
                        'usageMeterId',
                      ],
                    },
                  ],
                  description:
                    'A static subscription item, representing a fixed fee component of a subscription.',
                },
              },
              prorateCurrentBillingPeriod: {
                type: 'boolean',
              },
              timing: {
                type: 'string',
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
                      description:
                        'A static subscription item, representing a fixed fee component of a subscription.',
                      properties: {
                        addedDate: {
                          type: 'string',
                          format: 'date-time',
                        },
                        expiredAt: {
                          type: 'string',
                          description:
                            'Used as a flag to soft delete a subscription item without losing its history for auditability. If set, it will be removed from the subscription items list and will not be included in the billing period item list.',
                          format: 'date-time',
                        },
                        externalId: {
                          type: 'string',
                        },
                        metadata: {
                          type: 'object',
                        },
                        name: {
                          type: 'string',
                        },
                        quantity: {
                          type: 'number',
                          description: 'safeZodPositiveInteger',
                        },
                        type: {
                          type: 'string',
                          enum: ['static'],
                        },
                        unitPrice: {
                          anyOf: [
                            {
                              type: 'number',
                              description: 'safeZodPositiveInteger',
                            },
                            {
                              type: 'string',
                              description: 'safeZodPositiveInteger',
                              enum: [0],
                            },
                          ],
                          description: 'safeZodPositiveInteger',
                        },
                        usageEventsPerUnit: {
                          type: 'string',
                          description: 'Usage events per unit must be null for static subscription items.',
                          enum: ['null'],
                        },
                        usageMeterId: {
                          type: 'string',
                          description: 'Usage meter ID must be null for static subscription items.',
                          enum: ['null'],
                        },
                      },
                      required: [
                        'addedDate',
                        'expiredAt',
                        'externalId',
                        'metadata',
                        'name',
                        'quantity',
                        'type',
                        'unitPrice',
                        'usageEventsPerUnit',
                        'usageMeterId',
                      ],
                    },
                    {
                      type: 'object',
                      description:
                        'A usage-based subscription item, where charges are based on recorded usage events.',
                      properties: {
                        addedDate: {
                          type: 'string',
                          format: 'date-time',
                        },
                        expiredAt: {
                          type: 'string',
                          description:
                            'Used as a flag to soft delete a subscription item without losing its history for auditability. If set, it will be removed from the subscription items list and will not be included in the billing period item list.',
                          format: 'date-time',
                        },
                        externalId: {
                          type: 'string',
                        },
                        livemode: {
                          type: 'boolean',
                        },
                        metadata: {
                          type: 'object',
                        },
                        name: {
                          type: 'string',
                        },
                        priceId: {
                          type: 'string',
                        },
                        quantity: {
                          type: 'number',
                          description: 'safeZodPositiveInteger',
                        },
                        subscriptionId: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                          enum: ['usage'],
                        },
                        unitPrice: {
                          anyOf: [
                            {
                              type: 'number',
                              description: 'safeZodPositiveInteger',
                            },
                            {
                              type: 'string',
                              description: 'safeZodPositiveInteger',
                              enum: [0],
                            },
                          ],
                          description: 'safeZodPositiveInteger',
                        },
                        usageEventsPerUnit: {
                          type: 'number',
                          description: 'The number of usage events that constitute one unit for billing.',
                        },
                        usageMeterId: {
                          type: 'string',
                          description: 'The usage meter associated with this usage-based subscription item.',
                        },
                      },
                      required: [
                        'addedDate',
                        'expiredAt',
                        'externalId',
                        'livemode',
                        'metadata',
                        'name',
                        'priceId',
                        'quantity',
                        'subscriptionId',
                        'type',
                        'unitPrice',
                        'usageEventsPerUnit',
                        'usageMeterId',
                      ],
                    },
                    {
                      type: 'object',
                      description:
                        'A static subscription item, representing a fixed fee component of a subscription.',
                      properties: {
                        id: {
                          type: 'string',
                        },
                        addedDate: {
                          type: 'string',
                          format: 'date-time',
                        },
                        createdAt: {
                          type: 'string',
                          format: 'date-time',
                        },
                        createdByCommit: {
                          type: 'string',
                        },
                        expiredAt: {
                          type: 'string',
                          description:
                            'Used as a flag to soft delete a subscription item without losing its history for auditability. If set, it will be removed from the subscription items list and will not be included in the billing period item list.',
                          format: 'date-time',
                        },
                        externalId: {
                          type: 'string',
                        },
                        livemode: {
                          type: 'boolean',
                        },
                        metadata: {
                          type: 'object',
                        },
                        name: {
                          type: 'string',
                        },
                        priceId: {
                          type: 'string',
                        },
                        quantity: {
                          type: 'number',
                          description: 'safeZodPositiveInteger',
                        },
                        subscriptionId: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                          enum: ['static'],
                        },
                        unitPrice: {
                          anyOf: [
                            {
                              type: 'number',
                              description: 'safeZodPositiveInteger',
                            },
                            {
                              type: 'string',
                              description: 'safeZodPositiveInteger',
                              enum: [0],
                            },
                          ],
                          description: 'safeZodPositiveInteger',
                        },
                        updatedAt: {
                          type: 'string',
                          format: 'date-time',
                        },
                        updatedByCommit: {
                          type: 'string',
                        },
                        usageEventsPerUnit: {
                          type: 'string',
                          description: 'Usage events per unit must be null for static subscription items.',
                          enum: ['null'],
                        },
                        usageMeterId: {
                          type: 'string',
                          description: 'Usage meter ID must be null for static subscription items.',
                          enum: ['null'],
                        },
                      },
                      required: [
                        'id',
                        'addedDate',
                        'createdAt',
                        'createdByCommit',
                        'expiredAt',
                        'externalId',
                        'livemode',
                        'metadata',
                        'name',
                        'priceId',
                        'quantity',
                        'subscriptionId',
                        'type',
                        'unitPrice',
                        'updatedAt',
                        'updatedByCommit',
                        'usageEventsPerUnit',
                        'usageMeterId',
                      ],
                    },
                    {
                      type: 'object',
                      description:
                        'A usage-based subscription item, where charges are based on recorded usage events.',
                      properties: {
                        id: {
                          type: 'string',
                        },
                        addedDate: {
                          type: 'string',
                          format: 'date-time',
                        },
                        createdAt: {
                          type: 'string',
                          format: 'date-time',
                        },
                        createdByCommit: {
                          type: 'string',
                        },
                        expiredAt: {
                          type: 'string',
                          description:
                            'Used as a flag to soft delete a subscription item without losing its history for auditability. If set, it will be removed from the subscription items list and will not be included in the billing period item list.',
                          format: 'date-time',
                        },
                        externalId: {
                          type: 'string',
                        },
                        livemode: {
                          type: 'boolean',
                        },
                        metadata: {
                          type: 'object',
                        },
                        name: {
                          type: 'string',
                        },
                        priceId: {
                          type: 'string',
                        },
                        quantity: {
                          type: 'number',
                          description: 'safeZodPositiveInteger',
                        },
                        subscriptionId: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                          enum: ['usage'],
                        },
                        unitPrice: {
                          anyOf: [
                            {
                              type: 'number',
                              description: 'safeZodPositiveInteger',
                            },
                            {
                              type: 'string',
                              description: 'safeZodPositiveInteger',
                              enum: [0],
                            },
                          ],
                          description: 'safeZodPositiveInteger',
                        },
                        updatedAt: {
                          type: 'string',
                          format: 'date-time',
                        },
                        updatedByCommit: {
                          type: 'string',
                        },
                        usageEventsPerUnit: {
                          type: 'number',
                          description: 'The number of usage events that constitute one unit for billing.',
                        },
                        usageMeterId: {
                          type: 'string',
                          description: 'The usage meter associated with this usage-based subscription item.',
                        },
                      },
                      required: [
                        'id',
                        'addedDate',
                        'createdAt',
                        'createdByCommit',
                        'expiredAt',
                        'externalId',
                        'livemode',
                        'metadata',
                        'name',
                        'priceId',
                        'quantity',
                        'subscriptionId',
                        'type',
                        'unitPrice',
                        'updatedAt',
                        'updatedByCommit',
                        'usageEventsPerUnit',
                        'usageMeterId',
                      ],
                    },
                  ],
                  description:
                    'A static subscription item, representing a fixed fee component of a subscription.',
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
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptions.adjust(id, body));
};

export default { metadata, tool, handler };
