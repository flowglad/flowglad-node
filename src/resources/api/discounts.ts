// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Discounts extends APIResource {
  /**
   * Create Discount
   */
  create(body: DiscountCreateParams, options?: Core.RequestOptions): Core.APIPromise<DiscountCreateResponse> {
    return this._client.post('/api/v1/discount', { body, ...options });
  }

  /**
   * Update Discount
   */
  update(
    id: string,
    body: DiscountUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DiscountUpdateResponse> {
    return this._client.put(`/api/v1/discount/${id}`, { body, ...options });
  }

  /**
   * Get Discount
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<DiscountGetResponse> {
    return this._client.get(`/api/v1/discount/${id}`, options);
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
    amount: string | number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    duration: 'once';

    livemode: boolean;

    name: string;

    numberOfPayments: unknown;

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }

  export interface UnionMember1 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: string | number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    duration: 'number_of_payments';

    livemode: boolean;

    name: string;

    /**
     * safeZodPositiveInteger
     */
    numberOfPayments: string | number;

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }

  export interface UnionMember2 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: string | number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    duration: 'forever';

    livemode: boolean;

    name: string;

    numberOfPayments: unknown;

    OrganizationId: string;

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
    amount: string | number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    duration: 'once';

    livemode: boolean;

    name: string;

    numberOfPayments: unknown;

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }

  export interface UnionMember1 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: string | number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    duration: 'number_of_payments';

    livemode: boolean;

    name: string;

    /**
     * safeZodPositiveInteger
     */
    numberOfPayments: string | number;

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }

  export interface UnionMember2 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: string | number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    duration: 'forever';

    livemode: boolean;

    name: string;

    numberOfPayments: unknown;

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }
}

export interface DiscountGetResponse {
  discount:
    | DiscountGetResponse.UnionMember0
    | DiscountGetResponse.UnionMember1
    | DiscountGetResponse.UnionMember2;
}

export namespace DiscountGetResponse {
  export interface UnionMember0 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: string | number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    duration: 'once';

    livemode: boolean;

    name: string;

    numberOfPayments: unknown;

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }

  export interface UnionMember1 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: string | number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    duration: 'number_of_payments';

    livemode: boolean;

    name: string;

    /**
     * safeZodPositiveInteger
     */
    numberOfPayments: string | number;

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }

  export interface UnionMember2 {
    id: string;

    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount: string | number;

    amountType: 'percent' | 'fixed';

    code: string;

    createdAt: string;

    duration: 'forever';

    livemode: boolean;

    name: string;

    numberOfPayments: unknown;

    OrganizationId: string;

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
    amount: string | number;

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
    amount: string | number;

    amountType: 'percent' | 'fixed';

    code: string;

    duration: 'number_of_payments';

    name: string;

    /**
     * safeZodPositiveInteger
     */
    numberOfPayments: string | number;

    active?: boolean;
  }

  export interface UnionMember2 {
    /**
     * safeZodPositiveInteger
     */
    amount: string | number;

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
    amount?: string | number;

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
    numberOfPayments: string | number;

    active?: boolean;

    /**
     * safeZodPositiveInteger
     */
    amount?: string | number;

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
    amount?: string | number;

    amountType?: 'percent' | 'fixed';

    code?: string;

    createdAt?: string;

    name?: string;

    updatedAt?: string | null;
  }
}

export declare namespace Discounts {
  export {
    type DiscountCreateResponse as DiscountCreateResponse,
    type DiscountUpdateResponse as DiscountUpdateResponse,
    type DiscountGetResponse as DiscountGetResponse,
    type DiscountCreateParams as DiscountCreateParams,
    type DiscountUpdateParams as DiscountUpdateParams,
  };
}
