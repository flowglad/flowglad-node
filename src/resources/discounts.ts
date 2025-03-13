// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Discounts extends APIResource {
  /**
   * Create Discount
   */
  create(body: DiscountCreateParams, options?: Core.RequestOptions): Core.APIPromise<DiscountCreateResponse> {
    return this._client.post('/api/v1/discounts', { body, ...options });
  }

  /**
   * Get Discount
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<DiscountRetrieveResponse> {
    return this._client.get(`/api/v1/discounts/${id}`, options);
  }

  /**
   * Update Discount
   */
  update(
    id: string,
    body: DiscountUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DiscountUpdateResponse> {
    return this._client.put(`/api/v1/discounts/${id}`, { body, ...options });
  }

  /**
   * List Discounts
   */
  list(query?: DiscountListParams, options?: Core.RequestOptions): Core.APIPromise<DiscountListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<DiscountListResponse>;
  list(
    query: DiscountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DiscountListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v1/discounts', { query, ...options });
  }
}

export interface DiscountCreateResponse {
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

    duration: 'once';

    livemode: boolean;

    name: string;

    numberOfPayments: unknown;

    organizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
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

    duration: 'number_of_payments';

    livemode: boolean;

    name: string;

    /**
     * safeZodPositiveInteger
     */
    numberOfPayments: number;

    organizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
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

    duration: 'forever';

    livemode: boolean;

    name: string;

    numberOfPayments: unknown;

    organizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }
}

export interface DiscountRetrieveResponse {
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

    duration: 'once';

    livemode: boolean;

    name: string;

    numberOfPayments: unknown;

    organizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
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

    duration: 'number_of_payments';

    livemode: boolean;

    name: string;

    /**
     * safeZodPositiveInteger
     */
    numberOfPayments: number;

    organizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
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

    duration: 'forever';

    livemode: boolean;

    name: string;

    numberOfPayments: unknown;

    organizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }
}

export interface DiscountUpdateResponse {
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

    duration: 'once';

    livemode: boolean;

    name: string;

    numberOfPayments: unknown;

    organizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
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

    duration: 'number_of_payments';

    livemode: boolean;

    name: string;

    /**
     * safeZodPositiveInteger
     */
    numberOfPayments: number;

    organizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
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

    duration: 'forever';

    livemode: boolean;

    name: string;

    numberOfPayments: unknown;

    organizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
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

    duration: 'once';

    livemode: boolean;

    name: string;

    numberOfPayments: unknown;

    organizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
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

    duration: 'number_of_payments';

    livemode: boolean;

    name: string;

    /**
     * safeZodPositiveInteger
     */
    numberOfPayments: number;

    organizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
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

    duration: 'forever';

    livemode: boolean;

    name: string;

    numberOfPayments: unknown;

    organizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }
}

export interface DiscountCreateParams {
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

    numberOfPayments: unknown;

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

    numberOfPayments: unknown;

    active?: boolean;
  }
}

export interface DiscountUpdateParams {
  discount:
    | DiscountUpdateParams.UnionMember0
    | DiscountUpdateParams.UnionMember1
    | DiscountUpdateParams.UnionMember2;
}

export namespace DiscountUpdateParams {
  export interface UnionMember0 {
    id: string;

    duration: 'once';

    numberOfPayments: unknown;

    active?: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount?: number;

    amountType?: 'percent' | 'fixed';

    code?: string;

    createdAt?: string;

    name?: string;

    updatedAt?: string | null;
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

    name?: string;

    updatedAt?: string | null;
  }

  export interface UnionMember2 {
    id: string;

    duration: 'forever';

    numberOfPayments: unknown;

    active?: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount?: number;

    amountType?: 'percent' | 'fixed';

    code?: string;

    createdAt?: string;

    name?: string;

    updatedAt?: string | null;
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
