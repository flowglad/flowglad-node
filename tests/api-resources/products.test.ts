// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowglad from '@flowglad/node';
import { Response } from 'node-fetch';

const client = new Flowglad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource products', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.products.create({
      product: {
        active: true,
        description: 'description',
        displayFeatures: [{ details: 'details', enabled: true, label: 'label' }],
        imageURL: 'imageURL',
        name: 'name',
      },
      variant: {
        active: true,
        intervalCount: 0,
        intervalUnit: 'day',
        isDefault: true,
        name: 'name',
        priceType: 'subscription',
        ProductId: 'ProductId',
        setupFeeAmount: 0,
        trialPeriodDays: 0,
        unitPrice: 0,
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
    const response = await client.products.create({
      product: {
        active: true,
        description: 'description',
        displayFeatures: [{ details: 'details', enabled: true, label: 'label' }],
        imageURL: 'imageURL',
        name: 'name',
      },
      variant: {
        active: true,
        intervalCount: 0,
        intervalUnit: 'day',
        isDefault: true,
        name: 'name',
        priceType: 'subscription',
        ProductId: 'ProductId',
        setupFeeAmount: 0,
        trialPeriodDays: 0,
        unitPrice: 0,
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.products.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.products.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Flowglad.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.products.update('id', {
      product: { id: 'id' },
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
    const response = await client.products.update('id', {
      product: {
        id: 'id',
        active: true,
        description: 'description',
        displayFeatures: [{ details: 'details', enabled: true, label: 'label' }],
        imageURL: 'imageURL',
        livemode: true,
        name: 'name',
        OrganizationId: 'OrganizationId',
        stripeProductId: 'stripeProductId',
      },
      variant: {
        id: 'id',
        priceType: 'subscription',
        active: true,
        currency: 'USD',
        intervalCount: 0,
        intervalUnit: 'day',
        isDefault: true,
        livemode: true,
        name: 'name',
        ProductId: 'ProductId',
        setupFeeAmount: 0,
        stripePriceId: 'stripePriceId',
        trialPeriodDays: 0,
        unitPrice: 0,
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.products.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.products.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Flowglad.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.list({ cursor: 'cursor', limit: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Flowglad.NotFoundError);
  });
});
