// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import AntireNetsuitempc from 'antire-netsuitempc';

export const metadata: Metadata = {
  resource: 'query.v1',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'execute_suiteql_query_v1',
  description: 'Executes an SQL query against NetSuite data using SuiteQL',
  inputSchema: {
    type: 'object',
    properties: {
      q: {
        type: 'string',
        description: 'The SuiteQL query string to execute.',
      },
      Prefer: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'Limits the number of results returned per page.',
      },
      offset: {
        type: 'integer',
        description: 'Skips a number of results before returning data.',
      },
    },
  },
};

export const handler = (client: AntireNetsuitempc, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.query.v1.executeSuiteql(body);
};

export default { metadata, tool, handler };
