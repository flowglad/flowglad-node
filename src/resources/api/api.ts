// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CustomerProfileAPI from './customer-profile';
import {
  CustomerProfile,
  CustomerProfileCreateParams,
  CustomerProfileCreateResponse,
  CustomerProfileGetBillingResponse,
  CustomerProfileGetResponse,
  CustomerProfileListParams,
  CustomerProfileListResponse,
  CustomerProfileUpdateParams,
  CustomerProfileUpdateResponse,
} from './customer-profile';
import * as DiscountsAPI from './discounts';
import {
  DiscountCreateParams,
  DiscountCreateResponse,
  DiscountGetResponse,
  DiscountUpdateParams,
  DiscountUpdateResponse,
  Discounts,
} from './discounts';
import * as InvoiceAPI from './invoice';
import { Invoice, InvoiceGetResponse, InvoiceListParams, InvoiceListResponse } from './invoice';
import * as InvoiceLineItemAPI from './invoice-line-item';
import {
  InvoiceLineItem,
  InvoiceLineItemGetResponse,
  InvoiceLineItemListParams,
  InvoiceLineItemListResponse,
} from './invoice-line-item';
import * as PaymentsAPI from './payments';
import { PaymentGetResponse, PaymentListParams, PaymentListResponse, Payments } from './payments';
import * as ProductAPI from './product';
import {
  Product,
  ProductCreateParams,
  ProductCreateResponse,
  ProductGetResponse,
  ProductListParams,
  ProductListResponse,
  ProductUpdateParams,
  ProductUpdateResponse,
} from './product';
import * as PurchaseSessionAPI from './purchase-session';
import {
  PurchaseSession,
  PurchaseSessionCreateParams,
  PurchaseSessionCreateResponse,
  PurchaseSessionGetResponse,
  PurchaseSessionListParams,
  PurchaseSessionListResponse,
} from './purchase-session';
import * as SubscriptionsAPI from './subscriptions';
import {
  SubscriptionAdjustParams,
  SubscriptionAdjustResponse,
  SubscriptionCancelParams,
  SubscriptionCancelResponse,
  SubscriptionGetResponse,
  SubscriptionListParams,
  SubscriptionListResponse,
  Subscriptions,
} from './subscriptions';
import * as VariantAPI from './variant';
import {
  Variant,
  VariantCreateParams,
  VariantCreateResponse,
  VariantListParams,
  VariantListResponse,
  VariantUpdateParams,
  VariantUpdateResponse,
} from './variant';

export class API extends APIResource {
  invoice: InvoiceAPI.Invoice = new InvoiceAPI.Invoice(this._client);
  invoiceLineItem: InvoiceLineItemAPI.InvoiceLineItem = new InvoiceLineItemAPI.InvoiceLineItem(this._client);
  purchaseSession: PurchaseSessionAPI.PurchaseSession = new PurchaseSessionAPI.PurchaseSession(this._client);
  product: ProductAPI.Product = new ProductAPI.Product(this._client);
  variant: VariantAPI.Variant = new VariantAPI.Variant(this._client);
  discounts: DiscountsAPI.Discounts = new DiscountsAPI.Discounts(this._client);
  customerProfile: CustomerProfileAPI.CustomerProfile = new CustomerProfileAPI.CustomerProfile(this._client);
  payments: PaymentsAPI.Payments = new PaymentsAPI.Payments(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

API.Invoice = Invoice;
API.InvoiceLineItem = InvoiceLineItem;
API.PurchaseSession = PurchaseSession;
API.Product = Product;
API.Variant = Variant;
API.Discounts = Discounts;
API.CustomerProfile = CustomerProfile;
API.Payments = Payments;
API.Subscriptions = Subscriptions;

export declare namespace API {
  export {
    Invoice as Invoice,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceGetResponse as InvoiceGetResponse,
    type InvoiceListParams as InvoiceListParams,
  };

  export {
    InvoiceLineItem as InvoiceLineItem,
    type InvoiceLineItemListResponse as InvoiceLineItemListResponse,
    type InvoiceLineItemGetResponse as InvoiceLineItemGetResponse,
    type InvoiceLineItemListParams as InvoiceLineItemListParams,
  };

  export {
    PurchaseSession as PurchaseSession,
    type PurchaseSessionCreateResponse as PurchaseSessionCreateResponse,
    type PurchaseSessionListResponse as PurchaseSessionListResponse,
    type PurchaseSessionGetResponse as PurchaseSessionGetResponse,
    type PurchaseSessionCreateParams as PurchaseSessionCreateParams,
    type PurchaseSessionListParams as PurchaseSessionListParams,
  };

  export {
    Product as Product,
    type ProductCreateResponse as ProductCreateResponse,
    type ProductUpdateResponse as ProductUpdateResponse,
    type ProductListResponse as ProductListResponse,
    type ProductGetResponse as ProductGetResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };

  export {
    Variant as Variant,
    type VariantCreateResponse as VariantCreateResponse,
    type VariantUpdateResponse as VariantUpdateResponse,
    type VariantListResponse as VariantListResponse,
    type VariantCreateParams as VariantCreateParams,
    type VariantUpdateParams as VariantUpdateParams,
    type VariantListParams as VariantListParams,
  };

  export {
    Discounts as Discounts,
    type DiscountCreateResponse as DiscountCreateResponse,
    type DiscountUpdateResponse as DiscountUpdateResponse,
    type DiscountGetResponse as DiscountGetResponse,
    type DiscountCreateParams as DiscountCreateParams,
    type DiscountUpdateParams as DiscountUpdateParams,
  };

  export {
    CustomerProfile as CustomerProfile,
    type CustomerProfileCreateResponse as CustomerProfileCreateResponse,
    type CustomerProfileUpdateResponse as CustomerProfileUpdateResponse,
    type CustomerProfileListResponse as CustomerProfileListResponse,
    type CustomerProfileGetResponse as CustomerProfileGetResponse,
    type CustomerProfileGetBillingResponse as CustomerProfileGetBillingResponse,
    type CustomerProfileCreateParams as CustomerProfileCreateParams,
    type CustomerProfileUpdateParams as CustomerProfileUpdateParams,
    type CustomerProfileListParams as CustomerProfileListParams,
  };

  export {
    Payments as Payments,
    type PaymentListResponse as PaymentListResponse,
    type PaymentGetResponse as PaymentGetResponse,
    type PaymentListParams as PaymentListParams,
  };

  export {
    Subscriptions as Subscriptions,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionAdjustResponse as SubscriptionAdjustResponse,
    type SubscriptionCancelResponse as SubscriptionCancelResponse,
    type SubscriptionGetResponse as SubscriptionGetResponse,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionAdjustParams as SubscriptionAdjustParams,
    type SubscriptionCancelParams as SubscriptionCancelParams,
  };
}
