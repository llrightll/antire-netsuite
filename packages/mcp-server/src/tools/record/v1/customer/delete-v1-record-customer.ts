// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AntireNetsuitempc from 'antire-netsuitempc';

export const metadata: Metadata = {
  resource: 'record.v1.customer',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_v1_record_customer',
  description: 'Delete a specific customer',
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
  return client.record.v1.customer.delete(id);
};

export default { metadata, tool, handler };
