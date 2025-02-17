// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowglad from '@flowglad/node';
import { Response } from 'node-fetch';

const client = new Flowglad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource variant', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.v1.variant.create({
      variant: {
        active: true,
        intervalCount: 'string',
        intervalUnit: 'day',
        isDefault: true,
        livemode: true,
        name: 'name',
        priceType: 'subscription',
        ProductId: 'ProductId',
        setupFeeAmount: 'string',
        trialPeriodDays: 'string',
        unitPrice: 'string',
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.api.v1.variant.create({
      variant: {
        active: true,
        intervalCount: 'string',
        intervalUnit: 'day',
        isDefault: true,
        livemode: true,
        name: 'name',
        priceType: 'subscription',
        ProductId: 'ProductId',
        setupFeeAmount: 'string',
        trialPeriodDays: 'string',
        unitPrice: 'string',
        stripePriceId: 'stripePriceId',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v1.variant.update('id', {
      variant: { id: 'id', priceType: 'subscription' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.api.v1.variant.update('id', {
      variant: {
        id: 'id',
        priceType: 'subscription',
        active: true,
        intervalCount: 'string',
        intervalUnit: 'day',
        isDefault: true,
        livemode: true,
        name: 'name',
        ProductId: 'ProductId',
        setupFeeAmount: 'string',
        stripePriceId: 'stripePriceId',
        trialPeriodDays: 'string',
        unitPrice: 'string',
      },
    });
  });
});
