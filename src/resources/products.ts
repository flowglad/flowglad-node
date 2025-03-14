// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Products extends APIResource {
  /**
   * Create Product
   */
  create(body: ProductCreateParams, options?: Core.RequestOptions): Core.APIPromise<ProductCreateResponse> {
    return this._client.post('/api/v1/products', { body, ...options });
  }

  /**
   * Get Product
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ProductRetrieveResponse> {
    return this._client.get(`/api/v1/products/${id}`, options);
  }

  /**
   * Update Product
   */
  update(
    id: string,
    body: ProductUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductUpdateResponse> {
    return this._client.put(`/api/v1/products/${id}`, { body, ...options });
  }

  /**
   * List Products
   */
  list(query?: ProductListParams, options?: Core.RequestOptions): Core.APIPromise<ProductListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ProductListResponse>;
  list(
    query: ProductListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
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

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    description: string | null;

    displayFeatures: Array<Product.DisplayFeature> | null;

    imageURL: string | null;

    livemode: boolean;

    name: string;

    organizationId: string;

    pluralQuantityLabel: string | null;

    singularQuantityLabel: string | null;

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string;
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
  product: ProductRetrieveResponse.Product;
}

export namespace ProductRetrieveResponse {
  export interface Product {
    id: string;

    active: boolean;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    description: string | null;

    displayFeatures: Array<Product.DisplayFeature> | null;

    imageURL: string | null;

    livemode: boolean;

    name: string;

    organizationId: string;

    pluralQuantityLabel: string | null;

    singularQuantityLabel: string | null;

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string;
  }

  export namespace Product {
    export interface DisplayFeature {
      enabled: boolean;

      label: string;

      details?: string | null;
    }
  }
}

export interface ProductUpdateResponse {
  product: ProductUpdateResponse.Product;
}

export namespace ProductUpdateResponse {
  export interface Product {
    id: string;

    active: boolean;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    description: string | null;

    displayFeatures: Array<Product.DisplayFeature> | null;

    imageURL: string | null;

    livemode: boolean;

    name: string;

    organizationId: string;

    pluralQuantityLabel: string | null;

    singularQuantityLabel: string | null;

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string;
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

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    description: string | null;

    displayFeatures: Array<Data.DisplayFeature> | null;

    imageURL: string | null;

    livemode: boolean;

    name: string;

    organizationId: string;

    pluralQuantityLabel: string | null;

    singularQuantityLabel: string | null;

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string;
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
  product: ProductCreateParams.Product;

  variant: ProductCreateParams.UnionMember0 | ProductCreateParams.UnionMember1;
}

export namespace ProductCreateParams {
  export interface Product {
    active: boolean;

    description: string | null;

    displayFeatures: Array<Product.DisplayFeature> | null;

    imageURL: string | null;

    name: string;

    pluralQuantityLabel: string | null;

    singularQuantityLabel: string | null;
  }

  export namespace Product {
    export interface DisplayFeature {
      enabled: boolean;

      label: string;

      details?: string | null;
    }
  }

  export interface UnionMember0 {
    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    intervalCount: number;

    intervalUnit: 'day' | 'week' | 'month' | 'year';

    isDefault: boolean;

    name: string | null;

    priceType: 'subscription';

    productId: string;

    /**
     * safeZodPositiveInteger
     */
    setupFeeAmount: number | 0 | null;

    /**
     * safeZodPositiveInteger
     */
    trialPeriodDays: number | 0 | null;

    /**
     * safeZodPositiveInteger
     */
    unitPrice: number;
  }

  export interface UnionMember1 {
    active: boolean;

    isDefault: boolean;

    name: string | null;

    priceType: 'single_payment';

    productId: string;

    /**
     * safeZodPositiveInteger
     */
    unitPrice: number;

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

export interface ProductUpdateParams {
  product: ProductUpdateParams.Product;

  variant: ProductUpdateParams.UnionMember0 | ProductUpdateParams.UnionMember1;
}

export namespace ProductUpdateParams {
  export interface Product {
    id: string;

    active?: boolean;

    description?: string | null;

    displayFeatures?: Array<Product.DisplayFeature> | null;

    imageURL?: string | null;

    livemode?: boolean;

    name?: string;

    organizationId?: string;

    pluralQuantityLabel?: string | null;

    singularQuantityLabel?: string | null;

    stripeProductId?: string | null;
  }

  export namespace Product {
    export interface DisplayFeature {
      enabled: boolean;

      label: string;

      details?: string | null;
    }
  }

  export interface UnionMember0 {
    id: string;

    priceType: 'subscription';

    active?: boolean;

    currency?:
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
    intervalCount?: number;

    intervalUnit?: 'day' | 'week' | 'month' | 'year';

    isDefault?: boolean;

    livemode?: boolean;

    name?: string | null;

    productId?: string;

    /**
     * safeZodPositiveInteger
     */
    setupFeeAmount?: number | 0 | null;

    stripePriceId?: string | null;

    /**
     * safeZodPositiveInteger
     */
    trialPeriodDays?: number | 0 | null;

    /**
     * safeZodPositiveInteger
     */
    unitPrice?: number;
  }

  export interface UnionMember1 {
    id: string;

    priceType: 'single_payment';

    active?: boolean;

    currency?:
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
     * safeZodNullOrUndefined
     */
    intervalCount?: unknown | unknown | null;

    /**
     * safeZodNullOrUndefined
     */
    intervalUnit?: unknown | unknown | null;

    isDefault?: boolean;

    livemode?: boolean;

    name?: string | null;

    productId?: string;

    /**
     * safeZodNullOrUndefined
     */
    setupFeeAmount?: unknown | unknown | null;

    stripePriceId?: string | null;

    /**
     * safeZodNullOrUndefined
     */
    trialPeriodDays?: unknown | unknown | null;

    /**
     * safeZodPositiveInteger
     */
    unitPrice?: number;
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
