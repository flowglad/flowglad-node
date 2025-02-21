# Invoice

Types:

- <code><a href="./src/resources/invoice.ts">InvoiceRetrieveResponse</a></code>
- <code><a href="./src/resources/invoice.ts">InvoiceListResponse</a></code>

Methods:

- <code title="get /api/v1/invoice/{id}">client.invoice.<a href="./src/resources/invoice.ts">retrieve</a>(id) -> InvoiceRetrieveResponse</code>
- <code title="get /api/v1/invoices">client.invoice.<a href="./src/resources/invoice.ts">list</a>({ ...params }) -> InvoiceListResponse</code>

# InvoiceLineItems

Types:

- <code><a href="./src/resources/invoice-line-items.ts">InvoiceLineItemRetrieveResponse</a></code>
- <code><a href="./src/resources/invoice-line-items.ts">InvoiceLineItemListResponse</a></code>

Methods:

- <code title="get /api/v1/invoice-line-item/{id}">client.invoiceLineItems.<a href="./src/resources/invoice-line-items.ts">retrieve</a>(id) -> InvoiceLineItemRetrieveResponse</code>
- <code title="get /api/v1/invoice-line-items">client.invoiceLineItems.<a href="./src/resources/invoice-line-items.ts">list</a>({ ...params }) -> InvoiceLineItemListResponse</code>

# PurchaseSessions

Types:

- <code><a href="./src/resources/purchase-sessions.ts">PurchaseSessionCreateResponse</a></code>
- <code><a href="./src/resources/purchase-sessions.ts">PurchaseSessionRetrieveResponse</a></code>
- <code><a href="./src/resources/purchase-sessions.ts">PurchaseSessionListResponse</a></code>

Methods:

- <code title="post /api/v1/purchase-session">client.purchaseSessions.<a href="./src/resources/purchase-sessions.ts">create</a>({ ...params }) -> PurchaseSessionCreateResponse</code>
- <code title="get /api/v1/purchase-session/{id}">client.purchaseSessions.<a href="./src/resources/purchase-sessions.ts">retrieve</a>(id) -> PurchaseSessionRetrieveResponse</code>
- <code title="get /api/v1/purchase-sessions">client.purchaseSessions.<a href="./src/resources/purchase-sessions.ts">list</a>({ ...params }) -> PurchaseSessionListResponse</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">ProductCreateResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductRetrieveResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductUpdateResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductListResponse</a></code>

Methods:

- <code title="post /api/v1/product">client.products.<a href="./src/resources/products.ts">create</a>({ ...params }) -> ProductCreateResponse</code>
- <code title="get /api/v1/product/{id}">client.products.<a href="./src/resources/products.ts">retrieve</a>(id) -> ProductRetrieveResponse</code>
- <code title="put /api/v1/product/{id}">client.products.<a href="./src/resources/products.ts">update</a>(id, { ...params }) -> ProductUpdateResponse</code>
- <code title="get /api/v1/products">client.products.<a href="./src/resources/products.ts">list</a>({ ...params }) -> ProductListResponse</code>

# Variants

Types:

- <code><a href="./src/resources/variants.ts">VariantCreateResponse</a></code>
- <code><a href="./src/resources/variants.ts">VariantUpdateResponse</a></code>
- <code><a href="./src/resources/variants.ts">VariantListResponse</a></code>

Methods:

- <code title="post /api/v1/variant">client.variants.<a href="./src/resources/variants.ts">create</a>({ ...params }) -> VariantCreateResponse</code>
- <code title="put /api/v1/variant/{id}">client.variants.<a href="./src/resources/variants.ts">update</a>(id, { ...params }) -> VariantUpdateResponse</code>
- <code title="get /api/v1/variants">client.variants.<a href="./src/resources/variants.ts">list</a>({ ...params }) -> VariantListResponse</code>

# Discounts

Types:

- <code><a href="./src/resources/discounts.ts">DiscountCreateResponse</a></code>
- <code><a href="./src/resources/discounts.ts">DiscountRetrieveResponse</a></code>
- <code><a href="./src/resources/discounts.ts">DiscountUpdateResponse</a></code>
- <code><a href="./src/resources/discounts.ts">DiscountListResponse</a></code>

Methods:

- <code title="post /api/v1/discount">client.discounts.<a href="./src/resources/discounts.ts">create</a>({ ...params }) -> DiscountCreateResponse</code>
- <code title="get /api/v1/discount/{id}">client.discounts.<a href="./src/resources/discounts.ts">retrieve</a>(id) -> DiscountRetrieveResponse</code>
- <code title="put /api/v1/discount/{id}">client.discounts.<a href="./src/resources/discounts.ts">update</a>(id, { ...params }) -> DiscountUpdateResponse</code>
- <code title="get /api/v1/discounts">client.discounts.<a href="./src/resources/discounts.ts">list</a>({ ...params }) -> DiscountListResponse</code>

# CustomerProfiles

Types:

- <code><a href="./src/resources/customer-profiles.ts">CustomerProfileCreateResponse</a></code>
- <code><a href="./src/resources/customer-profiles.ts">CustomerProfileRetrieveResponse</a></code>
- <code><a href="./src/resources/customer-profiles.ts">CustomerProfileUpdateResponse</a></code>
- <code><a href="./src/resources/customer-profiles.ts">CustomerProfileListResponse</a></code>
- <code><a href="./src/resources/customer-profiles.ts">CustomerProfileRetrieveBillingResponse</a></code>

Methods:

- <code title="post /api/v1/customer-profile">client.customerProfiles.<a href="./src/resources/customer-profiles.ts">create</a>({ ...params }) -> CustomerProfileCreateResponse</code>
- <code title="get /api/v1/customer-profile/{externalId}">client.customerProfiles.<a href="./src/resources/customer-profiles.ts">retrieve</a>(externalId) -> CustomerProfileRetrieveResponse</code>
- <code title="put /api/v1/customer-profile/{externalId}">client.customerProfiles.<a href="./src/resources/customer-profiles.ts">update</a>(externalId, { ...params }) -> CustomerProfileUpdateResponse</code>
- <code title="get /api/v1/customer-profiles">client.customerProfiles.<a href="./src/resources/customer-profiles.ts">list</a>({ ...params }) -> CustomerProfileListResponse</code>
- <code title="get /api/v1/customer-profile/{externalId}/billing">client.customerProfiles.<a href="./src/resources/customer-profiles.ts">retrieveBilling</a>(externalId) -> CustomerProfileRetrieveBillingResponse</code>

# Payments

Types:

- <code><a href="./src/resources/payments.ts">PaymentRetrieveResponse</a></code>
- <code><a href="./src/resources/payments.ts">PaymentListResponse</a></code>

Methods:

- <code title="get /api/v1/payment/{id}">client.payments.<a href="./src/resources/payments.ts">retrieve</a>(id) -> PaymentRetrieveResponse</code>
- <code title="get /api/v1/payments">client.payments.<a href="./src/resources/payments.ts">list</a>({ ...params }) -> PaymentListResponse</code>

# Subscriptions

Types:

- <code><a href="./src/resources/subscriptions.ts">SubscriptionRetrieveResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionAdjustResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionCancelResponse</a></code>

Methods:

- <code title="get /api/v1/subscription/{id}">client.subscriptions.<a href="./src/resources/subscriptions.ts">retrieve</a>(id) -> SubscriptionRetrieveResponse</code>
- <code title="get /api/v1/subscriptions">client.subscriptions.<a href="./src/resources/subscriptions.ts">list</a>({ ...params }) -> SubscriptionListResponse</code>
- <code title="post /api/v1/subscriptions/{id}/adjust">client.subscriptions.<a href="./src/resources/subscriptions.ts">adjust</a>(id, { ...params }) -> SubscriptionAdjustResponse</code>
- <code title="post /api/v1/subscriptions/{id}/cancel">client.subscriptions.<a href="./src/resources/subscriptions.ts">cancel</a>(id, { ...params }) -> SubscriptionCancelResponse</code>
