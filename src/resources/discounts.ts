// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Discounts extends APIResource {
  /**
   * Create Discount
   */
  create(body: DiscountCreateParams, options?: RequestOptions): APIPromise<DiscountCreateResponse> {
    return this._client.post('/api/v1/discounts', { body, ...options });
  }

  /**
   * Get Discount
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DiscountRetrieveResponse> {
    return this._client.get(path`/api/v1/discounts/${id}`, options);
  }

  /**
   * Update Discount
   */
  update(
    id: string,
    body: DiscountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DiscountUpdateResponse> {
    return this._client.put(path`/api/v1/discounts/${id}`, { body, ...options });
  }

  /**
   * List Discounts
   */
  list(
    query: DiscountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DiscountListResponse> {
    return this._client.get('/api/v1/discounts', { query, ...options });
  }
}

export interface DiscountCreateResponse {
  /**
   * A discount record, which describes a discount that can be applied to purchases
   * or subscriptions. Discounts can be one-time, have a fixed number of payments, or
   * be applied indefinitely.
   */
  discount:
    | DiscountCreateResponse.UnionMember0
    | DiscountCreateResponse.UnionMember1
    | DiscountCreateResponse.UnionMember2;
}

export namespace DiscountCreateResponse {
  export interface UnionMember0 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    createdByCommit: string | null;

    duration: 'forever';

    livemode: boolean;

    name: string;

    numberOfPayments: 'null' | null;

    organizationId: string;

    updatedAt: string | null;

    updatedByCommit: string | null;
  }

  export interface UnionMember1 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    createdByCommit: string | null;

    duration: 'number_of_payments';

    livemode: boolean;

    name: string;

    /**
     * safeZodPositiveInteger
     */
    numberOfPayments: number;

    organizationId: string;

    updatedAt: string | null;

    updatedByCommit: string | null;
  }

  export interface UnionMember2 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    createdByCommit: string | null;

    duration: 'once';

    livemode: boolean;

    name: string;

    numberOfPayments: 'null' | null;

    organizationId: string;

    updatedAt: string | null;

    updatedByCommit: string | null;
  }
}

export interface DiscountRetrieveResponse {
  /**
   * A discount record, which describes a discount that can be applied to purchases
   * or subscriptions. Discounts can be one-time, have a fixed number of payments, or
   * be applied indefinitely.
   */
  discount:
    | DiscountRetrieveResponse.UnionMember0
    | DiscountRetrieveResponse.UnionMember1
    | DiscountRetrieveResponse.UnionMember2;
}

export namespace DiscountRetrieveResponse {
  export interface UnionMember0 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    createdByCommit: string | null;

    duration: 'forever';

    livemode: boolean;

    name: string;

    numberOfPayments: 'null' | null;

    organizationId: string;

    updatedAt: string | null;

    updatedByCommit: string | null;
  }

  export interface UnionMember1 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    createdByCommit: string | null;

    duration: 'number_of_payments';

    livemode: boolean;

    name: string;

    /**
     * safeZodPositiveInteger
     */
    numberOfPayments: number;

    organizationId: string;

    updatedAt: string | null;

    updatedByCommit: string | null;
  }

  export interface UnionMember2 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    createdByCommit: string | null;

    duration: 'once';

    livemode: boolean;

    name: string;

    numberOfPayments: 'null' | null;

    organizationId: string;

    updatedAt: string | null;

    updatedByCommit: string | null;
  }
}

export interface DiscountUpdateResponse {
  /**
   * A discount record, which describes a discount that can be applied to purchases
   * or subscriptions. Discounts can be one-time, have a fixed number of payments, or
   * be applied indefinitely.
   */
  discount:
    | DiscountUpdateResponse.UnionMember0
    | DiscountUpdateResponse.UnionMember1
    | DiscountUpdateResponse.UnionMember2;
}

export namespace DiscountUpdateResponse {
  export interface UnionMember0 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    createdByCommit: string | null;

    duration: 'forever';

    livemode: boolean;

    name: string;

    numberOfPayments: 'null' | null;

    organizationId: string;

    updatedAt: string | null;

    updatedByCommit: string | null;
  }

  export interface UnionMember1 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    createdByCommit: string | null;

    duration: 'number_of_payments';

    livemode: boolean;

    name: string;

    /**
     * safeZodPositiveInteger
     */
    numberOfPayments: number;

    organizationId: string;

    updatedAt: string | null;

    updatedByCommit: string | null;
  }

  export interface UnionMember2 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    createdByCommit: string | null;

    duration: 'once';

    livemode: boolean;

    name: string;

    numberOfPayments: 'null' | null;

    organizationId: string;

    updatedAt: string | null;

    updatedByCommit: string | null;
  }
}

export interface DiscountListResponse {
  data: Array<
    DiscountListResponse.UnionMember0 | DiscountListResponse.UnionMember1 | DiscountListResponse.UnionMember2
  >;

  hasMore: boolean;

  total: number;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace DiscountListResponse {
  export interface UnionMember0 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    createdByCommit: string | null;

    duration: 'forever';

    livemode: boolean;

    name: string;

    numberOfPayments: 'null' | null;

    organizationId: string;

    updatedAt: string | null;

    updatedByCommit: string | null;
  }

  export interface UnionMember1 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    createdByCommit: string | null;

    duration: 'number_of_payments';

    livemode: boolean;

    name: string;

    /**
     * safeZodPositiveInteger
     */
    numberOfPayments: number;

    organizationId: string;

    updatedAt: string | null;

    updatedByCommit: string | null;
  }

  export interface UnionMember2 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    createdByCommit: string | null;

    duration: 'once';

    livemode: boolean;

    name: string;

    numberOfPayments: 'null' | null;

    organizationId: string;

    updatedAt: string | null;

    updatedByCommit: string | null;
  }
}

export interface DiscountCreateParams {
  /**
   * A discount record, which describes a discount that can be applied to purchases
   * or subscriptions. Discounts can be one-time, have a fixed number of payments, or
   * be applied indefinitely.
   */
  discount:
    | DiscountCreateParams.UnionMember0
    | DiscountCreateParams.UnionMember1
    | DiscountCreateParams.UnionMember2;
}

export namespace DiscountCreateParams {
  export interface UnionMember0 {
    /**
     * safeZodPositiveInteger
     */
    amount: number;

    amountType: 'percent' | 'fixed';

    code: string;

    duration: 'once';

    name: string;

    numberOfPayments: 'null' | null;

    active?: boolean;
  }

  export interface UnionMember1 {
    /**
     * safeZodPositiveInteger
     */
    amount: number;

    amountType: 'percent' | 'fixed';

    code: string;

    duration: 'number_of_payments';

    name: string;

    /**
     * safeZodPositiveInteger
     */
    numberOfPayments: number;

    active?: boolean;
  }

  export interface UnionMember2 {
    /**
     * safeZodPositiveInteger
     */
    amount: number;

    amountType: 'percent' | 'fixed';

    code: string;

    duration: 'forever';

    name: string;

    numberOfPayments: 'null' | null;

    active?: boolean;
  }
}

export interface DiscountUpdateParams {
  /**
   * A discount record, which describes a discount that can be applied to purchases
   * or subscriptions. Discounts can be one-time, have a fixed number of payments, or
   * be applied indefinitely.
   */
  discount:
    | DiscountUpdateParams.UnionMember0
    | DiscountUpdateParams.UnionMember1
    | DiscountUpdateParams.UnionMember2;
}

export namespace DiscountUpdateParams {
  export interface UnionMember0 {
    id: string;

    duration: 'once';

    numberOfPayments: 'null' | null;

    active?: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount?: number;

    amountType?: 'percent' | 'fixed';

    code?: string;

    createdAt?: string;

    createdByCommit?: string | null;

    name?: string;

    updatedAt?: string | null;

    updatedByCommit?: string | null;
  }

  export interface UnionMember1 {
    id: string;

    duration: 'number_of_payments';

    /**
     * safeZodPositiveInteger
     */
    numberOfPayments: number;

    active?: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount?: number;

    amountType?: 'percent' | 'fixed';

    code?: string;

    createdAt?: string;

    createdByCommit?: string | null;

    name?: string;

    updatedAt?: string | null;

    updatedByCommit?: string | null;
  }

  export interface UnionMember2 {
    id: string;

    duration: 'forever';

    numberOfPayments: 'null' | null;

    active?: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount?: number;

    amountType?: 'percent' | 'fixed';

    code?: string;

    createdAt?: string;

    createdByCommit?: string | null;

    name?: string;

    updatedAt?: string | null;

    updatedByCommit?: string | null;
  }
}

export interface DiscountListParams {
  cursor?: string;

  limit?: number;
}

export declare namespace Discounts {
  export {
    type DiscountCreateResponse as DiscountCreateResponse,
    type DiscountRetrieveResponse as DiscountRetrieveResponse,
    type DiscountUpdateResponse as DiscountUpdateResponse,
    type DiscountListResponse as DiscountListResponse,
    type DiscountCreateParams as DiscountCreateParams,
    type DiscountUpdateParams as DiscountUpdateParams,
    type DiscountListParams as DiscountListParams,
  };
}
