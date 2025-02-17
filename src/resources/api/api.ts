// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as V1API from './v1/v1';
import {
  V1,
  V1CreateDiscountParams,
  V1CreateDiscountResponse,
  V1GetInvoiceLineItemResponse,
  V1GetInvoiceResponse,
  V1GetPaymentResponse,
  V1ListCustomerProfilesParams,
  V1ListCustomerProfilesResponse,
  V1ListDiscountsParams,
  V1ListDiscountsResponse,
  V1ListInvoiceLineItemsParams,
  V1ListInvoiceLineItemsResponse,
  V1ListInvoicesParams,
  V1ListInvoicesResponse,
  V1ListPaymentsParams,
  V1ListPaymentsResponse,
  V1ListProductsParams,
  V1ListProductsResponse,
  V1ListVariantsParams,
  V1ListVariantsResponse,
} from './v1/v1';

export class API extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

API.V1 = V1;

export declare namespace API {
  export {
    V1 as V1,
    type V1CreateDiscountResponse as V1CreateDiscountResponse,
    type V1GetInvoiceResponse as V1GetInvoiceResponse,
    type V1GetInvoiceLineItemResponse as V1GetInvoiceLineItemResponse,
    type V1GetPaymentResponse as V1GetPaymentResponse,
    type V1ListCustomerProfilesResponse as V1ListCustomerProfilesResponse,
    type V1ListDiscountsResponse as V1ListDiscountsResponse,
    type V1ListInvoiceLineItemsResponse as V1ListInvoiceLineItemsResponse,
    type V1ListInvoicesResponse as V1ListInvoicesResponse,
    type V1ListPaymentsResponse as V1ListPaymentsResponse,
    type V1ListProductsResponse as V1ListProductsResponse,
    type V1ListVariantsResponse as V1ListVariantsResponse,
    type V1CreateDiscountParams as V1CreateDiscountParams,
    type V1ListCustomerProfilesParams as V1ListCustomerProfilesParams,
    type V1ListDiscountsParams as V1ListDiscountsParams,
    type V1ListInvoiceLineItemsParams as V1ListInvoiceLineItemsParams,
    type V1ListInvoicesParams as V1ListInvoicesParams,
    type V1ListPaymentsParams as V1ListPaymentsParams,
    type V1ListProductsParams as V1ListProductsParams,
    type V1ListVariantsParams as V1ListVariantsParams,
  };
}
