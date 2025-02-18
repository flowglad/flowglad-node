// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Discounts extends APIResource {
  /**
   * Create Discount
   */
  create(body: DiscountCreateParams, options?: Core.RequestOptions): Core.APIPromise<DiscountCreateResponse> {
    return this._client.post('/api/v1/discount', { body, ...options });
  }

  /**
   * Get Discount
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<DiscountRetrieveResponse> {
    return this._client.get(`/api/v1/discount/${id}`, options);
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
    | DiscountCreateResponse.OnceDiscount
    | DiscountCreateResponse.NumberOfPaymentsDiscount
    | DiscountCreateResponse.ForeverDiscount;
}

export namespace DiscountCreateResponse {
  export interface OnceDiscount {
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

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }

  export interface NumberOfPaymentsDiscount {
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

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }

  export interface ForeverDiscount {
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

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }
}

export interface DiscountRetrieveResponse {
  discount:
    | DiscountRetrieveResponse.OnceDiscount
    | DiscountRetrieveResponse.NumberOfPaymentsDiscount
    | DiscountRetrieveResponse.ForeverDiscount;
}

export namespace DiscountRetrieveResponse {
  export interface OnceDiscount {
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

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }

  export interface NumberOfPaymentsDiscount {
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

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }

  export interface ForeverDiscount {
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

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }
}

export interface DiscountUpdateResponse {
  discount:
    | DiscountUpdateResponse.OnceDiscount
    | DiscountUpdateResponse.NumberOfPaymentsDiscount
    | DiscountUpdateResponse.ForeverDiscount;
}

export namespace DiscountUpdateResponse {
  export interface OnceDiscount {
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

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }

  export interface NumberOfPaymentsDiscount {
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

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }

  export interface ForeverDiscount {
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

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }
}

export interface DiscountListResponse {
  data: Array<
    | DiscountListResponse.OnceDiscount
    | DiscountListResponse.NumberOfPaymentsDiscount
    | DiscountListResponse.ForeverDiscount
  >;

  hasMore: boolean;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace DiscountListResponse {
  export interface OnceDiscount {
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

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }

  export interface NumberOfPaymentsDiscount {
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

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }

  export interface ForeverDiscount {
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

    OrganizationId: string;

    stripeCouponId: string | null;

    updatedAt: string | null;
  }
}

export interface DiscountCreateParams {
  discount:
    | DiscountCreateParams.OnceDiscount
    | DiscountCreateParams.NumberOfPaymentsDiscount
    | DiscountCreateParams.ForeverDiscount;
}

export namespace DiscountCreateParams {
  export interface OnceDiscount {
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

  export interface NumberOfPaymentsDiscount {
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

  export interface ForeverDiscount {
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
    | DiscountUpdateParams.OnceDiscount
    | DiscountUpdateParams.NumberOfPaymentsDiscount
    | DiscountUpdateParams.ForeverDiscount;
}

export namespace DiscountUpdateParams {
  export interface OnceDiscount {
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

  export interface NumberOfPaymentsDiscount {
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

  export interface ForeverDiscount {
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
