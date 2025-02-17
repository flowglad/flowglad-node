// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface ProductsResponse<Item> {
  data: Array<Item>;

  hasMore: boolean;

  currentCursor: string;

  nextCursor: string;
}

export interface ProductsParams {
  limit?: unknown;

  cursor?: unknown;
}

export class Products<Item> extends AbstractPage<Item> implements ProductsResponse<Item> {
  data: Array<Item>;

  hasMore: boolean;

  currentCursor: string;

  nextCursor: string;

  constructor(
    client: APIClient,
    response: Response,
    body: ProductsResponse<Item>,
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
  nextPageParams(): Partial<ProductsParams> | null {
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
