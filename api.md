# API

## V1

Types:

- <code><a href="./src/resources/api/v1/v1.ts">V1CreateDiscountResponse</a></code>
- <code><a href="./src/resources/api/v1/v1.ts">V1GetInvoiceResponse</a></code>
- <code><a href="./src/resources/api/v1/v1.ts">V1GetInvoiceLineItemResponse</a></code>
- <code><a href="./src/resources/api/v1/v1.ts">V1GetPaymentResponse</a></code>
- <code><a href="./src/resources/api/v1/v1.ts">V1ListCustomerProfilesResponse</a></code>
- <code><a href="./src/resources/api/v1/v1.ts">V1ListDiscountsResponse</a></code>
- <code><a href="./src/resources/api/v1/v1.ts">V1ListInvoiceLineItemsResponse</a></code>
- <code><a href="./src/resources/api/v1/v1.ts">V1ListInvoicesResponse</a></code>
- <code><a href="./src/resources/api/v1/v1.ts">V1ListPaymentsResponse</a></code>
- <code><a href="./src/resources/api/v1/v1.ts">V1ListProductsResponse</a></code>
- <code><a href="./src/resources/api/v1/v1.ts">V1ListVariantsResponse</a></code>

Methods:

- <code title="post /api/v1/discount">client.api.v1.<a href="./src/resources/api/v1/v1.ts">createDiscount</a>({ ...params }) -> V1CreateDiscountResponse</code>
- <code title="get /api/v1/invoice/{id}">client.api.v1.<a href="./src/resources/api/v1/v1.ts">getInvoice</a>(id) -> V1GetInvoiceResponse</code>
- <code title="get /api/v1/invoice-line-item/{id}">client.api.v1.<a href="./src/resources/api/v1/v1.ts">getInvoiceLineItem</a>(id) -> V1GetInvoiceLineItemResponse</code>
- <code title="get /api/v1/payment/{id}">client.api.v1.<a href="./src/resources/api/v1/v1.ts">getPayment</a>(id) -> V1GetPaymentResponse</code>
- <code title="get /api/v1/customer-profiles">client.api.v1.<a href="./src/resources/api/v1/v1.ts">listCustomerProfiles</a>({ ...params }) -> V1ListCustomerProfilesResponse</code>
- <code title="get /api/v1/discounts">client.api.v1.<a href="./src/resources/api/v1/v1.ts">listDiscounts</a>({ ...params }) -> V1ListDiscountsResponse</code>
- <code title="get /api/v1/invoice-line-items">client.api.v1.<a href="./src/resources/api/v1/v1.ts">listInvoiceLineItems</a>({ ...params }) -> V1ListInvoiceLineItemsResponse</code>
- <code title="get /api/v1/invoices">client.api.v1.<a href="./src/resources/api/v1/v1.ts">listInvoices</a>({ ...params }) -> V1ListInvoicesResponse</code>
- <code title="get /api/v1/payments">client.api.v1.<a href="./src/resources/api/v1/v1.ts">listPayments</a>({ ...params }) -> V1ListPaymentsResponse</code>
- <code title="get /api/v1/products">client.api.v1.<a href="./src/resources/api/v1/v1.ts">listProducts</a>({ ...params }) -> V1ListProductsResponse</code>
- <code title="get /api/v1/variants">client.api.v1.<a href="./src/resources/api/v1/v1.ts">listVariants</a>({ ...params }) -> V1ListVariantsResponse</code>

### PurchaseSession

Types:

- <code><a href="./src/resources/api/v1/purchase-session.ts">PurchaseSessionCreateResponse</a></code>
- <code><a href="./src/resources/api/v1/purchase-session.ts">PurchaseSessionListResponse</a></code>
- <code><a href="./src/resources/api/v1/purchase-session.ts">PurchaseSessionGetResponse</a></code>

Methods:

- <code title="post /api/v1/purchase-session">client.api.v1.purchaseSession.<a href="./src/resources/api/v1/purchase-session.ts">create</a>({ ...params }) -> PurchaseSessionCreateResponse</code>
- <code title="get /api/v1/purchase-sessions">client.api.v1.purchaseSession.<a href="./src/resources/api/v1/purchase-session.ts">list</a>({ ...params }) -> PurchaseSessionListResponse</code>
- <code title="get /api/v1/purchase-session/{id}">client.api.v1.purchaseSession.<a href="./src/resources/api/v1/purchase-session.ts">get</a>(id) -> PurchaseSessionGetResponse</code>

### Product

Types:

- <code><a href="./src/resources/api/v1/product.ts">ProductCreateResponse</a></code>
- <code><a href="./src/resources/api/v1/product.ts">ProductUpdateResponse</a></code>
- <code><a href="./src/resources/api/v1/product.ts">ProductGetResponse</a></code>

Methods:

- <code title="post /api/v1/product">client.api.v1.product.<a href="./src/resources/api/v1/product.ts">create</a>({ ...params }) -> ProductCreateResponse</code>
- <code title="put /api/v1/product/{id}">client.api.v1.product.<a href="./src/resources/api/v1/product.ts">update</a>(id, { ...params }) -> ProductUpdateResponse</code>
- <code title="get /api/v1/product/{id}">client.api.v1.product.<a href="./src/resources/api/v1/product.ts">get</a>(id) -> ProductGetResponse</code>

### Variant

Types:

- <code><a href="./src/resources/api/v1/variant.ts">VariantCreateResponse</a></code>
- <code><a href="./src/resources/api/v1/variant.ts">VariantUpdateResponse</a></code>

Methods:

- <code title="post /api/v1/variant">client.api.v1.variant.<a href="./src/resources/api/v1/variant.ts">create</a>({ ...params }) -> VariantCreateResponse</code>
- <code title="put /api/v1/variant/{id}">client.api.v1.variant.<a href="./src/resources/api/v1/variant.ts">update</a>(id, { ...params }) -> VariantUpdateResponse</code>

### Discounts

Types:

- <code><a href="./src/resources/api/v1/discounts.ts">DiscountCreateResponse</a></code>
- <code><a href="./src/resources/api/v1/discounts.ts">DiscountUpdateResponse</a></code>

Methods:

- <code title="post /api/v1/discount">client.api.v1.discounts.<a href="./src/resources/api/v1/discounts.ts">create</a>({ ...params }) -> DiscountCreateResponse</code>
- <code title="put /api/v1/discount/{id}">client.api.v1.discounts.<a href="./src/resources/api/v1/discounts.ts">update</a>(id, { ...params }) -> DiscountUpdateResponse</code>

### CustomerProfile

Types:

- <code><a href="./src/resources/api/v1/customer-profile.ts">CustomerProfileCreateResponse</a></code>
- <code><a href="./src/resources/api/v1/customer-profile.ts">CustomerProfileUpdateResponse</a></code>
- <code><a href="./src/resources/api/v1/customer-profile.ts">CustomerProfileGetResponse</a></code>
- <code><a href="./src/resources/api/v1/customer-profile.ts">CustomerProfileGetBillingResponse</a></code>

Methods:

- <code title="post /api/v1/customer-profile">client.api.v1.customerProfile.<a href="./src/resources/api/v1/customer-profile.ts">create</a>({ ...params }) -> CustomerProfileCreateResponse</code>
- <code title="put /api/v1/customer-profile/{externalId}">client.api.v1.customerProfile.<a href="./src/resources/api/v1/customer-profile.ts">update</a>(externalId, { ...params }) -> CustomerProfileUpdateResponse</code>
- <code title="get /api/v1/customer-profile/{externalId}">client.api.v1.customerProfile.<a href="./src/resources/api/v1/customer-profile.ts">get</a>(externalId) -> CustomerProfileGetResponse</code>
- <code title="get /api/v1/customer-profile/{externalId}/billing">client.api.v1.customerProfile.<a href="./src/resources/api/v1/customer-profile.ts">getBilling</a>(externalId) -> CustomerProfileGetBillingResponse</code>

### Subscriptions

Types:

- <code><a href="./src/resources/api/v1/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/api/v1/subscriptions.ts">SubscriptionAdjustResponse</a></code>
- <code><a href="./src/resources/api/v1/subscriptions.ts">SubscriptionCancelResponse</a></code>
- <code><a href="./src/resources/api/v1/subscriptions.ts">SubscriptionGetResponse</a></code>

Methods:

- <code title="get /api/v1/subscriptions">client.api.v1.subscriptions.<a href="./src/resources/api/v1/subscriptions.ts">list</a>({ ...params }) -> SubscriptionListResponse</code>
- <code title="post /api/v1/subscriptions/{id}/adjust">client.api.v1.subscriptions.<a href="./src/resources/api/v1/subscriptions.ts">adjust</a>(id, { ...params }) -> SubscriptionAdjustResponse</code>
- <code title="post /api/v1/subscriptions/{id}/cancel">client.api.v1.subscriptions.<a href="./src/resources/api/v1/subscriptions.ts">cancel</a>(id, { ...params }) -> SubscriptionCancelResponse</code>
- <code title="get /api/v1/subscription/{id}">client.api.v1.subscriptions.<a href="./src/resources/api/v1/subscriptions.ts">get</a>(id) -> SubscriptionGetResponse</code>
