// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowglad from '@flowglad/node';
import { Response } from 'node-fetch';

const client = new Flowglad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource discounts', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.discounts.create({
      discount: {
        amount: 0,
        amountType: 'percent',
        code: 'xxx',
        duration: 'once',
        name: 'name',
        numberOfPayments: {},
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
    const response = await client.discounts.create({
      discount: {
        amount: 0,
        amountType: 'percent',
        code: 'xxx',
        duration: 'once',
        name: 'name',
        numberOfPayments: {},
        active: true,
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.discounts.retrieve('id');
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
    await expect(client.discounts.retrieve('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Flowglad.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.discounts.update('id', {
      discount: { id: 'id', duration: 'once', numberOfPayments: {} },
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
    const response = await client.discounts.update('id', {
      discount: {
        id: 'id',
        duration: 'once',
        numberOfPayments: {},
        active: true,
        amount: 0,
        amountType: 'percent',
        code: 'xxx',
        createdAt: '2019-12-27T18:11:19.117Z',
        name: 'name',
        updatedAt: '2019-12-27T18:11:19.117Z',
      },
    });
  });
});
