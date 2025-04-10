// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AntireNetsuitempc from 'antire-netsuitempc';

export const metadata: Metadata = {
  resource: 'record.v1.customer',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_v1_record_customer',
  description: 'Retrieve a list of customers',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'The maximum number of results to return on a single page.',
      },
      offset: {
        type: 'integer',
        description: 'The starting point for selecting a specific page of results.',
      },
      q: {
        type: 'string',
        description: 'The search query used to filter results.',
      },
    },
  },
};

export const handler = (client: AntireNetsuitempc, args: any) => {
  const { ...body } = args;
  return client.record.v1.customer.list(body);
};

export default { metadata, tool, handler };
