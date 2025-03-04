// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class PaymentMethods extends APIResource {
  /**
   * Get PaymentMethod
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<PaymentMethodRetrieveResponse> {
    return this._client.get(`/api/v1/payment-methods/${id}`, options);
  }

  /**
   * List PaymentMethods
   */
  list(
    query?: PaymentMethodListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaymentMethodListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<PaymentMethodListResponse>;
  list(
    query: PaymentMethodListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaymentMethodListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v1/payment-methods', { query, ...options });
  }
}

export interface PaymentMethodRetrieveResponse {
  paymentMethod: PaymentMethodRetrieveResponse.PaymentMethod;
}

export namespace PaymentMethodRetrieveResponse {
  export interface PaymentMethod {
    id: string;

    billingDetails: PaymentMethod.BillingDetails;

    createdAt: string;

    CustomerProfileId: string;

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
}

export interface PaymentMethodListResponse {
  data: Array<PaymentMethodListResponse.Data>;

  hasMore: boolean;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace PaymentMethodListResponse {
  export interface Data {
    id: string;

    billingDetails: Data.BillingDetails;

    createdAt: string;

    CustomerProfileId: string;

    livemode: boolean;

    metadata: Record<string, unknown> | null;

    paymentMethodData: Record<string, unknown>;

    type: 'card' | 'us_bank_account' | 'sepa_debit';

    updatedAt: string | null;
  }

  export namespace Data {
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
}

export interface PaymentMethodListParams {
  cursor?: string;

  limit?: number;
}

export declare namespace PaymentMethods {
  export {
    type PaymentMethodRetrieveResponse as PaymentMethodRetrieveResponse,
    type PaymentMethodListResponse as PaymentMethodListResponse,
    type PaymentMethodListParams as PaymentMethodListParams,
  };
}
