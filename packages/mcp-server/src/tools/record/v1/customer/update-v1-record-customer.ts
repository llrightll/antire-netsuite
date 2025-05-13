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
  name: 'update_v1_record_customer',
  description: 'Update a specific customer',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      accountNumber: {
        type: 'string',
        description: 'account number for this customer',
      },
      addressBook: {
        type: 'string',
        description: 'Collection of addresses associated with the customer.',
      },
      aging: {
        type: 'number',
        description: 'overdue A/R balance with the balance totals',
      },
      aging1: {
        type: 'number',
        description: '1-30 Days overdue balance.',
      },
      aging2: {
        type: 'number',
        description: '31-60 Days overdue balance.',
      },
      aging3: {
        type: 'number',
        description: '61-90 Days overdue balance.',
      },
      aging4: {
        type: 'number',
        description: 'Over 90 Days overdue balance.',
      },
      alcoholRecipientType: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Internal identifier.',
            enum: ['CONSUMER', 'LICENSEE'],
          },
          refName: {
            type: 'string',
            description: 'Reference Name.',
          },
        },
        required: [],
      },
      altEmail: {
        type: 'string',
        description: 'Alternate email address for this customer.',
      },
      altPhone: {
        type: 'string',
        description: 'Alternate phone number.',
      },
      assignedWebSite: {
        type: 'string',
        description: 'Assigned website.',
      },
      autoName: {
        type: 'boolean',
        description: 'If true, NetSuite assigns a name automatically.',
      },
      balance: {
        type: 'number',
        description: 'Current accounts receivable balance.',
      },
      billingRateCard: {
        type: 'string',
        description: 'Billing rate card associated with the customer.',
      },
      billingSchedule: {
        type: 'string',
        description: 'Billing schedule ID.',
      },
      billingTransactionForm: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Internal identifier.',
          },
          refName: {
            type: 'string',
            description: 'Reference Name.',
          },
        },
        required: [],
      },
      billingTransactionType: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Internal identifier.',
            enum: ['CashSale', 'CustInvc'],
          },
          refName: {
            type: 'string',
            description: 'Reference Name.',
          },
        },
        required: [],
      },
      category: {
        type: 'string',
        description: 'Customer category.',
      },
      comments: {
        type: 'string',
        description: 'Additional notes about the customer.',
      },
      companyName: {
        type: 'string',
        description: 'The legal name of the customer.',
      },
      consolAging: {
        type: 'number',
        description: 'Consolidated overdue balance for the customer hierarchy.',
      },
      consolBalance: {
        type: 'number',
        description: 'Consolidated accounts receivable balance.',
      },
      contact: {
        type: 'object',
        description: 'Primary contact for the customer.',
      },
      contactList: {
        type: 'array',
        items: {
          type: 'object',
          description: 'List of customer contacts.',
        },
      },
      creditHoldOverride: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Internal identifier.',
            enum: ['AUTO', 'OFF', 'ON'],
          },
          refName: {
            type: 'string',
            description: 'Reference Name.',
          },
        },
        required: [],
      },
      creditLimit: {
        type: 'number',
        description: 'Maximum currency amount the customer is allowed to accrue',
      },
      currency: {
        type: 'string',
        description: 'Currency used for transactions.',
      },
      dateCreated: {
        type: 'string',
        description: 'The date when the customer was created.',
        format: 'date-time',
      },
      defaultAddress: {
        type: 'string',
        description: 'Default billing address.',
      },
      email: {
        type: 'string',
        description: "Customer's email address.",
      },
      entityId: {
        type: 'string',
        description: 'Unique entity identifier.',
      },
      entityStatus: {
        type: 'object',
        description: 'Status of the customer.',
        properties: {
          id: {
            type: 'string',
            description: 'Status ID.',
          },
          refName: {
            type: 'string',
            description: 'Status name.',
          },
        },
        required: [],
      },
      externalId: {
        type: 'string',
        description: 'External ID.',
      },
      fax: {
        type: 'string',
        description: 'Fax number.',
      },
      firstName: {
        type: 'string',
        description: 'First name of the customer.',
      },
      isInactive: {
        type: 'boolean',
        description: 'if true, this customer will be set inactive.',
      },
      isPerson: {
        type: 'boolean',
        description: 'if false,customer will be classified as a company',
      },
      language: {
        type: 'string',
        description: 'Preferred language.',
      },
      lastName: {
        type: 'string',
        description: 'Last name of the customer.',
      },
      mobilePhone: {
        type: 'string',
        description: 'Mobile phone number.',
      },
      overdueBalance: {
        type: 'number',
        description: 'Total amount owed for past due transactions.',
      },
      phone: {
        type: 'string',
        description: 'Primary phone number.',
      },
      priceLevel: {
        type: 'string',
        description: 'Price level assigned to the customer.',
      },
      salesRep: {
        type: 'string',
        description: 'Assigned sales representative.',
      },
      subsidiary: {
        type: 'string',
        description: 'The subsidiary associated with the customer.',
      },
      terms: {
        type: 'string',
        description: 'Payment terms associated with the customer.',
      },
      unbilledOrders: {
        type: 'number',
        description: 'Total unbilled orders for the customer.',
      },
      url: {
        type: 'string',
        description: 'Website URL of the customer.',
      },
    },
  },
};

export const handler = (client: AntireNetsuitempc, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.record.v1.customer.update(id, body);
};

export default { metadata, tool, handler };
