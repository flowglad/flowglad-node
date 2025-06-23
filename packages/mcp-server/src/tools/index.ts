// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_invoices from './invoices/create-invoices';
import retrieve_invoices from './invoices/retrieve-invoices';
import list_invoices from './invoices/list-invoices';
import retrieve_invoice_line_items from './invoice-line-items/retrieve-invoice-line-items';
import list_invoice_line_items from './invoice-line-items/list-invoice-line-items';
import create_catalogs from './catalogs/create-catalogs';
import retrieve_catalogs from './catalogs/retrieve-catalogs';
import update_catalogs from './catalogs/update-catalogs';
import list_catalogs from './catalogs/list-catalogs';
import clone_catalogs from './catalogs/clone-catalogs';
import retrieve_default_catalogs from './catalogs/retrieve-default-catalogs';
import create_checkout_sessions from './checkout-sessions/create-checkout-sessions';
import retrieve_checkout_sessions from './checkout-sessions/retrieve-checkout-sessions';
import list_checkout_sessions from './checkout-sessions/list-checkout-sessions';
import create_products from './products/create-products';
import retrieve_products from './products/retrieve-products';
import update_products from './products/update-products';
import list_products from './products/list-products';
import create_prices from './prices/create-prices';
import update_prices from './prices/update-prices';
import list_prices from './prices/list-prices';
import create_discounts from './discounts/create-discounts';
import retrieve_discounts from './discounts/retrieve-discounts';
import update_discounts from './discounts/update-discounts';
import list_discounts from './discounts/list-discounts';
import create_customers from './customers/create-customers';
import retrieve_customers from './customers/retrieve-customers';
import update_customers from './customers/update-customers';
import list_customers from './customers/list-customers';
import retrieve_billing_customers from './customers/retrieve-billing-customers';
import retrieve_payments from './payments/retrieve-payments';
import list_payments from './payments/list-payments';
import refund_payments from './payments/refund-payments';
import retrieve_payment_methods from './payment-methods/retrieve-payment-methods';
import list_payment_methods from './payment-methods/list-payment-methods';
import create_subscriptions from './subscriptions/create-subscriptions';
import retrieve_subscriptions from './subscriptions/retrieve-subscriptions';
import list_subscriptions from './subscriptions/list-subscriptions';
import adjust_subscriptions from './subscriptions/adjust-subscriptions';
import cancel_subscriptions from './subscriptions/cancel-subscriptions';
import create_usage_events from './usage-events/create-usage-events';
import retrieve_usage_events from './usage-events/retrieve-usage-events';
import update_usage_events from './usage-events/update-usage-events';
import create_usage_meters from './usage-meters/create-usage-meters';
import retrieve_usage_meters from './usage-meters/retrieve-usage-meters';
import update_usage_meters from './usage-meters/update-usage-meters';
import list_usage_meters from './usage-meters/list-usage-meters';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_invoices);
addEndpoint(retrieve_invoices);
addEndpoint(list_invoices);
addEndpoint(retrieve_invoice_line_items);
addEndpoint(list_invoice_line_items);
addEndpoint(create_catalogs);
addEndpoint(retrieve_catalogs);
addEndpoint(update_catalogs);
addEndpoint(list_catalogs);
addEndpoint(clone_catalogs);
addEndpoint(retrieve_default_catalogs);
addEndpoint(create_checkout_sessions);
addEndpoint(retrieve_checkout_sessions);
addEndpoint(list_checkout_sessions);
addEndpoint(create_products);
addEndpoint(retrieve_products);
addEndpoint(update_products);
addEndpoint(list_products);
addEndpoint(create_prices);
addEndpoint(update_prices);
addEndpoint(list_prices);
addEndpoint(create_discounts);
addEndpoint(retrieve_discounts);
addEndpoint(update_discounts);
addEndpoint(list_discounts);
addEndpoint(create_customers);
addEndpoint(retrieve_customers);
addEndpoint(update_customers);
addEndpoint(list_customers);
addEndpoint(retrieve_billing_customers);
addEndpoint(retrieve_payments);
addEndpoint(list_payments);
addEndpoint(refund_payments);
addEndpoint(retrieve_payment_methods);
addEndpoint(list_payment_methods);
addEndpoint(create_subscriptions);
addEndpoint(retrieve_subscriptions);
addEndpoint(list_subscriptions);
addEndpoint(adjust_subscriptions);
addEndpoint(cancel_subscriptions);
addEndpoint(create_usage_events);
addEndpoint(retrieve_usage_events);
addEndpoint(update_usage_events);
addEndpoint(create_usage_meters);
addEndpoint(retrieve_usage_meters);
addEndpoint(update_usage_meters);
addEndpoint(list_usage_meters);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
