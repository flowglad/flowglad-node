// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowglad from '@flowglad/node';

const client = new Flowglad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource checkoutSessions', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.checkoutSessions.create({
      checkoutSession: {
        cancelUrl: 'cancelUrl',
        customerExternalId: 'customerExternalId',
        successUrl: 'successUrl',
        type: 'product',
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
    const response = await client.checkoutSessions.create({
      checkoutSession: {
        cancelUrl: 'cancelUrl',
        customerExternalId: 'customerExternalId',
        successUrl: 'successUrl',
        type: 'product',
        anonymous: true,
        outputMetadata: { foo: 'string' },
        outputName: 'outputName',
        preserveBillingCycleAnchor: true,
        priceId: 'priceId',
        priceSlug: 'priceSlug',
        quantity: 1,
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.checkoutSessions.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.checkoutSessions.list();
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
      client.checkoutSessions.list(
        { cursor: 'cursor', limit: 'limit' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Flowglad.NotFoundError);
  });
});
