// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowglad from '@flowglad/node';

const client = new Flowglad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptions', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.subscriptions.create({ customerId: 'customerId', priceId: 'priceId' });
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
    const response = await client.subscriptions.create({
      customerId: 'customerId',
      priceId: 'priceId',
      backupPaymentMethodId: 'backupPaymentMethodId',
      defaultPaymentMethodId: 'defaultPaymentMethodId',
      interval: 'day',
      intervalCount: 0,
      metadata: { foo: 'bar' },
      name: 'name',
      quantity: 0,
      startDate: '2019-12-27T18:11:19.117Z',
      trialEnd: '2019-12-27T18:11:19.117Z',
    });
  });

  // skipped: tests are disabled for the time being
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

  // skipped: tests are disabled for the time being
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

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscriptions.list({ cursor: 'cursor', limit: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Flowglad.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('adjust: only required params', async () => {
    const responsePromise = client.subscriptions.adjust('id', {
      adjustment: {
        newSubscriptionItems: [
          {
            addedDate: '2019-12-27T18:11:19.117Z',
            externalId: 'externalId',
            livemode: true,
            metadata: { foo: 'bar' },
            name: 'name',
            priceId: 'priceId',
            quantity: 0,
            subscriptionId: 'subscriptionId',
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

  // skipped: tests are disabled for the time being
  test.skip('adjust: required and optional params', async () => {
    const response = await client.subscriptions.adjust('id', {
      adjustment: {
        newSubscriptionItems: [
          {
            addedDate: '2019-12-27T18:11:19.117Z',
            externalId: 'externalId',
            livemode: true,
            metadata: { foo: 'bar' },
            name: 'name',
            priceId: 'priceId',
            quantity: 0,
            subscriptionId: 'subscriptionId',
            unitPrice: 0,
          },
        ],
        prorateCurrentBillingPeriod: true,
        timing: 'immediately',
      },
    });
  });

  // skipped: tests are disabled for the time being
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

  // skipped: tests are disabled for the time being
  test.skip('cancel: required and optional params', async () => {
    const response = await client.subscriptions.cancel('id', {
      cancellation: { timing: 'at_end_of_current_billing_period' },
    });
  });
});
