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
   * Get PurchaseSession
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<PurchaseSessionRetrieveResponse> {
    return this._client.get(`/api/v1/purchase-sessions/${id}`, options);
  }

  /**
   * List PurchaseSessions
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
  purchaseSession:
    | PurchaseSessionCreateResponse.PurchasePurchaseSession
    | PurchaseSessionCreateResponse.InvoicePurchaseSession
    | PurchaseSessionCreateResponse.ProductPurchaseSession;

  /**
   * The URL to redirect to complete the purchase
   */
  url: string;
}

export namespace PurchaseSessionCreateResponse {
  export interface PurchasePurchaseSession {
    id: string;

    billingAddress: PurchasePurchaseSession.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    customerName: string | null;

    customerProfileId: string | null;

    discountId: string | null;

    invoiceId: string | null;

    livemode: boolean;

    organizationId: string;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    purchaseId: string;

    quantity: number;

    successUrl: string | null;

    type: 'purchase';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    variantId: string;
  }

  export namespace PurchasePurchaseSession {
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

  export interface InvoicePurchaseSession {
    id: string;

    billingAddress: InvoicePurchaseSession.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    customerName: string | null;

    customerProfileId: string | null;

    discountId: string | null;

    invoiceId: string;

    livemode: boolean;

    organizationId: string;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    purchaseId: unknown;

    quantity: number;

    successUrl: string | null;

    type: 'invoice';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    variantId: unknown;
  }

  export namespace InvoicePurchaseSession {
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

  export interface ProductPurchaseSession {
    id: string;

    billingAddress: ProductPurchaseSession.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    customerName: string | null;

    customerProfileId: string | null;

    discountId: string | null;

    invoiceId: unknown;

    livemode: boolean;

    organizationId: string;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    purchaseId: string | null;

    quantity: number;

    successUrl: string | null;

    type: 'product';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    variantId: string;
  }

  export namespace ProductPurchaseSession {
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
  purchaseSession:
    | PurchaseSessionRetrieveResponse.PurchasePurchaseSession
    | PurchaseSessionRetrieveResponse.InvoicePurchaseSession
    | PurchaseSessionRetrieveResponse.ProductPurchaseSession;

  /**
   * The URL to redirect to complete the purchase
   */
  url: string;
}

export namespace PurchaseSessionRetrieveResponse {
  export interface PurchasePurchaseSession {
    id: string;

    billingAddress: PurchasePurchaseSession.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    customerName: string | null;

    customerProfileId: string | null;

    discountId: string | null;

    invoiceId: string | null;

    livemode: boolean;

    organizationId: string;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    purchaseId: string;

    quantity: number;

    successUrl: string | null;

    type: 'purchase';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    variantId: string;
  }

  export namespace PurchasePurchaseSession {
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

  export interface InvoicePurchaseSession {
    id: string;

    billingAddress: InvoicePurchaseSession.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    customerName: string | null;

    customerProfileId: string | null;

    discountId: string | null;

    invoiceId: string;

    livemode: boolean;

    organizationId: string;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    purchaseId: unknown;

    quantity: number;

    successUrl: string | null;

    type: 'invoice';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    variantId: unknown;
  }

  export namespace InvoicePurchaseSession {
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

  export interface ProductPurchaseSession {
    id: string;

    billingAddress: ProductPurchaseSession.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    customerName: string | null;

    customerProfileId: string | null;

    discountId: string | null;

    invoiceId: unknown;

    livemode: boolean;

    organizationId: string;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    purchaseId: string | null;

    quantity: number;

    successUrl: string | null;

    type: 'product';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    variantId: string;
  }

  export namespace ProductPurchaseSession {
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
  data: Array<
    | PurchaseSessionListResponse.PurchasePurchaseSession
    | PurchaseSessionListResponse.InvoicePurchaseSession
    | PurchaseSessionListResponse.ProductPurchaseSession
  >;

  hasMore: boolean;

  total: number;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace PurchaseSessionListResponse {
  export interface PurchasePurchaseSession {
    id: string;

    billingAddress: PurchasePurchaseSession.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    customerName: string | null;

    customerProfileId: string | null;

    discountId: string | null;

    invoiceId: string | null;

    livemode: boolean;

    organizationId: string;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    purchaseId: string;

    quantity: number;

    successUrl: string | null;

    type: 'purchase';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    variantId: string;
  }

  export namespace PurchasePurchaseSession {
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

  export interface InvoicePurchaseSession {
    id: string;

    billingAddress: InvoicePurchaseSession.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    customerName: string | null;

    customerProfileId: string | null;

    discountId: string | null;

    invoiceId: string;

    livemode: boolean;

    organizationId: string;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    purchaseId: unknown;

    quantity: number;

    successUrl: string | null;

    type: 'invoice';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    variantId: unknown;
  }

  export namespace InvoicePurchaseSession {
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

  export interface ProductPurchaseSession {
    id: string;

    billingAddress: ProductPurchaseSession.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    customerName: string | null;

    customerProfileId: string | null;

    discountId: string | null;

    invoiceId: unknown;

    livemode: boolean;

    organizationId: string;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    purchaseId: string | null;

    quantity: number;

    successUrl: string | null;

    type: 'product';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    variantId: string;
  }

  export namespace ProductPurchaseSession {
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
  variantId: string;
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
