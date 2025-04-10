// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Timebill extends APIResource {
  /**
   * Create a new time entry
   */
  create(body: TimebillCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/record/v1/timebill', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a specific timebill
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TimebillRetrieveResponse> {
    return this._client.get(path`/record/v1/timebill/${id}`, options);
  }

  /**
   * Updates a specific time bill
   */
  update(pathID: string, body: TimebillUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/record/v1/timebill/${pathID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of time entries with optional filtering and pagination.
   */
  list(
    query: TimebillListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimebillListResponse> {
    return this._client.get('/record/v1/timebill', { query, ...options });
  }
}

export interface TimeBill {
  /**
   * The internal ID of the time entry
   */
  id?: string;

  /**
   * The customer associated with the time entry
   */
  customer?: string;

  /**
   * The date of the time entry
   */
  date?: string;

  /**
   * The employee associated with the time entry
   */
  employee?: string;

  /**
   * The number of hours logged
   */
  hours?: number;

  /**
   * The project associated with the time entry
   */
  project?: string;
}

export interface TimebillRetrieveResponse {
  /**
   * Unique identifier for the time entry.
   */
  id?: string;

  /**
   * Employee associated with this time entry.
   */
  employee?: TimebillRetrieveResponse.Employee;

  /**
   * API link to this time entry.
   */
  links?: Array<TimebillRetrieveResponse.Link>;
}

export namespace TimebillRetrieveResponse {
  /**
   * Employee associated with this time entry.
   */
  export interface Employee {
    /**
     * Employee ID.
     */
    id?: string;

    /**
     * API links related to the employee.
     */
    links?: Array<Employee.Link>;

    /**
     * Employee name.
     */
    refName?: string;
  }

  export namespace Employee {
    export interface Link {
      href?: string;

      rel?: string;
    }
  }

  export interface Link {
    /**
     * API endpoint for this time entry.
     */
    href?: string;

    /**
     * Relationship type of the link.
     */
    rel?: string;
  }
}

export interface TimebillListResponse {
  /**
   * The total number of time bills
   */
  count?: number;

  /**
   * Indicates if there are more time bills to retrieve
   */
  hasMore?: boolean;

  items?: Array<TimeBill>;
}

export interface TimebillCreateParams {
  /**
   * The internal ID of the time entry
   */
  id?: string;

  /**
   * The customer associated with the time entry
   */
  customer?: string;

  /**
   * The date of the time entry
   */
  date?: string;

  /**
   * The employee associated with the time entry
   */
  employee?: string;

  /**
   * The number of hours logged
   */
  hours?: number;

  /**
   * The project associated with the time entry
   */
  project?: string;
}

export interface TimebillUpdateParams {
  /**
   * The internal ID of the time entry
   */
  body_id?: string;

  /**
   * The customer associated with the time entry
   */
  customer?: string;

  /**
   * The date of the time entry
   */
  date?: string;

  /**
   * The employee associated with the time entry
   */
  employee?: string;

  /**
   * The number of hours logged
   */
  hours?: number;

  /**
   * The project associated with the time entry
   */
  project?: string;
}

export interface TimebillListParams {
  /**
   * The maximum number of results per page.
   */
  limit?: number;

  /**
   * The starting point for paginated results.
   */
  offset?: number;

  /**
   * The search query used to filter time entries results.
   */
  q?: string;
}

export declare namespace Timebill {
  export {
    type TimeBill as TimeBill,
    type TimebillRetrieveResponse as TimebillRetrieveResponse,
    type TimebillListResponse as TimebillListResponse,
    type TimebillCreateParams as TimebillCreateParams,
    type TimebillUpdateParams as TimebillUpdateParams,
    type TimebillListParams as TimebillListParams,
  };
}
