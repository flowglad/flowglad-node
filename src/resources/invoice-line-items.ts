// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class InvoiceLineItems extends APIResource {
  /**
   * Get Invoice Line Item
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<InvoiceLineItemRetrieveResponse> {
    return this._client.get(`/api/v1/invoice-line-items/${id}`, options);
  }

  /**
   * List Invoice Line Items
   */
  list(
    query?: InvoiceLineItemListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvoiceLineItemListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<InvoiceLineItemListResponse>;
  list(
    query: InvoiceLineItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvoiceLineItemListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v1/invoice-line-items', { query, ...options });
  }
}

export interface InvoiceLineItemRetrieveResponse {
  id: string;

  createdAt: string;

  description: string | null;

  invoiceId: string;

  livemode: boolean;

  price: number;

  /**
   * safeZodPositiveInteger
   */
  quantity: number;

  updatedAt: string | null;

  variantId: string | null;
}

export interface InvoiceLineItemListResponse {
  data: Array<InvoiceLineItemListResponse.Data>;

  hasMore: boolean;

  total: number;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace InvoiceLineItemListResponse {
  export interface Data {
    id: string;

    createdAt: string;

    description: string | null;

    invoiceId: string;

    livemode: boolean;

    price: number;

    /**
     * safeZodPositiveInteger
     */
    quantity: number;

    updatedAt: string | null;

    variantId: string | null;
  }
}

export interface InvoiceLineItemListParams {
  cursor?: string;

  limit?: number;
}

export declare namespace InvoiceLineItems {
  export {
    type InvoiceLineItemRetrieveResponse as InvoiceLineItemRetrieveResponse,
    type InvoiceLineItemListResponse as InvoiceLineItemListResponse,
    type InvoiceLineItemListParams as InvoiceLineItemListParams,
  };
}
