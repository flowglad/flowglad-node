// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowglad from '@flowglad/node';

const client = new Flowglad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource resourceClaims', () => {
  // Prism tests are disabled
  test.skip('claim: only required params', async () => {
    const responsePromise = client.resourceClaims.claim('subscriptionId', { resourceSlug: 'resourceSlug' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('claim: required and optional params', async () => {
    const response = await client.resourceClaims.claim('subscriptionId', {
      resourceSlug: 'resourceSlug',
      externalId: 'externalId',
      externalIds: ['string'],
      metadata: { foo: 'string' },
      quantity: 1,
    });
  });

  // Prism tests are disabled
  test.skip('release: only required params', async () => {
    const responsePromise = client.resourceClaims.release('subscriptionId', { resourceSlug: 'resourceSlug' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('release: required and optional params', async () => {
    const response = await client.resourceClaims.release('subscriptionId', {
      resourceSlug: 'resourceSlug',
      claimIds: ['string'],
      externalId: 'externalId',
      externalIds: ['string'],
      quantity: 1,
    });
  });

  // Prism tests are disabled
  test.skip('usage', async () => {
    const responsePromise = client.resourceClaims.usage('subscriptionId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('usage: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.resourceClaims.usage(
        'subscriptionId',
        { resourceSlug: 'resourceSlug' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Flowglad.NotFoundError);
  });
});
