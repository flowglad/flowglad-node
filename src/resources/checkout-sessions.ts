// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CheckoutSessions extends APIResource {
  /**
   * Create CheckoutSession
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
  /**
   * A checkout session record, which describes a checkout process that can be used
   * to complete purchases, invoices, or product orders. Each session has a specific
   * type that determines its behavior and required fields.
   */
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
  /**
   * A checkout session for a customized purchase, which will complete the purchase
   * record and (if for a subscription price) a subscription upon successful
   * completion.
   */
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

    paymentMethodType: 'card' | 'link' | 'us_bank_account' | 'sepa_debit' | null;

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

      firstName?: string;

      lastName?: string;

      name?: string;

      phone?: string;
    }

    export namespace BillingAddress {
      export interface Address {
        city: string | null;

        country: string;

        line1: string | null;

        line2: string | null;

        postal_code: string | null;

        state: string | null;
      }
    }
  }

  /**
   * A checkout session for an invoice, which will only create a payment record
   * associated with the invoice upon successful completion. It will not create a
   * subscription or purchase.
   */
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

    paymentMethodType: 'card' | 'link' | 'us_bank_account' | 'sepa_debit' | null;

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

      firstName?: string;

      lastName?: string;

      name?: string;

      phone?: string;
    }

    export namespace BillingAddress {
      export interface Address {
        city: string | null;

        country: string;

        line1: string | null;

        line2: string | null;

        postal_code: string | null;

        state: string | null;
      }
    }
  }

  /**
   * A checkout session for a product, which will create a purchase record and (if
   * for a subscription price) a subscription upon successful completion.
   */
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

    paymentMethodType: 'card' | 'link' | 'us_bank_account' | 'sepa_debit' | null;

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

      firstName?: string;

      lastName?: string;

      name?: string;

      phone?: string;
    }

    export namespace BillingAddress {
      export interface Address {
        city: string | null;

        country: string;

        line1: string | null;

        line2: string | null;

        postal_code: string | null;

        state: string | null;
      }
    }
  }
}

export interface CheckoutSessionRetrieveResponse {
  /**
   * A checkout session record, which describes a checkout process that can be used
   * to complete purchases, invoices, or product orders. Each session has a specific
   * type that determines its behavior and required fields.
   */
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
  /**
   * A checkout session for a customized purchase, which will complete the purchase
   * record and (if for a subscription price) a subscription upon successful
   * completion.
   */
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

    paymentMethodType: 'card' | 'link' | 'us_bank_account' | 'sepa_debit' | null;

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

      firstName?: string;

      lastName?: string;

      name?: string;

      phone?: string;
    }

    export namespace BillingAddress {
      export interface Address {
        city: string | null;

        country: string;

        line1: string | null;

        line2: string | null;

        postal_code: string | null;

        state: string | null;
      }
    }
  }

  /**
   * A checkout session for an invoice, which will only create a payment record
   * associated with the invoice upon successful completion. It will not create a
   * subscription or purchase.
   */
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

    paymentMethodType: 'card' | 'link' | 'us_bank_account' | 'sepa_debit' | null;

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

      firstName?: string;

      lastName?: string;

      name?: string;

      phone?: string;
    }

    export namespace BillingAddress {
      export interface Address {
        city: string | null;

        country: string;

        line1: string | null;

        line2: string | null;

        postal_code: string | null;

        state: string | null;
      }
    }
  }

  /**
   * A checkout session for a product, which will create a purchase record and (if
   * for a subscription price) a subscription upon successful completion.
   */
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

    paymentMethodType: 'card' | 'link' | 'us_bank_account' | 'sepa_debit' | null;

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

      firstName?: string;

      lastName?: string;

      name?: string;

      phone?: string;
    }

    export namespace BillingAddress {
      export interface Address {
        city: string | null;

        country: string;

        line1: string | null;

        line2: string | null;

        postal_code: string | null;

        state: string | null;
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
  /**
   * A checkout session for a customized purchase, which will complete the purchase
   * record and (if for a subscription price) a subscription upon successful
   * completion.
   */
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

    paymentMethodType: 'card' | 'link' | 'us_bank_account' | 'sepa_debit' | null;

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

      firstName?: string;

      lastName?: string;

      name?: string;

      phone?: string;
    }

    export namespace BillingAddress {
      export interface Address {
        city: string | null;

        country: string;

        line1: string | null;

        line2: string | null;

        postal_code: string | null;

        state: string | null;
      }
    }
  }

  /**
   * A checkout session for an invoice, which will only create a payment record
   * associated with the invoice upon successful completion. It will not create a
   * subscription or purchase.
   */
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

    paymentMethodType: 'card' | 'link' | 'us_bank_account' | 'sepa_debit' | null;

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

      firstName?: string;

      lastName?: string;

      name?: string;

      phone?: string;
    }

    export namespace BillingAddress {
      export interface Address {
        city: string | null;

        country: string;

        line1: string | null;

        line2: string | null;

        postal_code: string | null;

        state: string | null;
      }
    }
  }

  /**
   * A checkout session for a product, which will create a purchase record and (if
   * for a subscription price) a subscription upon successful completion.
   */
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

    paymentMethodType: 'card' | 'link' | 'us_bank_account' | 'sepa_debit' | null;

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

      firstName?: string;

      lastName?: string;

      name?: string;

      phone?: string;
    }

    export namespace BillingAddress {
      export interface Address {
        city: string | null;

        country: string;

        line1: string | null;

        line2: string | null;

        postal_code: string | null;

        state: string | null;
      }
    }
  }
}

export interface CheckoutSessionCreateParams {
  checkoutSession: CheckoutSessionCreateParams.CheckoutSession;
}

export namespace CheckoutSessionCreateParams {
  export interface CheckoutSession {
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

    /**
     * The quantity of the purchase or subscription created when this checkout session
     * succeeds. Ignored if the checkout session is of type `invoice`.
     */
    quantity?: number;
  }
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
