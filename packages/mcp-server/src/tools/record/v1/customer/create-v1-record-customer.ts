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
  name: 'create_v1_record_customer',
  description: 'Create a new customer',
  inputSchema: {
    type: 'object',
    properties: {
      companyName: {
        type: 'string',
        description: 'The name of the company',
      },
      email: {
        type: 'string',
        description: 'The email address of the customer',
      },
      entityStatus: {
        type: 'string',
        description: 'The internal ID of the status of the customer record',
      },
      phone: {
        type: 'string',
        description: 'The phone number of the customer',
      },
      billingRateCard: {
        type: 'string',
        description: 'The internal ID of the billing rate card',
      },
      billingTransactionType: {
        type: 'string',
        description: 'The billing transaction type for the customer',
      },
      subsidiary: {
        type: 'string',
        description: 'The internal ID of the primary subsidiary',
      },
    },
  },
};

export const handler = (client: AntireNetsuitempc, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.record.v1.customer.create(body);
};

export default { metadata, tool, handler };
