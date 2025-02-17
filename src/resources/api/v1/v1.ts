// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as CustomerProfileAPI from './customer-profile';
import {
  CustomerProfile,
  CustomerProfileCreateParams,
  CustomerProfileCreateResponse,
  CustomerProfileGetBillingResponse,
  CustomerProfileGetResponse,
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
import * as ProductAPI from './product';
import {
  Product,
  ProductCreateParams,
  ProductCreateResponse,
  ProductGetResponse,
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
  VariantUpdateParams,
  VariantUpdateResponse,
} from './variant';

export class V1 extends APIResource {
  purchaseSession: PurchaseSessionAPI.PurchaseSession = new PurchaseSessionAPI.PurchaseSession(this._client);
  product: ProductAPI.Product = new ProductAPI.Product(this._client);
  variant: VariantAPI.Variant = new VariantAPI.Variant(this._client);
  discounts: DiscountsAPI.Discounts = new DiscountsAPI.Discounts(this._client);
  customerProfile: CustomerProfileAPI.CustomerProfile = new CustomerProfileAPI.CustomerProfile(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);

  /**
   * Create Discount
   */
  createDiscount(
    body: V1CreateDiscountParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1CreateDiscountResponse> {
    return this._client.post('/api/v1/discount', { body, ...options });
  }

  /**
   * Get Invoice
   */
  getInvoice(id: string, options?: Core.RequestOptions): Core.APIPromise<V1GetInvoiceResponse> {
    return this._client.get(`/api/v1/invoice/${id}`, options);
  }

  /**
   * Get Invoice Line Item
   */
  getInvoiceLineItem(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1GetInvoiceLineItemResponse> {
    return this._client.get(`/api/v1/invoice-line-item/${id}`, options);
  }

  /**
   * Get Payment
   */
  getPayment(id: string, options?: Core.RequestOptions): Core.APIPromise<V1GetPaymentResponse> {
    return this._client.get(`/api/v1/payment/${id}`, options);
  }

  /**
   * List Customer Profiles
   */
  listCustomerProfiles(
    query?: V1ListCustomerProfilesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1ListCustomerProfilesResponse>;
  listCustomerProfiles(options?: Core.RequestOptions): Core.APIPromise<V1ListCustomerProfilesResponse>;
  listCustomerProfiles(
    query: V1ListCustomerProfilesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1ListCustomerProfilesResponse> {
    if (isRequestOptions(query)) {
      return this.listCustomerProfiles({}, query);
    }
    return this._client.get('/api/v1/customer-profiles', { query, ...options });
  }

  /**
   * List Discounts
   */
  listDiscounts(
    query?: V1ListDiscountsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1ListDiscountsResponse>;
  listDiscounts(options?: Core.RequestOptions): Core.APIPromise<V1ListDiscountsResponse>;
  listDiscounts(
    query: V1ListDiscountsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1ListDiscountsResponse> {
    if (isRequestOptions(query)) {
      return this.listDiscounts({}, query);
    }
    return this._client.get('/api/v1/discounts', { query, ...options });
  }

  /**
   * List Invoice Line Items
   */
  listInvoiceLineItems(
    query?: V1ListInvoiceLineItemsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1ListInvoiceLineItemsResponse>;
  listInvoiceLineItems(options?: Core.RequestOptions): Core.APIPromise<V1ListInvoiceLineItemsResponse>;
  listInvoiceLineItems(
    query: V1ListInvoiceLineItemsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1ListInvoiceLineItemsResponse> {
    if (isRequestOptions(query)) {
      return this.listInvoiceLineItems({}, query);
    }
    return this._client.get('/api/v1/invoice-line-items', { query, ...options });
  }

  /**
   * List Invoices
   */
  listInvoices(
    query?: V1ListInvoicesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1ListInvoicesResponse>;
  listInvoices(options?: Core.RequestOptions): Core.APIPromise<V1ListInvoicesResponse>;
  listInvoices(
    query: V1ListInvoicesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1ListInvoicesResponse> {
    if (isRequestOptions(query)) {
      return this.listInvoices({}, query);
    }
    return this._client.get('/api/v1/invoices', { query, ...options });
  }

  /**
   * List Payments
   */
  listPayments(
    query?: V1ListPaymentsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1ListPaymentsResponse>;
  listPayments(options?: Core.RequestOptions): Core.APIPromise<V1ListPaymentsResponse>;
  listPayments(
    query: V1ListPaymentsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1ListPaymentsResponse> {
    if (isRequestOptions(query)) {
      return this.listPayments({}, query);
    }
    return this._client.get('/api/v1/payments', { query, ...options });
  }

  /**
   * List Products
   */
  listProducts(
    query?: V1ListProductsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1ListProductsResponse>;
  listProducts(options?: Core.RequestOptions): Core.APIPromise<V1ListProductsResponse>;
  listProducts(
    query: V1ListProductsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1ListProductsResponse> {
    if (isRequestOptions(query)) {
      return this.listProducts({}, query);
    }
    return this._client.get('/api/v1/products', { query, ...options });
  }

  /**
   * List Variants
   */
  listVariants(
    query?: V1ListVariantsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1ListVariantsResponse>;
  listVariants(options?: Core.RequestOptions): Core.APIPromise<V1ListVariantsResponse>;
  listVariants(
    query: V1ListVariantsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1ListVariantsResponse> {
    if (isRequestOptions(query)) {
      return this.listVariants({}, query);
    }
    return this._client.get('/api/v1/variants', { query, ...options });
  }
}

export interface V1CreateDiscountResponse {
  discount:
    | V1CreateDiscountResponse.UnionMember0
    | V1CreateDiscountResponse.UnionMember1
    | V1CreateDiscountResponse.UnionMember2;
}

export namespace V1CreateDiscountResponse {
  export interface UnionMember0 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: string | number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    duration: 'once';

    livemode: boolean;

    name: string;

    numberOfPayments: unknown;

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }

  export interface UnionMember1 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: string | number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    duration: 'number_of_payments';

    livemode: boolean;

    name: string;

    /**
     * safeZodPositiveInteger
     */
    numberOfPayments: string | number;

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }

  export interface UnionMember2 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: string | number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    duration: 'forever';

    livemode: boolean;

    name: string;

    numberOfPayments: unknown;

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }
}

export type V1GetInvoiceResponse = V1GetInvoiceResponse.UnionMember0 | V1GetInvoiceResponse.UnionMember1;

export namespace V1GetInvoiceResponse {
  export interface UnionMember0 {
    id: string;

    applicationFee: number | null;

    bankPaymentOnly: boolean | null;

    billingAnchorDate: string | null;

    billingInterval: 'day' | 'week' | 'month' | 'year' | null;

    billingIntervalCount: number | null;

    billingPeriodEndDate: string | null;

    BillingPeriodId: unknown;

    billingPeriodStartDate: string | null;

    createdAt: string;

    CustomerProfileId: string;

    dueDate: string | null;

    invoiceDate: string;

    invoiceNumber: string;

    livemode: boolean;

    memo: string | null;

    OrganizationId: string;

    pdfURL: string | null;

    PurchaseId: string;

    status:
      | 'draft'
      | 'open'
      | 'paid'
      | 'uncollectible'
      | 'void'
      | 'refunded'
      | 'partially_refunded'
      | 'awaiting_payment_confirmation';

    subtotal: number | null;

    taxAmount: number | null;

    taxCountry:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MK'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | null;

    taxRatePercentage: string | null;

    taxState: string | null;

    taxType:
      | 'amusement_tax'
      | 'communications_tax'
      | 'gst'
      | 'hst'
      | 'igst'
      | 'jct'
      | 'lease_tax'
      | 'pst'
      | 'qst'
      | 'rst'
      | 'sales_tax'
      | 'vat'
      | 'none'
      | null;

    type: 'purchase';

    updatedAt: string | null;
  }

  export interface UnionMember1 {
    id: string;

    applicationFee: number | null;

    bankPaymentOnly: boolean | null;

    billingAnchorDate: string | null;

    billingInterval: 'day' | 'week' | 'month' | 'year' | null;

    billingIntervalCount: number | null;

    billingPeriodEndDate: string | null;

    BillingPeriodId: string;

    billingPeriodStartDate: string | null;

    createdAt: string;

    CustomerProfileId: string;

    dueDate: string | null;

    invoiceDate: string;

    invoiceNumber: string;

    livemode: boolean;

    memo: string | null;

    OrganizationId: string;

    pdfURL: string | null;

    PurchaseId: unknown;

    status:
      | 'draft'
      | 'open'
      | 'paid'
      | 'uncollectible'
      | 'void'
      | 'refunded'
      | 'partially_refunded'
      | 'awaiting_payment_confirmation';

    subtotal: number | null;

    taxAmount: number | null;

    taxCountry:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MK'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | null;

    taxRatePercentage: string | null;

    taxState: string | null;

    taxType:
      | 'amusement_tax'
      | 'communications_tax'
      | 'gst'
      | 'hst'
      | 'igst'
      | 'jct'
      | 'lease_tax'
      | 'pst'
      | 'qst'
      | 'rst'
      | 'sales_tax'
      | 'vat'
      | 'none'
      | null;

    type: 'subscription';

    updatedAt: string | null;
  }
}

export interface V1GetInvoiceLineItemResponse {
  id: string;

  createdAt: string;

  description: string | null;

  InvoiceId: string;

  livemode: boolean;

  price: number;

  /**
   * safeZodPositiveInteger
   */
  quantity: string | number;

  updatedAt: string | null;

  VariantId: string | null;
}

export interface V1GetPaymentResponse {
  id: string;

  /**
   * safeZodPositiveInteger
   */
  amount: string | number | 0;

  applicationFee: number | null;

  BillingPeriodId: string | null;

  /**
   * safeZodDate
   */
  chargeDate: string | string;

  createdAt: string;

  currency:
    | 'USD'
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BWP'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'ISK'
    | 'JMD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KRW'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLE'
    | 'SOS'
    | 'SRD'
    | 'STD'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'UYU'
    | 'UZS'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';

  CustomerProfileId: string;

  description: string | null;

  InvoiceId: string;

  paymentMethod: 'card' | 'us_bank_account' | 'sepa_debit';

  PaymentMethodId: string | null;

  PurchaseId: string | null;

  refunded: boolean;

  refundedAmount: number | null;

  /**
   * safeZodDate
   */
  refundedAt: string | string | null;

  /**
   * safeZodDate
   */
  settlementDate: string | string | null;

  status:
    | 'canceled'
    | 'failed'
    | 'refunded'
    | 'processing'
    | 'succeeded'
    | 'requires_confirmation'
    | 'requires_action';

  stripeChargeId: string | null;

  subtotal: number | null;

  taxAmount: number | null;

  taxCountry:
    | 'AF'
    | 'AL'
    | 'DZ'
    | 'AS'
    | 'AD'
    | 'AO'
    | 'AI'
    | 'AQ'
    | 'AG'
    | 'AR'
    | 'AM'
    | 'AW'
    | 'AU'
    | 'AT'
    | 'AZ'
    | 'BS'
    | 'BH'
    | 'BD'
    | 'BB'
    | 'BY'
    | 'BE'
    | 'BZ'
    | 'BJ'
    | 'BM'
    | 'BT'
    | 'BO'
    | 'BA'
    | 'BW'
    | 'BV'
    | 'BR'
    | 'IO'
    | 'BN'
    | 'BG'
    | 'BF'
    | 'BI'
    | 'KH'
    | 'CM'
    | 'CA'
    | 'CV'
    | 'KY'
    | 'CF'
    | 'TD'
    | 'CL'
    | 'CN'
    | 'CX'
    | 'CC'
    | 'CO'
    | 'KM'
    | 'CG'
    | 'CD'
    | 'CK'
    | 'CR'
    | 'CI'
    | 'HR'
    | 'CU'
    | 'CY'
    | 'CZ'
    | 'DK'
    | 'DJ'
    | 'DM'
    | 'DO'
    | 'EC'
    | 'EG'
    | 'SV'
    | 'GQ'
    | 'ER'
    | 'EE'
    | 'ET'
    | 'FK'
    | 'FO'
    | 'FJ'
    | 'FI'
    | 'FR'
    | 'GF'
    | 'PF'
    | 'TF'
    | 'GA'
    | 'GM'
    | 'GE'
    | 'DE'
    | 'GH'
    | 'GI'
    | 'GR'
    | 'GL'
    | 'GD'
    | 'GP'
    | 'GU'
    | 'GT'
    | 'GN'
    | 'GW'
    | 'GY'
    | 'HT'
    | 'HM'
    | 'VA'
    | 'HN'
    | 'HK'
    | 'HU'
    | 'IS'
    | 'IN'
    | 'ID'
    | 'IR'
    | 'IQ'
    | 'IE'
    | 'IL'
    | 'IT'
    | 'JM'
    | 'JP'
    | 'JO'
    | 'KZ'
    | 'KE'
    | 'KI'
    | 'KP'
    | 'KR'
    | 'KW'
    | 'KG'
    | 'LA'
    | 'LV'
    | 'LB'
    | 'LS'
    | 'LR'
    | 'LY'
    | 'LI'
    | 'LT'
    | 'LU'
    | 'MO'
    | 'MK'
    | 'MG'
    | 'MW'
    | 'MY'
    | 'MV'
    | 'ML'
    | 'MT'
    | 'MH'
    | 'MQ'
    | 'MR'
    | 'MU'
    | 'YT'
    | 'MX'
    | 'FM'
    | 'MD'
    | 'MC'
    | 'MN'
    | 'MS'
    | 'MA'
    | 'MZ'
    | 'MM'
    | 'NA'
    | 'NR'
    | 'NP'
    | 'NL'
    | 'NC'
    | 'NZ'
    | 'NI'
    | 'NE'
    | 'NG'
    | 'NU'
    | 'NF'
    | 'MP'
    | 'NO'
    | 'OM'
    | 'PK'
    | 'PW'
    | 'PS'
    | 'PA'
    | 'PG'
    | 'PY'
    | 'PE'
    | 'PH'
    | 'PN'
    | 'PL'
    | 'PT'
    | 'PR'
    | 'QA'
    | 'RE'
    | 'RO'
    | 'RU'
    | 'RW'
    | 'SH'
    | 'KN'
    | 'LC'
    | 'PM'
    | 'VC'
    | 'WS'
    | 'SM'
    | 'ST'
    | 'SA'
    | 'SN'
    | 'SC'
    | 'SL'
    | 'SG'
    | 'SK'
    | 'SI'
    | 'SB'
    | 'SO'
    | 'ZA'
    | 'GS'
    | 'ES'
    | 'LK'
    | 'SD'
    | 'SR'
    | 'SJ'
    | 'SZ'
    | 'SE'
    | 'CH'
    | 'SY'
    | 'TW'
    | 'TJ'
    | 'TZ'
    | 'TH'
    | 'TL'
    | 'TG'
    | 'TK'
    | 'TO'
    | 'TT'
    | 'TN'
    | 'TR'
    | 'TM'
    | 'TC'
    | 'TV'
    | 'UG'
    | 'UA'
    | 'AE'
    | 'GB'
    | 'US'
    | 'UM'
    | 'UY'
    | 'UZ'
    | 'VU'
    | 'VE'
    | 'VN'
    | 'VG'
    | 'VI'
    | 'WF'
    | 'EH'
    | 'YE'
    | 'ZM'
    | 'ZW';

  taxRatePercentage: string | null;

  taxState: string | null;

  taxType:
    | 'amusement_tax'
    | 'communications_tax'
    | 'gst'
    | 'hst'
    | 'igst'
    | 'jct'
    | 'lease_tax'
    | 'pst'
    | 'qst'
    | 'rst'
    | 'sales_tax'
    | 'vat'
    | 'none'
    | null;

  updatedAt: string | null;
}

export interface V1ListCustomerProfilesResponse {
  data: Array<V1ListCustomerProfilesResponse.Data>;

  hasMore: boolean;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace V1ListCustomerProfilesResponse {
  export interface Data {
    id: string;

    archived: boolean;

    billingAddress: Data.BillingAddress | null;

    createdAt: string;

    CustomerId: string;

    customerTaxId: string | null;

    domain: string | null;

    email: string;

    externalId: string;

    iconURL: string | null;

    invoiceNumberBase: string | null;

    livemode: boolean;

    logoURL: string | null;

    name: string | null;

    OrganizationId: string;

    slackId: string | null;

    stripeCustomerId: string | null;

    updatedAt: string | null;
  }

  export namespace Data {
    export interface BillingAddress {
      address: BillingAddress.Address;

      name: string;

      firstName?: string;

      lastName?: string;

      phone?: string;
    }

    export namespace BillingAddress {
      export interface Address {
        city: string;

        country: string;

        line1: string;

        line2: string | null;

        postal_code: string;

        state: string;
      }
    }
  }
}

export interface V1ListDiscountsResponse {
  data: Array<
    | V1ListDiscountsResponse.UnionMember0
    | V1ListDiscountsResponse.UnionMember1
    | V1ListDiscountsResponse.UnionMember2
  >;

  hasMore: boolean;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace V1ListDiscountsResponse {
  export interface UnionMember0 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: string | number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    duration: 'once';

    livemode: boolean;

    name: string;

    numberOfPayments: unknown;

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }

  export interface UnionMember1 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: string | number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    duration: 'number_of_payments';

    livemode: boolean;

    name: string;

    /**
     * safeZodPositiveInteger
     */
    numberOfPayments: string | number;

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }

  export interface UnionMember2 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: string | number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    duration: 'forever';

    livemode: boolean;

    name: string;

    numberOfPayments: unknown;

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }
}

export interface V1ListInvoiceLineItemsResponse {
  data: Array<V1ListInvoiceLineItemsResponse.Data>;

  hasMore: boolean;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace V1ListInvoiceLineItemsResponse {
  export interface Data {
    id: string;

    createdAt: string;

    description: string | null;

    InvoiceId: string;

    livemode: boolean;

    price: number;

    /**
     * safeZodPositiveInteger
     */
    quantity: string | number;

    updatedAt: string | null;

    VariantId: string | null;
  }
}

export interface V1ListInvoicesResponse {
  data: Array<V1ListInvoicesResponse.UnionMember0 | V1ListInvoicesResponse.UnionMember1>;

  hasMore: boolean;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace V1ListInvoicesResponse {
  export interface UnionMember0 {
    id: string;

    applicationFee: number | null;

    bankPaymentOnly: boolean | null;

    billingAnchorDate: string | null;

    billingInterval: 'day' | 'week' | 'month' | 'year' | null;

    billingIntervalCount: number | null;

    billingPeriodEndDate: string | null;

    BillingPeriodId: unknown;

    billingPeriodStartDate: string | null;

    createdAt: string;

    CustomerProfileId: string;

    dueDate: string | null;

    invoiceDate: string;

    invoiceNumber: string;

    livemode: boolean;

    memo: string | null;

    OrganizationId: string;

    pdfURL: string | null;

    PurchaseId: string;

    status:
      | 'draft'
      | 'open'
      | 'paid'
      | 'uncollectible'
      | 'void'
      | 'refunded'
      | 'partially_refunded'
      | 'awaiting_payment_confirmation';

    subtotal: number | null;

    taxAmount: number | null;

    taxCountry:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MK'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | null;

    taxRatePercentage: string | null;

    taxState: string | null;

    taxType:
      | 'amusement_tax'
      | 'communications_tax'
      | 'gst'
      | 'hst'
      | 'igst'
      | 'jct'
      | 'lease_tax'
      | 'pst'
      | 'qst'
      | 'rst'
      | 'sales_tax'
      | 'vat'
      | 'none'
      | null;

    type: 'purchase';

    updatedAt: string | null;
  }

  export interface UnionMember1 {
    id: string;

    applicationFee: number | null;

    bankPaymentOnly: boolean | null;

    billingAnchorDate: string | null;

    billingInterval: 'day' | 'week' | 'month' | 'year' | null;

    billingIntervalCount: number | null;

    billingPeriodEndDate: string | null;

    BillingPeriodId: string;

    billingPeriodStartDate: string | null;

    createdAt: string;

    CustomerProfileId: string;

    dueDate: string | null;

    invoiceDate: string;

    invoiceNumber: string;

    livemode: boolean;

    memo: string | null;

    OrganizationId: string;

    pdfURL: string | null;

    PurchaseId: unknown;

    status:
      | 'draft'
      | 'open'
      | 'paid'
      | 'uncollectible'
      | 'void'
      | 'refunded'
      | 'partially_refunded'
      | 'awaiting_payment_confirmation';

    subtotal: number | null;

    taxAmount: number | null;

    taxCountry:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MK'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | null;

    taxRatePercentage: string | null;

    taxState: string | null;

    taxType:
      | 'amusement_tax'
      | 'communications_tax'
      | 'gst'
      | 'hst'
      | 'igst'
      | 'jct'
      | 'lease_tax'
      | 'pst'
      | 'qst'
      | 'rst'
      | 'sales_tax'
      | 'vat'
      | 'none'
      | null;

    type: 'subscription';

    updatedAt: string | null;
  }
}

export interface V1ListPaymentsResponse {
  data: Array<V1ListPaymentsResponse.Data>;

  hasMore: boolean;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace V1ListPaymentsResponse {
  export interface Data {
    id: string;

    /**
     * safeZodPositiveInteger
     */
    amount: string | number | 0;

    applicationFee: number | null;

    BillingPeriodId: string | null;

    /**
     * safeZodDate
     */
    chargeDate: string | string;

    createdAt: string;

    currency:
      | 'USD'
      | 'AED'
      | 'AFN'
      | 'ALL'
      | 'AMD'
      | 'ANG'
      | 'AOA'
      | 'ARS'
      | 'AUD'
      | 'AWG'
      | 'AZN'
      | 'BAM'
      | 'BBD'
      | 'BDT'
      | 'BGN'
      | 'BIF'
      | 'BMD'
      | 'BND'
      | 'BOB'
      | 'BRL'
      | 'BSD'
      | 'BWP'
      | 'BYN'
      | 'BZD'
      | 'CAD'
      | 'CDF'
      | 'CHF'
      | 'CLP'
      | 'CNY'
      | 'COP'
      | 'CRC'
      | 'CVE'
      | 'CZK'
      | 'DJF'
      | 'DKK'
      | 'DOP'
      | 'DZD'
      | 'EGP'
      | 'ETB'
      | 'EUR'
      | 'FJD'
      | 'FKP'
      | 'GBP'
      | 'GEL'
      | 'GIP'
      | 'GMD'
      | 'GNF'
      | 'GTQ'
      | 'GYD'
      | 'HKD'
      | 'HNL'
      | 'HTG'
      | 'HUF'
      | 'IDR'
      | 'ILS'
      | 'INR'
      | 'ISK'
      | 'JMD'
      | 'JPY'
      | 'KES'
      | 'KGS'
      | 'KHR'
      | 'KMF'
      | 'KRW'
      | 'KYD'
      | 'KZT'
      | 'LAK'
      | 'LBP'
      | 'LKR'
      | 'LRD'
      | 'LSL'
      | 'MAD'
      | 'MDL'
      | 'MGA'
      | 'MKD'
      | 'MMK'
      | 'MNT'
      | 'MOP'
      | 'MUR'
      | 'MVR'
      | 'MWK'
      | 'MXN'
      | 'MYR'
      | 'MZN'
      | 'NAD'
      | 'NGN'
      | 'NIO'
      | 'NOK'
      | 'NPR'
      | 'NZD'
      | 'PAB'
      | 'PEN'
      | 'PGK'
      | 'PHP'
      | 'PKR'
      | 'PLN'
      | 'PYG'
      | 'QAR'
      | 'RON'
      | 'RSD'
      | 'RUB'
      | 'RWF'
      | 'SAR'
      | 'SBD'
      | 'SCR'
      | 'SEK'
      | 'SGD'
      | 'SHP'
      | 'SLE'
      | 'SOS'
      | 'SRD'
      | 'STD'
      | 'SZL'
      | 'THB'
      | 'TJS'
      | 'TOP'
      | 'TRY'
      | 'TTD'
      | 'TWD'
      | 'TZS'
      | 'UAH'
      | 'UGX'
      | 'UYU'
      | 'UZS'
      | 'VND'
      | 'VUV'
      | 'WST'
      | 'XAF'
      | 'XCD'
      | 'XOF'
      | 'XPF'
      | 'YER'
      | 'ZAR'
      | 'ZMW';

    CustomerProfileId: string;

    description: string | null;

    InvoiceId: string;

    paymentMethod: 'card' | 'us_bank_account' | 'sepa_debit';

    PaymentMethodId: string | null;

    PurchaseId: string | null;

    refunded: boolean;

    refundedAmount: number | null;

    /**
     * safeZodDate
     */
    refundedAt: string | string | null;

    /**
     * safeZodDate
     */
    settlementDate: string | string | null;

    status:
      | 'canceled'
      | 'failed'
      | 'refunded'
      | 'processing'
      | 'succeeded'
      | 'requires_confirmation'
      | 'requires_action';

    stripeChargeId: string | null;

    subtotal: number | null;

    taxAmount: number | null;

    taxCountry:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MK'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW';

    taxRatePercentage: string | null;

    taxState: string | null;

    taxType:
      | 'amusement_tax'
      | 'communications_tax'
      | 'gst'
      | 'hst'
      | 'igst'
      | 'jct'
      | 'lease_tax'
      | 'pst'
      | 'qst'
      | 'rst'
      | 'sales_tax'
      | 'vat'
      | 'none'
      | null;

    updatedAt: string | null;
  }
}

export interface V1ListProductsResponse {
  data: Array<V1ListProductsResponse.Data>;

  hasMore: boolean;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace V1ListProductsResponse {
  export interface Data {
    id: string;

    active: boolean;

    /**
     * safeZodDate
     */
    createdAt: string | string;

    description: string | null;

    imageURL: string | null;

    livemode: boolean;

    name: string;

    OrganizationId: string;

    type: 'service' | 'digital';

    /**
     * safeZodDate
     */
    updatedAt: string | string;
  }
}

export interface V1ListVariantsResponse {
  data: Array<V1ListVariantsResponse.UnionMember0 | V1ListVariantsResponse.UnionMember1>;

  hasMore: boolean;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace V1ListVariantsResponse {
  export interface UnionMember0 {
    id: string;

    active: boolean;

    createdAt: string;

    /**
     * safeZodPositiveInteger
     */
    intervalCount: string | number;

    intervalUnit: 'day' | 'week' | 'month' | 'year';

    isDefault: boolean;

    livemode: boolean;

    name: string | null;

    priceType: 'subscription';

    ProductId: string;

    /**
     * safeZodPositiveInteger
     */
    setupFeeAmount: string | number | 0 | null;

    /**
     * safeZodPositiveInteger
     */
    trialPeriodDays: string | number | 0 | null;

    /**
     * safeZodPositiveInteger
     */
    unitPrice: string | number;

    updatedAt: string | null;
  }

  export interface UnionMember1 {
    id: string;

    active: boolean;

    createdAt: string;

    isDefault: boolean;

    livemode: boolean;

    name: string | null;

    priceType: 'single_payment';

    ProductId: string;

    /**
     * safeZodPositiveInteger
     */
    unitPrice: string | number;

    updatedAt: string | null;

    /**
     * safeZodNullOrUndefined
     */
    intervalCount?: unknown | unknown | null;

    /**
     * safeZodNullOrUndefined
     */
    intervalUnit?: unknown | unknown | null;

    /**
     * safeZodNullOrUndefined
     */
    setupFeeAmount?: unknown | unknown | null;

    /**
     * safeZodNullOrUndefined
     */
    trialPeriodDays?: unknown | unknown | null;
  }
}

export interface V1CreateDiscountParams {
  discount:
    | V1CreateDiscountParams.UnionMember0
    | V1CreateDiscountParams.UnionMember1
    | V1CreateDiscountParams.UnionMember2;
}

export namespace V1CreateDiscountParams {
  export interface UnionMember0 {
    /**
     * safeZodPositiveInteger
     */
    amount: string | number;

    amountType: 'percent' | 'fixed';

    code: string;

    duration: 'once';

    name: string;

    numberOfPayments: unknown;

    active?: boolean;
  }

  export interface UnionMember1 {
    /**
     * safeZodPositiveInteger
     */
    amount: string | number;

    amountType: 'percent' | 'fixed';

    code: string;

    duration: 'number_of_payments';

    name: string;

    /**
     * safeZodPositiveInteger
     */
    numberOfPayments: string | number;

    active?: boolean;
  }

  export interface UnionMember2 {
    /**
     * safeZodPositiveInteger
     */
    amount: string | number;

    amountType: 'percent' | 'fixed';

    code: string;

    duration: 'forever';

    name: string;

    numberOfPayments: unknown;

    active?: boolean;
  }
}

export interface V1ListCustomerProfilesParams {
  cursor?: string;

  limit?: number;
}

export interface V1ListDiscountsParams {
  cursor?: string;

  limit?: number;
}

export interface V1ListInvoiceLineItemsParams {
  cursor?: string;

  limit?: number;
}

export interface V1ListInvoicesParams {
  cursor?: string;

  limit?: number;
}

export interface V1ListPaymentsParams {
  cursor?: string;

  limit?: number;
}

export interface V1ListProductsParams {
  cursor?: string;

  limit?: number;
}

export interface V1ListVariantsParams {
  cursor?: string;

  limit?: number;
}

V1.PurchaseSession = PurchaseSession;
V1.Product = Product;
V1.Variant = Variant;
V1.Discounts = Discounts;
V1.CustomerProfile = CustomerProfile;
V1.Subscriptions = Subscriptions;

export declare namespace V1 {
  export {
    type V1CreateDiscountResponse as V1CreateDiscountResponse,
    type V1GetInvoiceResponse as V1GetInvoiceResponse,
    type V1GetInvoiceLineItemResponse as V1GetInvoiceLineItemResponse,
    type V1GetPaymentResponse as V1GetPaymentResponse,
    type V1ListCustomerProfilesResponse as V1ListCustomerProfilesResponse,
    type V1ListDiscountsResponse as V1ListDiscountsResponse,
    type V1ListInvoiceLineItemsResponse as V1ListInvoiceLineItemsResponse,
    type V1ListInvoicesResponse as V1ListInvoicesResponse,
    type V1ListPaymentsResponse as V1ListPaymentsResponse,
    type V1ListProductsResponse as V1ListProductsResponse,
    type V1ListVariantsResponse as V1ListVariantsResponse,
    type V1CreateDiscountParams as V1CreateDiscountParams,
    type V1ListCustomerProfilesParams as V1ListCustomerProfilesParams,
    type V1ListDiscountsParams as V1ListDiscountsParams,
    type V1ListInvoiceLineItemsParams as V1ListInvoiceLineItemsParams,
    type V1ListInvoicesParams as V1ListInvoicesParams,
    type V1ListPaymentsParams as V1ListPaymentsParams,
    type V1ListProductsParams as V1ListProductsParams,
    type V1ListVariantsParams as V1ListVariantsParams,
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
    type ProductGetResponse as ProductGetResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
  };

  export {
    Variant as Variant,
    type VariantCreateResponse as VariantCreateResponse,
    type VariantUpdateResponse as VariantUpdateResponse,
    type VariantCreateParams as VariantCreateParams,
    type VariantUpdateParams as VariantUpdateParams,
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
    type CustomerProfileGetResponse as CustomerProfileGetResponse,
    type CustomerProfileGetBillingResponse as CustomerProfileGetBillingResponse,
    type CustomerProfileCreateParams as CustomerProfileCreateParams,
    type CustomerProfileUpdateParams as CustomerProfileUpdateParams,
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
