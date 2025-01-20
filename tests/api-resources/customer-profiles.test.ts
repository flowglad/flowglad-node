// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowglad from 'flowglad';
import { Response } from 'node-fetch';

const client = new Flowglad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customerProfiles', () => {
  test('create: only required params', async () => {
    const responsePromise = client.customerProfiles.create({
      customer: { email: 'email', name: 'name' },
      customerProfile: { CustomerId: 'CustomerId', email: 'email', OrganizationId: 'OrganizationId' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.customerProfiles.create({
      customer: { email: 'email', name: 'name', livemode: true, UserId: 'UserId' },
      customerProfile: {
        CustomerId: 'CustomerId',
        email: 'email',
        OrganizationId: 'OrganizationId',
        archived: true,
        customerTaxId: 'customerTaxId',
        domain: 'domain',
        iconURL: 'iconURL',
        invoiceNumberBase: 'invoiceNumberBase',
        livemode: true,
        logoURL: 'logoURL',
        name: 'name',
        slackId: 'slackId',
        stripeCustomerId: 'stripeCustomerId',
      },
      purchase: {
        CustomerProfileId: 'CustomerProfileId',
        firstInvoiceValue: 'string',
        intervalCount: 'string',
        intervalUnit: 'day',
        name: 'name',
        OrganizationId: 'OrganizationId',
        pricePerBillingCycle: 'string',
        priceType: 'subscription',
        quantity: 'string',
        trialPeriodDays: 'string',
        VariantId: 'VariantId',
        archived: true,
        bankPaymentOnly: true,
        billingCycleAnchor: '2019-12-27T18:11:19.117Z',
        endDate: '2019-12-27T18:11:19.117Z',
        livemode: true,
        proposal: 'proposal',
        purchaseDate: '2019-12-27T18:11:19.117Z',
        status: 'open',
        stripePaymentIntentId: {},
        stripeSubscriptionId: {},
        totalPurchaseValue: {},
      },
    });
  });
});
