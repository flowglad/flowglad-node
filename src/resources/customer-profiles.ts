// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class CustomerProfiles extends APIResource {
  /**
   * Create Customer Profile
   */
  create(
    body: CustomerProfileCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerProfileCreateResponse> {
    return this._client.post('/api/v1/customer-profiles', { body, ...options });
  }

  /**
   * Get Customer Profile
   */
  retrieve(
    externalId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerProfileRetrieveResponse> {
    return this._client.get(`/api/v1/customer-profiles/${externalId}`, options);
  }

  /**
   * Update Customer Profile
   */
  update(
    externalId: string,
    body: CustomerProfileUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerProfileUpdateResponse> {
    return this._client.put(`/api/v1/customer-profiles/${externalId}`, { body, ...options });
  }

  /**
   * List Customer Profiles
   */
  list(
    query?: CustomerProfileListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerProfileListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CustomerProfileListResponse>;
  list(
    query: CustomerProfileListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerProfileListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v1/customer-profiles', { query, ...options });
  }
}

export interface CustomerProfileCreateResponse {
  data: CustomerProfileCreateResponse.Data;
}

export namespace CustomerProfileCreateResponse {
  export interface Data {
    customerProfile: Data.CustomerProfile;
  }

  export namespace Data {
    export interface CustomerProfile {
      id: string;

      archived: boolean;

      billingAddress: CustomerProfile.BillingAddress | null;

      createdAt: string;

      CustomerId: string;

      domain: string | null;

      email: string;

      externalId: string;

      iconURL: string | null;

      invoiceNumberBase: string | null;

      livemode: boolean;

      logoURL: string | null;

      name: string | null;

      OrganizationId: string;

      updatedAt: string | null;
    }

    export namespace CustomerProfile {
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

export interface CustomerProfileRetrieveResponse {
  customerProfile: CustomerProfileRetrieveResponse.CustomerProfile;
}

export namespace CustomerProfileRetrieveResponse {
  export interface CustomerProfile {
    id: string;

    archived: boolean;

    billingAddress: CustomerProfile.BillingAddress | null;

    createdAt: string;

    CustomerId: string;

    domain: string | null;

    email: string;

    externalId: string;

    iconURL: string | null;

    invoiceNumberBase: string | null;

    livemode: boolean;

    logoURL: string | null;

    name: string | null;

    OrganizationId: string;

    updatedAt: string | null;
  }

  export namespace CustomerProfile {
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

export interface CustomerProfileUpdateResponse {
  customerProfile: CustomerProfileUpdateResponse.CustomerProfile;
}

export namespace CustomerProfileUpdateResponse {
  export interface CustomerProfile {
    id: string;

    archived: boolean;

    billingAddress: CustomerProfile.BillingAddress | null;

    createdAt: string;

    CustomerId: string;

    domain: string | null;

    email: string;

    externalId: string;

    iconURL: string | null;

    invoiceNumberBase: string | null;

    livemode: boolean;

    logoURL: string | null;

    name: string | null;

    OrganizationId: string;

    updatedAt: string | null;
  }

  export namespace CustomerProfile {
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

export interface CustomerProfileListResponse {
  data: Array<CustomerProfileListResponse.Data>;

  hasMore: boolean;

  currentCursor?: string;

  nextCursor?: string;
}

export namespace CustomerProfileListResponse {
  export interface Data {
    id: string;

    archived: boolean;

    billingAddress: Data.BillingAddress | null;

    createdAt: string;

    CustomerId: string;

    customerTaxId: string | null;

    domain: string | null;

    email: string;

    externalId: string;

    iconURL: string | null;

    invoiceNumberBase: string | null;

    livemode: boolean;

    logoURL: string | null;

    name: string | null;

    OrganizationId: string;

    slackId: string | null;

    stripeCustomerId: string | null;

    updatedAt: string | null;
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

export interface CustomerProfileCreateParams {
  customerProfile: CustomerProfileCreateParams.CustomerProfile;
}

export namespace CustomerProfileCreateParams {
  export interface CustomerProfile {
    email: string;

    externalId: string;

    archived?: boolean;

    domain?: string | null;

    iconURL?: string | null;

    logoURL?: string | null;

    name?: string | null;
  }
}

export interface CustomerProfileUpdateParams {
  customerProfile: CustomerProfileUpdateParams.CustomerProfile;
}

export namespace CustomerProfileUpdateParams {
  export interface CustomerProfile {
    id: string;

    archived?: boolean;

    domain?: string | null;

    email?: string;

    externalId?: string;

    iconURL?: string | null;

    logoURL?: string | null;

    name?: string | null;
  }
}

export interface CustomerProfileListParams {
  cursor?: string;

  limit?: number;
}

export declare namespace CustomerProfiles {
  export {
    type CustomerProfileCreateResponse as CustomerProfileCreateResponse,
    type CustomerProfileRetrieveResponse as CustomerProfileRetrieveResponse,
    type CustomerProfileUpdateResponse as CustomerProfileUpdateResponse,
    type CustomerProfileListResponse as CustomerProfileListResponse,
    type CustomerProfileCreateParams as CustomerProfileCreateParams,
    type CustomerProfileUpdateParams as CustomerProfileUpdateParams,
    type CustomerProfileListParams as CustomerProfileListParams,
  };
}
