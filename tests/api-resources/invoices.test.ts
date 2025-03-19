// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flowglad from '@flowglad/node';

const client = new Flowglad({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invoices', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.invoices.create({
      invoice: {
        billingPeriodId: 'null',
        currency: 'USD',
        customerId: 'customerId',
        invoiceNumber: 'invoiceNumber',
        purchaseId: 'purchaseId',
        type: 'purchase',
      },
      invoiceLineItems: [{ invoiceId: 'invoiceId', price: 0, quantity: 0 }],
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
    const response = await client.invoices.create({
      invoice: {
        billingPeriodId: 'null',
        currency: 'USD',
        customerId: 'customerId',
        invoiceNumber: 'invoiceNumber',
        purchaseId: 'purchaseId',
        type: 'purchase',
        bankPaymentOnly: true,
        billingAnchorDate: '2019-12-27T18:11:19.117Z',
        billingInterval: 'day',
        billingIntervalCount: 0,
        billingPeriodEndDate: '2019-12-27T18:11:19.117Z',
        billingPeriodStartDate: '2019-12-27T18:11:19.117Z',
        dueDate: '2019-12-27T18:11:19.117Z',
        invoiceDate: '2019-12-27T18:11:19.117Z',
        memo: 'memo',
        ownerMembershipId: 'ownerMembershipId',
        pdfURL: 'https://example.com',
        receiptPdfURL: 'https://example.com',
        status: 'draft',
        subtotal: 0,
        taxCountry: 'AF',
        taxState: 'taxState',
        taxType: 'amusement_tax',
      },
      invoiceLineItems: [
        { invoiceId: 'invoiceId', price: 0, quantity: 0, description: 'description', priceId: 'priceId' },
      ],
      autoSend: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.invoices.retrieve('id');
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
    const responsePromise = client.invoices.list();
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
      client.invoices.list({ cursor: 'cursor', limit: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Flowglad.NotFoundError);
  });
});
