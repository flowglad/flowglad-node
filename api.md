# Shared

Types:

- <code><a href="./src/resources/shared.ts">BillingAddress</a></code>
- <code><a href="./src/resources/shared.ts">NonRenewingSubscriptionRecord</a></code>
- <code><a href="./src/resources/shared.ts">PaymentMethodClientSelectSchema</a></code>
- <code><a href="./src/resources/shared.ts">PricingModelDetailsRecord</a></code>
- <code><a href="./src/resources/shared.ts">PurchaseInvoiceClientSelectSchema</a></code>
- <code><a href="./src/resources/shared.ts">StandaloneInvoiceClientSelectSchema</a></code>
- <code><a href="./src/resources/shared.ts">StandardSubscriptionRecord</a></code>
- <code><a href="./src/resources/shared.ts">StaticInvoiceLineItemClientSelectSchema</a></code>
- <code><a href="./src/resources/shared.ts">SubscriptionInvoiceClientSelectSchema</a></code>
- <code><a href="./src/resources/shared.ts">ToggleFeatureClientSelectSchema</a></code>
- <code><a href="./src/resources/shared.ts">UsageCreditGrantFeatureClientSelectSchema</a></code>
- <code><a href="./src/resources/shared.ts">UsageInvoiceLineItemClientSelectSchema</a></code>
- <code><a href="./src/resources/shared.ts">UsageMeterClientSelectSchema</a></code>

# Invoices

Types:

- <code><a href="./src/resources/invoices.ts">InvoiceRetrieveResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceListResponse</a></code>

Methods:

- <code title="get /api/v1/invoices/{id}">client.invoices.<a href="./src/resources/invoices.ts">retrieve</a>(id) -> InvoiceRetrieveResponse</code>
- <code title="get /api/v1/invoices">client.invoices.<a href="./src/resources/invoices.ts">list</a>({ ...params }) -> InvoiceListResponse</code>

# InvoiceLineItems

Types:

- <code><a href="./src/resources/invoice-line-items.ts">InvoiceLineItemRetrieveResponse</a></code>
- <code><a href="./src/resources/invoice-line-items.ts">InvoiceLineItemListResponse</a></code>

Methods:

- <code title="get /api/v1/invoice-line-items/{id}">client.invoiceLineItems.<a href="./src/resources/invoice-line-items.ts">retrieve</a>(id) -> InvoiceLineItemRetrieveResponse</code>
- <code title="get /api/v1/invoice-line-items">client.invoiceLineItems.<a href="./src/resources/invoice-line-items.ts">list</a>({ ...params }) -> InvoiceLineItemListResponse</code>

# PricingModels

Types:

- <code><a href="./src/resources/pricing-models.ts">PricingModelClientSelectSchema</a></code>
- <code><a href="./src/resources/pricing-models.ts">PricingModelCreateResponse</a></code>
- <code><a href="./src/resources/pricing-models.ts">PricingModelRetrieveResponse</a></code>
- <code><a href="./src/resources/pricing-models.ts">PricingModelUpdateResponse</a></code>
- <code><a href="./src/resources/pricing-models.ts">PricingModelListResponse</a></code>
- <code><a href="./src/resources/pricing-models.ts">PricingModelCloneResponse</a></code>
- <code><a href="./src/resources/pricing-models.ts">PricingModelRetrieveDefaultResponse</a></code>

Methods:

- <code title="post /api/v1/pricing-models">client.pricingModels.<a href="./src/resources/pricing-models.ts">create</a>({ ...params }) -> PricingModelCreateResponse</code>
- <code title="get /api/v1/pricing-models/{id}">client.pricingModels.<a href="./src/resources/pricing-models.ts">retrieve</a>(id) -> PricingModelRetrieveResponse</code>
- <code title="put /api/v1/pricing-models/{id}">client.pricingModels.<a href="./src/resources/pricing-models.ts">update</a>(id, { ...params }) -> PricingModelUpdateResponse</code>
- <code title="get /api/v1/pricing-models">client.pricingModels.<a href="./src/resources/pricing-models.ts">list</a>({ ...params }) -> PricingModelListResponse</code>
- <code title="post /api/v1/pricing-models/{id}/clone">client.pricingModels.<a href="./src/resources/pricing-models.ts">clone</a>(id, { ...params }) -> PricingModelCloneResponse</code>
- <code title="get /api/v1/pricing-models/default">client.pricingModels.<a href="./src/resources/pricing-models.ts">retrieveDefault</a>() -> PricingModelRetrieveDefaultResponse</code>

# CheckoutSessions

Types:

- <code><a href="./src/resources/checkout-sessions.ts">ActivateSubscriptionCheckoutSessionClientSelectSchema</a></code>
- <code><a href="./src/resources/checkout-sessions.ts">AddPaymentMethodCheckoutSessionClientSelectSchema</a></code>
- <code><a href="./src/resources/checkout-sessions.ts">ProductCheckoutSessionClientSelectSchema</a></code>
- <code><a href="./src/resources/checkout-sessions.ts">PurchaseCheckoutSessionClientSelectSchema</a></code>
- <code><a href="./src/resources/checkout-sessions.ts">CheckoutSessionCreateResponse</a></code>
- <code><a href="./src/resources/checkout-sessions.ts">CheckoutSessionRetrieveResponse</a></code>
- <code><a href="./src/resources/checkout-sessions.ts">CheckoutSessionListResponse</a></code>

Methods:

- <code title="post /api/v1/checkout-sessions">client.checkoutSessions.<a href="./src/resources/checkout-sessions.ts">create</a>({ ...params }) -> CheckoutSessionCreateResponse</code>
- <code title="get /api/v1/checkout-sessions/{id}">client.checkoutSessions.<a href="./src/resources/checkout-sessions.ts">retrieve</a>(id) -> CheckoutSessionRetrieveResponse</code>
- <code title="get /api/v1/checkout-sessions">client.checkoutSessions.<a href="./src/resources/checkout-sessions.ts">list</a>({ ...params }) -> CheckoutSessionListResponse</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">ProductClientSelectSchema</a></code>
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

- <code><a href="./src/resources/prices.ts">SinglePaymentPriceClientSelectSchema</a></code>
- <code><a href="./src/resources/prices.ts">SubscriptionPriceClientSelectSchema</a></code>
- <code><a href="./src/resources/prices.ts">UsagePriceClientSelectSchema</a></code>
- <code><a href="./src/resources/prices.ts">PriceCreateResponse</a></code>
- <code><a href="./src/resources/prices.ts">PriceUpdateResponse</a></code>
- <code><a href="./src/resources/prices.ts">PriceListResponse</a></code>

Methods:

- <code title="post /api/v1/prices">client.prices.<a href="./src/resources/prices.ts">create</a>({ ...params }) -> PriceCreateResponse</code>
- <code title="put /api/v1/prices/{id}">client.prices.<a href="./src/resources/prices.ts">update</a>(id, { ...params }) -> PriceUpdateResponse</code>
- <code title="get /api/v1/prices">client.prices.<a href="./src/resources/prices.ts">list</a>({ ...params }) -> PriceListResponse</code>

# Discounts

Types:

- <code><a href="./src/resources/discounts.ts">DefaultDiscountClientSelectSchema</a></code>
- <code><a href="./src/resources/discounts.ts">ForeverDiscountClientSelectSchema</a></code>
- <code><a href="./src/resources/discounts.ts">NumberOfPaymentsDiscountClientSelectSchema</a></code>
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

- <code><a href="./src/resources/customers.ts">CustomerClientSelectSchema</a></code>
- <code><a href="./src/resources/customers.ts">NonRenewingSubscriptionDetails</a></code>
- <code><a href="./src/resources/customers.ts">StandardSubscriptionDetails</a></code>
- <code><a href="./src/resources/customers.ts">ToggleSubscriptionItemFeatureRecord</a></code>
- <code><a href="./src/resources/customers.ts">UsageCreditGrantSubscriptionItemFeatureRecord</a></code>
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

- <code><a href="./src/resources/payments.ts">PaymentClientSelectSchema</a></code>
- <code><a href="./src/resources/payments.ts">PaymentRetrieveResponse</a></code>
- <code><a href="./src/resources/payments.ts">PaymentListResponse</a></code>
- <code><a href="./src/resources/payments.ts">PaymentRefundResponse</a></code>

Methods:

- <code title="get /api/v1/payments/{id}">client.payments.<a href="./src/resources/payments.ts">retrieve</a>(id) -> PaymentRetrieveResponse</code>
- <code title="get /api/v1/payments">client.payments.<a href="./src/resources/payments.ts">list</a>({ ...params }) -> PaymentListResponse</code>
- <code title="post /api/v1/payments/{id}/refund">client.payments.<a href="./src/resources/payments.ts">refund</a>(id, { ...params }) -> PaymentRefundResponse</code>

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
- <code><a href="./src/resources/subscriptions.ts">SubscriptionUncancelResponse</a></code>

Methods:

- <code title="post /api/v1/subscriptions">client.subscriptions.<a href="./src/resources/subscriptions.ts">create</a>({ ...params }) -> SubscriptionCreateResponse</code>
- <code title="get /api/v1/subscriptions/{id}">client.subscriptions.<a href="./src/resources/subscriptions.ts">retrieve</a>(id) -> SubscriptionRetrieveResponse</code>
- <code title="get /api/v1/subscriptions">client.subscriptions.<a href="./src/resources/subscriptions.ts">list</a>({ ...params }) -> SubscriptionListResponse</code>
- <code title="post /api/v1/subscriptions/{id}/adjust">client.subscriptions.<a href="./src/resources/subscriptions.ts">adjust</a>(id, { ...params }) -> SubscriptionAdjustResponse</code>
- <code title="post /api/v1/subscriptions/{id}/cancel">client.subscriptions.<a href="./src/resources/subscriptions.ts">cancel</a>(id, { ...params }) -> SubscriptionCancelResponse</code>
- <code title="post /api/v1/subscriptions/{id}/uncancel">client.subscriptions.<a href="./src/resources/subscriptions.ts">uncancel</a>(id) -> SubscriptionUncancelResponse</code>

# UsageEvents

Types:

- <code><a href="./src/resources/usage-events.ts">UsageEventCreateResponse</a></code>
- <code><a href="./src/resources/usage-events.ts">UsageEventRetrieveResponse</a></code>

Methods:

- <code title="post /api/v1/usage-events">client.usageEvents.<a href="./src/resources/usage-events.ts">create</a>({ ...params }) -> UsageEventCreateResponse</code>
- <code title="get /api/v1/usage-events/{id}">client.usageEvents.<a href="./src/resources/usage-events.ts">retrieve</a>(id) -> UsageEventRetrieveResponse</code>

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

# Resources

Types:

- <code><a href="./src/resources/resources.ts">ResourceCreateResponse</a></code>
- <code><a href="./src/resources/resources.ts">ResourceRetrieveResponse</a></code>
- <code><a href="./src/resources/resources.ts">ResourceUpdateResponse</a></code>
- <code><a href="./src/resources/resources.ts">ResourceListResponse</a></code>

Methods:

- <code title="post /api/v1/resources">client.resources.<a href="./src/resources/resources.ts">create</a>({ ...params }) -> ResourceCreateResponse</code>
- <code title="get /api/v1/resources/{id}">client.resources.<a href="./src/resources/resources.ts">retrieve</a>(id) -> ResourceRetrieveResponse</code>
- <code title="put /api/v1/resources/{id}">client.resources.<a href="./src/resources/resources.ts">update</a>(id, { ...params }) -> ResourceUpdateResponse</code>
- <code title="get /api/v1/resources">client.resources.<a href="./src/resources/resources.ts">list</a>({ ...params }) -> ResourceListResponse</code>

# ResourceClaims

Types:

- <code><a href="./src/resources/resource-claims.ts">ResourceClaimClaimResponse</a></code>
- <code><a href="./src/resources/resource-claims.ts">ResourceClaimReleaseResponse</a></code>
- <code><a href="./src/resources/resource-claims.ts">ResourceClaimUsageResponse</a></code>

Methods:

- <code title="post /api/v1/resource-claims/{subscriptionId}/claim">client.resourceClaims.<a href="./src/resources/resource-claims.ts">claim</a>(subscriptionID, { ...params }) -> ResourceClaimClaimResponse</code>
- <code title="post /api/v1/resource-claims/{subscriptionId}/release">client.resourceClaims.<a href="./src/resources/resource-claims.ts">release</a>(subscriptionID, { ...params }) -> ResourceClaimReleaseResponse</code>
- <code title="get /api/v1/resource-claims/{subscriptionId}/usage">client.resourceClaims.<a href="./src/resources/resource-claims.ts">usage</a>(subscriptionID, { ...params }) -> ResourceClaimUsageResponse</code>
