// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BillingAPI from './billing';
import { Billing, BillingRetrieveResponse } from './billing';

export class CustomerProfiles extends APIResource {
  billing: BillingAPI.Billing = new BillingAPI.Billing(this._client);

  /**
   * Create customerProfiles
   */
  create(
    body: CustomerProfileCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerProfileCreateResponse> {
    return this._client.post('/api/v1/customer-profiles', { body, ...options });
  }

  /**
   * Get customerProfiles
   */
  retrieve(
    externalId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerProfileRetrieveResponse> {
    return this._client.get(`/api/v1/customer-profiles/${externalId}`, options);
  }

  /**
   * Update customerProfiles
   */
  update(
    externalId: string,
    body: CustomerProfileUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerProfileUpdateResponse> {
    return this._client.put(`/api/v1/customer-profiles/${externalId}`, { body, ...options });
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

CustomerProfiles.Billing = Billing;

export declare namespace CustomerProfiles {
  export {
    type CustomerProfileCreateResponse as CustomerProfileCreateResponse,
    type CustomerProfileRetrieveResponse as CustomerProfileRetrieveResponse,
    type CustomerProfileUpdateResponse as CustomerProfileUpdateResponse,
    type CustomerProfileCreateParams as CustomerProfileCreateParams,
    type CustomerProfileUpdateParams as CustomerProfileUpdateParams,
  };

  export { Billing as Billing, type BillingRetrieveResponse as BillingRetrieveResponse };
}
