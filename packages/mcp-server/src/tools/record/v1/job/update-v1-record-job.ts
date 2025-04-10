// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AntireNetsuitempc from 'antire-netsuitempc';

export const metadata: Metadata = {
  resource: 'record.v1.job',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_v1_record_job',
  description: 'Update a specific project',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      accountNumber: {
        type: 'string',
        description: 'Account number assigned to the project.',
      },
      actualTime: {
        type: 'string',
        description: 'Total actual work logged for the project.',
      },
      addressBook: {
        type: 'array',
        items: {
          type: 'object',
          description: 'Address book collection for the job.',
        },
      },
    },
  },
};

export const handler = (client: AntireNetsuitempc, args: any) => {
  const { id, ...body } = args;
  return client.record.v1.job.update(id, body);
};

export default { metadata, tool, handler };
