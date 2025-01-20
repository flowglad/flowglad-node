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

    purchase: Data.UnionMember0 | Data.UnionMember1 | null;
  }

  export namespace Data {
    export interface CustomerProfile {
      id: string;

      archived: boolean | null;

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

    export interface UnionMember0 {
      id: string;

      archived: boolean | null;

      bankPaymentOnly: boolean | null;

      billingAddress: string | number | boolean | unknown | Array<unknown> | Record<string, unknown> | null;

      billingCycleAnchor: string | null;

      /**
       * safeZodDate
       */
      createdAt: string | string;

      CustomerProfileId: string;

      endDate: string | null;

      /**
       * safeZodPositiveInteger
       */
      firstInvoiceValue: string | number | 0;

      /**
       * safeZodPositiveInteger
       */
      intervalCount: string | number;

      intervalUnit: 'day' | 'week' | 'month' | 'year' | (string & {});

      livemode: boolean;

      name: string;

      OrganizationId: string;

      /**
       * safeZodPositiveInteger
       */
      pricePerBillingCycle: string | number;

      priceType: 'subscription';

      proposal: string | null;

      purchaseDate: string | null;

      /**
       * safeZodPositiveInteger
       */
      quantity: string | number;

      status:
        | 'open'
        | 'pending'
        | 'failed'
        | 'paid'
        | 'refunded'
        | 'partial_refund'
        | 'fraudulent'
        | (string & {})
        | null;

      /**
       * safeZodPositiveInteger
       */
      trialPeriodDays: string | number | 0;

      /**
       * safeZodDate
       */
      updatedAt: string | string | null;

      VariantId: string;

      totalPurchaseValue?: unknown;
    }

    export interface UnionMember1 {
      id: string;

      archived: boolean | null;

      bankPaymentOnly: boolean | null;

      billingAddress: string | number | boolean | unknown | Array<unknown> | Record<string, unknown> | null;

      billingCycleAnchor: string | null;

      /**
       * safeZodDate
       */
      createdAt: string | string;

      CustomerProfileId: string;

      endDate: string | null;

      /**
       * safeZodPositiveInteger
       */
      firstInvoiceValue: string | number | 0;

      livemode: boolean;

      name: string;

      OrganizationId: string;

      priceType: 'single_payment';

      proposal: string | null;

      purchaseDate: string | null;

      /**
       * safeZodPositiveInteger
       */
      quantity: string | number;

      status:
        | 'open'
        | 'pending'
        | 'failed'
        | 'paid'
        | 'refunded'
        | 'partial_refund'
        | 'fraudulent'
        | (string & {})
        | null;

      /**
       * safeZodPositiveInteger
       */
      totalPurchaseValue: string | number | 0;

      /**
       * safeZodDate
       */
      updatedAt: string | string | null;

      VariantId: string;

      intervalCount?: unknown;

      intervalUnit?: unknown;

      pricePerBillingCycle?: unknown;

      trialPeriodDays?: unknown;
    }
  }
}

export interface CustomerProfileCreateParams {
  customer: CustomerProfileCreateParams.Customer;

  customerProfile: CustomerProfileCreateParams.CustomerProfile;

  purchase?: CustomerProfileCreateParams.UnionMember0 | CustomerProfileCreateParams.UnionMember1;
}

export namespace CustomerProfileCreateParams {
  export interface Customer {
    email: string;

    name: string;

    livemode?: boolean;

    UserId?: string | null;
  }

  export interface CustomerProfile {
    CustomerId: string;

    email: string;

    OrganizationId: string;

    archived?: boolean | null;

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

  export interface UnionMember0 {
    CustomerProfileId: string;

    /**
     * safeZodPositiveInteger
     */
    firstInvoiceValue: string | number | 0;

    /**
     * safeZodPositiveInteger
     */
    intervalCount: string | number;

    intervalUnit: 'day' | 'week' | 'month' | 'year' | (string & {});

    name: string;

    OrganizationId: string;

    /**
     * safeZodPositiveInteger
     */
    pricePerBillingCycle: string | number;

    priceType: 'subscription';

    /**
     * safeZodPositiveInteger
     */
    quantity: string | number;

    /**
     * safeZodPositiveInteger
     */
    trialPeriodDays: string | number | 0;

    VariantId: string;

    archived?: boolean | null;

    bankPaymentOnly?: boolean | null;

    billingCycleAnchor?: string | null;

    endDate?: string | null;

    livemode?: boolean;

    proposal?: string | null;

    purchaseDate?: string | null;

    status?:
      | 'open'
      | 'pending'
      | 'failed'
      | 'paid'
      | 'refunded'
      | 'partial_refund'
      | 'fraudulent'
      | (string & {})
      | null;

    /**
     * safeZodAlwaysNull
     */
    stripePaymentIntentId?: unknown;

    /**
     * safeZodAlwaysNull
     */
    stripeSubscriptionId?: unknown;

    totalPurchaseValue?: unknown;
  }

  export interface UnionMember1 {
    CustomerProfileId: string;

    /**
     * safeZodPositiveInteger
     */
    firstInvoiceValue: string | number | 0;

    name: string;

    priceType: 'single_payment';

    /**
     * safeZodPositiveInteger
     */
    quantity: string | number;

    /**
     * safeZodPositiveInteger
     */
    totalPurchaseValue: string | number | 0;

    VariantId: string;

    archived?: boolean | null;

    bankPaymentOnly?: boolean | null;

    billingCycleAnchor?: string | null;

    endDate?: string | null;

    intervalCount?: unknown;

    intervalUnit?: unknown;

    pricePerBillingCycle?: unknown;

    proposal?: string | null;

    purchaseDate?: string | null;

    status?:
      | 'open'
      | 'pending'
      | 'failed'
      | 'paid'
      | 'refunded'
      | 'partial_refund'
      | 'fraudulent'
      | (string & {})
      | null;

    trialPeriodDays?: unknown;
  }
}

export declare namespace CustomerProfiles {
  export {
    type CustomerProfileCreateResponse as CustomerProfileCreateResponse,
    type CustomerProfileCreateParams as CustomerProfileCreateParams,
  };
}
