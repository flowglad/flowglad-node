// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@flowglad/node-mcp/filtering';
import { Metadata, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'usage_events',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/usage-events',
  operationId: 'usageEvents-create',
};

export const tool: Tool = {
  name: 'create_usage_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Usage Event\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    usageEvent: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        amount: {\n          type: 'integer'\n        },\n        billingPeriodId: {\n          type: 'string',\n          description: 'The billing period the usage belongs to. If the usage occurs in a date that is outside of the current billing period, the usage will still be attached to the current billing peirod.'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        createdByCommit: {\n          type: 'string'\n        },\n        customerId: {\n          type: 'string'\n        },\n        livemode: {\n          type: 'boolean'\n        },\n        priceId: {\n          type: 'string'\n        },\n        properties: {\n          type: 'object',\n          description: 'Properties for the usage event. Only required when using the \"count_distinct_properties\" aggregation type.'\n        },\n        subscriptionId: {\n          type: 'string'\n        },\n        transactionId: {\n          type: 'string',\n          description: 'A unique identifier for the transaction. This is used to prevent duplicate usage events from being created.'\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        updatedByCommit: {\n          type: 'string'\n        },\n        usageDate: {\n          type: 'string',\n          description: 'The date the usage occurred. If the usage occurs in a date that is outside of the current billing period, the usage will still be attached to the current billing peirod.',\n          format: 'date-time'\n        },\n        usageMeterId: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'amount',\n        'billingPeriodId',\n        'createdAt',\n        'createdByCommit',\n        'customerId',\n        'livemode',\n        'priceId',\n        'properties',\n        'subscriptionId',\n        'transactionId',\n        'updatedAt',\n        'updatedByCommit',\n        'usageDate',\n        'usageMeterId'\n      ]\n    }\n  },\n  required: [    'usageEvent'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      usageEvent: {
        type: 'object',
        properties: {
          amount: {
            type: 'integer',
          },
          priceId: {
            type: 'string',
          },
          subscriptionId: {
            type: 'string',
          },
          transactionId: {
            type: 'string',
            description:
              'A unique identifier for the transaction. This is used to prevent duplicate usage events from being created.',
          },
          properties: {
            type: 'object',
            description:
              'Properties for the usage event. Only required when using the "count_distinct_properties" aggregation type.',
          },
          usageDate: {
            type: 'number',
            description:
              'The date the usage occurred in unix epoch milliseconds. If not provided, the current timestamp will be used.',
          },
        },
        required: ['amount', 'priceId', 'subscriptionId', 'transactionId'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['usageEvent'],
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.usageEvents.create(body)));
};

export default { metadata, tool, handler };
