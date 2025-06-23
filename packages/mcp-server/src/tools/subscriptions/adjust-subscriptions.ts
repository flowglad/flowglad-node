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
                      properties: {
                        addedDate: {
                          type: 'string',
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
                      },
                      required: [
                        'addedDate',
                        'externalId',
                        'livemode',
                        'metadata',
                        'name',
                        'priceId',
                        'quantity',
                        'subscriptionId',
                        'unitPrice',
                      ],
                    },
                    {
                      type: 'object',
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
                      },
                      required: [
                        'id',
                        'addedDate',
                        'createdAt',
                        'createdByCommit',
                        'externalId',
                        'livemode',
                        'metadata',
                        'name',
                        'priceId',
                        'quantity',
                        'subscriptionId',
                        'unitPrice',
                        'updatedAt',
                        'updatedByCommit',
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
                          type: 'string',
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
                      },
                      required: [
                        'addedDate',
                        'externalId',
                        'livemode',
                        'metadata',
                        'name',
                        'priceId',
                        'quantity',
                        'subscriptionId',
                        'unitPrice',
                      ],
                    },
                    {
                      type: 'object',
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
                      },
                      required: [
                        'id',
                        'addedDate',
                        'createdAt',
                        'createdByCommit',
                        'externalId',
                        'livemode',
                        'metadata',
                        'name',
                        'priceId',
                        'quantity',
                        'subscriptionId',
                        'unitPrice',
                        'updatedAt',
                        'updatedByCommit',
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
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscriptions.adjust(id, body));
};

export default { metadata, tool, handler };
