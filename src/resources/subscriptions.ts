// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
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
   * Adjust a Subscription
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
  subscription: SubscriptionCreateResponse.Subscription;
}

export namespace SubscriptionCreateResponse {
  export interface Subscription {
    id: string;

    backupPaymentMethodId: string | null;

    billingCycleAnchorDate: string;

    canceledAt: string | null;

    cancelScheduledAt: string | null;

    createdAt: string;

    createdByCommit: string | null;

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

    metadata: { [key: string]: unknown } | null;

    name: string | null;

    organizationId: string;

    priceId: string | null;

    runBillingAtPeriodStart: boolean | null;

    startDate: string;

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

    trialEnd: string | null;

    updatedAt: string | null;

    updatedByCommit: string | null;
  }
}

export interface SubscriptionRetrieveResponse {
  subscription: SubscriptionRetrieveResponse.Subscription;
}

export namespace SubscriptionRetrieveResponse {
  export interface Subscription {
    id: string;

    backupPaymentMethodId: string | null;

    billingCycleAnchorDate: string;

    canceledAt: string | null;

    cancelScheduledAt: string | null;

    createdAt: string;

    createdByCommit: string | null;

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

    metadata: { [key: string]: unknown } | null;

    name: string | null;

    organizationId: string;

    priceId: string | null;

    runBillingAtPeriodStart: boolean | null;

    startDate: string;

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

    trialEnd: string | null;

    updatedAt: string | null;

    updatedByCommit: string | null;
  }
}

export interface SubscriptionListResponse {
  data: Array<SubscriptionListResponse.Data>;

  hasMore: boolean;

  total: number;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace SubscriptionListResponse {
  export interface Data {
    id: string;

    backupPaymentMethodId: string | null;

    billingCycleAnchorDate: string;

    canceledAt: string | null;

    cancelScheduledAt: string | null;

    createdAt: string;

    createdByCommit: string | null;

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

    metadata: { [key: string]: unknown } | null;

    name: string | null;

    organizationId: string;

    priceId: string | null;

    runBillingAtPeriodStart: boolean | null;

    startDate: string;

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

    trialEnd: string | null;

    updatedAt: string | null;

    updatedByCommit: string | null;
  }
}

export interface SubscriptionAdjustResponse {
  subscription: SubscriptionAdjustResponse.Subscription;

  subscriptionItems: Array<SubscriptionAdjustResponse.SubscriptionItem>;
}

export namespace SubscriptionAdjustResponse {
  export interface Subscription {
    id: string;

    backupPaymentMethodId: string | null;

    billingCycleAnchorDate: string;

    canceledAt: string | null;

    cancelScheduledAt: string | null;

    createdAt: string;

    createdByCommit: string | null;

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

    metadata: { [key: string]: unknown } | null;

    name: string | null;

    organizationId: string;

    priceId: string | null;

    runBillingAtPeriodStart: boolean | null;

    startDate: string;

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

    trialEnd: string | null;

    updatedAt: string | null;

    updatedByCommit: string | null;
  }

  export interface SubscriptionItem {
    id: string;

    addedDate: string;

    createdAt: string;

    createdByCommit: string | null;

    externalId: string | null;

    livemode: boolean;

    metadata: { [key: string]: unknown } | null;

    name: string | null;

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

    updatedByCommit: string | null;
  }
}

export interface SubscriptionCancelResponse {
  subscription: SubscriptionCancelResponse.Subscription;
}

export namespace SubscriptionCancelResponse {
  export interface Subscription {
    id: string;

    backupPaymentMethodId: string | null;

    billingCycleAnchorDate: string;

    canceledAt: string | null;

    cancelScheduledAt: string | null;

    createdAt: string;

    createdByCommit: string | null;

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

    metadata: { [key: string]: unknown } | null;

    name: string | null;

    organizationId: string;

    priceId: string | null;

    runBillingAtPeriodStart: boolean | null;

    startDate: string;

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

    trialEnd: string | null;

    updatedAt: string | null;

    updatedByCommit: string | null;
  }
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

  metadata?: { [key: string]: unknown };

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

  limit?: number;
}

export interface SubscriptionAdjustParams {
  adjustment:
    | SubscriptionAdjustParams.ImmediateAdjustment
    | SubscriptionAdjustParams.AtEndOfCurrentBillingPeriod;
}

export namespace SubscriptionAdjustParams {
  export interface ImmediateAdjustment {
    newSubscriptionItems: Array<
      ImmediateAdjustment.SubscriptionItemInsert | ImmediateAdjustment.SubscriptionItemUpdate
    >;

    prorateCurrentBillingPeriod: boolean;

    timing: 'immediately';
  }

  export namespace ImmediateAdjustment {
    export interface SubscriptionItemInsert {
      addedDate: string;

      externalId: string | null;

      livemode: boolean;

      metadata: { [key: string]: unknown } | null;

      name: string | null;

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
    }

    export interface SubscriptionItemUpdate {
      id: string;

      addedDate: string;

      createdAt: string;

      createdByCommit: string | null;

      externalId: string | null;

      livemode: boolean;

      metadata: { [key: string]: unknown } | null;

      name: string | null;

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

      updatedByCommit: string | null;
    }
  }

  export interface AtEndOfCurrentBillingPeriod {
    newSubscriptionItems: Array<
      AtEndOfCurrentBillingPeriod.SubscriptionItemInsert | AtEndOfCurrentBillingPeriod.SubscriptionItemUpdate
    >;

    timing: 'at_end_of_current_billing_period';
  }

  export namespace AtEndOfCurrentBillingPeriod {
    export interface SubscriptionItemInsert {
      addedDate: string;

      externalId: string | null;

      livemode: boolean;

      metadata: { [key: string]: unknown } | null;

      name: string | null;

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
    }

    export interface SubscriptionItemUpdate {
      id: string;

      addedDate: string;

      createdAt: string;

      createdByCommit: string | null;

      externalId: string | null;

      livemode: boolean;

      metadata: { [key: string]: unknown } | null;

      name: string | null;

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

      updatedByCommit: string | null;
    }
  }
}

export interface SubscriptionCancelParams {
  cancellation:
    | SubscriptionCancelParams.AtEndOfCurrentBillingPeriod
    | SubscriptionCancelParams.AtFutureDate
    | SubscriptionCancelParams.Immediately;
}

export namespace SubscriptionCancelParams {
  export interface AtEndOfCurrentBillingPeriod {
    timing: 'at_end_of_current_billing_period';
  }

  export interface AtFutureDate {
    endDate: string;

    timing: 'at_future_date';
  }

  export interface Immediately {
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
