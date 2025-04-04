// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowglad from '@flowglad/node';

const client = new Flowglad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource usageEvents', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.usageEvents.create({
      usageEvent: {
        amount: 1,
        customerId: 'customerId',
        priceId: 'priceId',
        subscriptionId: 'subscriptionId',
        transactionId: 'transactionId',
        usageMeterId: 'usageMeterId',
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
    const response = await client.usageEvents.create({
      usageEvent: {
        amount: 1,
        customerId: 'customerId',
        priceId: 'priceId',
        subscriptionId: 'subscriptionId',
        transactionId: 'transactionId',
        usageMeterId: 'usageMeterId',
        properties: { foo: 'bar' },
        usageDate: '2019-12-27T18:11:19.117Z',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.usageEvents.retrieve('id');
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
    const responsePromise = client.usageEvents.update('id', { usageEvent: { id: 'id' } });
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
    const response = await client.usageEvents.update('id', {
      usageEvent: {
        id: 'id',
        amount: 1,
        priceId: 'priceId',
        properties: { foo: 'bar' },
        transactionId: 'transactionId',
        usageDate: '2019-12-27T18:11:19.117Z',
      },
    });
  });
});
