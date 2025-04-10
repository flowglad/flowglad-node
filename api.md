# Invoices

Types:

- <code><a href="./src/resources/invoices.ts">InvoiceCreateResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceRetrieveResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceListResponse</a></code>

Methods:

- <code title="post /api/v1/invoices">client.invoices.<a href="./src/resources/invoices.ts">create</a>({ ...params }) -> InvoiceCreateResponse</code>
- <code title="get /api/v1/invoices/{id}">client.invoices.<a href="./src/resources/invoices.ts">retrieve</a>(id) -> InvoiceRetrieveResponse</code>
- <code title="get /api/v1/invoices">client.invoices.<a href="./src/resources/invoices.ts">list</a>({ ...params }) -> InvoiceListResponse</code>

# InvoiceLineItems

Types:

- <code><a href="./src/resources/invoice-line-items.ts">InvoiceLineItemRetrieveResponse</a></code>
- <code><a href="./src/resources/invoice-line-items.ts">InvoiceLineItemListResponse</a></code>

Methods:

- <code title="get /api/v1/invoice-line-items/{id}">client.invoiceLineItems.<a href="./src/resources/invoice-line-items.ts">retrieve</a>(id) -> InvoiceLineItemRetrieveResponse</code>
- <code title="get /api/v1/invoice-line-items">client.invoiceLineItems.<a href="./src/resources/invoice-line-items.ts">list</a>({ ...params }) -> InvoiceLineItemListResponse</code>

# Catalogs

Types:

- <code><a href="./src/resources/catalogs.ts">CatalogCreateResponse</a></code>
- <code><a href="./src/resources/catalogs.ts">CatalogRetrieveResponse</a></code>
- <code><a href="./src/resources/catalogs.ts">CatalogUpdateResponse</a></code>
- <code><a href="./src/resources/catalogs.ts">CatalogListResponse</a></code>
- <code><a href="./src/resources/catalogs.ts">CatalogCloneResponse</a></code>
- <code><a href="./src/resources/catalogs.ts">CatalogRetrieveDefaultResponse</a></code>

Methods:

- <code title="post /api/v1/catalogs">client.catalogs.<a href="./src/resources/catalogs.ts">create</a>({ ...params }) -> CatalogCreateResponse</code>
- <code title="get /api/v1/catalogs/{id}">client.catalogs.<a href="./src/resources/catalogs.ts">retrieve</a>(id) -> CatalogRetrieveResponse</code>
- <code title="put /api/v1/catalogs/{id}">client.catalogs.<a href="./src/resources/catalogs.ts">update</a>(id, { ...params }) -> CatalogUpdateResponse</code>
- <code title="get /api/v1/catalogs">client.catalogs.<a href="./src/resources/catalogs.ts">list</a>({ ...params }) -> CatalogListResponse</code>
- <code title="post /api/v1/catalogs/{id}/clone">client.catalogs.<a href="./src/resources/catalogs.ts">clone</a>(id, { ...params }) -> CatalogCloneResponse</code>
- <code title="get /api/v1/catalogs/default">client.catalogs.<a href="./src/resources/catalogs.ts">retrieveDefault</a>() -> CatalogRetrieveDefaultResponse</code>

# CheckoutSessions

Types:

- <code><a href="./src/resources/checkout-sessions.ts">CheckoutSessionCreateResponse</a></code>
- <code><a href="./src/resources/checkout-sessions.ts">CheckoutSessionRetrieveResponse</a></code>
- <code><a href="./src/resources/checkout-sessions.ts">CheckoutSessionListResponse</a></code>

Methods:

- <code title="post /api/v1/checkout-sessions">client.checkoutSessions.<a href="./src/resources/checkout-sessions.ts">create</a>({ ...params }) -> CheckoutSessionCreateResponse</code>
- <code title="get /api/v1/checkout-sessions/{id}">client.checkoutSessions.<a href="./src/resources/checkout-sessions.ts">retrieve</a>(id) -> CheckoutSessionRetrieveResponse</code>
- <code title="get /api/v1/checkout-sessions">client.checkoutSessions.<a href="./src/resources/checkout-sessions.ts">list</a>({ ...params }) -> CheckoutSessionListResponse</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">ProductCreateResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductRetrieveResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductUpdateResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductListResponse</a></code>

Methods:

- <code title="post /api/v1/products">client.products.<a href="./src/resources/products.ts">create</a>({ ...params }) -> ProductCreateResponse</code>
- <code title="get /api/v1/products/{id}">client.products.<a href="./src/resources/products.ts">retrieve</a>(id) -> ProductRetrieveResponse</code>
- <code title="put /api/v1/products/{id}">client.products.<a href="./src/resources/products.ts">update</a>(id, { ...params }) -> ProductUpdateResponse</code>
- <code title="get /api/v1/products">client.products.<a href="./src/resources/products.ts">list</a>({ ...params }) -> ProductListResponse</code>

# Prices

Types:

- <code><a href="./src/resources/prices.ts">PriceCreateResponse</a></code>
- <code><a href="./src/resources/prices.ts">PriceUpdateResponse</a></code>
- <code><a href="./src/resources/prices.ts">PriceListResponse</a></code>

Methods:

- <code title="post /api/v1/prices">client.prices.<a href="./src/resources/prices.ts">create</a>({ ...params }) -> PriceCreateResponse</code>
- <code title="put /api/v1/prices/{id}">client.prices.<a href="./src/resources/prices.ts">update</a>(id, { ...params }) -> PriceUpdateResponse</code>
- <code title="get /api/v1/prices">client.prices.<a href="./src/resources/prices.ts">list</a>({ ...params }) -> PriceListResponse</code>

# Discounts

Types:

- <code><a href="./src/resources/discounts.ts">DiscountCreateResponse</a></code>
- <code><a href="./src/resources/discounts.ts">DiscountRetrieveResponse</a></code>
- <code><a href="./src/resources/discounts.ts">DiscountUpdateResponse</a></code>
- <code><a href="./src/resources/discounts.ts">DiscountListResponse</a></code>

Methods:

- <code title="post /api/v1/discounts">client.discounts.<a href="./src/resources/discounts.ts">create</a>({ ...params }) -> DiscountCreateResponse</code>
- <code title="get /api/v1/discounts/{id}">client.discounts.<a href="./src/resources/discounts.ts">retrieve</a>(id) -> DiscountRetrieveResponse</code>
- <code title="put /api/v1/discounts/{id}">client.discounts.<a href="./src/resources/discounts.ts">update</a>(id, { ...params }) -> DiscountUpdateResponse</code>
- <code title="get /api/v1/discounts">client.discounts.<a href="./src/resources/discounts.ts">list</a>({ ...params }) -> DiscountListResponse</code>

# Customers

Types:

- <code><a href="./src/resources/customers.ts">CustomerCreateResponse</a></code>
- <code><a href="./src/resources/customers.ts">CustomerRetrieveResponse</a></code>
- <code><a href="./src/resources/customers.ts">CustomerUpdateResponse</a></code>
- <code><a href="./src/resources/customers.ts">CustomerListResponse</a></code>
- <code><a href="./src/resources/customers.ts">CustomerRetrieveBillingResponse</a></code>

Methods:

- <code title="post /api/v1/customers">client.customers.<a href="./src/resources/customers.ts">create</a>({ ...params }) -> CustomerCreateResponse</code>
- <code title="get /api/v1/customers/{externalId}">client.customers.<a href="./src/resources/customers.ts">retrieve</a>(externalID) -> CustomerRetrieveResponse</code>
- <code title="put /api/v1/customers/{externalId}">client.customers.<a href="./src/resources/customers.ts">update</a>(externalID, { ...params }) -> CustomerUpdateResponse</code>
- <code title="get /api/v1/customers">client.customers.<a href="./src/resources/customers.ts">list</a>({ ...params }) -> CustomerListResponse</code>
- <code title="get /api/v1/customers/{externalId}/billing">client.customers.<a href="./src/resources/customers.ts">retrieveBilling</a>(externalID) -> CustomerRetrieveBillingResponse</code>

# Payments

Types:

- <code><a href="./src/resources/payments.ts">PaymentRetrieveResponse</a></code>
- <code><a href="./src/resources/payments.ts">PaymentListResponse</a></code>

Methods:

- <code title="get /api/v1/payments/{id}">client.payments.<a href="./src/resources/payments.ts">retrieve</a>(id) -> PaymentRetrieveResponse</code>
- <code title="get /api/v1/payments">client.payments.<a href="./src/resources/payments.ts">list</a>({ ...params }) -> PaymentListResponse</code>

# PaymentMethods

Types:

- <code><a href="./src/resources/payment-methods.ts">PaymentMethodRetrieveResponse</a></code>
- <code><a href="./src/resources/payment-methods.ts">PaymentMethodListResponse</a></code>

Methods:

- <code title="get /api/v1/payment-methods/{id}">client.paymentMethods.<a href="./src/resources/payment-methods.ts">retrieve</a>(id) -> PaymentMethodRetrieveResponse</code>
- <code title="get /api/v1/payment-methods">client.paymentMethods.<a href="./src/resources/payment-methods.ts">list</a>({ ...params }) -> PaymentMethodListResponse</code>

# Subscriptions

Types:

- <code><a href="./src/resources/subscriptions.ts">SubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionRetrieveResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionAdjustResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionCancelResponse</a></code>

Methods:

- <code title="post /api/v1/subscriptions">client.subscriptions.<a href="./src/resources/subscriptions.ts">create</a>({ ...params }) -> SubscriptionCreateResponse</code>
- <code title="get /api/v1/subscriptions/{id}">client.subscriptions.<a href="./src/resources/subscriptions.ts">retrieve</a>(id) -> SubscriptionRetrieveResponse</code>
- <code title="get /api/v1/subscriptions">client.subscriptions.<a href="./src/resources/subscriptions.ts">list</a>({ ...params }) -> SubscriptionListResponse</code>
- <code title="post /api/v1/subscriptions/{id}/adjust">client.subscriptions.<a href="./src/resources/subscriptions.ts">adjust</a>(id, { ...params }) -> SubscriptionAdjustResponse</code>
- <code title="post /api/v1/subscriptions/{id}/cancel">client.subscriptions.<a href="./src/resources/subscriptions.ts">cancel</a>(id, { ...params }) -> SubscriptionCancelResponse</code>

# UsageEvents

Types:

- <code><a href="./src/resources/usage-events.ts">UsageEventCreateResponse</a></code>
- <code><a href="./src/resources/usage-events.ts">UsageEventRetrieveResponse</a></code>
- <code><a href="./src/resources/usage-events.ts">UsageEventUpdateResponse</a></code>

Methods:

- <code title="post /api/v1/usage-events">client.usageEvents.<a href="./src/resources/usage-events.ts">create</a>({ ...params }) -> UsageEventCreateResponse</code>
- <code title="get /api/v1/usage-events/{id}">client.usageEvents.<a href="./src/resources/usage-events.ts">retrieve</a>(id) -> UsageEventRetrieveResponse</code>
- <code title="put /api/v1/usage-events/{id}">client.usageEvents.<a href="./src/resources/usage-events.ts">update</a>(id, { ...params }) -> UsageEventUpdateResponse</code>

# UsageMeters

Types:

- <code><a href="./src/resources/usage-meters.ts">UsageMeterCreateResponse</a></code>
- <code><a href="./src/resources/usage-meters.ts">UsageMeterRetrieveResponse</a></code>
- <code><a href="./src/resources/usage-meters.ts">UsageMeterUpdateResponse</a></code>
- <code><a href="./src/resources/usage-meters.ts">UsageMeterListResponse</a></code>

Methods:

- <code title="post /api/v1/usage-meters">client.usageMeters.<a href="./src/resources/usage-meters.ts">create</a>({ ...params }) -> UsageMeterCreateResponse</code>
- <code title="get /api/v1/usage-meters/{id}">client.usageMeters.<a href="./src/resources/usage-meters.ts">retrieve</a>(id) -> UsageMeterRetrieveResponse</code>
- <code title="put /api/v1/usage-meters/{id}">client.usageMeters.<a href="./src/resources/usage-meters.ts">update</a>(id, { ...params }) -> UsageMeterUpdateResponse</code>
- <code title="get /api/v1/usage-meters">client.usageMeters.<a href="./src/resources/usage-meters.ts">list</a>({ ...params }) -> UsageMeterListResponse</code>
