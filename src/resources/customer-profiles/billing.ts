// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Billing extends APIResource {
  /**
   * Gets all the billing details for a customer
   */
  retrieve(externalId: string, options?: Core.RequestOptions): Core.APIPromise<BillingRetrieveResponse> {
    return this._client.get(`/api/v1/customer-profiles/${externalId}/billing`, options);
  }
}

export interface BillingRetrieveResponse {
  customerProfile: BillingRetrieveResponse.CustomerProfile;
}

export namespace BillingRetrieveResponse {
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

export declare namespace Billing {
  export { type BillingRetrieveResponse as BillingRetrieveResponse };
}
