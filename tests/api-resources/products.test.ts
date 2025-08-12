// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowglad from '@flowglad/node';

const client = new Flowglad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource products', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.products.create({
      price: {
        active: true,
        intervalCount: 0,
        intervalUnit: 'day',
        isDefault: true,
        name: 'name',
        setupFeeAmount: 0,
        slug: 'slug',
        trialPeriodDays: 0,
        type: 'subscription',
        unitPrice: 0,
      },
      product: {
        active: true,
        catalogId: 'catalogId',
        default: true,
        description: 'description',
        displayFeatures: [{ enabled: true, label: 'label' }],
        imageURL: 'imageURL',
        name: 'name',
        pluralQuantityLabel: 'pluralQuantityLabel',
        singularQuantityLabel: 'singularQuantityLabel',
        slug: 'slug',
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

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.products.create({
      price: {
        active: true,
        intervalCount: 0,
        intervalUnit: 'day',
        isDefault: true,
        name: 'name',
        setupFeeAmount: 0,
        slug: 'slug',
        trialPeriodDays: 0,
        type: 'subscription',
        unitPrice: 0,
        overagePriceId: 'overagePriceId',
        startsWithCreditTrial: true,
        usageEventsPerUnit: 'null',
        usageMeterId: 'null',
      },
      product: {
        active: true,
        catalogId: 'catalogId',
        default: true,
        description: 'description',
        displayFeatures: [{ enabled: true, label: 'label', details: 'details' }],
        imageURL: 'imageURL',
        name: 'name',
        pluralQuantityLabel: 'pluralQuantityLabel',
        singularQuantityLabel: 'singularQuantityLabel',
        slug: 'slug',
      },
      featureIds: ['string'],
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.products.update('id', { product: { id: 'id' } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.products.update('id', {
      product: {
        id: 'id',
        active: true,
        default: true,
        description: 'description',
        displayFeatures: [{ enabled: true, label: 'label', details: 'details' }],
        imageURL: 'imageURL',
        name: 'name',
        pluralQuantityLabel: 'pluralQuantityLabel',
        singularQuantityLabel: 'singularQuantityLabel',
        slug: 'slug',
      },
      featureIds: ['string'],
      price: {
        id: 'id',
        type: 'subscription',
        active: true,
        intervalCount: 0,
        intervalUnit: 'day',
        isDefault: true,
        name: 'name',
        overagePriceId: 'overagePriceId',
        productId: 'productId',
        setupFeeAmount: 0,
        slug: 'slug',
        startsWithCreditTrial: true,
        trialPeriodDays: 0,
        unitPrice: 0,
        usageEventsPerUnit: 'null',
        usageMeterId: 'null',
      },
    });
  });

  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.products.list({ cursor: 'cursor', limit: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Flowglad.NotFoundError);
  });
});
