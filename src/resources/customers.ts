// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Customers extends APIResource {
  /**
   * Create customer
   */
  create(body: CustomerCreateParams, options?: RequestOptions): APIPromise<CustomerCreateResponse> {
    return this._client.post('/api/v1/customers', { body, ...options });
  }

  /**
   * Get Customer
   */
  retrieve(externalID: string, options?: RequestOptions): APIPromise<CustomerRetrieveResponse> {
    return this._client.get(path`/api/v1/customers/${externalID}`, options);
  }

  /**
   * Update Customer
   */
  update(
    externalID: string,
    body: CustomerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomerUpdateResponse> {
    return this._client.put(path`/api/v1/customers/${externalID}`, { body, ...options });
  }

  /**
   * List Customers
   */
  list(
    query: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerListResponse> {
    return this._client.get('/api/v1/customers', { query, ...options });
  }
}

export interface CustomerCreateResponse {
  data: CustomerCreateResponse.Data;
}

export namespace CustomerCreateResponse {
  export interface Data {
    customer: Data.Customer;
  }

  export namespace Data {
    export interface Customer {
      id: string;

      archived: boolean;

      billingAddress: Customer.BillingAddress | null;

      createdAt: string;

      domain: string | null;

      email: string;

      externalId: string;

      iconURL: string | null;

      invoiceNumberBase: string | null;

      livemode: boolean;

      logoURL: string | null;

      name: string;

      organizationId: string;

      updatedAt: string | null;

      userId: string | null;
    }

    export namespace Customer {
      export interface BillingAddress {
        address: BillingAddress.Address;

        name: string;

        firstName?: string;

        lastName?: string;

        phone?: string;
      }

      export namespace BillingAddress {
        export interface Address {
          city: string;

          country: string;

          line1: string;

          line2: string | null;

          postal_code: string;

          state: string;
        }
      }
    }
  }
}

export interface CustomerRetrieveResponse {
  customer: CustomerRetrieveResponse.Customer;
}

export namespace CustomerRetrieveResponse {
  export interface Customer {
    id: string;

    archived: boolean;

    billingAddress: Customer.BillingAddress | null;

    createdAt: string;

    domain: string | null;

    email: string;

    externalId: string;

    iconURL: string | null;

    invoiceNumberBase: string | null;

    livemode: boolean;

    logoURL: string | null;

    name: string;

    organizationId: string;

    updatedAt: string | null;

    userId: string | null;
  }

  export namespace Customer {
    export interface BillingAddress {
      address: BillingAddress.Address;

      name: string;

      firstName?: string;

      lastName?: string;

      phone?: string;
    }

    export namespace BillingAddress {
      export interface Address {
        city: string;

        country: string;

        line1: string;

        line2: string | null;

        postal_code: string;

        state: string;
      }
    }
  }
}

export interface CustomerUpdateResponse {
  customer: CustomerUpdateResponse.Customer;
}

export namespace CustomerUpdateResponse {
  export interface Customer {
    id: string;

    archived: boolean;

    billingAddress: Customer.BillingAddress | null;

    createdAt: string;

    domain: string | null;

    email: string;

    externalId: string;

    iconURL: string | null;

    invoiceNumberBase: string | null;

    livemode: boolean;

    logoURL: string | null;

    name: string;

    organizationId: string;

    updatedAt: string | null;

    userId: string | null;
  }

  export namespace Customer {
    export interface BillingAddress {
      address: BillingAddress.Address;

      name: string;

      firstName?: string;

      lastName?: string;

      phone?: string;
    }

    export namespace BillingAddress {
      export interface Address {
        city: string;

        country: string;

        line1: string;

        line2: string | null;

        postal_code: string;

        state: string;
      }
    }
  }
}

export interface CustomerListResponse {
  data: Array<CustomerListResponse.Data>;

  hasMore: boolean;

  total: number;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace CustomerListResponse {
  export interface Data {
    id: string;

    archived: boolean;

    billingAddress: Data.BillingAddress | null;

    createdAt: string;

    customerTaxId: string | null;

    domain: string | null;

    email: string;

    externalId: string;

    iconURL: string | null;

    invoiceNumberBase: string | null;

    livemode: boolean;

    logoURL: string | null;

    name: string;

    organizationId: string;

    slackId: string | null;

    stripeCustomerId: string | null;

    updatedAt: string | null;

    userId: string | null;
  }

  export namespace Data {
    export interface BillingAddress {
      address: BillingAddress.Address;

      name: string;

      firstName?: string;

      lastName?: string;

      phone?: string;
    }

    export namespace BillingAddress {
      export interface Address {
        city: string;

        country: string;

        line1: string;

        line2: string | null;

        postal_code: string;

        state: string;
      }
    }
  }
}

export interface CustomerCreateParams {
  customer: CustomerCreateParams.Customer;
}

export namespace CustomerCreateParams {
  export interface Customer {
    email: string;

    externalId: string;

    name: string;

    archived?: boolean;

    domain?: string | null;

    iconURL?: string | null;

    logoURL?: string | null;

    userId?: string | null;
  }
}

export interface CustomerUpdateParams {
  customer: CustomerUpdateParams.Customer;
}

export namespace CustomerUpdateParams {
  export interface Customer {
    id: string;

    archived?: boolean;

    domain?: string | null;

    email?: string;

    externalId?: string;

    iconURL?: string | null;

    logoURL?: string | null;

    name?: string;

    userId?: string | null;
  }
}

export interface CustomerListParams {
  cursor?: string;

  limit?: number;
}

export declare namespace Customers {
  export {
    type CustomerCreateResponse as CustomerCreateResponse,
    type CustomerRetrieveResponse as CustomerRetrieveResponse,
    type CustomerUpdateResponse as CustomerUpdateResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };
}
