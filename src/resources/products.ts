// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Products extends APIResource {
  /**
   * Create Product
   */
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<ProductCreateResponse> {
    return this._client.post('/api/v1/products', { body, ...options });
  }

  /**
   * Get Product
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ProductRetrieveResponse> {
    return this._client.get(path`/api/v1/products/${id}`, options);
  }

  /**
   * Update Product
   */
  update(id: string, body: ProductUpdateParams, options?: RequestOptions): APIPromise<ProductUpdateResponse> {
    return this._client.put(path`/api/v1/products/${id}`, { body, ...options });
  }

  /**
   * List Products
   */
  list(
    query: ProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductListResponse> {
    return this._client.get('/api/v1/products', { query, ...options });
  }
}

export interface ProductCreateResponse {
  product: ProductCreateResponse.Product;
}

export namespace ProductCreateResponse {
  export interface Product {
    id: string;

    active: boolean;

    catalogId: string;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    createdByCommit: string | null;

    default: boolean;

    description: string | null;

    displayFeatures: Array<Product.DisplayFeature> | null;

    imageURL: string | null;

    livemode: boolean;

    name: string;

    organizationId: string;

    pluralQuantityLabel: string | null;

    singularQuantityLabel: string | null;

    slug: string | null;

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string;

    updatedByCommit: string | null;
  }

  export namespace Product {
    export interface DisplayFeature {
      enabled: boolean;

      label: string;

      details?: string | null;
    }
  }
}

export interface ProductRetrieveResponse {
  id: string;

  active: boolean;

  catalogId: string;

  /**
   * safeZodDate
   */
  createdAt: (string & {}) | string;

  createdByCommit: string | null;

  default: boolean;

  /**
   * The default price for the product. If no price is explicitly set as default,
   * will return the first price created for the product..
   */
  defaultPrice:
    | ProductRetrieveResponse.UnionMember0
    | ProductRetrieveResponse.UnionMember1
    | ProductRetrieveResponse.UnionMember2;

  description: string | null;

  displayFeatures: Array<ProductRetrieveResponse.DisplayFeature> | null;

  imageURL: string | null;

  livemode: boolean;

  name: string;

  organizationId: string;

  pluralQuantityLabel: string | null;

  prices: Array<
    | ProductRetrieveResponse.UnionMember0
    | ProductRetrieveResponse.UnionMember1
    | ProductRetrieveResponse.UnionMember2
  >;

  singularQuantityLabel: string | null;

  slug: string | null;

  /**
   * safeZodDate
   */
  updatedAt: (string & {}) | string;

  updatedByCommit: string | null;
}

export namespace ProductRetrieveResponse {
  /**
   * A subscription price, which will have details on the interval, default trial
   * period, and setup fee (if any).
   */
  export interface UnionMember0 {
    id: string;

    active: boolean;

    createdAt: string;

    createdByCommit: string | null;

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

    /**
     * safeZodPositiveInteger
     */
    intervalCount: number;

    intervalUnit: 'day' | 'week' | 'month' | 'year';

    isDefault: boolean;

    livemode: boolean;

    name: string | null;

    productId: string;

    /**
     * safeZodPositiveInteger
     */
    setupFeeAmount: number | 0 | null;

    slug: string | null;

    /**
     * safeZodPositiveInteger
     */
    trialPeriodDays: number | 0 | null;

    type: 'subscription';

    unitPrice: number;

    updatedAt: string | null;

    updatedByCommit: string | null;

    /**
     * safeZodNullishString
     */
    overagePriceId?: string | null;

    startsWithCreditTrial?: boolean | null;

    /**
     * safeZodNullOrUndefined
     */
    usageEventsPerUnit?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    usageMeterId?: 'null' | null | unknown;
  }

  /**
   * A single payment price, which only gets paid once. Subscriptions cannot be made
   * from single payment prices. Purchases, though, can.
   */
  export interface UnionMember1 {
    id: string;

    active: boolean;

    createdAt: string;

    createdByCommit: string | null;

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

    isDefault: boolean;

    livemode: boolean;

    name: string | null;

    productId: string;

    slug: string | null;

    type: 'single_payment';

    unitPrice: number;

    updatedAt: string | null;

    updatedByCommit: string | null;

    /**
     * safeZodNullOrUndefined
     */
    intervalCount?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    intervalUnit?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    overagePriceId?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    setupFeeAmount?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    startsWithCreditTrial?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    trialPeriodDays?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    usageEventsPerUnit?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    usageMeterId?: 'null' | null | unknown;
  }

  /**
   * A usage price, which describes the price per unit of usage of a product.
   */
  export interface UnionMember2 {
    id: string;

    active: boolean;

    createdAt: string;

    createdByCommit: string | null;

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

    /**
     * safeZodPositiveInteger
     */
    intervalCount: number;

    intervalUnit: 'day' | 'week' | 'month' | 'year';

    isDefault: boolean;

    livemode: boolean;

    name: string | null;

    productId: string;

    slug: string | null;

    type: 'usage';

    unitPrice: number;

    updatedAt: string | null;

    updatedByCommit: string | null;

    /**
     * safeZodPositiveInteger
     */
    usageEventsPerUnit: number;

    /**
     * The usage meter that uses this price. All usage events on that meter must be
     * associated with a price that is also associated with that usage meter.
     */
    usageMeterId: string;

    /**
     * safeZodNullOrUndefined
     */
    overagePriceId?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    setupFeeAmount?: 'null' | null | unknown;

    startsWithCreditTrial?: boolean | null;

    /**
     * safeZodNullOrUndefined
     */
    trialPeriodDays?: 'null' | null | unknown;
  }

  export interface DisplayFeature {
    enabled: boolean;

    label: string;

    details?: string | null;
  }

  /**
   * A subscription price, which will have details on the interval, default trial
   * period, and setup fee (if any).
   */
  export interface UnionMember0 {
    id: string;

    active: boolean;

    createdAt: string;

    createdByCommit: string | null;

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

    /**
     * safeZodPositiveInteger
     */
    intervalCount: number;

    intervalUnit: 'day' | 'week' | 'month' | 'year';

    isDefault: boolean;

    livemode: boolean;

    name: string | null;

    productId: string;

    /**
     * safeZodPositiveInteger
     */
    setupFeeAmount: number | 0 | null;

    slug: string | null;

    /**
     * safeZodPositiveInteger
     */
    trialPeriodDays: number | 0 | null;

    type: 'subscription';

    unitPrice: number;

    updatedAt: string | null;

    updatedByCommit: string | null;

    /**
     * safeZodNullishString
     */
    overagePriceId?: string | null;

    startsWithCreditTrial?: boolean | null;

    /**
     * safeZodNullOrUndefined
     */
    usageEventsPerUnit?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    usageMeterId?: 'null' | null | unknown;
  }

  /**
   * A single payment price, which only gets paid once. Subscriptions cannot be made
   * from single payment prices. Purchases, though, can.
   */
  export interface UnionMember1 {
    id: string;

    active: boolean;

    createdAt: string;

    createdByCommit: string | null;

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

    isDefault: boolean;

    livemode: boolean;

    name: string | null;

    productId: string;

    slug: string | null;

    type: 'single_payment';

    unitPrice: number;

    updatedAt: string | null;

    updatedByCommit: string | null;

    /**
     * safeZodNullOrUndefined
     */
    intervalCount?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    intervalUnit?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    overagePriceId?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    setupFeeAmount?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    startsWithCreditTrial?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    trialPeriodDays?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    usageEventsPerUnit?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    usageMeterId?: 'null' | null | unknown;
  }

  /**
   * A usage price, which describes the price per unit of usage of a product.
   */
  export interface UnionMember2 {
    id: string;

    active: boolean;

    createdAt: string;

    createdByCommit: string | null;

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

    /**
     * safeZodPositiveInteger
     */
    intervalCount: number;

    intervalUnit: 'day' | 'week' | 'month' | 'year';

    isDefault: boolean;

    livemode: boolean;

    name: string | null;

    productId: string;

    slug: string | null;

    type: 'usage';

    unitPrice: number;

    updatedAt: string | null;

    updatedByCommit: string | null;

    /**
     * safeZodPositiveInteger
     */
    usageEventsPerUnit: number;

    /**
     * The usage meter that uses this price. All usage events on that meter must be
     * associated with a price that is also associated with that usage meter.
     */
    usageMeterId: string;

    /**
     * safeZodNullOrUndefined
     */
    overagePriceId?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    setupFeeAmount?: 'null' | null | unknown;

    startsWithCreditTrial?: boolean | null;

    /**
     * safeZodNullOrUndefined
     */
    trialPeriodDays?: 'null' | null | unknown;
  }
}

export interface ProductUpdateResponse {
  product: ProductUpdateResponse.Product;
}

export namespace ProductUpdateResponse {
  export interface Product {
    id: string;

    active: boolean;

    catalogId: string;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    createdByCommit: string | null;

    default: boolean;

    description: string | null;

    displayFeatures: Array<Product.DisplayFeature> | null;

    imageURL: string | null;

    livemode: boolean;

    name: string;

    organizationId: string;

    pluralQuantityLabel: string | null;

    singularQuantityLabel: string | null;

    slug: string | null;

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string;

    updatedByCommit: string | null;
  }

  export namespace Product {
    export interface DisplayFeature {
      enabled: boolean;

      label: string;

      details?: string | null;
    }
  }
}

export interface ProductListResponse {
  data: Array<ProductListResponse.Data>;

  hasMore: boolean;

  total: number;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace ProductListResponse {
  export interface Data {
    id: string;

    active: boolean;

    catalogId: string;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    createdByCommit: string | null;

    default: boolean;

    description: string | null;

    displayFeatures: Array<Data.DisplayFeature> | null;

    imageURL: string | null;

    livemode: boolean;

    name: string;

    organizationId: string;

    pluralQuantityLabel: string | null;

    singularQuantityLabel: string | null;

    slug: string | null;

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string;

    updatedByCommit: string | null;
  }

  export namespace Data {
    export interface DisplayFeature {
      enabled: boolean;

      label: string;

      details?: string | null;
    }
  }
}

export interface ProductCreateParams {
  /**
   * A subscription price, which will have details on the interval, default trial
   * period, and setup fee (if any).
   */
  price:
    | ProductCreateParams.UnionMember0
    | ProductCreateParams.UnionMember1
    | ProductCreateParams.UnionMember2;

  product: ProductCreateParams.Product;

  featureIds?: Array<string>;
}

export namespace ProductCreateParams {
  /**
   * A subscription price, which will have details on the interval, default trial
   * period, and setup fee (if any).
   */
  export interface UnionMember0 {
    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    intervalCount: number;

    intervalUnit: 'day' | 'week' | 'month' | 'year';

    isDefault: boolean;

    name: string | null;

    /**
     * safeZodPositiveInteger
     */
    setupFeeAmount: number | 0 | null;

    slug: string | null;

    /**
     * safeZodPositiveInteger
     */
    trialPeriodDays: number | 0 | null;

    type: 'subscription';

    unitPrice: number;

    /**
     * safeZodNullishString
     */
    overagePriceId?: string | null;

    startsWithCreditTrial?: boolean | null;

    /**
     * safeZodNullOrUndefined
     */
    usageEventsPerUnit?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    usageMeterId?: 'null' | null | unknown;
  }

  /**
   * A single payment price, which only gets paid once. Subscriptions cannot be made
   * from single payment prices. Purchases, though, can.
   */
  export interface UnionMember1 {
    active: boolean;

    isDefault: boolean;

    name: string | null;

    slug: string | null;

    type: 'single_payment';

    unitPrice: number;

    /**
     * safeZodNullOrUndefined
     */
    intervalCount?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    intervalUnit?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    overagePriceId?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    setupFeeAmount?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    startsWithCreditTrial?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    trialPeriodDays?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    usageEventsPerUnit?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    usageMeterId?: 'null' | null | unknown;
  }

  /**
   * A usage price, which describes the price per unit of usage of a product.
   */
  export interface UnionMember2 {
    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    intervalCount: number;

    intervalUnit: 'day' | 'week' | 'month' | 'year';

    isDefault: boolean;

    name: string | null;

    slug: string | null;

    type: 'usage';

    unitPrice: number;

    /**
     * safeZodPositiveInteger
     */
    usageEventsPerUnit: number;

    /**
     * The usage meter that uses this price. All usage events on that meter must be
     * associated with a price that is also associated with that usage meter.
     */
    usageMeterId: string;

    /**
     * safeZodNullOrUndefined
     */
    overagePriceId?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    setupFeeAmount?: 'null' | null | unknown;

    startsWithCreditTrial?: boolean | null;

    /**
     * safeZodNullOrUndefined
     */
    trialPeriodDays?: 'null' | null | unknown;
  }

  export interface Product {
    active: boolean;

    catalogId: string;

    default: boolean;

    description: string | null;

    displayFeatures: Array<Product.DisplayFeature> | null;

    imageURL: string | null;

    name: string;

    pluralQuantityLabel: string | null;

    singularQuantityLabel: string | null;

    slug: string | null;
  }

  export namespace Product {
    export interface DisplayFeature {
      enabled: boolean;

      label: string;

      details?: string | null;
    }
  }
}

export interface ProductUpdateParams {
  product: ProductUpdateParams.Product;

  featureIds?: Array<string>;

  /**
   * A subscription price, which will have details on the interval, default trial
   * period, and setup fee (if any).
   */
  price?:
    | ProductUpdateParams.UnionMember0
    | ProductUpdateParams.UnionMember1
    | ProductUpdateParams.UnionMember2;
}

export namespace ProductUpdateParams {
  export interface Product {
    id: string;

    active?: boolean;

    default?: boolean;

    description?: string | null;

    displayFeatures?: Array<Product.DisplayFeature> | null;

    imageURL?: string | null;

    name?: string;

    pluralQuantityLabel?: string | null;

    singularQuantityLabel?: string | null;

    slug?: string | null;
  }

  export namespace Product {
    export interface DisplayFeature {
      enabled: boolean;

      label: string;

      details?: string | null;
    }
  }

  /**
   * A subscription price, which will have details on the interval, default trial
   * period, and setup fee (if any).
   */
  export interface UnionMember0 {
    id: string;

    type: 'subscription';

    active?: boolean;

    /**
     * safeZodPositiveInteger
     */
    intervalCount?: number;

    intervalUnit?: 'day' | 'week' | 'month' | 'year';

    isDefault?: boolean;

    name?: string | null;

    /**
     * safeZodNullishString
     */
    overagePriceId?: string | null;

    productId?: string;

    /**
     * safeZodPositiveInteger
     */
    setupFeeAmount?: number | 0 | null;

    slug?: string | null;

    startsWithCreditTrial?: boolean | null;

    /**
     * safeZodPositiveInteger
     */
    trialPeriodDays?: number | 0 | null;

    unitPrice?: number;

    /**
     * safeZodNullOrUndefined
     */
    usageEventsPerUnit?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    usageMeterId?: 'null' | null | unknown;
  }

  /**
   * A single payment price, which only gets paid once. Subscriptions cannot be made
   * from single payment prices. Purchases, though, can.
   */
  export interface UnionMember1 {
    id: string;

    type: 'single_payment';

    active?: boolean;

    /**
     * safeZodNullOrUndefined
     */
    intervalCount?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    intervalUnit?: 'null' | null | unknown;

    isDefault?: boolean;

    name?: string | null;

    /**
     * safeZodNullOrUndefined
     */
    overagePriceId?: 'null' | null | unknown;

    productId?: string;

    /**
     * safeZodNullOrUndefined
     */
    setupFeeAmount?: 'null' | null | unknown;

    slug?: string | null;

    /**
     * safeZodNullOrUndefined
     */
    startsWithCreditTrial?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    trialPeriodDays?: 'null' | null | unknown;

    unitPrice?: number;

    /**
     * safeZodNullOrUndefined
     */
    usageEventsPerUnit?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    usageMeterId?: 'null' | null | unknown;
  }

  /**
   * A usage price, which describes the price per unit of usage of a product.
   */
  export interface UnionMember2 {
    id: string;

    type: 'usage';

    active?: boolean;

    /**
     * safeZodPositiveInteger
     */
    intervalCount?: number;

    intervalUnit?: 'day' | 'week' | 'month' | 'year';

    isDefault?: boolean;

    name?: string | null;

    /**
     * safeZodNullOrUndefined
     */
    overagePriceId?: 'null' | null | unknown;

    productId?: string;

    /**
     * safeZodNullOrUndefined
     */
    setupFeeAmount?: 'null' | null | unknown;

    slug?: string | null;

    startsWithCreditTrial?: boolean | null;

    /**
     * safeZodNullOrUndefined
     */
    trialPeriodDays?: 'null' | null | unknown;

    unitPrice?: number;

    /**
     * safeZodPositiveInteger
     */
    usageEventsPerUnit?: number;

    /**
     * The usage meter that uses this price. All usage events on that meter must be
     * associated with a price that is also associated with that usage meter.
     */
    usageMeterId?: string;
  }
}

export interface ProductListParams {
  cursor?: string;

  limit?: number;
}

export declare namespace Products {
  export {
    type ProductCreateResponse as ProductCreateResponse,
    type ProductRetrieveResponse as ProductRetrieveResponse,
    type ProductUpdateResponse as ProductUpdateResponse,
    type ProductListResponse as ProductListResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };
}
