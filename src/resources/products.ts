// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Products extends APIResource {
  /**
   * Create products
   */
  create(body: ProductCreateParams, options?: Core.RequestOptions): Core.APIPromise<ProductCreateResponse> {
    return this._client.post('/api/v1/products', { body, ...options });
  }

  /**
   * Update products
   */
  update(
    id: string,
    body: ProductUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductUpdateResponse> {
    return this._client.put(`/api/v1/products/${id}`, { body, ...options });
  }

  /**
   * List products
   */
  list(query?: ProductListParams, options?: Core.RequestOptions): Core.APIPromise<ProductListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ProductListResponse>;
  list(
    query: ProductListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProductListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v1/products', { query, ...options });
  }
}

export interface ProductCreateResponse {
  product: ProductCreateResponse.Product;
}

export namespace ProductCreateResponse {
  export interface Product {
    id: string;

    active: boolean;

    /**
     * safeZodDate
     */
    createdAt: string | string;

    description: string | null;

    imageURL: string | null;

    livemode: boolean;

    name: string;

    OrganizationId: string;

    type: 'service' | 'digital' | (string & {});

    /**
     * safeZodDate
     */
    updatedAt: string | string;
  }
}

export interface ProductUpdateResponse {
  product: ProductUpdateResponse.Product;
}

export namespace ProductUpdateResponse {
  export interface Product {
    id: string;

    active: boolean;

    /**
     * safeZodDate
     */
    createdAt: string | string;

    description: string | null;

    imageURL: string | null;

    livemode: boolean;

    name: string;

    OrganizationId: string;

    type: 'service' | 'digital' | (string & {});

    /**
     * safeZodDate
     */
    updatedAt: string | string;
  }
}

export type ProductListResponse = Array<ProductListResponse.ProductListResponseItem>;

export namespace ProductListResponse {
  export interface ProductListResponseItem {
    product: ProductListResponseItem.Product;

    variant: ProductListResponseItem.SubscriptionVariant | ProductListResponseItem.SinglePaymentVariant;
  }

  export namespace ProductListResponseItem {
    export interface Product {
      id: string;

      active: boolean;

      /**
       * safeZodDate
       */
      createdAt: string | string;

      description: string | null;

      imageURL: string | null;

      livemode: boolean;

      name: string;

      OrganizationId: string;

      type: 'service' | 'digital' | (string & {});

      /**
       * safeZodDate
       */
      updatedAt: string | string;
    }

    export interface SubscriptionVariant {
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

    export interface SinglePaymentVariant {
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
}

export interface ProductCreateParams {
  offerings: Array<
    | ProductCreateParams.FileOffering
    | ProductCreateParams.CommunityOffering
    | ProductCreateParams.LinkOffering
  >;

  product: ProductCreateParams.Product;

  variant: ProductCreateParams.SubscriptionVariant | ProductCreateParams.SinglePaymentVariant;
}

export namespace ProductCreateParams {
  export interface FileOffering {
    file: File;

    type: 'file';

    id?: string | null;

    createdAt?: string;

    livemode?: boolean;

    OfferableId?: string | null;

    order?: number | null;

    OrganizationId?: string;

    ProductId?: string | null;

    updatedAt?: string | null;

    VariantId?: string | null;
  }

  export interface File {
    id: string | null;

    name: string;

    objectKey: string;

    ProductId?: string | null;
  }

  export interface CommunityOffering {
    community: Community;

    type: 'community';

    id?: string | null;

    createdAt?: string;

    livemode?: boolean;

    OfferableId?: string | null;

    order?: number | null;

    OrganizationId?: string;

    ProductId?: string | null;

    updatedAt?: string | null;

    VariantId?: string | null;
  }

  export interface Community {
    id: string | null;

    name: string;

    platform: 'discord' | 'slack' | (string & {});

    IntegrationId?: string | null;

    inviteURL?: string | null;

    platformId?: string | null;

    ProductId?: string | null;
  }

  export interface LinkOffering {
    link: Link;

    type: 'link';

    id?: string | null;

    createdAt?: string;

    livemode?: boolean;

    OfferableId?: string | null;

    order?: number | null;

    OrganizationId?: string;

    ProductId?: string | null;

    updatedAt?: string | null;

    VariantId?: string | null;
  }

  export interface Link {
    id: string | null;

    name: string;

    url: string;

    ProductId?: string | null;
  }

  export interface Product {
    name: string;

    type: 'service' | 'digital' | (string & {});

    active?: boolean;

    description?: string | null;

    imageURL?: string | null;
  }

  export interface SubscriptionVariant {
    active: boolean;

    /**
     * safeZodPositiveInteger
     */
    intervalCount: string | number;

    intervalUnit: 'day' | 'week' | 'month' | 'year';

    isDefault: boolean;

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
  }

  export interface SinglePaymentVariant {
    active: boolean;

    isDefault: boolean;

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

    /**
     * safeZodNullOrUndefined
     */
    trialPeriodDays?: unknown | unknown | null;
  }
}

export interface ProductUpdateParams {
  offerings: Array<
    | ProductUpdateParams.FileOffering
    | ProductUpdateParams.LinkOffering
    | ProductUpdateParams.CommunityOffering
  >;

  product: ProductUpdateParams.Product;

  variant: ProductUpdateParams.SubscriptionVariant | ProductUpdateParams.SinglePaymentVariant;
}

export namespace ProductUpdateParams {
  export interface FileOffering {
    file: File;

    type: 'file';

    id?: string | null;

    createdAt?: string;

    livemode?: boolean;

    OfferableId?: string | null;

    order?: number | null;

    OrganizationId?: string;

    ProductId?: string | null;

    updatedAt?: string | null;

    VariantId?: string | null;
  }

  export interface File {
    id: string | null;

    name: string;

    objectKey: string;

    ProductId?: string | null;
  }

  export interface CommunityOffering {
    community: Community;

    type: 'community';

    id?: string | null;

    createdAt?: string;

    livemode?: boolean;

    OfferableId?: string | null;

    order?: number | null;

    OrganizationId?: string;

    ProductId?: string | null;

    updatedAt?: string | null;

    VariantId?: string | null;
  }

  export interface Community {
    id: string | null;

    name: string;

    platform: 'discord' | 'slack' | (string & {});

    IntegrationId?: string | null;

    inviteURL?: string | null;

    platformId?: string | null;

    ProductId?: string | null;
  }

  export interface LinkOffering {
    link: Link;

    type: 'link';

    id?: string | null;

    createdAt?: string;

    livemode?: boolean;

    OfferableId?: string | null;

    order?: number | null;

    OrganizationId?: string;

    ProductId?: string | null;

    updatedAt?: string | null;

    VariantId?: string | null;
  }

  export interface Link {
    id: string | null;

    name: string;

    url: string;

    ProductId?: string | null;
  }

  export interface Product {
    id: string;

    active?: boolean;

    defaultStripePriceId?: string | null;

    description?: string | null;

    imageURL?: string | null;

    livemode?: boolean;

    name?: string;

    OrganizationId?: string;

    stripeProductId?: string | null;

    type?: 'service' | 'digital' | (string & {});
  }

  export interface SubscriptionVariant {
    id: string;

    priceType: 'subscription';

    active?: boolean;

    /**
     * safeZodPositiveInteger
     */
    intervalCount?: string | number;

    intervalUnit?: 'day' | 'week' | 'month' | 'year' | (string & {});

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

  export interface SinglePaymentVariant {
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

export interface ProductListParams {
  active?: boolean;
}

export declare namespace Products {
  export {
    type ProductCreateResponse as ProductCreateResponse,
    type ProductUpdateResponse as ProductUpdateResponse,
    type ProductListResponse as ProductListResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };
}
