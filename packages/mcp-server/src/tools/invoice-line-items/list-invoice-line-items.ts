// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@flowglad/node-mcp/filtering';
import { asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'invoice_line_items',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/invoice-line-items',
  operationId: 'invoiceLineItems-list',
};

export const tool: Tool = {
  name: 'list_invoice_line_items',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Invoice Line Items\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        anyOf: [          {\n            type: 'object',\n            description: 'A static invoice line item, representing a fixed fee component of an invoice.',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              createdAt: {\n                type: 'string',\n                format: 'date-time'\n              },\n              createdByCommit: {\n                type: 'string'\n              },\n              description: {\n                type: 'string'\n              },\n              invoiceId: {\n                type: 'string'\n              },\n              livemode: {\n                type: 'boolean'\n              },\n              price: {\n                type: 'number'\n              },\n              priceId: {\n                type: 'string'\n              },\n              quantity: {\n                type: 'number',\n                description: 'safeZodPositiveInteger'\n              },\n              type: {\n                type: 'string',\n                enum: [                  'static'\n                ]\n              },\n              updatedAt: {\n                type: 'string',\n                format: 'date-time'\n              },\n              updatedByCommit: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'createdAt',\n              'createdByCommit',\n              'description',\n              'invoiceId',\n              'livemode',\n              'price',\n              'priceId',\n              'quantity',\n              'type',\n              'updatedAt',\n              'updatedByCommit'\n            ]\n          },\n          {\n            type: 'object',\n            description: 'A usage-based invoice line item, where charges are based on recorded usage events.',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              createdAt: {\n                type: 'string',\n                format: 'date-time'\n              },\n              createdByCommit: {\n                type: 'string'\n              },\n              description: {\n                type: 'string'\n              },\n              invoiceId: {\n                type: 'string'\n              },\n              livemode: {\n                type: 'boolean'\n              },\n              price: {\n                type: 'number'\n              },\n              priceId: {\n                type: 'string'\n              },\n              quantity: {\n                type: 'number',\n                description: 'safeZodPositiveInteger'\n              },\n              type: {\n                type: 'string',\n                enum: [                  'usage'\n                ]\n              },\n              updatedAt: {\n                type: 'string',\n                format: 'date-time'\n              },\n              updatedByCommit: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'createdAt',\n              'createdByCommit',\n              'description',\n              'invoiceId',\n              'livemode',\n              'price',\n              'priceId',\n              'quantity',\n              'type',\n              'updatedAt',\n              'updatedByCommit'\n            ]\n          }\n        ],\n        description: 'A static invoice line item, representing a fixed fee component of an invoice.'\n      }\n    },\n    hasMore: {\n      type: 'boolean'\n    },\n    total: {\n      type: 'number'\n    },\n    currentCursor: {\n      type: 'string'\n    },\n    nextCursor: {\n      type: 'string'\n    }\n  },\n  required: [    'data',\n    'hasMore',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      cursor: {
        type: 'string',
      },
      limit: {
        type: 'number',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Flowglad, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.invoiceLineItems.list(body)));
};

export default { metadata, tool, handler };
