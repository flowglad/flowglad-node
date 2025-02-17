// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface ProductsListResponse<Item> {
  data: Array<Item>;

  hasMore: boolean;

  lolTest: string;

  lolTest3: string;
}

export interface ProductsListParams {
  limit?: unknown;

  cursor?: unknown;
}

export class ProductsList<Item> extends AbstractPage<Item> implements ProductsListResponse<Item> {
  data: Array<Item>;

  hasMore: boolean;

  lolTest: string;

  lolTest3: string;

  constructor(
    client: APIClient,
    response: Response,
    body: ProductsListResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.hasMore = body.hasMore || false;
    this.lolTest = body.lolTest || '';
    this.lolTest3 = body.lolTest3 || '';
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  override hasNextPage(): boolean {
    if (this.hasMore === false) {
      return false;
    }

    return super.hasNextPage();
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<ProductsListParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const cursor = this.lolTest3;
    if (!cursor) {
      return null;
    }

    return {
      params: {
        cursor: cursor,
      },
    };
  }
}

export interface VariantsListResponse<Item> {
  data: Array<Item>;

  hasMore: boolean;

  currentCursor: string;

  nextCursor: string;
}

export interface VariantsListParams {
  limit?: unknown;

  cursor?: unknown;
}

export class VariantsList<Item> extends AbstractPage<Item> implements VariantsListResponse<Item> {
  data: Array<Item>;

  hasMore: boolean;

  currentCursor: string;

  nextCursor: string;

  constructor(
    client: APIClient,
    response: Response,
    body: VariantsListResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.hasMore = body.hasMore || false;
    this.currentCursor = body.currentCursor || '';
    this.nextCursor = body.nextCursor || '';
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  override hasNextPage(): boolean {
    if (this.hasMore === false) {
      return false;
    }

    return super.hasNextPage();
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<VariantsListParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const cursor = this.nextCursor;
    if (!cursor) {
      return null;
    }

    return {
      params: {
        cursor: cursor,
      },
    };
  }
}
