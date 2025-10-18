// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@flowglad/node-mcp/filtering';
import { Metadata, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'usage_events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/usage-events/{id}',
  operationId: 'usageEvents-get',
};

export const tool: Tool = {
  name: 'retrieve_usage_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Usage Event\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/usage_event_retrieve_response',\n  $defs: {\n    usage_event_retrieve_response: {\n      type: 'object',\n      properties: {\n        usageEvent: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            amount: {\n              type: 'integer'\n            },\n            createdAt: {\n              type: 'integer',\n              description: 'Epoch milliseconds.'\n            },\n            customerId: {\n              type: 'string'\n            },\n            livemode: {\n              type: 'boolean'\n            },\n            priceId: {\n              type: 'string'\n            },\n            subscriptionId: {\n              type: 'string'\n            },\n            transactionId: {\n              type: 'string',\n              description: 'A unique identifier for the transaction. This is used to prevent duplicate usage events from being created.'\n            },\n            updatedAt: {\n              type: 'integer',\n              description: 'Epoch milliseconds.'\n            },\n            usageDate: {\n              type: 'integer',\n              description: 'The date the usage occurred. If the usage occurs in a date that is outside of the current billing period, the usage will still be attached to the current billing period. Epoch milliseconds.'\n            },\n            usageMeterId: {\n              type: 'string'\n            },\n            billingPeriodId: {\n              type: 'string',\n              description: 'The billing period the usage belongs to. If the usage occurs in a date that is outside of the current billing period, the usage will still be attached to the current billing peirod.'\n            },\n            properties: {\n              type: 'object',\n              description: 'Properties for the usage event. Only required when using the \"count_distinct_properties\" aggregation type.',\n              additionalProperties: true\n            }\n          },\n          required: [            'id',\n            'amount',\n            'createdAt',\n            'customerId',\n            'livemode',\n            'priceId',\n            'subscriptionId',\n            'transactionId',\n            'updatedAt',\n            'usageDate',\n            'usageMeterId'\n          ]\n        }\n      },\n      required: [        'usageEvent'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.usageEvents.retrieve(id)));
};

export default { metadata, tool, handler };
