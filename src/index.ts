// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  CustomerProfileBillingResponse,
  CustomerProfileCreateParams,
  CustomerProfileCreateResponse,
  CustomerProfileListParams,
  CustomerProfileListResponse,
  CustomerProfileRetrieveResponse,
  CustomerProfileUpdateParams,
  CustomerProfileUpdateResponse,
  CustomerProfiles,
} from './resources/customer-profiles';
import {
  DiscountCreateParams,
  DiscountCreateResponse,
  DiscountRetrieveResponse,
  DiscountUpdateParams,
  DiscountUpdateResponse,
  Discounts,
} from './resources/discounts';
import {
  Invoice,
  InvoiceListParams,
  InvoiceListResponse,
  InvoiceRetrieveResponse,
} from './resources/invoice';
import {
  InvoiceLineItemListParams,
  InvoiceLineItemListResponse,
  InvoiceLineItemRetrieveResponse,
  InvoiceLineItems,
} from './resources/invoice-line-items';
import {
  PaymentListParams,
  PaymentListResponse,
  PaymentRetrieveResponse,
  Payments,
} from './resources/payments';
import {
  ProductCreateParams,
  ProductCreateResponse,
  ProductListParams,
  ProductListResponse,
  ProductRetrieveResponse,
  ProductUpdateParams,
  ProductUpdateResponse,
  Products,
} from './resources/products';
import {
  PurchaseSessionCreateParams,
  PurchaseSessionCreateResponse,
  PurchaseSessionListParams,
  PurchaseSessionListResponse,
  PurchaseSessionRetrieveResponse,
  PurchaseSessions,
} from './resources/purchase-sessions';
import {
  SubscriptionAdjustParams,
  SubscriptionAdjustResponse,
  SubscriptionCancelParams,
  SubscriptionCancelResponse,
  SubscriptionListParams,
  SubscriptionListResponse,
  SubscriptionRetrieveResponse,
  Subscriptions,
} from './resources/subscriptions';
import {
  VariantCreateParams,
  VariantCreateResponse,
  VariantListParams,
  VariantListResponse,
  VariantUpdateParams,
  VariantUpdateResponse,
  Variants,
} from './resources/variants';

export interface ClientOptions {
  /**
   * API key for accessing the Flowglad API
   */
  apiKey?: string | undefined;

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
   * @param {string | undefined} [opts.apiKey=process.env['FLOWGLAD_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['FLOWGLAD_BASE_URL'] ?? https://app.flowglad.com/] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('FLOWGLAD_BASE_URL'),
    apiKey = Core.readEnv('FLOWGLAD_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.FlowgladError(
        "The FLOWGLAD_API_KEY environment variable is missing or empty; either provide it, or instantiate the Flowglad client with an apiKey option, like new Flowglad({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://app.flowglad.com/`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  invoice: API.Invoice = new API.Invoice(this);
  invoiceLineItems: API.InvoiceLineItems = new API.InvoiceLineItems(this);
  purchaseSessions: API.PurchaseSessions = new API.PurchaseSessions(this);
  products: API.Products = new API.Products(this);
  variants: API.Variants = new API.Variants(this);
  discounts: API.Discounts = new API.Discounts(this);
  customerProfiles: API.CustomerProfiles = new API.CustomerProfiles(this);
  payments: API.Payments = new API.Payments(this);
  subscriptions: API.Subscriptions = new API.Subscriptions(this);

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

Flowglad.Invoice = Invoice;
Flowglad.InvoiceLineItems = InvoiceLineItems;
Flowglad.PurchaseSessions = PurchaseSessions;
Flowglad.Products = Products;
Flowglad.Variants = Variants;
Flowglad.Discounts = Discounts;
Flowglad.CustomerProfiles = CustomerProfiles;
Flowglad.Payments = Payments;
Flowglad.Subscriptions = Subscriptions;
export declare namespace Flowglad {
  export type RequestOptions = Core.RequestOptions;

  export {
    Invoice as Invoice,
    type InvoiceRetrieveResponse as InvoiceRetrieveResponse,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceListParams as InvoiceListParams,
  };

  export {
    InvoiceLineItems as InvoiceLineItems,
    type InvoiceLineItemRetrieveResponse as InvoiceLineItemRetrieveResponse,
    type InvoiceLineItemListResponse as InvoiceLineItemListResponse,
    type InvoiceLineItemListParams as InvoiceLineItemListParams,
  };

  export {
    PurchaseSessions as PurchaseSessions,
    type PurchaseSessionCreateResponse as PurchaseSessionCreateResponse,
    type PurchaseSessionRetrieveResponse as PurchaseSessionRetrieveResponse,
    type PurchaseSessionListResponse as PurchaseSessionListResponse,
    type PurchaseSessionCreateParams as PurchaseSessionCreateParams,
    type PurchaseSessionListParams as PurchaseSessionListParams,
  };

  export {
    Products as Products,
    type ProductCreateResponse as ProductCreateResponse,
    type ProductRetrieveResponse as ProductRetrieveResponse,
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
    Discounts as Discounts,
    type DiscountCreateResponse as DiscountCreateResponse,
    type DiscountRetrieveResponse as DiscountRetrieveResponse,
    type DiscountUpdateResponse as DiscountUpdateResponse,
    type DiscountCreateParams as DiscountCreateParams,
    type DiscountUpdateParams as DiscountUpdateParams,
  };

  export {
    CustomerProfiles as CustomerProfiles,
    type CustomerProfileCreateResponse as CustomerProfileCreateResponse,
    type CustomerProfileRetrieveResponse as CustomerProfileRetrieveResponse,
    type CustomerProfileUpdateResponse as CustomerProfileUpdateResponse,
    type CustomerProfileListResponse as CustomerProfileListResponse,
    type CustomerProfileBillingResponse as CustomerProfileBillingResponse,
    type CustomerProfileCreateParams as CustomerProfileCreateParams,
    type CustomerProfileUpdateParams as CustomerProfileUpdateParams,
    type CustomerProfileListParams as CustomerProfileListParams,
  };

  export {
    Payments as Payments,
    type PaymentRetrieveResponse as PaymentRetrieveResponse,
    type PaymentListResponse as PaymentListResponse,
    type PaymentListParams as PaymentListParams,
  };

  export {
    Subscriptions as Subscriptions,
    type SubscriptionRetrieveResponse as SubscriptionRetrieveResponse,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionAdjustResponse as SubscriptionAdjustResponse,
    type SubscriptionCancelResponse as SubscriptionCancelResponse,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionAdjustParams as SubscriptionAdjustParams,
    type SubscriptionCancelParams as SubscriptionCancelParams,
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
