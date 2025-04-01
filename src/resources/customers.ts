// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Customers extends APIResource {
  /**
   * Create Customer
   */
  create(body: CustomerCreateParams, options?: RequestOptions): APIPromise<CustomerCreateResponse> {
    return this._client.post('/api/v1/customers', { body, ...options });
  }

  /**
   * Get Customer
   */
  retrieve(externalID: string, options?: RequestOptions): APIPromise<CustomerRetrieveResponse> {
    return this._client.get(path`/api/v1/customers/${externalID}`, options);
  }

  /**
   * Update Customer
   */
  update(
    externalID: string,
    body: CustomerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomerUpdateResponse> {
    return this._client.put(path`/api/v1/customers/${externalID}`, { body, ...options });
  }

  /**
   * List Customers
   */
  list(
    query: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerListResponse> {
    return this._client.get('/api/v1/customers', { query, ...options });
  }

  /**
   * Get Billing Details
   */
  retrieveBilling(externalID: string, options?: RequestOptions): APIPromise<CustomerRetrieveBillingResponse> {
    return this._client.get(path`/api/v1/customers/${externalID}/billing`, options);
  }
}

export interface CustomerCreateResponse {
  data: CustomerCreateResponse.Data;
}

export namespace CustomerCreateResponse {
  export interface Data {
    customer: Data.Customer;
  }

  export namespace Data {
    export interface Customer {
      id: string;

      archived: boolean;

      billingAddress: Customer.BillingAddress | null;

      catalogId: string | null;

      createdAt: string;

      domain: string | null;

      email: string;

      externalId: string;

      iconURL: string | null;

      invoiceNumberBase: string | null;

      livemode: boolean;

      logoURL: string | null;

      name: string;

      organizationId: string;

      updatedAt: string | null;

      userId: string | null;
    }

    export namespace Customer {
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
}

export interface CustomerRetrieveResponse {
  customer: CustomerRetrieveResponse.Customer;
}

export namespace CustomerRetrieveResponse {
  export interface Customer {
    id: string;

    archived: boolean;

    billingAddress: Customer.BillingAddress | null;

    catalogId: string | null;

    createdAt: string;

    domain: string | null;

    email: string;

    externalId: string;

    iconURL: string | null;

    invoiceNumberBase: string | null;

    livemode: boolean;

    logoURL: string | null;

    name: string;

    organizationId: string;

    updatedAt: string | null;

    userId: string | null;
  }

  export namespace Customer {
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

export interface CustomerUpdateResponse {
  customer: CustomerUpdateResponse.Customer;
}

export namespace CustomerUpdateResponse {
  export interface Customer {
    id: string;

    archived: boolean;

    billingAddress: Customer.BillingAddress | null;

    catalogId: string | null;

    createdAt: string;

    domain: string | null;

    email: string;

    externalId: string;

    iconURL: string | null;

    invoiceNumberBase: string | null;

    livemode: boolean;

    logoURL: string | null;

    name: string;

    organizationId: string;

    updatedAt: string | null;

    userId: string | null;
  }

  export namespace Customer {
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

export interface CustomerListResponse {
  data: Array<CustomerListResponse.Data>;

  hasMore: boolean;

  total: number;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace CustomerListResponse {
  export interface Data {
    id: string;

    archived: boolean;

    billingAddress: Data.BillingAddress | null;

    catalogId: string | null;

    createdAt: string;

    domain: string | null;

    email: string;

    externalId: string;

    iconURL: string | null;

    invoiceNumberBase: string | null;

    livemode: boolean;

    logoURL: string | null;

    name: string;

    organizationId: string;

    stripeCustomerId: string | null;

    taxId: string | null;

    updatedAt: string | null;

    userId: string | null;
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

export interface CustomerRetrieveBillingResponse {
  catalog: CustomerRetrieveBillingResponse.Catalog;

  customer: CustomerRetrieveBillingResponse.Customer;

  invoices: Array<CustomerRetrieveBillingResponse.Invoice>;

  paymentMethods: Array<CustomerRetrieveBillingResponse.PaymentMethod>;

  /**
   * A purchase record, which describes a transaction that can be associated with
   * either a subscription or single payment price. Each purchase has a specific type
   * that determines its behavior and required fields.
   */
  purchases: Array<
    | CustomerRetrieveBillingResponse.UnionMember0
    | CustomerRetrieveBillingResponse.UnionMember1
    | CustomerRetrieveBillingResponse.UnionMember2
  >;

  subscriptions: Array<CustomerRetrieveBillingResponse.Subscription>;

  /**
   * The current subscriptions for the customer. By default, customers can only have
   * one active subscription at a time. This will only return multiple subscriptions
   * if you have enabled multiple subscriptions per customer.
   */
  currentSubscriptions?: Array<CustomerRetrieveBillingResponse.CurrentSubscription>;
}

export namespace CustomerRetrieveBillingResponse {
  export interface Catalog {
    id: string;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    isDefault: boolean;

    livemode: boolean;

    name: string;

    organizationId: string;

    products: Array<Catalog.Product>;

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    usageMeters: Array<Catalog.UsageMeter>;
  }

  export namespace Catalog {
    export interface Product {
      id: string;

      active: boolean;

      catalogId: string;

      /**
       * safeZodDate
       */
      createdAt: (string & {}) | string;

      /**
       * The default price for the product. If no price is explicitly set as default,
       * will return the first price created for the product..
       */
      defaultPrice: Product.UnionMember0 | Product.UnionMember1 | Product.UnionMember2;

      description: string | null;

      displayFeatures: Array<Product.DisplayFeature> | null;

      imageURL: string | null;

      livemode: boolean;

      name: string;

      organizationId: string;

      pluralQuantityLabel: string | null;

      prices: Array<Product.UnionMember0 | Product.UnionMember1 | Product.UnionMember2>;

      singularQuantityLabel: string | null;

      /**
       * safeZodDate
       */
      updatedAt: (string & {}) | string;
    }

    export namespace Product {
      /**
       * A subscription price, which will have details on the interval, default trial
       * period, and setup fee (if any).
       */
      export interface UnionMember0 {
        id: string;

        active: boolean;

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

        /**
         * safeZodPositiveInteger
         */
        trialPeriodDays: number | 0 | null;

        type: 'subscription';

        /**
         * safeZodPositiveInteger
         */
        unitPrice: number;

        updatedAt: string | null;

        usageMeterId: string | null;
      }

      /**
       * A single payment price, which only gets paid once. Subscriptions cannot be made
       * from single payment prices. Purchases, though, can.
       */
      export interface UnionMember1 {
        id: string;

        active: boolean;

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

        isDefault: boolean;

        livemode: boolean;

        name: string | null;

        productId: string;

        type: 'single_payment';

        /**
         * safeZodPositiveInteger
         */
        unitPrice: number;

        updatedAt: string | null;

        usageMeterId: string | null;

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
        setupFeeAmount?: 'null' | null | unknown;

        /**
         * safeZodNullOrUndefined
         */
        trialPeriodDays?: 'null' | null | unknown;
      }

      /**
       * A usage price, which describes the price per unit of usage of a product.
       */
      export interface UnionMember2 {
        id: string;

        active: boolean;

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

        type: 'usage';

        /**
         * safeZodPositiveInteger
         */
        unitPrice: number;

        updatedAt: string | null;

        /**
         * The usage meter that uses this price. All usage events on that meter must be
         * associated with a price that is also associated with that usage meter.
         */
        usageMeterId: string;

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

        /**
         * safeZodPositiveInteger
         */
        trialPeriodDays: number | 0 | null;

        type: 'subscription';

        /**
         * safeZodPositiveInteger
         */
        unitPrice: number;

        updatedAt: string | null;

        usageMeterId: string | null;
      }

      /**
       * A single payment price, which only gets paid once. Subscriptions cannot be made
       * from single payment prices. Purchases, though, can.
       */
      export interface UnionMember1 {
        id: string;

        active: boolean;

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

        isDefault: boolean;

        livemode: boolean;

        name: string | null;

        productId: string;

        type: 'single_payment';

        /**
         * safeZodPositiveInteger
         */
        unitPrice: number;

        updatedAt: string | null;

        usageMeterId: string | null;

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
        setupFeeAmount?: 'null' | null | unknown;

        /**
         * safeZodNullOrUndefined
         */
        trialPeriodDays?: 'null' | null | unknown;
      }

      /**
       * A usage price, which describes the price per unit of usage of a product.
       */
      export interface UnionMember2 {
        id: string;

        active: boolean;

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

        type: 'usage';

        /**
         * safeZodPositiveInteger
         */
        unitPrice: number;

        updatedAt: string | null;

        /**
         * The usage meter that uses this price. All usage events on that meter must be
         * associated with a price that is also associated with that usage meter.
         */
        usageMeterId: string;

        /**
         * safeZodNullOrUndefined
         */
        trialPeriodDays?: 'null' | null | unknown;
      }
    }

    export interface UsageMeter {
      id: string;

      /**
       * The type of aggregation to perform on the usage meter. Defaults to "sum", which
       * aggregates all the usage event amounts for the billing period.
       * "count_distinct_properties" counts the number of distinct properties in the
       * billing period for a given meter.
       */
      aggregationType: 'sum' | 'count_distinct_properties';

      catalogId: string;

      createdAt: string;

      name: string;

      productId: string;

      updatedAt: string | null;
    }
  }

  export interface Customer {
    id: string;

    archived: boolean;

    billingAddress: Customer.BillingAddress | null;

    catalogId: string | null;

    createdAt: string;

    domain: string | null;

    email: string;

    externalId: string;

    iconURL: string | null;

    invoiceNumberBase: string | null;

    livemode: boolean;

    logoURL: string | null;

    name: string;

    organizationId: string;

    updatedAt: string | null;

    userId: string | null;
  }

  export namespace Customer {
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

  export interface Invoice {
    /**
     * An invoice record, which describes a bill that can be associated with a
     * purchase, subscription, or stand alone. Each invoice has a specific type that
     * determines its behavior and required fields.
     */
    invoice: Invoice.UnionMember0 | Invoice.UnionMember1 | Invoice.UnionMember2;

    invoiceLineItems: Array<Invoice.InvoiceLineItem>;
  }

  export namespace Invoice {
    /**
     * An invoice created in association with a purchase. This type of invoice is only
     * ever created for single payment prices. Purchases associated with subscriptions
     * will have subscription invoices created instead.
     */
    export interface UnionMember0 {
      id: string;

      applicationFee: number | null;

      bankPaymentOnly: boolean | null;

      billingAnchorDate: string | null;

      billingInterval: 'day' | 'week' | 'month' | 'year' | null;

      billingIntervalCount: number | null;

      billingPeriodEndDate: string | null;

      billingPeriodId: 'null' | null;

      billingPeriodStartDate: string | null;

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

      customerId: string;

      dueDate: string | null;

      invoiceDate: string;

      invoiceNumber: string;

      livemode: boolean;

      memo: string | null;

      organizationId: string;

      ownerMembershipId: string | null;

      pdfURL: string | null;

      purchaseId: string;

      receiptPdfURL: string | null;

      status:
        | 'draft'
        | 'open'
        | 'paid'
        | 'uncollectible'
        | 'void'
        | 'refunded'
        | 'partially_refunded'
        | 'awaiting_payment_confirmation';

      subscriptionId: 'null' | null;

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
        | 'ME'
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
        | 'RS'
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

    /**
     * An invoice created in association with a subscription. This type of invoice is
     * only ever created for subscription prices. Purchases associated with single
     * payment prices will have purchase invoices created instead.
     */
    export interface UnionMember1 {
      id: string;

      applicationFee: number | null;

      bankPaymentOnly: boolean | null;

      billingAnchorDate: string | null;

      billingInterval: 'day' | 'week' | 'month' | 'year' | null;

      billingIntervalCount: number | null;

      billingPeriodEndDate: string | null;

      billingPeriodId: string;

      billingPeriodStartDate: string | null;

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

      customerId: string;

      dueDate: string | null;

      invoiceDate: string;

      invoiceNumber: string;

      livemode: boolean;

      memo: string | null;

      organizationId: string;

      ownerMembershipId: string | null;

      pdfURL: string | null;

      purchaseId: 'null' | null;

      receiptPdfURL: string | null;

      status:
        | 'draft'
        | 'open'
        | 'paid'
        | 'uncollectible'
        | 'void'
        | 'refunded'
        | 'partially_refunded'
        | 'awaiting_payment_confirmation';

      subscriptionId: string;

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
        | 'ME'
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
        | 'RS'
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

    /**
     * An invoice created without any associated purchase or subscription. These
     * invoices are most often created manually.
     */
    export interface UnionMember2 {
      id: string;

      applicationFee: number | null;

      bankPaymentOnly: boolean | null;

      billingAnchorDate: string | null;

      billingInterval: 'day' | 'week' | 'month' | 'year' | null;

      billingIntervalCount: number | null;

      billingPeriodEndDate: string | null;

      billingPeriodId: 'null' | null;

      billingPeriodStartDate: string | null;

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

      customerId: string;

      dueDate: string | null;

      invoiceDate: string;

      invoiceNumber: string;

      livemode: boolean;

      memo: string | null;

      organizationId: string;

      ownerMembershipId: string | null;

      pdfURL: string | null;

      purchaseId: 'null' | null;

      receiptPdfURL: string | null;

      status:
        | 'draft'
        | 'open'
        | 'paid'
        | 'uncollectible'
        | 'void'
        | 'refunded'
        | 'partially_refunded'
        | 'awaiting_payment_confirmation';

      subscriptionId: 'null' | null;

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
        | 'ME'
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
        | 'RS'
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

      type: 'standalone';

      updatedAt: string | null;
    }

    export interface InvoiceLineItem {
      id: string;

      createdAt: string;

      description: string | null;

      invoiceId: string;

      livemode: boolean;

      price: number;

      priceId: string | null;

      /**
       * safeZodPositiveInteger
       */
      quantity: number;

      updatedAt: string | null;
    }
  }

  export interface PaymentMethod {
    id: string;

    billingDetails: PaymentMethod.BillingDetails;

    createdAt: string;

    customerId: string;

    default: boolean;

    livemode: boolean;

    metadata: Record<string, unknown> | null;

    paymentMethodData: Record<string, unknown>;

    type: 'card' | 'us_bank_account' | 'sepa_debit';

    updatedAt: string | null;
  }

  export namespace PaymentMethod {
    export interface BillingDetails {
      address: BillingDetails.Address;

      email: string | null;

      name: string | null;
    }

    export namespace BillingDetails {
      export interface Address {
        address: Address.Address | null;

        name: string | null;
      }

      export namespace Address {
        export interface Address {
          city: string | null;

          country: string | null;

          line1: string | null;

          line2: string | null;

          postal_code: string | null;

          state: string | null;
        }
      }
    }
  }

  /**
   * A purchase associated with a subscription price. This type of purchase will have
   * recurring billing cycles and may include trial periods.
   */
  export interface UnionMember0 {
    id: string;

    archived: boolean | null;

    bankPaymentOnly: boolean | null;

    billingAddress: string | number | boolean | 'null' | null | Array<unknown> | Record<string, unknown>;

    billingCycleAnchor: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerId: string;

    endDate: string | null;

    /**
     * safeZodPositiveInteger
     */
    firstInvoiceValue: number | 0;

    /**
     * safeZodPositiveInteger
     */
    intervalCount: number;

    intervalUnit: 'day' | 'week' | 'month' | 'year';

    livemode: boolean;

    metadata: Record<string, unknown> | null;

    name: string;

    organizationId: string;

    priceId: string;

    /**
     * safeZodPositiveInteger
     */
    pricePerBillingCycle: number;

    priceType: 'subscription';

    proposal: string | null;

    purchaseDate: string | null;

    /**
     * safeZodPositiveInteger
     */
    quantity: number;

    status: 'open' | 'pending' | 'failed' | 'paid' | 'refunded' | 'partial_refund' | 'fraudulent' | null;

    /**
     * safeZodPositiveInteger
     */
    trialPeriodDays: number | 0;

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    totalPurchaseValue?: unknown;
  }

  /**
   * A purchase associated with a single payment price. This type of purchase is paid
   * once and does not have recurring billing cycles.
   */
  export interface UnionMember1 {
    id: string;

    archived: boolean | null;

    bankPaymentOnly: boolean | null;

    billingAddress: string | number | boolean | 'null' | null | Array<unknown> | Record<string, unknown>;

    billingCycleAnchor: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerId: string;

    endDate: string | null;

    /**
     * safeZodPositiveInteger
     */
    firstInvoiceValue: number | 0;

    livemode: boolean;

    metadata: Record<string, unknown> | null;

    name: string;

    organizationId: string;

    priceId: string;

    priceType: 'single_payment';

    proposal: string | null;

    purchaseDate: string | null;

    /**
     * safeZodPositiveInteger
     */
    quantity: number;

    status: 'open' | 'pending' | 'failed' | 'paid' | 'refunded' | 'partial_refund' | 'fraudulent' | null;

    /**
     * safeZodPositiveInteger
     */
    totalPurchaseValue: number | 0;

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    intervalCount?: unknown;

    intervalUnit?: unknown;

    pricePerBillingCycle?: unknown;

    stripesubscriptionId?: unknown;

    trialPeriodDays?: unknown;
  }

  /**
   * A purchase associated with a usage price. This type of purchase is paid once and
   * does not have recurring billing cycles.
   */
  export interface UnionMember2 {
    id: string;

    archived: boolean | null;

    bankPaymentOnly: boolean | null;

    billingAddress: string | number | boolean | 'null' | null | Array<unknown> | Record<string, unknown>;

    billingCycleAnchor: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerId: string;

    endDate: string | null;

    /**
     * safeZodPositiveInteger
     */
    firstInvoiceValue: number | 0;

    livemode: boolean;

    metadata: Record<string, unknown> | null;

    name: string;

    organizationId: string;

    priceId: string;

    priceType: 'usage';

    proposal: string | null;

    purchaseDate: string | null;

    /**
     * safeZodPositiveInteger
     */
    quantity: number;

    status: 'open' | 'pending' | 'failed' | 'paid' | 'refunded' | 'partial_refund' | 'fraudulent' | null;

    /**
     * safeZodPositiveInteger
     */
    totalPurchaseValue: number | 0;

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    intervalCount?: unknown;

    intervalUnit?: unknown;

    pricePerBillingCycle?: unknown;

    stripesubscriptionId?: unknown;

    trialPeriodDays?: unknown;
  }

  export interface Subscription {
    id: string;

    backupPaymentMethodId: string | null;

    billingCycleAnchorDate: string;

    canceledAt: string | null;

    cancelScheduledAt: string | null;

    createdAt: string;

    /**
     * Whether the subscription is current (statuses "active", "trialing", "past_due",
     * or "cancellation_scheduled")
     */
    current: boolean;

    currentBillingPeriodEnd: string;

    currentBillingPeriodStart: string;

    customerId: string;

    defaultPaymentMethodId: string | null;

    interval: 'day' | 'week' | 'month' | 'year';

    /**
     * safeZodPositiveInteger
     */
    intervalCount: number;

    livemode: boolean;

    metadata: Record<string, unknown> | null;

    name: string | null;

    organizationId: string;

    priceId: string | null;

    runBillingAtPeriodStart: boolean | null;

    status:
      | 'trialing'
      | 'active'
      | 'past_due'
      | 'unpaid'
      | 'cancellation_scheduled'
      | 'incomplete'
      | 'incomplete_expired'
      | 'canceled'
      | 'paused';

    subscriptionItems: Array<Subscription.SubscriptionItem>;

    trialEnd: string | null;

    updatedAt: string | null;
  }

  export namespace Subscription {
    export interface SubscriptionItem {
      id: string;

      addedDate: string;

      createdAt: string;

      externalId: string | null;

      livemode: boolean;

      metadata: Record<string, unknown> | null;

      name: string | null;

      /**
       * A subscription price, which will have details on the interval, default trial
       * period, and setup fee (if any).
       */
      price: SubscriptionItem.Price;

      priceId: string;

      /**
       * safeZodPositiveInteger
       */
      quantity: number;

      subscriptionId: string;

      /**
       * safeZodPositiveInteger
       */
      unitPrice: number | 0;

      updatedAt: string | null;
    }

    export namespace SubscriptionItem {
      /**
       * A subscription price, which will have details on the interval, default trial
       * period, and setup fee (if any).
       */
      export interface Price {
        id: string;

        active: boolean;

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

        /**
         * safeZodPositiveInteger
         */
        trialPeriodDays: number | 0 | null;

        type: 'subscription';

        /**
         * safeZodPositiveInteger
         */
        unitPrice: number;

        updatedAt: string | null;

        usageMeterId: string | null;
      }
    }
  }

  export interface CurrentSubscription {
    id: string;

    backupPaymentMethodId: string | null;

    billingCycleAnchorDate: string;

    canceledAt: string | null;

    cancelScheduledAt: string | null;

    createdAt: string;

    /**
     * Whether the subscription is current (statuses "active", "trialing", "past_due",
     * or "cancellation_scheduled")
     */
    current: boolean;

    currentBillingPeriodEnd: string;

    currentBillingPeriodStart: string;

    customerId: string;

    defaultPaymentMethodId: string | null;

    interval: 'day' | 'week' | 'month' | 'year';

    /**
     * safeZodPositiveInteger
     */
    intervalCount: number;

    livemode: boolean;

    metadata: Record<string, unknown> | null;

    name: string | null;

    organizationId: string;

    priceId: string | null;

    runBillingAtPeriodStart: boolean | null;

    status:
      | 'trialing'
      | 'active'
      | 'past_due'
      | 'unpaid'
      | 'cancellation_scheduled'
      | 'incomplete'
      | 'incomplete_expired'
      | 'canceled'
      | 'paused';

    subscriptionItems: Array<CurrentSubscription.SubscriptionItem>;

    trialEnd: string | null;

    updatedAt: string | null;
  }

  export namespace CurrentSubscription {
    export interface SubscriptionItem {
      id: string;

      addedDate: string;

      createdAt: string;

      externalId: string | null;

      livemode: boolean;

      metadata: Record<string, unknown> | null;

      name: string | null;

      /**
       * A subscription price, which will have details on the interval, default trial
       * period, and setup fee (if any).
       */
      price: SubscriptionItem.Price;

      priceId: string;

      /**
       * safeZodPositiveInteger
       */
      quantity: number;

      subscriptionId: string;

      /**
       * safeZodPositiveInteger
       */
      unitPrice: number | 0;

      updatedAt: string | null;
    }

    export namespace SubscriptionItem {
      /**
       * A subscription price, which will have details on the interval, default trial
       * period, and setup fee (if any).
       */
      export interface Price {
        id: string;

        active: boolean;

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

        /**
         * safeZodPositiveInteger
         */
        trialPeriodDays: number | 0 | null;

        type: 'subscription';

        /**
         * safeZodPositiveInteger
         */
        unitPrice: number;

        updatedAt: string | null;

        usageMeterId: string | null;
      }
    }
  }
}

export interface CustomerCreateParams {
  customer: CustomerCreateParams.Customer;
}

export namespace CustomerCreateParams {
  export interface Customer {
    email: string;

    externalId: string;

    name: string;

    archived?: boolean;

    catalogId?: string | null;

    domain?: string | null;

    iconURL?: string | null;

    logoURL?: string | null;

    userId?: string | null;
  }
}

export interface CustomerUpdateParams {
  customer: CustomerUpdateParams.Customer;
}

export namespace CustomerUpdateParams {
  export interface Customer {
    id: string;

    archived?: boolean;

    catalogId?: string | null;

    domain?: string | null;

    email?: string;

    externalId?: string;

    iconURL?: string | null;

    logoURL?: string | null;

    name?: string;

    userId?: string | null;
  }
}

export interface CustomerListParams {
  cursor?: string;

  limit?: number;
}

export declare namespace Customers {
  export {
    type CustomerCreateResponse as CustomerCreateResponse,
    type CustomerRetrieveResponse as CustomerRetrieveResponse,
    type CustomerUpdateResponse as CustomerUpdateResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerRetrieveBillingResponse as CustomerRetrieveBillingResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };
}
