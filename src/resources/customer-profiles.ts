// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class CustomerProfiles extends APIResource {
  /**
   * Create a customer profile
   */
  create(
    body: CustomerProfileCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerProfileCreateResponse> {
    return this._client.post('/api/v1/customer-profiles', { body, ...options });
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

      customerTaxId: string | null;

      domain: string | null;

      email: string;

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

export interface CustomerProfileCreateParams {
  customerProfile: CustomerProfileCreateParams.CustomerProfile;
}

export namespace CustomerProfileCreateParams {
  export interface CustomerProfile {
    CustomerId: string;

    email: string;

    OrganizationId: string;

    archived?: boolean;

    customerTaxId?: string | null;

    domain?: string | null;

    iconURL?: string | null;

    invoiceNumberBase?: string | null;

    livemode?: boolean;

    logoURL?: string | null;

    name?: string | null;

    slackId?: string | null;

    stripeCustomerId?: string | null;
  }
}

export declare namespace CustomerProfiles {
  export {
    type CustomerProfileCreateResponse as CustomerProfileCreateResponse,
    type CustomerProfileCreateParams as CustomerProfileCreateParams,
  };
}
