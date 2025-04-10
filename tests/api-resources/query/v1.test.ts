// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AntireNetsuitempc from 'antire-netsuitempc';

const client = new AntireNetsuitempc({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  // skipped: tests are disabled for the time being
  test.skip('executeSuiteql: only required params', async () => {
    const responsePromise = client.query.v1.executeSuiteql({ q: 'q', Prefer: 'Prefer' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('executeSuiteql: required and optional params', async () => {
    const response = await client.query.v1.executeSuiteql({ q: 'q', Prefer: 'Prefer', limit: 0, offset: 0 });
  });
});
