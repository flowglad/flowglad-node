// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class CustomerProfile extends APIResource {
  /**
   * Create Customer Profile
   */
  create(
    body: CustomerProfileCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerProfileCreateResponse> {
    return this._client.post('/api/v1/customer-profile', { body, ...options });
  }

  /**
   * Update Customer Profile
   */
  update(
    externalId: string,
    body: CustomerProfileUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerProfileUpdateResponse> {
    return this._client.put(`/api/v1/customer-profile/${externalId}`, { body, ...options });
  }

  /**
   * Get Customer Profile
   */
  get(externalId: string, options?: Core.RequestOptions): Core.APIPromise<CustomerProfileGetResponse> {
    return this._client.get(`/api/v1/customer-profile/${externalId}`, options);
  }

  /**
   * Get Billing Details
   */
  getBilling(
    externalId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerProfileGetBillingResponse> {
    return this._client.get(`/api/v1/customer-profile/${externalId}/billing`, options);
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

export interface CustomerProfileGetResponse {
  customerProfile: CustomerProfileGetResponse.CustomerProfile;
}

export namespace CustomerProfileGetResponse {
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

export interface CustomerProfileGetBillingResponse {
  catalog: CustomerProfileGetBillingResponse.Catalog;

  customerProfile: CustomerProfileGetBillingResponse.CustomerProfile;

  subscriptions: Array<CustomerProfileGetBillingResponse.Subscription>;
}

export namespace CustomerProfileGetBillingResponse {
  export interface Catalog {
    products: Array<Catalog.Product>;
  }

  export namespace Catalog {
    export interface Product {
      product: Product.Product;

      variants: Array<Product.UnionMember0 | Product.UnionMember1>;
    }

    export namespace Product {
      export interface Product {
        id: string;

        active: boolean;

        /**
         * safeZodDate
         */
        createdAt: string | string;

        description: string | null;

        imageURL: string | null;

        livemode: boolean;

        name: string;

        OrganizationId: string;

        type: 'service' | 'digital';

        /**
         * safeZodDate
         */
        updatedAt: string | string;
      }

      export interface UnionMember0 {
        id: string;

        active: boolean;

        createdAt: string;

        /**
         * safeZodPositiveInteger
         */
        intervalCount: string | number;

        intervalUnit: 'day' | 'week' | 'month' | 'year';

        isDefault: boolean;

        livemode: boolean;

        name: string | null;

        priceType: 'subscription';

        ProductId: string;

        /**
         * safeZodPositiveInteger
         */
        setupFeeAmount: string | number | 0 | null;

        /**
         * safeZodPositiveInteger
         */
        trialPeriodDays: string | number | 0 | null;

        /**
         * safeZodPositiveInteger
         */
        unitPrice: string | number;

        updatedAt: string | null;
      }

      export interface UnionMember1 {
        id: string;

        active: boolean;

        createdAt: string;

        isDefault: boolean;

        livemode: boolean;

        name: string | null;

        priceType: 'single_payment';

        ProductId: string;

        /**
         * safeZodPositiveInteger
         */
        unitPrice: string | number;

        updatedAt: string | null;

        /**
         * safeZodNullOrUndefined
         */
        intervalCount?: unknown | unknown | null;

        /**
         * safeZodNullOrUndefined
         */
        intervalUnit?: unknown | unknown | null;

        /**
         * safeZodNullOrUndefined
         */
        setupFeeAmount?: unknown | unknown | null;

        /**
         * safeZodNullOrUndefined
         */
        trialPeriodDays?: unknown | unknown | null;
      }
    }
  }

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

  export interface Subscription {
    id: string;

    backupPaymentMethodId: string | null;

    billingCycleAnchorDate: string;

    canceledAt: string | null;

    cancelScheduledAt: string | null;

    createdAt: string;

    currentBillingPeriodEnd: string;

    currentBillingPeriodStart: string;

    CustomerProfileId: string;

    defaultPaymentMethodId: string | null;

    interval: 'day' | 'week' | 'month' | 'year';

    /**
     * safeZodPositiveInteger
     */
    intervalCount: string | number;

    livemode: boolean;

    metadata: Record<string, unknown> | null;

    OrganizationId: string;

    status:
      | 'incomplete'
      | 'incomplete_expired'
      | 'trialing'
      | 'active'
      | 'past_due'
      | 'canceled'
      | 'unpaid'
      | 'paused'
      | 'cancellation_scheduled';

    trialEnd: string | null;

    updatedAt: string | null;

    VariantId: string;
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

export declare namespace CustomerProfile {
  export {
    type CustomerProfileCreateResponse as CustomerProfileCreateResponse,
    type CustomerProfileUpdateResponse as CustomerProfileUpdateResponse,
    type CustomerProfileGetResponse as CustomerProfileGetResponse,
    type CustomerProfileGetBillingResponse as CustomerProfileGetBillingResponse,
    type CustomerProfileCreateParams as CustomerProfileCreateParams,
    type CustomerProfileUpdateParams as CustomerProfileUpdateParams,
  };
}
