# PurchaseSessions

Types:

- <code><a href="./src/resources/purchase-sessions.ts">PurchaseSessionCreateResponse</a></code>

Methods:

- <code title="post /api/v1/purchase-sessions">client.purchaseSessions.<a href="./src/resources/purchase-sessions.ts">create</a>({ ...params }) -> PurchaseSessionCreateResponse</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">ProductCreateResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductUpdateResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductListResponse</a></code>

Methods:

- <code title="post /api/v1/products">client.products.<a href="./src/resources/products.ts">create</a>({ ...params }) -> ProductCreateResponse</code>
- <code title="put /api/v1/products/{id}">client.products.<a href="./src/resources/products.ts">update</a>(id, { ...params }) -> ProductUpdateResponse</code>
- <code title="get /api/v1/products">client.products.<a href="./src/resources/products.ts">list</a>({ ...params }) -> ProductListResponse</code>

# Variants

Types:

- <code><a href="./src/resources/variants.ts">VariantCreateResponse</a></code>
- <code><a href="./src/resources/variants.ts">VariantUpdateResponse</a></code>
- <code><a href="./src/resources/variants.ts">VariantListResponse</a></code>

Methods:

- <code title="post /api/v1/variants">client.variants.<a href="./src/resources/variants.ts">create</a>({ ...params }) -> VariantCreateResponse</code>
- <code title="put /api/v1/variants/{id}">client.variants.<a href="./src/resources/variants.ts">update</a>(id, { ...params }) -> VariantUpdateResponse</code>
- <code title="get /api/v1/variants">client.variants.<a href="./src/resources/variants.ts">list</a>({ ...params }) -> VariantListResponse</code>

# CustomerProfiles

Types:

- <code><a href="./src/resources/customer-profiles/customer-profiles.ts">CustomerProfileCreateResponse</a></code>
- <code><a href="./src/resources/customer-profiles/customer-profiles.ts">CustomerProfileRetrieveResponse</a></code>
- <code><a href="./src/resources/customer-profiles/customer-profiles.ts">CustomerProfileUpdateResponse</a></code>

Methods:

- <code title="post /api/v1/customer-profiles">client.customerProfiles.<a href="./src/resources/customer-profiles/customer-profiles.ts">create</a>({ ...params }) -> CustomerProfileCreateResponse</code>
- <code title="get /api/v1/customer-profiles/{externalId}">client.customerProfiles.<a href="./src/resources/customer-profiles/customer-profiles.ts">retrieve</a>(externalId) -> CustomerProfileRetrieveResponse</code>
- <code title="put /api/v1/customer-profiles/{externalId}">client.customerProfiles.<a href="./src/resources/customer-profiles/customer-profiles.ts">update</a>(externalId, { ...params }) -> CustomerProfileUpdateResponse</code>

## Billing

Types:

- <code><a href="./src/resources/customer-profiles/billing.ts">BillingRetrieveResponse</a></code>

Methods:

- <code title="get /api/v1/customer-profiles/{externalId}/billing">client.customerProfiles.billing.<a href="./src/resources/customer-profiles/billing.ts">retrieve</a>(externalId) -> BillingRetrieveResponse</code>
