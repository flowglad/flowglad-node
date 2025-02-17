// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class InvoiceLineItem extends APIResource {
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

  /**
   * Get Invoice Line Item
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<InvoiceLineItemGetResponse> {
    return this._client.get(`/api/v1/invoice-line-item/${id}`, options);
  }
}

export interface InvoiceLineItemListResponse {
  data: Array<InvoiceLineItemListResponse.Data>;

  hasMore: boolean;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace InvoiceLineItemListResponse {
  export interface Data {
    id: string;

    createdAt: string;

    description: string | null;

    InvoiceId: string;

    livemode: boolean;

    price: number;

    /**
     * safeZodPositiveInteger
     */
    quantity: string | number;

    updatedAt: string | null;

    VariantId: string | null;
  }
}

export interface InvoiceLineItemGetResponse {
  id: string;

  createdAt: string;

  description: string | null;

  InvoiceId: string;

  livemode: boolean;

  price: number;

  /**
   * safeZodPositiveInteger
   */
  quantity: string | number;

  updatedAt: string | null;

  VariantId: string | null;
}

export interface InvoiceLineItemListParams {
  cursor?: string;

  limit?: number;
}

export declare namespace InvoiceLineItem {
  export {
    type InvoiceLineItemListResponse as InvoiceLineItemListResponse,
    type InvoiceLineItemGetResponse as InvoiceLineItemGetResponse,
    type InvoiceLineItemListParams as InvoiceLineItemListParams,
  };
}
