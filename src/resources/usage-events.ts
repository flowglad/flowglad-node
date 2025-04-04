// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class UsageEvents extends APIResource {
  /**
   * Create UsageEvent
   */
  create(body: UsageEventCreateParams, options?: RequestOptions): APIPromise<UsageEventCreateResponse> {
    return this._client.post('/api/v1/usage-events', { body, ...options });
  }

  /**
   * Get UsageEvent
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<UsageEventRetrieveResponse> {
    return this._client.get(path`/api/v1/usage-events/${id}`, options);
  }

  /**
   * Update UsageEvent
   */
  update(
    id: string,
    body: UsageEventUpdateParams,
    options?: RequestOptions,
  ): APIPromise<UsageEventUpdateResponse> {
    return this._client.put(path`/api/v1/usage-events/${id}`, { body, ...options });
  }
}

export interface UsageEventCreateResponse {
  usageEvent: UsageEventCreateResponse.UsageEvent;
}

export namespace UsageEventCreateResponse {
  export interface UsageEvent {
    id: string;

    amount: number;

    createdAt: string;

    customerId: string;

    priceId: string;

    /**
     * Properties for the usage event. Only required when using the
     * "count_distinct_properties" aggregation type.
     */
    properties: Record<string, unknown>;

    subscriptionId: string;

    /**
     * A unique identifier for the transaction. This is used to prevent duplicate usage
     * events from being created.
     */
    transactionId: string;

    updatedAt: string | null;

    /**
     * The date the usage occurred. Currently should always the current date. If the
     * usage occurs in a date that is outside of the current billing period, the usage
     * will still be attached to the current billing peirod.
     */
    usageDate: string;

    usageMeterId: string;
  }
}

export interface UsageEventRetrieveResponse {
  usageEvent: UsageEventRetrieveResponse.UsageEvent;
}

export namespace UsageEventRetrieveResponse {
  export interface UsageEvent {
    id: string;

    amount: number;

    createdAt: string;

    customerId: string;

    priceId: string;

    /**
     * Properties for the usage event. Only required when using the
     * "count_distinct_properties" aggregation type.
     */
    properties: Record<string, unknown>;

    subscriptionId: string;

    /**
     * A unique identifier for the transaction. This is used to prevent duplicate usage
     * events from being created.
     */
    transactionId: string;

    updatedAt: string | null;

    /**
     * The date the usage occurred. Currently should always the current date. If the
     * usage occurs in a date that is outside of the current billing period, the usage
     * will still be attached to the current billing peirod.
     */
    usageDate: string;

    usageMeterId: string;
  }
}

export interface UsageEventUpdateResponse {
  usageEvent: UsageEventUpdateResponse.UsageEvent;
}

export namespace UsageEventUpdateResponse {
  export interface UsageEvent {
    id: string;

    amount: number;

    createdAt: string;

    customerId: string;

    priceId: string;

    /**
     * Properties for the usage event. Only required when using the
     * "count_distinct_properties" aggregation type.
     */
    properties: Record<string, unknown>;

    subscriptionId: string;

    /**
     * A unique identifier for the transaction. This is used to prevent duplicate usage
     * events from being created.
     */
    transactionId: string;

    updatedAt: string | null;

    /**
     * The date the usage occurred. Currently should always the current date. If the
     * usage occurs in a date that is outside of the current billing period, the usage
     * will still be attached to the current billing peirod.
     */
    usageDate: string;

    usageMeterId: string;
  }
}

export interface UsageEventCreateParams {
  usageEvent: UsageEventCreateParams.UsageEvent;
}

export namespace UsageEventCreateParams {
  export interface UsageEvent {
    amount: number;

    customerId: string;

    priceId: string;

    subscriptionId: string;

    /**
     * A unique identifier for the transaction. This is used to prevent duplicate usage
     * events from being created.
     */
    transactionId: string;

    usageMeterId: string;

    /**
     * Properties for the usage event. Only required when using the
     * "count_distinct_properties" aggregation type.
     */
    properties?: Record<string, unknown> | null;

    /**
     * The date the usage occurred. Currently should always the current date. If the
     * usage occurs in a date that is outside of the current billing period, the usage
     * will still be attached to the current billing peirod.
     */
    usageDate?: string;
  }
}

export interface UsageEventUpdateParams {
  usageEvent: UsageEventUpdateParams.UsageEvent;
}

export namespace UsageEventUpdateParams {
  export interface UsageEvent {
    id: string;

    amount?: number;

    priceId?: string;

    /**
     * Properties for the usage event. Only required when using the
     * "count_distinct_properties" aggregation type.
     */
    properties?: Record<string, unknown> | null;

    /**
     * A unique identifier for the transaction. This is used to prevent duplicate usage
     * events from being created.
     */
    transactionId?: string;

    /**
     * The date the usage occurred. Currently should always the current date. If the
     * usage occurs in a date that is outside of the current billing period, the usage
     * will still be attached to the current billing peirod.
     */
    usageDate?: string;
  }
}

export declare namespace UsageEvents {
  export {
    type UsageEventCreateResponse as UsageEventCreateResponse,
    type UsageEventRetrieveResponse as UsageEventRetrieveResponse,
    type UsageEventUpdateResponse as UsageEventUpdateResponse,
    type UsageEventCreateParams as UsageEventCreateParams,
    type UsageEventUpdateParams as UsageEventUpdateParams,
  };
}
