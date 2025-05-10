// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AntireNetsuitempc from 'antire-netsuitempc';

export const metadata: Metadata = {
  resource: 'record.v1.timebill',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_v1_record_timebill',
  description: 'Retrieves a specific timebill',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: AntireNetsuitempc, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.record.v1.timebill.retrieve(id);
};

export default { metadata, tool, handler };
