# API

## Invoice

Types:

- <code><a href="./src/resources/api/invoice.ts">InvoiceListResponse</a></code>
- <code><a href="./src/resources/api/invoice.ts">InvoiceGetResponse</a></code>

Methods:

- <code title="get /api/v1/invoices">client.api.invoice.<a href="./src/resources/api/invoice.ts">list</a>({ ...params }) -> InvoiceListResponse</code>
- <code title="get /api/v1/invoice/{id}">client.api.invoice.<a href="./src/resources/api/invoice.ts">get</a>(id) -> InvoiceGetResponse</code>

## InvoiceLineItem

Types:

- <code><a href="./src/resources/api/invoice-line-item.ts">InvoiceLineItemListResponse</a></code>
- <code><a href="./src/resources/api/invoice-line-item.ts">InvoiceLineItemGetResponse</a></code>

Methods:

- <code title="get /api/v1/invoice-line-items">client.api.invoiceLineItem.<a href="./src/resources/api/invoice-line-item.ts">list</a>({ ...params }) -> InvoiceLineItemListResponse</code>
- <code title="get /api/v1/invoice-line-item/{id}">client.api.invoiceLineItem.<a href="./src/resources/api/invoice-line-item.ts">get</a>(id) -> InvoiceLineItemGetResponse</code>

## PurchaseSession

Types:

- <code><a href="./src/resources/api/purchase-session.ts">PurchaseSessionCreateResponse</a></code>
- <code><a href="./src/resources/api/purchase-session.ts">PurchaseSessionListResponse</a></code>
- <code><a href="./src/resources/api/purchase-session.ts">PurchaseSessionGetResponse</a></code>

Methods:

- <code title="post /api/v1/purchase-session">client.api.purchaseSession.<a href="./src/resources/api/purchase-session.ts">create</a>({ ...params }) -> PurchaseSessionCreateResponse</code>
- <code title="get /api/v1/purchase-sessions">client.api.purchaseSession.<a href="./src/resources/api/purchase-session.ts">list</a>({ ...params }) -> PurchaseSessionListResponse</code>
- <code title="get /api/v1/purchase-session/{id}">client.api.purchaseSession.<a href="./src/resources/api/purchase-session.ts">get</a>(id) -> PurchaseSessionGetResponse</code>

## Product

Types:

- <code><a href="./src/resources/api/product.ts">ProductCreateResponse</a></code>
- <code><a href="./src/resources/api/product.ts">ProductUpdateResponse</a></code>
- <code><a href="./src/resources/api/product.ts">ProductListResponse</a></code>
- <code><a href="./src/resources/api/product.ts">ProductGetResponse</a></code>

Methods:

- <code title="post /api/v1/product">client.api.product.<a href="./src/resources/api/product.ts">create</a>({ ...params }) -> ProductCreateResponse</code>
- <code title="put /api/v1/product/{id}">client.api.product.<a href="./src/resources/api/product.ts">update</a>(id, { ...params }) -> ProductUpdateResponse</code>
- <code title="get /api/v1/products">client.api.product.<a href="./src/resources/api/product.ts">list</a>({ ...params }) -> ProductListResponse</code>
- <code title="get /api/v1/product/{id}">client.api.product.<a href="./src/resources/api/product.ts">get</a>(id) -> ProductGetResponse</code>

## Variant

Types:

- <code><a href="./src/resources/api/variant.ts">VariantCreateResponse</a></code>
- <code><a href="./src/resources/api/variant.ts">VariantUpdateResponse</a></code>
- <code><a href="./src/resources/api/variant.ts">VariantListResponse</a></code>

Methods:

- <code title="post /api/v1/variant">client.api.variant.<a href="./src/resources/api/variant.ts">create</a>({ ...params }) -> VariantCreateResponse</code>
- <code title="put /api/v1/variant/{id}">client.api.variant.<a href="./src/resources/api/variant.ts">update</a>(id, { ...params }) -> VariantUpdateResponse</code>
- <code title="get /api/v1/variants">client.api.variant.<a href="./src/resources/api/variant.ts">list</a>({ ...params }) -> VariantListResponse</code>

## Discounts

Types:

- <code><a href="./src/resources/api/discounts.ts">DiscountCreateResponse</a></code>
- <code><a href="./src/resources/api/discounts.ts">DiscountUpdateResponse</a></code>
- <code><a href="./src/resources/api/discounts.ts">DiscountGetResponse</a></code>

Methods:

- <code title="post /api/v1/discount">client.api.discounts.<a href="./src/resources/api/discounts.ts">create</a>({ ...params }) -> DiscountCreateResponse</code>
- <code title="put /api/v1/discount/{id}">client.api.discounts.<a href="./src/resources/api/discounts.ts">update</a>(id, { ...params }) -> DiscountUpdateResponse</code>
- <code title="get /api/v1/discount/{id}">client.api.discounts.<a href="./src/resources/api/discounts.ts">get</a>(id) -> DiscountGetResponse</code>

## CustomerProfile

Types:

- <code><a href="./src/resources/api/customer-profile.ts">CustomerProfileCreateResponse</a></code>
- <code><a href="./src/resources/api/customer-profile.ts">CustomerProfileUpdateResponse</a></code>
- <code><a href="./src/resources/api/customer-profile.ts">CustomerProfileListResponse</a></code>
- <code><a href="./src/resources/api/customer-profile.ts">CustomerProfileGetResponse</a></code>
- <code><a href="./src/resources/api/customer-profile.ts">CustomerProfileGetBillingResponse</a></code>

Methods:

- <code title="post /api/v1/customer-profile">client.api.customerProfile.<a href="./src/resources/api/customer-profile.ts">create</a>({ ...params }) -> CustomerProfileCreateResponse</code>
- <code title="put /api/v1/customer-profile/{externalId}">client.api.customerProfile.<a href="./src/resources/api/customer-profile.ts">update</a>(externalId, { ...params }) -> CustomerProfileUpdateResponse</code>
- <code title="get /api/v1/customer-profiles">client.api.customerProfile.<a href="./src/resources/api/customer-profile.ts">list</a>({ ...params }) -> CustomerProfileListResponse</code>
- <code title="get /api/v1/customer-profile/{externalId}">client.api.customerProfile.<a href="./src/resources/api/customer-profile.ts">get</a>(externalId) -> CustomerProfileGetResponse</code>
- <code title="get /api/v1/customer-profile/{externalId}/billing">client.api.customerProfile.<a href="./src/resources/api/customer-profile.ts">getBilling</a>(externalId) -> CustomerProfileGetBillingResponse</code>

## Payments

Types:

- <code><a href="./src/resources/api/payments.ts">PaymentListResponse</a></code>
- <code><a href="./src/resources/api/payments.ts">PaymentGetResponse</a></code>

Methods:

- <code title="get /api/v1/payments">client.api.payments.<a href="./src/resources/api/payments.ts">list</a>({ ...params }) -> PaymentListResponse</code>
- <code title="get /api/v1/payment/{id}">client.api.payments.<a href="./src/resources/api/payments.ts">get</a>(id) -> PaymentGetResponse</code>

## Subscriptions

Types:

- <code><a href="./src/resources/api/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/api/subscriptions.ts">SubscriptionAdjustResponse</a></code>
- <code><a href="./src/resources/api/subscriptions.ts">SubscriptionCancelResponse</a></code>
- <code><a href="./src/resources/api/subscriptions.ts">SubscriptionGetResponse</a></code>

Methods:

- <code title="get /api/v1/subscriptions">client.api.subscriptions.<a href="./src/resources/api/subscriptions.ts">list</a>({ ...params }) -> SubscriptionListResponse</code>
- <code title="post /api/v1/subscriptions/{id}/adjust">client.api.subscriptions.<a href="./src/resources/api/subscriptions.ts">adjust</a>(id, { ...params }) -> SubscriptionAdjustResponse</code>
- <code title="post /api/v1/subscriptions/{id}/cancel">client.api.subscriptions.<a href="./src/resources/api/subscriptions.ts">cancel</a>(id, { ...params }) -> SubscriptionCancelResponse</code>
- <code title="get /api/v1/subscription/{id}">client.api.subscriptions.<a href="./src/resources/api/subscriptions.ts">get</a>(id) -> SubscriptionGetResponse</code>
