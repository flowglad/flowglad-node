// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Subscriptions extends APIResource {
  /**
   * Get Subscription
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<SubscriptionRetrieveResponse> {
    return this._client.get(`/api/v1/subscription/${id}`, options);
  }

  /**
   * List Subscriptions
   */
  list(
    query?: SubscriptionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SubscriptionListResponse>;
  list(
    query: SubscriptionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v1/subscriptions', { query, ...options });
  }

  /**
   * Adjust a subscription
   */
  adjust(
    id: string,
    body: SubscriptionAdjustParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionAdjustResponse> {
    return this._client.post(`/api/v1/subscriptions/${id}/adjust`, { body, ...options });
  }

  /**
   * Cancel a subscription
   */
  cancel(
    id: string,
    body: SubscriptionCancelParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionCancelResponse> {
    return this._client.post(`/api/v1/subscriptions/${id}/cancel`, { body, ...options });
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

    CustomerProfileId: string;

    defaultPaymentMethodId: string | null;

    interval: 'day' | 'week' | 'month' | 'year';

    /**
     * safeZodPositiveInteger
     */
    intervalCount: number;

    livemode: boolean;

    metadata: Record<string, unknown> | null;

    OrganizationId: string;

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

    VariantId: string;
  }
}

export interface SubscriptionListResponse {
  data: Array<SubscriptionListResponse.Data>;

  hasMore: boolean;

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

    CustomerProfileId: string;

    defaultPaymentMethodId: string | null;

    interval: 'day' | 'week' | 'month' | 'year';

    /**
     * safeZodPositiveInteger
     */
    intervalCount: number;

    livemode: boolean;

    metadata: Record<string, unknown> | null;

    OrganizationId: string;

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

    VariantId: string;
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

    CustomerProfileId: string;

    defaultPaymentMethodId: string | null;

    interval: 'day' | 'week' | 'month' | 'year';

    /**
     * safeZodPositiveInteger
     */
    intervalCount: number;

    livemode: boolean;

    metadata: Record<string, unknown> | null;

    OrganizationId: string;

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

    VariantId: string;
  }

  export interface SubscriptionItem {
    id: string;

    addedDate: string;

    createdAt: string;

    livemode: boolean;

    metadata: Record<string, unknown> | null;

    name: string | null;

    /**
     * safeZodPositiveInteger
     */
    quantity: number;

    SubscriptionId: string;

    /**
     * safeZodPositiveInteger
     */
    unitPrice: number | 0;

    updatedAt: string | null;

    VariantId: string;
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

    CustomerProfileId: string;

    defaultPaymentMethodId: string | null;

    interval: 'day' | 'week' | 'month' | 'year';

    /**
     * safeZodPositiveInteger
     */
    intervalCount: number;

    livemode: boolean;

    metadata: Record<string, unknown> | null;

    OrganizationId: string;

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

    VariantId: string;
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

      /**
       * safeZodPositiveInteger
       */
      quantity: number;

      SubscriptionId: string;

      /**
       * safeZodPositiveInteger
       */
      unitPrice: number | 0;

      VariantId: string;
    }

    export interface SubscriptionItemUpdate {
      id: string;

      addedDate: string;

      createdAt: string;

      livemode: boolean;

      metadata: Record<string, unknown> | null;

      name: string | null;

      /**
       * safeZodPositiveInteger
       */
      quantity: number;

      SubscriptionId: string;

      /**
       * safeZodPositiveInteger
       */
      unitPrice: number | 0;

      updatedAt: string | null;

      VariantId: string;
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

      /**
       * safeZodPositiveInteger
       */
      quantity: number;

      SubscriptionId: string;

      /**
       * safeZodPositiveInteger
       */
      unitPrice: number | 0;

      VariantId: string;
    }

    export interface SubscriptionItemUpdate {
      id: string;

      addedDate: string;

      createdAt: string;

      livemode: boolean;

      metadata: Record<string, unknown> | null;

      name: string | null;

      /**
       * safeZodPositiveInteger
       */
      quantity: number;

      SubscriptionId: string;

      /**
       * safeZodPositiveInteger
       */
      unitPrice: number | 0;

      updatedAt: string | null;

      VariantId: string;
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
