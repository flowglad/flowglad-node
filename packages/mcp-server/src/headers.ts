// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from '@flowglad/node/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  const apiKey =
    req.headers['x-flowglad-secret-key'] instanceof Array ?
      req.headers['x-flowglad-secret-key'][0]
    : req.headers['x-flowglad-secret-key'];
  return { apiKey };
};
