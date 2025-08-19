// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from '@flowglad/node/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  const apiKey =
    Array.isArray(req.headers['x-flowglad-secret-key']) ?
      req.headers['x-flowglad-secret-key'][0]
    : req.headers['x-flowglad-secret-key'];
  return { apiKey };
};
