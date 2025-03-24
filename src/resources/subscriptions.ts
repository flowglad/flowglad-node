// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Subscriptions extends APIResource {
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

    organizationId: string;

    planName: string | null;

    priceId: string;

    status:
      | 'incomplete'
      | 'incomplete_expired'
      | 'trialing'
      | 'active'
      | 'past_due'
      | 'canceled'
      | 'unpaid'
      | 'paused'
      | 'cancellation_scheduled';

    trialEnd: string | null;

    updatedAt: string | null;
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

    organizationId: string;

    planName: string | null;

    priceId: string;

    status:
      | 'incomplete'
      | 'incomplete_expired'
      | 'trialing'
      | 'active'
      | 'past_due'
      | 'canceled'
      | 'unpaid'
      | 'paused'
      | 'cancellation_scheduled';

    trialEnd: string | null;

    updatedAt: string | null;
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

    organizationId: string;

    planName: string | null;

    priceId: string;

    status:
      | 'incomplete'
      | 'incomplete_expired'
      | 'trialing'
      | 'active'
      | 'past_due'
      | 'canceled'
      | 'unpaid'
      | 'paused'
      | 'cancellation_scheduled';

    trialEnd: string | null;

    updatedAt: string | null;
  }

  export interface SubscriptionItem {
    id: string;

    addedDate: string;

    createdAt: string;

    livemode: boolean;

    metadata: Record<string, unknown> | null;

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

    organizationId: string;

    planName: string | null;

    priceId: string;

    status:
      | 'incomplete'
      | 'incomplete_expired'
      | 'trialing'
      | 'active'
      | 'past_due'
      | 'canceled'
      | 'unpaid'
      | 'paused'
      | 'cancellation_scheduled';

    trialEnd: string | null;

    updatedAt: string | null;
  }
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

      livemode: boolean;

      metadata: Record<string, unknown> | null;

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

      livemode: boolean;

      metadata: Record<string, unknown> | null;

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

      livemode: boolean;

      metadata: Record<string, unknown> | null;

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

      livemode: boolean;

      metadata: Record<string, unknown> | null;

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
    type SubscriptionRetrieveResponse as SubscriptionRetrieveResponse,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionAdjustResponse as SubscriptionAdjustResponse,
    type SubscriptionCancelResponse as SubscriptionCancelResponse,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionAdjustParams as SubscriptionAdjustParams,
    type SubscriptionCancelParams as SubscriptionCancelParams,
  };
}
