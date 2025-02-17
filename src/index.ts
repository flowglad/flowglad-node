// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type ProductsParams, ProductsResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  ProductCreateParams,
  ProductCreateResponse,
  ProductListParams,
  ProductListResponse,
  ProductUpdateParams,
  ProductUpdateResponse,
  Products as ProductsAPIProducts,
} from './resources/products';
import {
  PurchaseSessionCreateParams,
  PurchaseSessionCreateResponse,
  PurchaseSessions,
} from './resources/purchase-sessions';
import {
  VariantCreateParams,
  VariantCreateResponse,
  VariantListParams,
  VariantListResponse,
  VariantUpdateParams,
  VariantUpdateResponse,
  Variants,
} from './resources/variants';
import {
  CustomerProfileCreateParams,
  CustomerProfileCreateResponse,
  CustomerProfileRetrieveResponse,
  CustomerProfileUpdateParams,
  CustomerProfileUpdateResponse,
  CustomerProfiles,
} from './resources/customer-profiles/customer-profiles';

const environments = {
  production: 'https://app.flowglad.com/api/v1',
  staging: 'https://staging.flowglad.com/api/v1',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * API key to be set in the Authorization header
   */
  apiKey?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://app.flowglad.com/api/v1`
   * - `staging` corresponds to `https://staging.flowglad.com/api/v1`
   */
  environment?: Environment | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['FLOWGLAD_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Flowglad API.
 */
export class Flowglad extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Flowglad API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['FLOWGLAD_SECRET_KEY'] ?? undefined]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['FLOWGLAD_BASE_URL'] ?? https://app.flowglad.com/api/v1] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('FLOWGLAD_BASE_URL'),
    apiKey = Core.readEnv('FLOWGLAD_SECRET_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.FlowgladError(
        "The FLOWGLAD_SECRET_KEY environment variable is missing or empty; either provide it, or instantiate the Flowglad client with an apiKey option, like new Flowglad({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.FlowgladError(
        'Ambiguous URL; The `baseURL` option (or FLOWGLAD_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  purchaseSessions: API.PurchaseSessions = new API.PurchaseSessions(this);
  products: API.Products = new API.Products(this);
  variants: API.Variants = new API.Variants(this);
  customerProfiles: API.CustomerProfiles = new API.CustomerProfiles(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: this.apiKey };
  }

  static Flowglad = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static FlowgladError = Errors.FlowgladError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Flowglad.PurchaseSessions = PurchaseSessions;
Flowglad.Products = ProductsAPIProducts;
Flowglad.Variants = Variants;
Flowglad.CustomerProfiles = CustomerProfiles;
export declare namespace Flowglad {
  export type RequestOptions = Core.RequestOptions;

  export import Products = Pagination.Products;
  export { type ProductsParams as ProductsParams, type ProductsResponse as ProductsResponse };

  export {
    PurchaseSessions as PurchaseSessions,
    type PurchaseSessionCreateResponse as PurchaseSessionCreateResponse,
    type PurchaseSessionCreateParams as PurchaseSessionCreateParams,
  };

  export {
    ProductsAPIProducts as Products,
    type ProductCreateResponse as ProductCreateResponse,
    type ProductUpdateResponse as ProductUpdateResponse,
    type ProductListResponse as ProductListResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
  };

  export {
    Variants as Variants,
    type VariantCreateResponse as VariantCreateResponse,
    type VariantUpdateResponse as VariantUpdateResponse,
    type VariantListResponse as VariantListResponse,
    type VariantCreateParams as VariantCreateParams,
    type VariantUpdateParams as VariantUpdateParams,
    type VariantListParams as VariantListParams,
  };

  export {
    CustomerProfiles as CustomerProfiles,
    type CustomerProfileCreateResponse as CustomerProfileCreateResponse,
    type CustomerProfileRetrieveResponse as CustomerProfileRetrieveResponse,
    type CustomerProfileUpdateResponse as CustomerProfileUpdateResponse,
    type CustomerProfileCreateParams as CustomerProfileCreateParams,
    type CustomerProfileUpdateParams as CustomerProfileUpdateParams,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
  FlowgladError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Flowglad;
