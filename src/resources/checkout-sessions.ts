// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CheckoutSessions extends APIResource {
  /**
   * Create Checkout Session
   */
  create(
    body: CheckoutSessionCreateParams,
    options?: RequestOptions,
  ): APIPromise<CheckoutSessionCreateResponse> {
    return this._client.post('/api/v1/checkout-sessions', { body, ...options });
  }

  /**
   * Get Checkout Session
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CheckoutSessionRetrieveResponse> {
    return this._client.get(path`/api/v1/checkout-sessions/${id}`, options);
  }

  /**
   * List Checkout Sessions
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
   * A time-limited checkout session, which captures the payment details needed to
   * create a subscription, or purchase, or pay a standalone invoice.
   */
  checkoutSession:
    | CheckoutSessionCreateResponse.PurchaseCheckoutSession
    | CheckoutSessionCreateResponse.InvoiceCheckoutSession
    | CheckoutSessionCreateResponse.ProductCheckoutSession
    | CheckoutSessionCreateResponse.AddPaymentMethodCheckoutSession
    | CheckoutSessionCreateResponse.ActivateSubscriptionCheckoutSession;

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
  export interface PurchaseCheckoutSession {
    id: string;

    billingAddress: PurchaseCheckoutSession.BillingAddress | null;

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

    outputMetadata: { [key: string]: unknown } | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: string;

    purchaseId: string;

    quantity: number;

    status: 'open' | 'pending' | 'succeeded' | 'failed' | 'expired';

    successUrl: string | null;

    type: 'purchase';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    /**
     * safeZodNullOrUndefined
     */
    automaticallyUpdateSubscriptions?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    targetSubscriptionId?: 'null' | null | unknown;
  }

  export namespace PurchaseCheckoutSession {
    export interface BillingAddress {
      address: BillingAddress.Address;

      email?: string;

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

        state: string | null;

        name?: string;
      }
    }
  }

  /**
   * A checkout session for an invoice, which will only create a payment record
   * associated with the invoice upon successful completion. It will not create a
   * subscription or purchase.
   */
  export interface InvoiceCheckoutSession {
    id: string;

    billingAddress: InvoiceCheckoutSession.BillingAddress | null;

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

    status: 'open' | 'pending' | 'succeeded' | 'failed' | 'expired';

    successUrl: string | null;

    targetSubscriptionId: 'null' | null;

    type: 'invoice';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    /**
     * safeZodNullOrUndefined
     */
    automaticallyUpdateSubscriptions?: 'null' | null | unknown;
  }

  export namespace InvoiceCheckoutSession {
    export interface BillingAddress {
      address: BillingAddress.Address;

      email?: string;

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

        state: string | null;

        name?: string;
      }
    }
  }

  /**
   * A checkout session for a product, which will create a purchase record and (if
   * for a subscription price) a subscription upon successful completion.
   */
  export interface ProductCheckoutSession {
    id: string;

    billingAddress: ProductCheckoutSession.BillingAddress | null;

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

    outputMetadata: { [key: string]: unknown } | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: string;

    purchaseId: string | null;

    quantity: number;

    status: 'open' | 'pending' | 'succeeded' | 'failed' | 'expired';

    successUrl: string | null;

    type: 'product';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    /**
     * safeZodNullOrUndefined
     */
    automaticallyUpdateSubscriptions?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    targetSubscriptionId?: 'null' | null | unknown;
  }

  export namespace ProductCheckoutSession {
    export interface BillingAddress {
      address: BillingAddress.Address;

      email?: string;

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

        state: string | null;

        name?: string;
      }
    }
  }

  /**
   * A checkout session for a payment method creation, which will create a payment
   * method record upon successful completion. If targetSubscriptionId is provided,
   * the payment method will be added to the subscription as the default payment
   * method.
   */
  export interface AddPaymentMethodCheckoutSession {
    id: string;

    billingAddress: AddPaymentMethodCheckoutSession.BillingAddress | null;
    /**
     * Whether to automatically update all current subscriptions to the new payment
     * method. Defaults to false.
     */
    automaticallyUpdateSubscriptions: boolean;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    /**
     * The customer that the payment method will be added to as the default payment
     * method.
     */
    customerId: string;

    customerName: string | null;

    discountId: string | null;

    invoiceId: string | null;

    livemode: boolean;

    organizationId: string;

    outputMetadata: { [key: string]: unknown } | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'link' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: string | null;

    purchaseId: string | null;

    quantity: number;

    status: 'open' | 'pending' | 'succeeded' | 'failed' | 'expired';

    successUrl: string | null;

    /**
     * The subscription that the payment method will be added to as the default payment
     * method.
     */
    targetSubscriptionId: string | null;

    type: 'add_payment_method';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;
  }

  export namespace AddPaymentMethodCheckoutSession {
    export interface BillingAddress {
      address: BillingAddress.Address;

      email?: string;

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

        name?: string;
      }
    }
  }

  /**
   * A checkout session to activate a subscription, which will create a payment
   * method and associate it with the subscription, and then attempt to pay any
   * outstanding invoices for that subscription.
   */
  export interface ActivateSubscriptionCheckoutSession {
    id: string;

    automaticallyUpdateSubscriptions: boolean | null;

    billingAddress: ActivateSubscriptionCheckoutSession.BillingAddress | null;

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

    outputMetadata: { [key: string]: unknown } | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'link' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: string | null;

    purchaseId: 'null' | null;

    quantity: number;

    status: 'open' | 'pending' | 'succeeded' | 'failed' | 'expired';

    successUrl: string | null;

    targetSubscriptionId: string;

    type: 'activate_subscription';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;
  }

  export namespace ActivateSubscriptionCheckoutSession {
    export interface BillingAddress {
      address: BillingAddress.Address;

      email?: string;

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

        name?: string;
      }
    }
  }
}

export interface CheckoutSessionRetrieveResponse {
  /**
   * A time-limited checkout session, which captures the payment details needed to
   * create a subscription, or purchase, or pay a standalone invoice.
   */
  checkoutSession:
    | CheckoutSessionRetrieveResponse.PurchaseCheckoutSession
    | CheckoutSessionRetrieveResponse.InvoiceCheckoutSession
    | CheckoutSessionRetrieveResponse.ProductCheckoutSession
    | CheckoutSessionRetrieveResponse.AddPaymentMethodCheckoutSession
    | CheckoutSessionRetrieveResponse.ActivateSubscriptionCheckoutSession;

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
  export interface PurchaseCheckoutSession {
    id: string;

    billingAddress: PurchaseCheckoutSession.BillingAddress | null;

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

    outputMetadata: { [key: string]: unknown } | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: string;

    purchaseId: string;

    quantity: number;

    status: 'open' | 'pending' | 'succeeded' | 'failed' | 'expired';

    successUrl: string | null;

    type: 'purchase';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    /**
     * safeZodNullOrUndefined
     */
    automaticallyUpdateSubscriptions?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    targetSubscriptionId?: 'null' | null | unknown;
  }

  export namespace PurchaseCheckoutSession {
    export interface BillingAddress {
      address: BillingAddress.Address;

      email?: string;

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

        state: string | null;

        name?: string;
      }
    }
  }

  /**
   * A checkout session for an invoice, which will only create a payment record
   * associated with the invoice upon successful completion. It will not create a
   * subscription or purchase.
   */
  export interface InvoiceCheckoutSession {
    id: string;

    billingAddress: InvoiceCheckoutSession.BillingAddress | null;

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

    status: 'open' | 'pending' | 'succeeded' | 'failed' | 'expired';

    successUrl: string | null;

    targetSubscriptionId: 'null' | null;

    type: 'invoice';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    /**
     * safeZodNullOrUndefined
     */
    automaticallyUpdateSubscriptions?: 'null' | null | unknown;
  }

  export namespace InvoiceCheckoutSession {
    export interface BillingAddress {
      address: BillingAddress.Address;

      email?: string;

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

        state: string | null;

        name?: string;
      }
    }
  }

  /**
   * A checkout session for a product, which will create a purchase record and (if
   * for a subscription price) a subscription upon successful completion.
   */
  export interface ProductCheckoutSession {
    id: string;

    billingAddress: ProductCheckoutSession.BillingAddress | null;

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

    outputMetadata: { [key: string]: unknown } | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: string;

    purchaseId: string | null;

    quantity: number;

    status: 'open' | 'pending' | 'succeeded' | 'failed' | 'expired';

    successUrl: string | null;

    type: 'product';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    /**
     * safeZodNullOrUndefined
     */
    automaticallyUpdateSubscriptions?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    targetSubscriptionId?: 'null' | null | unknown;
  }

  export namespace ProductCheckoutSession {
    export interface BillingAddress {
      address: BillingAddress.Address;

      email?: string;

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

        state: string | null;

        name?: string;
      }
    }
  }

  /**
   * A checkout session for a payment method creation, which will create a payment
   * method record upon successful completion. If targetSubscriptionId is provided,
   * the payment method will be added to the subscription as the default payment
   * method.
   */
  export interface AddPaymentMethodCheckoutSession {
    id: string;

    /**
     * Whether to automatically update all current subscriptions to the new payment
     * method. Defaults to false.
     */
    automaticallyUpdateSubscriptions: boolean;

    billingAddress: AddPaymentMethodCheckoutSession.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    /**
     * The customer that the payment method will be added to as the default payment
     * method.
     */
    customerId: string;

    customerName: string | null;

    discountId: string | null;

    invoiceId: string | null;

    livemode: boolean;

    organizationId: string;

    outputMetadata: { [key: string]: unknown } | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'link' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: string | null;

    purchaseId: string | null;

    quantity: number;

    status: 'open' | 'pending' | 'succeeded' | 'failed' | 'expired';

    successUrl: string | null;

    /**
     * The subscription that the payment method will be added to as the default payment
     * method.
     */
    targetSubscriptionId: string | null;

    type: 'add_payment_method';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;
  }

  export namespace AddPaymentMethodCheckoutSession {
    export interface BillingAddress {
      address: BillingAddress.Address;

      email?: string;

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

        name?: string;
      }
    }
  }

  /**
   * A checkout session to activate a subscription, which will create a payment
   * method and associate it with the subscription, and then attempt to pay any
   * outstanding invoices for that subscription.
   */
  export interface ActivateSubscriptionCheckoutSession {
    id: string;

    automaticallyUpdateSubscriptions: boolean | null;

    billingAddress: ActivateSubscriptionCheckoutSession.BillingAddress | null;

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

    outputMetadata: { [key: string]: unknown } | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'link' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: string | null;

    purchaseId: 'null' | null;

    quantity: number;

    status: 'open' | 'pending' | 'succeeded' | 'failed' | 'expired';

    successUrl: string | null;

    targetSubscriptionId: string;

    type: 'activate_subscription';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;
  }

  export namespace ActivateSubscriptionCheckoutSession {
    export interface BillingAddress {
      address: BillingAddress.Address;

      email?: string;

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

        name?: string;
      }
    }
  }
}

export interface CheckoutSessionListResponse {
  data: Array<
    | CheckoutSessionListResponse.PurchaseCheckoutSession
    | CheckoutSessionListResponse.InvoiceCheckoutSession
    | CheckoutSessionListResponse.ProductCheckoutSession
    | CheckoutSessionListResponse.AddPaymentMethodCheckoutSession
    | CheckoutSessionListResponse.ActivateSubscriptionCheckoutSession
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
  export interface PurchaseCheckoutSession {
    id: string;

    billingAddress: PurchaseCheckoutSession.BillingAddress | null;

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

    outputMetadata: { [key: string]: unknown } | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: string;

    purchaseId: string;

    quantity: number;

    status: 'open' | 'pending' | 'succeeded' | 'failed' | 'expired';

    successUrl: string | null;

    type: 'purchase';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    /**
     * safeZodNullOrUndefined
     */
    automaticallyUpdateSubscriptions?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    targetSubscriptionId?: 'null' | null | unknown;
  }

  export namespace PurchaseCheckoutSession {
    export interface BillingAddress {
      address: BillingAddress.Address;

      email?: string;

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

        state: string | null;

        name?: string;
      }
    }
  }

  /**
   * A checkout session for an invoice, which will only create a payment record
   * associated with the invoice upon successful completion. It will not create a
   * subscription or purchase.
   */
  export interface InvoiceCheckoutSession {
    id: string;

    billingAddress: InvoiceCheckoutSession.BillingAddress | null;

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

    status: 'open' | 'pending' | 'succeeded' | 'failed' | 'expired';

    successUrl: string | null;

    targetSubscriptionId: 'null' | null;

    type: 'invoice';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    /**
     * safeZodNullOrUndefined
     */
    automaticallyUpdateSubscriptions?: 'null' | null | unknown;
  }

  export namespace InvoiceCheckoutSession {
    export interface BillingAddress {
      address: BillingAddress.Address;

      email?: string;

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

        state: string | null;

        name?: string;
      }
    }
  }

  /**
   * A checkout session for a product, which will create a purchase record and (if
   * for a subscription price) a subscription upon successful completion.
   */
  export interface ProductCheckoutSession {
    id: string;

    billingAddress: ProductCheckoutSession.BillingAddress | null;

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

    outputMetadata: { [key: string]: unknown } | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: string;

    purchaseId: string | null;

    quantity: number;

    status: 'open' | 'pending' | 'succeeded' | 'failed' | 'expired';

    successUrl: string | null;

    type: 'product';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;

    /**
     * safeZodNullOrUndefined
     */
    automaticallyUpdateSubscriptions?: 'null' | null | unknown;

    /**
     * safeZodNullOrUndefined
     */
    targetSubscriptionId?: 'null' | null | unknown;
  }

  export namespace ProductCheckoutSession {
    export interface BillingAddress {
      address: BillingAddress.Address;

      email?: string;

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

        state: string | null;

        name?: string;
      }
    }
  }

  /**
   * A checkout session for a payment method creation, which will create a payment
   * method record upon successful completion. If targetSubscriptionId is provided,
   * the payment method will be added to the subscription as the default payment
   * method.
   */
  export interface AddPaymentMethodCheckoutSession {
    id: string;

    /**
     * Whether to automatically update all current subscriptions to the new payment
     * method. Defaults to false.
     */
    automaticallyUpdateSubscriptions: boolean;

    billingAddress: AddPaymentMethodCheckoutSession.BillingAddress | null;

    cancelUrl: string | null;

    /**
     * safeZodDate
     */
    createdAt: (string & {}) | string;

    customerEmail: string | null;

    /**
     * The customer that the payment method will be added to as the default payment
     * method.
     */
    customerId: string;

    customerName: string | null;

    discountId: string | null;

    invoiceId: string | null;

    livemode: boolean;

    organizationId: string;

    outputMetadata: { [key: string]: unknown } | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'link' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: string | null;

    purchaseId: string | null;

    quantity: number;

    status: 'open' | 'pending' | 'succeeded' | 'failed' | 'expired';

    successUrl: string | null;

    /**
     * The subscription that the payment method will be added to as the default payment
     * method.
     */
    targetSubscriptionId: string | null;

    type: 'add_payment_method';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;
  }

  export namespace AddPaymentMethodCheckoutSession {
    export interface BillingAddress {
      address: BillingAddress.Address;

      email?: string;

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

        name?: string;
      }
    }
  }

  /**
   * A checkout session to activate a subscription, which will create a payment
   * method and associate it with the subscription, and then attempt to pay any
   * outstanding invoices for that subscription.
   */
  export interface ActivateSubscriptionCheckoutSession {
    id: string;

    automaticallyUpdateSubscriptions: boolean | null;

    billingAddress: ActivateSubscriptionCheckoutSession.BillingAddress | null;

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

    outputMetadata: { [key: string]: unknown } | null;

    outputName: string | null;

    paymentMethodType: 'card' | 'link' | 'us_bank_account' | 'sepa_debit' | null;

    priceId: string | null;

    purchaseId: 'null' | null;

    quantity: number;

    status: 'open' | 'pending' | 'succeeded' | 'failed' | 'expired';

    successUrl: string | null;

    targetSubscriptionId: string;

    type: 'activate_subscription';

    /**
     * safeZodDate
     */
    updatedAt: (string & {}) | string | null;
  }

  export namespace ActivateSubscriptionCheckoutSession {
    export interface BillingAddress {
      address: BillingAddress.Address;

      email?: string;

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

        name?: string;
      }
    }
  }
}

export interface CheckoutSessionCreateParams {
  checkoutSession:
    | CheckoutSessionCreateParams.ProductCheckoutSession
    | CheckoutSessionCreateParams.AddPaymentMethodCheckoutSession
    | CheckoutSessionCreateParams.ActivateSubscriptionCheckoutSession;
}

export namespace CheckoutSessionCreateParams {
  export interface ProductCheckoutSession {
    /**
     * The URL to redirect to after the purchase is canceled or fails
     */
    cancelUrl: string;

    /**
     * The id of the Customer for this purchase session, as defined in your system
     */
    customerExternalId: string;

    /**
     * The URL to redirect to after the purchase is successful
     */
    successUrl: string;

    type: 'product';

    /**
     * Metadata that will get added to the purchase or subscription created when this
     * checkout session succeeds. Ignored if the checkout session is of type `invoice`.
     */
    outputMetadata?: { [key: string]: unknown };

    /**
     * The name of the purchase or subscription created when this checkout session
     * succeeds. Ignored if the checkout session is of type `invoice`.
     */
    outputName?: string;

    /**
     * The quantity of the purchase or subscription created when this checkout session
     * succeeds. Ignored if the checkout session is of type `invoice`. If not provided, defaults to 1.
     */
    quantity?: number;

    /**
     * The ID of the price the customer shall purchase.
     */
    priceId: string;
  }

  export interface AddPaymentMethodCheckoutSession {
    /**
     * The URL to redirect to after the purchase is canceled or fails
     */
    cancelUrl: string;

    /**
     * The id of the Customer for this purchase session, as defined in your system
     */
    customerExternalId: string;

    /**
     * The URL to redirect to after the purchase is successful
     */
    successUrl: string;

    type: 'add_payment_method';

    /**
     * Whether to automatically update all current subscriptions to the new payment
     * method. Defaults to false.
     */
    automaticallyUpdateSubscriptions?: boolean;

    /**
     * Metadata that will get added to the purchase or subscription created when this
     * checkout session succeeds. Ignored if the checkout session is of type `invoice`.
     */
    outputMetadata?: { [key: string]: unknown };

    /**
     * The name of the purchase or subscription created when this checkout session
     * succeeds. Ignored if the checkout session is of type `invoice`.
     */
    outputName?: string;

    /**
     * The id of the subscription that the payment method will be added to as the
     * default payment method.
     */
    targetSubscriptionId?: string;
  }

  export interface ActivateSubscriptionCheckoutSession {
    /**
     * The URL to redirect to after the purchase is canceled or fails
     */
    cancelUrl: string;

    /**
     * The id of the Customer for this purchase session, as defined in your system
     */
    customerExternalId: string;

    priceId: string;

    /**
     * The URL to redirect to after the purchase is successful
     */
    successUrl: string;

    targetSubscriptionId: string;

    type: 'activate_subscription';

    /**
     * Metadata that will get added to the purchase or subscription created when this
     * checkout session succeeds. Ignored if the checkout session is of type `invoice`.
     */
    outputMetadata?: { [key: string]: unknown };

    /**
     * The name of the purchase or subscription created when this checkout session
     * succeeds. Ignored if the checkout session is of type `invoice`.
     */
    outputName?: string;
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
