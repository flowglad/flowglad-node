// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowglad from '@flowglad/node';
import { Response } from 'node-fetch';

const client = new Flowglad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customerProfiles', () => {
  test('create: only required params', async () => {
    const responsePromise = client.customerProfiles.create({
      customerProfile: { email: 'email', externalId: 'externalId' },
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
    const response = await client.customerProfiles.create({
      customerProfile: {
        email: 'email',
        externalId: 'externalId',
        archived: true,
        domain: 'domain',
        iconURL: 'iconURL',
        logoURL: 'logoURL',
        name: 'name',
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.customerProfiles.retrieve('externalId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customerProfiles.retrieve('externalId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Flowglad.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.customerProfiles.update('externalId', { customerProfile: { id: 'id' } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.customerProfiles.update('externalId', {
      customerProfile: {
        id: 'id',
        archived: true,
        domain: 'domain',
        email: 'email',
        externalId: 'externalId',
        iconURL: 'iconURL',
        logoURL: 'logoURL',
        name: 'name',
      },
    });
  });
});
