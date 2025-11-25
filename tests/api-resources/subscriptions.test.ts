// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowglad from '@flowglad/node';

const client = new Flowglad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptions', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.subscriptions.create({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.subscriptions.retrieve('id');
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
    const responsePromise = client.subscriptions.list();
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
      client.subscriptions.list({ cursor: 'cursor', limit: 'limit' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Flowglad.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('adjust: only required params', async () => {
    const responsePromise = client.subscriptions.adjust('id', {
      adjustment: {
        newSubscriptionItems: [
          {
            addedDate: -9007199254740991,
            priceId: 'priceId',
            quantity: 1,
            subscriptionId: 'subscriptionId',
            type: 'static',
            unitPrice: 0,
          },
        ],
        prorateCurrentBillingPeriod: true,
        timing: 'immediately',
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
  test.skip('adjust: required and optional params', async () => {
    const response = await client.subscriptions.adjust('id', {
      adjustment: {
        newSubscriptionItems: [
          {
            addedDate: -9007199254740991,
            priceId: 'priceId',
            quantity: 1,
            subscriptionId: 'subscriptionId',
            type: 'static',
            unitPrice: 0,
            expiredAt: -9007199254740991,
            externalId: 'externalId',
            metadata: { foo: 'string' },
            name: 'name',
          },
        ],
        prorateCurrentBillingPeriod: true,
        timing: 'immediately',
      },
    });
  });

  // Prism tests are disabled
  test.skip('cancel: only required params', async () => {
    const responsePromise = client.subscriptions.cancel('id', {
      cancellation: { timing: 'at_end_of_current_billing_period' },
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
  test.skip('cancel: required and optional params', async () => {
    const response = await client.subscriptions.cancel('id', {
      cancellation: { timing: 'at_end_of_current_billing_period' },
    });
  });
});
