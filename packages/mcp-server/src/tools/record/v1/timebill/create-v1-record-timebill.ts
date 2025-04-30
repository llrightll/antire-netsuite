// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AntireNetsuitempc from 'antire-netsuitempc';

export const metadata: Metadata = {
  resource: 'record.v1.timebill',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_v1_record_timebill',
  description: 'Create a new time entry',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The internal ID of the time entry',
      },
      customer: {
        type: 'string',
        description: 'The customer associated with the time entry',
      },
      date: {
        type: 'string',
        description: 'The date of the time entry',
        format: 'date',
      },
      employee: {
        type: 'string',
        description: 'The employee associated with the time entry',
      },
      hours: {
        type: 'number',
        description: 'The number of hours logged',
      },
      project: {
        type: 'string',
        description: 'The project associated with the time entry',
      },
    },
  },
};

export const handler = (client: AntireNetsuitempc, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.record.v1.timebill.create(body);
};

export default { metadata, tool, handler };
