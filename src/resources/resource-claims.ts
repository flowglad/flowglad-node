// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ResourceClaims extends APIResource {
  /**
   * Claim a resource for a subscription. Exactly one of quantity, externalId, or
   * externalIds must be provided.
   */
  claim(
    subscriptionID: string,
    body: ResourceClaimClaimParams,
    options?: RequestOptions,
  ): APIPromise<ResourceClaimClaimResponse> {
    return this._client.post(path`/api/v1/resource-claims/${subscriptionID}/claim`, { body, ...options });
  }

  /**
   * Release claimed resources for a subscription. Exactly one of quantity,
   * externalId, externalIds, or claimIds must be provided.
   */
  release(
    subscriptionID: string,
    body: ResourceClaimReleaseParams,
    options?: RequestOptions,
  ): APIPromise<ResourceClaimReleaseResponse> {
    return this._client.post(path`/api/v1/resource-claims/${subscriptionID}/release`, { body, ...options });
  }

  /**
   * Get resource usage information for a subscription. Optionally filter by
   * resourceSlug.
   */
  usage(
    subscriptionID: string,
    query: ResourceClaimUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResourceClaimUsageResponse> {
    return this._client.get(path`/api/v1/resource-claims/${subscriptionID}/usage`, { query, ...options });
  }
}

export interface ResourceClaimClaimResponse {
  claims: Array<ResourceClaimClaimResponse.Claim>;

  usage: ResourceClaimClaimResponse.Usage;
}

export namespace ResourceClaimClaimResponse {
  export interface Claim {
    id: string;

    /**
     * Epoch milliseconds.
     */
    claimedAt: number;

    /**
     * Epoch milliseconds.
     */
    createdAt: number;

    externalId: string | null;

    livemode: boolean;

    organizationId: string;

    pricingModelId: string;

    releaseReason: string | null;

    resourceId: string;

    subscriptionId: string;

    subscriptionItemFeatureId: string;

    /**
     * Epoch milliseconds.
     */
    updatedAt: number;

    /**
     * JSON object
     */
    metadata?: { [key: string]: string | number | boolean } | null;

    /**
     * Epoch milliseconds.
     */
    releasedAt?: number | null;
  }

  export interface Usage {
    available: number;

    capacity: number;

    claimed: number;
  }
}

export interface ResourceClaimReleaseResponse {
  releasedClaims: Array<ResourceClaimReleaseResponse.ReleasedClaim>;

  usage: ResourceClaimReleaseResponse.Usage;
}

export namespace ResourceClaimReleaseResponse {
  export interface ReleasedClaim {
    id: string;

    /**
     * Epoch milliseconds.
     */
    claimedAt: number;

    /**
     * Epoch milliseconds.
     */
    createdAt: number;

    externalId: string | null;

    livemode: boolean;

    organizationId: string;

    pricingModelId: string;

    releaseReason: string | null;

    resourceId: string;

    subscriptionId: string;

    subscriptionItemFeatureId: string;

    /**
     * Epoch milliseconds.
     */
    updatedAt: number;

    /**
     * JSON object
     */
    metadata?: { [key: string]: string | number | boolean } | null;

    /**
     * Epoch milliseconds.
     */
    releasedAt?: number | null;
  }

  export interface Usage {
    available: number;

    capacity: number;

    claimed: number;
  }
}

export interface ResourceClaimUsageResponse {
  usage: Array<ResourceClaimUsageResponse.Usage>;
}

export namespace ResourceClaimUsageResponse {
  export interface Usage {
    available: number;

    capacity: number;

    claimed: number;

    resourceId: string;

    resourceSlug: string;
  }
}

export interface ResourceClaimClaimParams {
  /**
   * The slug of the resource to claim
   */
  resourceSlug: string;

  /**
   * Create a single pet-style claim with this external identifier.
   */
  externalId?: string;

  /**
   * Create multiple pet-style claims with these external identifiers.
   */
  externalIds?: Array<string>;

  /**
   * Optional metadata to attach to the claim(s)
   */
  metadata?: { [key: string]: string | number | boolean };

  /**
   * Create N anonymous (cattle-style) claims. Each claim will have externalId =
   * null.
   */
  quantity?: number;
}

export interface ResourceClaimReleaseParams {
  /**
   * The slug of the resource to release
   */
  resourceSlug: string;

  /**
   * Release specific claims by their claim IDs (works for both cattle and pet
   * claims)
   */
  claimIds?: Array<string>;

  /**
   * Release a specific pet-style claim by its externalId
   */
  externalId?: string;

  /**
   * Release multiple pet-style claims by their externalIds
   */
  externalIds?: Array<string>;

  /**
   * Release N anonymous (cattle-style) claims. Only releases claims where externalId
   * IS NULL. Will not release pet-style claims with externalIds.
   */
  quantity?: number;
}

export interface ResourceClaimUsageParams {
  resourceSlug?: string;
}

export declare namespace ResourceClaims {
  export {
    type ResourceClaimClaimResponse as ResourceClaimClaimResponse,
    type ResourceClaimReleaseResponse as ResourceClaimReleaseResponse,
    type ResourceClaimUsageResponse as ResourceClaimUsageResponse,
    type ResourceClaimClaimParams as ResourceClaimClaimParams,
    type ResourceClaimReleaseParams as ResourceClaimReleaseParams,
    type ResourceClaimUsageParams as ResourceClaimUsageParams,
  };
}
