// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@flowglad/node-mcp/filtering';
import { Metadata, asTextContentResult } from '@flowglad/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Flowglad from '@flowglad/node';

export const metadata: Metadata = {
  resource: 'invoice_line_items',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/invoice-line-items/{id}',
  operationId: 'invoiceLineItems-get',
};

export const tool: Tool = {
  name: 'retrieve_invoice_line_items',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Invoice Line Item\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/invoice_line_item_retrieve_response',\n  $defs: {\n    invoice_line_item_retrieve_response: {\n      anyOf: [        {\n          $ref: '#/$defs/static_invoice_line_item_client_select_schema'\n        },\n        {\n          $ref: '#/$defs/usage_invoice_line_item_client_select_schema'\n        }\n      ]\n    },\n    static_invoice_line_item_client_select_schema: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        createdAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        description: {\n          type: 'string'\n        },\n        invoiceId: {\n          type: 'string'\n        },\n        livemode: {\n          type: 'boolean'\n        },\n        price: {\n          type: 'integer'\n        },\n        priceId: {\n          type: 'string'\n        },\n        quantity: {\n          type: 'integer'\n        },\n        type: {\n          type: 'string',\n          enum: [            'static'\n          ]\n        },\n        updatedAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        ledgerAccountCredit: {\n          type: 'null'\n        },\n        ledgerAccountId: {\n          type: 'null'\n        }\n      },\n      required: [        'id',\n        'createdAt',\n        'description',\n        'invoiceId',\n        'livemode',\n        'price',\n        'priceId',\n        'quantity',\n        'type',\n        'updatedAt'\n      ]\n    },\n    usage_invoice_line_item_client_select_schema: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        billingRunId: {\n          type: 'string'\n        },\n        createdAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        },\n        description: {\n          type: 'string'\n        },\n        invoiceId: {\n          type: 'string'\n        },\n        ledgerAccountCredit: {\n          type: 'number'\n        },\n        ledgerAccountId: {\n          type: 'string'\n        },\n        livemode: {\n          type: 'boolean'\n        },\n        price: {\n          type: 'integer'\n        },\n        priceId: {\n          type: 'string'\n        },\n        quantity: {\n          type: 'integer'\n        },\n        type: {\n          type: 'string',\n          enum: [            'usage'\n          ]\n        },\n        updatedAt: {\n          type: 'integer',\n          description: 'Epoch milliseconds.'\n        }\n      },\n      required: [        'id',\n        'billingRunId',\n        'createdAt',\n        'description',\n        'invoiceId',\n        'ledgerAccountCredit',\n        'ledgerAccountId',\n        'livemode',\n        'price',\n        'priceId',\n        'quantity',\n        'type',\n        'updatedAt'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.invoiceLineItems.retrieve(id)));
};

export default { metadata, tool, handler };
