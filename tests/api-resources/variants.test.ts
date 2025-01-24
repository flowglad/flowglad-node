// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowglad from '@flowglad/node';
import { Response } from 'node-fetch';

const client = new Flowglad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource variants', () => {
  test('create: only required params', async () => {
    const responsePromise = client.variants.create({
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

  test('create: required and optional params', async () => {
    const response = await client.variants.create({
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

  test('update: only required params', async () => {
    const responsePromise = client.variants.update('id', {
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

  test('update: required and optional params', async () => {
    const response = await client.variants.update('id', {
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

  test('list', async () => {
    const responsePromise = client.variants.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.variants.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Flowglad.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.variants.list({ ProductId: 'ProductId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Flowglad.NotFoundError);
  });
});
