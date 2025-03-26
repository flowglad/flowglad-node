// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CheckoutSessions extends APIResource {
  /**
   * Create checkoutSession
   */
  create(
    body: CheckoutSessionCreateParams,
    options?: RequestOptions,
  ): APIPromise<CheckoutSessionCreateResponse> {
    return this._client.post('/api/v1/checkout-sessions', { body, ...options });
  }

  /**
   * Get CheckoutSession
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CheckoutSessionRetrieveResponse> {
    return this._client.get(path`/api/v1/checkout-sessions/${id}`, options);
  }

  /**
   * List CheckoutSessions
   */
  list(
    query: CheckoutSessionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CheckoutSessionListResponse> {
    return this._client.get('/api/v1/checkout-sessions', { query, ...options });
  }
}

export interface CheckoutSessionCreateResponse {
  checkoutSession:
    | CheckoutSessionCreateResponse.UnionMember0
    | CheckoutSessionCreateResponse.UnionMember1
    | CheckoutSessionCreateResponse.UnionMember2;

  /**
   * The URL to redirect to complete the purchase
   */
  url: string;
}

export namespace CheckoutSessionCreateResponse {
  export interface UnionMember0 {
    id: string;

    billingAddress: UnionMember0.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    customerId: string | null;

    customerName: string | null;

    discountId: string | null;

    invoiceId: string | null;

    livemode: boolean;

    organizationId: string;

    outputMetadata: Record<string, unknown> | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: string;

    purchaseId: string;

    quantity: number;

    successUrl: string | null;

    type: 'purchase';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;
  }

  export namespace UnionMember0 {
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

  export interface UnionMember1 {
    id: string;

    billingAddress: UnionMember1.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    customerId: string | null;

    customerName: string | null;

    discountId: string | null;

    invoiceId: string;

    livemode: boolean;

    organizationId: string;

    outputMetadata: 'null' | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: 'null' | null;

    purchaseId: 'null' | null;

    quantity: number;

    successUrl: string | null;

    type: 'invoice';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;
  }

  export namespace UnionMember1 {
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

  export interface UnionMember2 {
    id: string;

    billingAddress: UnionMember2.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    customerId: string | null;

    customerName: string | null;

    discountId: string | null;

    invoiceId: 'null' | null;

    livemode: boolean;

    organizationId: string;

    outputMetadata: Record<string, unknown> | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: string;

    purchaseId: string | null;

    quantity: number;

    successUrl: string | null;

    type: 'product';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;
  }

  export namespace UnionMember2 {
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

export interface CheckoutSessionRetrieveResponse {
  checkoutSession:
    | CheckoutSessionRetrieveResponse.UnionMember0
    | CheckoutSessionRetrieveResponse.UnionMember1
    | CheckoutSessionRetrieveResponse.UnionMember2;

  /**
   * The URL to redirect to complete the purchase
   */
  url: string;
}

export namespace CheckoutSessionRetrieveResponse {
  export interface UnionMember0 {
    id: string;

    billingAddress: UnionMember0.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    customerId: string | null;

    customerName: string | null;

    discountId: string | null;

    invoiceId: string | null;

    livemode: boolean;

    organizationId: string;

    outputMetadata: Record<string, unknown> | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: string;

    purchaseId: string;

    quantity: number;

    successUrl: string | null;

    type: 'purchase';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;
  }

  export namespace UnionMember0 {
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

  export interface UnionMember1 {
    id: string;

    billingAddress: UnionMember1.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    customerId: string | null;

    customerName: string | null;

    discountId: string | null;

    invoiceId: string;

    livemode: boolean;

    organizationId: string;

    outputMetadata: 'null' | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: 'null' | null;

    purchaseId: 'null' | null;

    quantity: number;

    successUrl: string | null;

    type: 'invoice';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;
  }

  export namespace UnionMember1 {
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

  export interface UnionMember2 {
    id: string;

    billingAddress: UnionMember2.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    customerId: string | null;

    customerName: string | null;

    discountId: string | null;

    invoiceId: 'null' | null;

    livemode: boolean;

    organizationId: string;

    outputMetadata: Record<string, unknown> | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: string;

    purchaseId: string | null;

    quantity: number;

    successUrl: string | null;

    type: 'product';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;
  }

  export namespace UnionMember2 {
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

export interface CheckoutSessionListResponse {
  data: Array<
    | CheckoutSessionListResponse.UnionMember0
    | CheckoutSessionListResponse.UnionMember1
    | CheckoutSessionListResponse.UnionMember2
  >;

  hasMore: boolean;

  total: number;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace CheckoutSessionListResponse {
  export interface UnionMember0 {
    id: string;

    billingAddress: UnionMember0.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    customerId: string | null;

    customerName: string | null;

    discountId: string | null;

    invoiceId: string | null;

    livemode: boolean;

    organizationId: string;

    outputMetadata: Record<string, unknown> | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: string;

    purchaseId: string;

    quantity: number;

    successUrl: string | null;

    type: 'purchase';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;
  }

  export namespace UnionMember0 {
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

  export interface UnionMember1 {
    id: string;

    billingAddress: UnionMember1.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    customerId: string | null;

    customerName: string | null;

    discountId: string | null;

    invoiceId: string;

    livemode: boolean;

    organizationId: string;

    outputMetadata: 'null' | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: 'null' | null;

    purchaseId: 'null' | null;

    quantity: number;

    successUrl: string | null;

    type: 'invoice';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;
  }

  export namespace UnionMember1 {
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

  export interface UnionMember2 {
    id: string;

    billingAddress: UnionMember2.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    customerId: string | null;

    customerName: string | null;

    discountId: string | null;

    invoiceId: 'null' | null;

    livemode: boolean;

    organizationId: string;

    outputMetadata: Record<string, unknown> | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: string;

    purchaseId: string | null;

    quantity: number;

    successUrl: string | null;

    type: 'product';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;
  }

  export namespace UnionMember2 {
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

export interface CheckoutSessionCreateParams {
  /**
   * The URL to redirect to after the purchase is cancelled or fails
   */
  cancelUrl: string;

  /**
   * The id of the Customer for this purchase session, as defined in your system
   */
  customerExternalId: string;

  /**
   * The ID of the price the customer shall purchase
   */
  priceId: string;

  /**
   * The URL to redirect to after the purchase is successful
   */
  successUrl: string;

  /**
   * Metadata that will get added to the purchase or subscription created when this
   * checkout session succeeds. Ignored if the checkout session is of type `invoice`.
   */
  outputMetadata?: Record<string, unknown>;

  /**
   * The name of the purchase or subscription created when this checkout session
   * succeeds. Ignored if the checkout session is of type `invoice`.
   */
  outputName?: string;
}

export interface CheckoutSessionListParams {
  cursor?: string;

  limit?: number;
}

export declare namespace CheckoutSessions {
  export {
    type CheckoutSessionCreateResponse as CheckoutSessionCreateResponse,
    type CheckoutSessionRetrieveResponse as CheckoutSessionRetrieveResponse,
    type CheckoutSessionListResponse as CheckoutSessionListResponse,
    type CheckoutSessionCreateParams as CheckoutSessionCreateParams,
    type CheckoutSessionListParams as CheckoutSessionListParams,
  };
}
