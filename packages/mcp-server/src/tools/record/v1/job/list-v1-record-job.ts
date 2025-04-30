// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import AntireNetsuitempc from 'antire-netsuitempc';

export const metadata: Metadata = {
  resource: 'record.v1.job',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_v1_record_job',
  description: 'Retrieve a list of projects with optional filtering and pagination.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'The maximum number of results per page.',
      },
      offset: {
        type: 'integer',
        description: 'The starting point for paginated results.',
      },
      q: {
        type: 'string',
        description: 'The search query used to filter job results.',
      },
    },
  },
};

export const handler = (client: AntireNetsuitempc, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.record.v1.job.list(body);
};

export default { metadata, tool, handler };
