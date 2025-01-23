// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class PurchaseSessions extends APIResource {
  /**
   * Create purchaseSessions
   */
  create(
    body: PurchaseSessionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PurchaseSessionCreateResponse> {
    return this._client.post('/api/v1/purchase-sessions', { body, ...options });
  }
}

export interface PurchaseSessionCreateResponse {
  purchaseSession: PurchaseSessionCreateResponse.PurchaseSession;
}

export namespace PurchaseSessionCreateResponse {
  export interface PurchaseSession {
    id: string;

    billingAddress: PurchaseSession.BillingAddress | null;

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

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | (string & {}) | null;

    PurchaseId: string | null;

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

export interface PurchaseSessionCreateParams {
  customerProfileExternalId: string;

  VariantId: string;
}

export declare namespace PurchaseSessions {
  export {
    type PurchaseSessionCreateResponse as PurchaseSessionCreateResponse,
    type PurchaseSessionCreateParams as PurchaseSessionCreateParams,
  };
}
