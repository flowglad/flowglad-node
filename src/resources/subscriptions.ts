// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * Create Subscription
   */
  create(body: SubscriptionCreateParams, options?: RequestOptions): APIPromise<SubscriptionCreateResponse> {
    return this._client.post('/api/v1/subscriptions', { body, ...options });
  }

  /**
   * Get Subscription
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SubscriptionRetrieveResponse> {
    return this._client.get(path`/api/v1/subscriptions/${id}`, options);
  }

  /**
   * List Subscriptions
   */
  list(
    query: SubscriptionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionListResponse> {
    return this._client.get('/api/v1/subscriptions', { query, ...options });
  }

  /**
   * Note: Immediate adjustments are in private preview (Please let us know you use
   * this feature: https://github.com/flowglad/flowglad/issues/616). Adjustments at
   * the end of the current billing period are generally available.
   */
  adjust(
    id: string,
    body: SubscriptionAdjustParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionAdjustResponse> {
    return this._client.post(path`/api/v1/subscriptions/${id}/adjust`, { body, ...options });
  }

  /**
   * Cancel a Subscription
   */
  cancel(
    id: string,
    body: SubscriptionCancelParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionCancelResponse> {
    return this._client.post(path`/api/v1/subscriptions/${id}/cancel`, { body, ...options });
  }
}

export interface SubscriptionCreateResponse {
  subscription: Shared.StandardSubscriptionRecord | Shared.NonRenewingSubscriptionRecord;
}

export interface SubscriptionRetrieveResponse {
  subscription: Shared.StandardSubscriptionRecord | Shared.NonRenewingSubscriptionRecord;
}

export interface SubscriptionListResponse {
  data: Array<Shared.StandardSubscriptionRecord | Shared.NonRenewingSubscriptionRecord>;

  hasMore: boolean;

  total: number;

  currentCursor?: string;

  nextCursor?: string;
}

export interface SubscriptionAdjustResponse {
  subscription: Shared.StandardSubscriptionRecord | Shared.NonRenewingSubscriptionRecord;

  subscriptionItems: Array<SubscriptionAdjustResponse.SubscriptionItem>;
}

export namespace SubscriptionAdjustResponse {
  export interface SubscriptionItem {
    id: string;

    /**
     * Epoch milliseconds.
     */
    addedDate: number;

    /**
     * Epoch milliseconds.
     */
    createdAt: number;

    externalId: string | null;

    livemode: boolean;

    name: string | null;

    priceId: string;

    /**
     * A positive integer
     */
    quantity: number;

    subscriptionId: string;

    type: 'static';

    unitPrice: number;

    /**
     * Epoch milliseconds.
     */
    updatedAt: number;

    /**
     * Used as a flag to soft delete a subscription item without losing its history for
     * auditability. If set, it will be removed from the subscription items list and
     * will not be included in the billing period item list. Epoch milliseconds.
     */
    expiredAt?: number | null;

    /**
     * JSON object
     */
    metadata?: { [key: string]: string | number | boolean } | null;
  }
}

export interface SubscriptionCancelResponse {
  subscription: Shared.StandardSubscriptionRecord | Shared.NonRenewingSubscriptionRecord;
}

export interface SubscriptionCreateParams {
  /**
   * The customer for the subscription.
   */
  customerId: string;

  /**
   * The price to subscribe to. Used to determine whether the subscription is
   * usage-based or not, and set other defaults such as trial period and billing
   * intervals.
   */
  priceId: string;

  /**
   * The payment method to try if charges for the subscription fail with the default
   * payment method.
   */
  backupPaymentMethodId?: string;

  /**
   * The default payment method to use when attempting to run charges for the
   * subscription.If not provided, the customer's default payment method will be
   * used. If no default payment method is present, charges will not run. If no
   * default payment method is provided and there is a trial period for the
   * subscription, the subscription will enter 'trial_ended' status at the end of the
   * trial period.
   */
  defaultPaymentMethodId?: string;

  /**
   * The interval of the subscription. If not provided, defaults to the interval of
   * the price provided by `priceId`.
   */
  interval?: 'day' | 'week' | 'month' | 'year';

  /**
   * The number of intervals that each billing period will last. If not provided,
   * defaults to 1
   */
  intervalCount?: number;

  /**
   * JSON object
   */
  metadata?: { [key: string]: string | number | boolean };

  /**
   * The name of the subscription. If not provided, defaults to the name of the
   * product associated with the price provided by 'priceId'.
   */
  name?: string;

  /**
   * The quantity of the price purchased. If not provided, defaults to 1.
   */
  quantity?: number;

  /**
   * The time when the subscription starts. If not provided, defaults to current
   * time.
   */
  startDate?: string;

  /**
   * Epoch time in milliseconds of when the trial ends. If not provided, defaults to
   * startDate + the associated price's trialPeriodDays
   */
  trialEnd?: number;
}

export interface SubscriptionListParams {
  cursor?: string;

  limit?: string;
}

export interface SubscriptionAdjustParams {
  adjustment:
    | SubscriptionAdjustParams.AdjustSubscriptionImmediatelyInput
    | SubscriptionAdjustParams.AdjustSubscriptionAtEndOfCurrentBillingPeriodInput;
}

export namespace SubscriptionAdjustParams {
  export interface AdjustSubscriptionImmediatelyInput {
    newSubscriptionItems: Array<
      | AdjustSubscriptionImmediatelyInput.StaticSubscriptionItemClientInsertSchema
      | AdjustSubscriptionImmediatelyInput.StaticSubscriptionItemClientSelectSchema
    >;

    prorateCurrentBillingPeriod: boolean;

    /**
     * Note: Immediate adjustments are in private preview. Please let us know you use
     * this feature: https://github.com/flowglad/flowglad/issues/616.
     */
    timing: 'immediately';
  }

  export namespace AdjustSubscriptionImmediatelyInput {
    export interface StaticSubscriptionItemClientInsertSchema {
      /**
       * Epoch milliseconds.
       */
      addedDate: number;

      priceId: string;

      /**
       * A positive integer
       */
      quantity: number;

      subscriptionId: string;

      type: 'static';

      unitPrice: number;

      /**
       * Used as a flag to soft delete a subscription item without losing its history for
       * auditability. If set, it will be removed from the subscription items list and
       * will not be included in the billing period item list. Epoch milliseconds.
       */
      expiredAt?: number | null;

      externalId?: string | null;

      /**
       * JSON object
       */
      metadata?: { [key: string]: string | number | boolean } | null;

      name?: string | null;
    }

    export interface StaticSubscriptionItemClientSelectSchema {
      id: string;

      /**
       * Epoch milliseconds.
       */
      addedDate: number;

      /**
       * Epoch milliseconds.
       */
      createdAt: number;

      externalId: string | null;

      livemode: boolean;

      name: string | null;

      priceId: string;

      /**
       * A positive integer
       */
      quantity: number;

      subscriptionId: string;

      type: 'static';

      unitPrice: number;

      /**
       * Epoch milliseconds.
       */
      updatedAt: number;

      /**
       * Used as a flag to soft delete a subscription item without losing its history for
       * auditability. If set, it will be removed from the subscription items list and
       * will not be included in the billing period item list. Epoch milliseconds.
       */
      expiredAt?: number | null;

      /**
       * JSON object
       */
      metadata?: { [key: string]: string | number | boolean } | null;
    }
  }

  export interface AdjustSubscriptionAtEndOfCurrentBillingPeriodInput {
    newSubscriptionItems: Array<
      | AdjustSubscriptionAtEndOfCurrentBillingPeriodInput.StaticSubscriptionItemClientInsertSchema
      | AdjustSubscriptionAtEndOfCurrentBillingPeriodInput.StaticSubscriptionItemClientSelectSchema
    >;

    timing: 'at_end_of_current_billing_period';
  }

  export namespace AdjustSubscriptionAtEndOfCurrentBillingPeriodInput {
    export interface StaticSubscriptionItemClientInsertSchema {
      /**
       * Epoch milliseconds.
       */
      addedDate: number;

      priceId: string;

      /**
       * A positive integer
       */
      quantity: number;

      subscriptionId: string;

      type: 'static';

      unitPrice: number;

      /**
       * Used as a flag to soft delete a subscription item without losing its history for
       * auditability. If set, it will be removed from the subscription items list and
       * will not be included in the billing period item list. Epoch milliseconds.
       */
      expiredAt?: number | null;

      externalId?: string | null;

      /**
       * JSON object
       */
      metadata?: { [key: string]: string | number | boolean } | null;

      name?: string | null;
    }

    export interface StaticSubscriptionItemClientSelectSchema {
      id: string;

      /**
       * Epoch milliseconds.
       */
      addedDate: number;

      /**
       * Epoch milliseconds.
       */
      createdAt: number;

      externalId: string | null;

      livemode: boolean;

      name: string | null;

      priceId: string;

      /**
       * A positive integer
       */
      quantity: number;

      subscriptionId: string;

      type: 'static';

      unitPrice: number;

      /**
       * Epoch milliseconds.
       */
      updatedAt: number;

      /**
       * Used as a flag to soft delete a subscription item without losing its history for
       * auditability. If set, it will be removed from the subscription items list and
       * will not be included in the billing period item list. Epoch milliseconds.
       */
      expiredAt?: number | null;

      /**
       * JSON object
       */
      metadata?: { [key: string]: string | number | boolean } | null;
    }
  }
}

export interface SubscriptionCancelParams {
  cancellation:
    | SubscriptionCancelParams.CancelSubscriptionAtEndOfBillingPeriodInput
    | SubscriptionCancelParams.CancelSubscriptionAtFutureDateInput
    | SubscriptionCancelParams.CancelSubscriptionImmediatelyInput;
}

export namespace SubscriptionCancelParams {
  export interface CancelSubscriptionAtEndOfBillingPeriodInput {
    timing: 'at_end_of_current_billing_period';
  }

  export interface CancelSubscriptionAtFutureDateInput {
    /**
     * Epoch milliseconds.
     */
    endDate: number;

    timing: 'at_future_date';
  }

  export interface CancelSubscriptionImmediatelyInput {
    timing: 'immediately';
  }
}

export declare namespace Subscriptions {
  export {
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionRetrieveResponse as SubscriptionRetrieveResponse,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionAdjustResponse as SubscriptionAdjustResponse,
    type SubscriptionCancelResponse as SubscriptionCancelResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionAdjustParams as SubscriptionAdjustParams,
    type SubscriptionCancelParams as SubscriptionCancelParams,
  };
}
