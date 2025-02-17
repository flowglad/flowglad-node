// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Variant extends APIResource {
  /**
   * Create Variant
   */
  create(body: VariantCreateParams, options?: Core.RequestOptions): Core.APIPromise<VariantCreateResponse> {
    return this._client.post('/api/v1/variant', { body, ...options });
  }

  /**
   * Update Variant
   */
  update(
    id: string,
    body: VariantUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VariantUpdateResponse> {
    return this._client.put(`/api/v1/variant/${id}`, { body, ...options });
  }

  /**
   * List Variants
   */
  list(query?: VariantListParams, options?: Core.RequestOptions): Core.APIPromise<VariantListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<VariantListResponse>;
  list(
    query: VariantListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VariantListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v1/variants', { query, ...options });
  }
}

export interface VariantCreateResponse {
  variant: VariantCreateResponse.UnionMember0 | VariantCreateResponse.UnionMember1;
}

export namespace VariantCreateResponse {
  export interface UnionMember0 {
    id: string;

    active: boolean;

    createdAt: string;

    /**
     * safeZodPositiveInteger
     */
    intervalCount: string | number;

    intervalUnit: 'day' | 'week' | 'month' | 'year';

    isDefault: boolean;

    livemode: boolean;

    name: string | null;

    priceType: 'subscription';

    ProductId: string;

    /**
     * safeZodPositiveInteger
     */
    setupFeeAmount: string | number | 0 | null;

    /**
     * safeZodPositiveInteger
     */
    trialPeriodDays: string | number | 0 | null;

    /**
     * safeZodPositiveInteger
     */
    unitPrice: string | number;

    updatedAt: string | null;
  }

  export interface UnionMember1 {
    id: string;

    active: boolean;

    createdAt: string;

    isDefault: boolean;

    livemode: boolean;

    name: string | null;

    priceType: 'single_payment';

    ProductId: string;

    /**
     * safeZodPositiveInteger
     */
    unitPrice: string | number;

    updatedAt: string | null;

    /**
     * safeZodNullOrUndefined
     */
    intervalCount?: unknown | unknown | null;

    /**
     * safeZodNullOrUndefined
     */
    intervalUnit?: unknown | unknown | null;

    /**
     * safeZodNullOrUndefined
     */
    setupFeeAmount?: unknown | unknown | null;

    /**
     * safeZodNullOrUndefined
     */
    trialPeriodDays?: unknown | unknown | null;
  }
}

export interface VariantUpdateResponse {
  variant: VariantUpdateResponse.UnionMember0 | VariantUpdateResponse.UnionMember1;
}

export namespace VariantUpdateResponse {
  export interface UnionMember0 {
    id: string;

    active: boolean;

    createdAt: string;

    /**
     * safeZodPositiveInteger
     */
    intervalCount: string | number;

    intervalUnit: 'day' | 'week' | 'month' | 'year';

    isDefault: boolean;

    livemode: boolean;

    name: string | null;

    priceType: 'subscription';

    ProductId: string;

    /**
     * safeZodPositiveInteger
     */
    setupFeeAmount: string | number | 0 | null;

    /**
     * safeZodPositiveInteger
     */
    trialPeriodDays: string | number | 0 | null;

    /**
     * safeZodPositiveInteger
     */
    unitPrice: string | number;

    updatedAt: string | null;
  }

  export interface UnionMember1 {
    id: string;

    active: boolean;

    createdAt: string;

    isDefault: boolean;

    livemode: boolean;

    name: string | null;

    priceType: 'single_payment';

    ProductId: string;

    /**
     * safeZodPositiveInteger
     */
    unitPrice: string | number;

    updatedAt: string | null;

    /**
     * safeZodNullOrUndefined
     */
    intervalCount?: unknown | unknown | null;

    /**
     * safeZodNullOrUndefined
     */
    intervalUnit?: unknown | unknown | null;

    /**
     * safeZodNullOrUndefined
     */
    setupFeeAmount?: unknown | unknown | null;

    /**
     * safeZodNullOrUndefined
     */
    trialPeriodDays?: unknown | unknown | null;
  }
}

export interface VariantListResponse {
  data: Array<VariantListResponse.UnionMember0 | VariantListResponse.UnionMember1>;

  hasMore: boolean;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace VariantListResponse {
  export interface UnionMember0 {
    id: string;

    active: boolean;

    createdAt: string;

    /**
     * safeZodPositiveInteger
     */
    intervalCount: string | number;

    intervalUnit: 'day' | 'week' | 'month' | 'year';

    isDefault: boolean;

    livemode: boolean;

    name: string | null;

    priceType: 'subscription';

    ProductId: string;

    /**
     * safeZodPositiveInteger
     */
    setupFeeAmount: string | number | 0 | null;

    /**
     * safeZodPositiveInteger
     */
    trialPeriodDays: string | number | 0 | null;

    /**
     * safeZodPositiveInteger
     */
    unitPrice: string | number;

    updatedAt: string | null;
  }

  export interface UnionMember1 {
    id: string;

    active: boolean;

    createdAt: string;

    isDefault: boolean;

    livemode: boolean;

    name: string | null;

    priceType: 'single_payment';

    ProductId: string;

    /**
     * safeZodPositiveInteger
     */
    unitPrice: string | number;

    updatedAt: string | null;

    /**
     * safeZodNullOrUndefined
     */
    intervalCount?: unknown | unknown | null;

    /**
     * safeZodNullOrUndefined
     */
    intervalUnit?: unknown | unknown | null;

    /**
     * safeZodNullOrUndefined
     */
    setupFeeAmount?: unknown | unknown | null;

    /**
     * safeZodNullOrUndefined
     */
    trialPeriodDays?: unknown | unknown | null;
  }
}

export interface VariantCreateParams {
  variant: VariantCreateParams.UnionMember0 | VariantCreateParams.UnionMember1;
}

export namespace VariantCreateParams {
  export interface UnionMember0 {
    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    intervalCount: string | number;

    intervalUnit: 'day' | 'week' | 'month' | 'year';

    isDefault: boolean;

    livemode: boolean;

    name: string | null;

    priceType: 'subscription';

    ProductId: string;

    /**
     * safeZodPositiveInteger
     */
    setupFeeAmount: string | number | 0 | null;

    /**
     * safeZodPositiveInteger
     */
    trialPeriodDays: string | number | 0 | null;

    /**
     * safeZodPositiveInteger
     */
    unitPrice: string | number;

    stripePriceId?: string | null;
  }

  export interface UnionMember1 {
    active: boolean;

    isDefault: boolean;

    livemode: boolean;

    name: string | null;

    priceType: 'single_payment';

    ProductId: string;

    /**
     * safeZodPositiveInteger
     */
    unitPrice: string | number;

    /**
     * safeZodNullOrUndefined
     */
    intervalCount?: unknown | unknown | null;

    /**
     * safeZodNullOrUndefined
     */
    intervalUnit?: unknown | unknown | null;

    /**
     * safeZodNullOrUndefined
     */
    setupFeeAmount?: unknown | unknown | null;

    stripePriceId?: string | null;

    /**
     * safeZodNullOrUndefined
     */
    trialPeriodDays?: unknown | unknown | null;
  }
}

export interface VariantUpdateParams {
  variant: VariantUpdateParams.UnionMember0 | VariantUpdateParams.UnionMember1;
}

export namespace VariantUpdateParams {
  export interface UnionMember0 {
    id: string;

    priceType: 'subscription';

    active?: boolean;

    /**
     * safeZodPositiveInteger
     */
    intervalCount?: string | number;

    intervalUnit?: 'day' | 'week' | 'month' | 'year';

    isDefault?: boolean;

    livemode?: boolean;

    name?: string | null;

    ProductId?: string;

    /**
     * safeZodPositiveInteger
     */
    setupFeeAmount?: string | number | 0 | null;

    stripePriceId?: string | null;

    /**
     * safeZodPositiveInteger
     */
    trialPeriodDays?: string | number | 0 | null;

    /**
     * safeZodPositiveInteger
     */
    unitPrice?: string | number;
  }

  export interface UnionMember1 {
    id: string;

    priceType: 'single_payment';

    active?: boolean;

    /**
     * safeZodNullOrUndefined
     */
    intervalCount?: unknown | unknown | null;

    /**
     * safeZodNullOrUndefined
     */
    intervalUnit?: unknown | unknown | null;

    isDefault?: boolean;

    livemode?: boolean;

    name?: string | null;

    ProductId?: string;

    /**
     * safeZodNullOrUndefined
     */
    setupFeeAmount?: unknown | unknown | null;

    stripePriceId?: string | null;

    /**
     * safeZodNullOrUndefined
     */
    trialPeriodDays?: unknown | unknown | null;

    /**
     * safeZodPositiveInteger
     */
    unitPrice?: string | number;
  }
}

export interface VariantListParams {
  cursor?: string;

  limit?: number;
}

export declare namespace Variant {
  export {
    type VariantCreateResponse as VariantCreateResponse,
    type VariantUpdateResponse as VariantUpdateResponse,
    type VariantListResponse as VariantListResponse,
    type VariantCreateParams as VariantCreateParams,
    type VariantUpdateParams as VariantUpdateParams,
    type VariantListParams as VariantListParams,
  };
}
