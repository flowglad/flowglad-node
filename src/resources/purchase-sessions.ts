// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class PurchaseSessions extends APIResource {
  /**
   * Create purchaseSession
   */
  create(
    body: PurchaseSessionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PurchaseSessionCreateResponse> {
    return this._client.post('/api/v1/purchase-sessions', { body, ...options });
  }

  /**
   * Get purchaseSession
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<PurchaseSessionRetrieveResponse> {
    return this._client.get(`/api/v1/purchase-sessions/${id}`, options);
  }

  /**
   * List purchaseSessions
   */
  list(
    query?: PurchaseSessionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PurchaseSessionListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<PurchaseSessionListResponse>;
  list(
    query: PurchaseSessionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PurchaseSessionListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v1/purchase-sessions', { query, ...options });
  }
}

export interface PurchaseSessionCreateResponse {
  purchaseSession: PurchaseSessionCreateResponse.PurchaseSession;

  /**
   * The URL to redirect to complete the purchase
   */
  url: string;
}

export namespace PurchaseSessionCreateResponse {
  export interface PurchaseSession {
    id: string;

    billingAddress: PurchaseSession.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: string | string;

    customerEmail: string | null;

    customerName: string | null;

    CustomerProfileId: string | null;

    DiscountId: string | null;

    livemode: boolean;

    OrganizationId: string;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    PurchaseId: string | null;

    quantity: number;

    successUrl: string | null;

    /**
     * safeZodDate
     */
    updatedAt: string | string | null;

    VariantId: string;
  }

  export namespace PurchaseSession {
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

export interface PurchaseSessionRetrieveResponse {
  purchaseSession: PurchaseSessionRetrieveResponse.PurchaseSession;

  /**
   * The URL to redirect to complete the purchase
   */
  url: string;
}

export namespace PurchaseSessionRetrieveResponse {
  export interface PurchaseSession {
    id: string;

    billingAddress: PurchaseSession.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: string | string;

    customerEmail: string | null;

    customerName: string | null;

    CustomerProfileId: string | null;

    DiscountId: string | null;

    livemode: boolean;

    OrganizationId: string;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    PurchaseId: string | null;

    quantity: number;

    successUrl: string | null;

    /**
     * safeZodDate
     */
    updatedAt: string | string | null;

    VariantId: string;
  }

  export namespace PurchaseSession {
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

export interface PurchaseSessionListResponse {
  data: Array<PurchaseSessionListResponse.Data>;

  hasMore: boolean;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace PurchaseSessionListResponse {
  export interface Data {
    id: string;

    billingAddress: Data.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: string | string;

    customerEmail: string | null;

    customerName: string | null;

    CustomerProfileId: string | null;

    DiscountId: string | null;

    livemode: boolean;

    OrganizationId: string;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    PurchaseId: string | null;

    quantity: number;

    successUrl: string | null;

    /**
     * safeZodDate
     */
    updatedAt: string | string | null;

    VariantId: string;
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

export interface PurchaseSessionCreateParams {
  /**
   * The URL to redirect to after the purchase is cancelled or fails
   */
  cancelUrl: string;

  /**
   * The id of the CustomerProfile for this purchase session, as defined in your
   * system
   */
  customerProfileExternalId: string;

  /**
   * The URL to redirect to after the purchase is successful
   */
  successUrl: string;

  /**
   * The ID of the variant the customer shall purchase
   */
  VariantId: string;
}

export interface PurchaseSessionListParams {
  cursor?: string;

  limit?: number;
}

export declare namespace PurchaseSessions {
  export {
    type PurchaseSessionCreateResponse as PurchaseSessionCreateResponse,
    type PurchaseSessionRetrieveResponse as PurchaseSessionRetrieveResponse,
    type PurchaseSessionListResponse as PurchaseSessionListResponse,
    type PurchaseSessionCreateParams as PurchaseSessionCreateParams,
    type PurchaseSessionListParams as PurchaseSessionListParams,
  };
}
