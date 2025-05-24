// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AntireNetsuitempc from 'antire-netsuitempc';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import create_v1_record_customer from './record/v1/customer/create-v1-record-customer';
import retrieve_v1_record_customer from './record/v1/customer/retrieve-v1-record-customer';
import update_v1_record_customer from './record/v1/customer/update-v1-record-customer';
import list_v1_record_customer from './record/v1/customer/list-v1-record-customer';
import delete_v1_record_customer from './record/v1/customer/delete-v1-record-customer';
import retrieve_v1_record_job from './record/v1/job/retrieve-v1-record-job';
import update_v1_record_job from './record/v1/job/update-v1-record-job';
import list_v1_record_job from './record/v1/job/list-v1-record-job';
import create_v1_record_timebill from './record/v1/timebill/create-v1-record-timebill';
import retrieve_v1_record_timebill from './record/v1/timebill/retrieve-v1-record-timebill';
import update_v1_record_timebill from './record/v1/timebill/update-v1-record-timebill';
import list_v1_record_timebill from './record/v1/timebill/list-v1-record-timebill';
import execute_suiteql_query_v1 from './query/v1/execute-suiteql-query-v1';

export type HandlerFunction = (
  client: AntireNetsuitempc,
  args: Record<string, unknown> | undefined,
) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_v1_record_customer);
addEndpoint(retrieve_v1_record_customer);
addEndpoint(update_v1_record_customer);
addEndpoint(list_v1_record_customer);
addEndpoint(delete_v1_record_customer);
addEndpoint(retrieve_v1_record_job);
addEndpoint(update_v1_record_job);
addEndpoint(list_v1_record_job);
addEndpoint(create_v1_record_timebill);
addEndpoint(retrieve_v1_record_timebill);
addEndpoint(update_v1_record_timebill);
addEndpoint(list_v1_record_timebill);
addEndpoint(execute_suiteql_query_v1);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
