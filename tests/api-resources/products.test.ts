// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowglad from '@flowglad/node';

const client = new Flowglad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource products', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.products.create({
      price: {
        active: true,
        intervalCount: 0,
        intervalUnit: 'day',
        isDefault: true,
        name: 'name',
        productId: 'productId',
        setupFeeAmount: 0,
        trialPeriodDays: 0,
        type: 'subscription',
        unitPrice: 0,
        usageMeterId: 'usageMeterId',
      },
      product: {
        active: true,
        catalogId: 'catalogId',
        description: 'description',
        displayFeatures: [{ enabled: true, label: 'label' }],
        imageURL: 'imageURL',
        name: 'name',
        pluralQuantityLabel: 'pluralQuantityLabel',
        singularQuantityLabel: 'singularQuantityLabel',
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
      price: {
        active: true,
        intervalCount: 0,
        intervalUnit: 'day',
        isDefault: true,
        name: 'name',
        productId: 'productId',
        setupFeeAmount: 0,
        trialPeriodDays: 0,
        type: 'subscription',
        unitPrice: 0,
        usageMeterId: 'usageMeterId',
      },
      product: {
        active: true,
        catalogId: 'catalogId',
        description: 'description',
        displayFeatures: [{ enabled: true, label: 'label', details: 'details' }],
        imageURL: 'imageURL',
        name: 'name',
        pluralQuantityLabel: 'pluralQuantityLabel',
        singularQuantityLabel: 'singularQuantityLabel',
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
  test.skip('update: only required params', async () => {
    const responsePromise = client.products.update('id', {
      price: { id: 'id', type: 'subscription' },
      product: { id: 'id' },
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
      price: {
        id: 'id',
        type: 'subscription',
        active: true,
        currency: 'USD',
        externalId: 'externalId',
        intervalCount: 0,
        intervalUnit: 'day',
        isDefault: true,
        livemode: true,
        name: 'name',
        productId: 'productId',
        setupFeeAmount: 0,
        trialPeriodDays: 0,
        unitPrice: 0,
        usageMeterId: 'usageMeterId',
      },
      product: {
        id: 'id',
        active: true,
        catalogId: 'catalogId',
        description: 'description',
        displayFeatures: [{ enabled: true, label: 'label', details: 'details' }],
        externalId: 'externalId',
        imageURL: 'imageURL',
        livemode: true,
        name: 'name',
        organizationId: 'organizationId',
        pluralQuantityLabel: 'pluralQuantityLabel',
        singularQuantityLabel: 'singularQuantityLabel',
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
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.list({ cursor: 'cursor', limit: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Flowglad.NotFoundError);
  });
});
