// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class V1 extends APIResource {
  /**
   * Executes an SQL query against NetSuite data using SuiteQL
   */
  executeSuiteql(
    params: V1ExecuteSuiteqlParams,
    options?: RequestOptions,
  ): APIPromise<V1ExecuteSuiteqlResponse> {
    const { Prefer, limit, offset, ...body } = params;
    return this._client.post('/query/v1/suiteql', {
      query: { limit, offset },
      body,
      ...options,
      headers: buildHeaders([{ Prefer: Prefer }, options?.headers]),
    });
  }
}

export interface V1ExecuteSuiteqlResponse {
  /**
   * The total number of retrieved records.
   */
  count?: number;

  /**
   * Indicates if more records are available.
   */
  hasMore?: boolean;

  /**
   * List of records.
   */
  items?: Array<V1ExecuteSuiteqlResponse.Item>;

  /**
   * Links for pagination and navigation.
   */
  links?: Array<V1ExecuteSuiteqlResponse.Link>;

  /**
   * Offset used for pagination.
   */
  offset?: number;

  /**
   * Total number of available results.
   */
  totalResults?: number;
}

export namespace V1ExecuteSuiteqlResponse {
  export interface Item {
    /**
     * Links associated with this record
     */
    links?: Array<Item.Link>;
  }

  export namespace Item {
    export interface Link {
      /**
       * URL reference.
       */
      href?: string;

      /**
       * Relation type.
       */
      rel?: string;
    }
  }

  export interface Link {
    /**
     * URL for the corresponding link.
     */
    href?: string;

    /**
     * Relation type (e.g., next, last, self).
     */
    rel?: string;
  }
}

export interface V1ExecuteSuiteqlParams {
  /**
   * Body param: The SuiteQL query string to execute.
   */
  q: string;

  /**
   * Header param: Must be set to "transient" for query execution.
   */
  Prefer: string;

  /**
   * Query param: Limits the number of results returned per page.
   */
  limit?: number;

  /**
   * Query param: Skips a number of results before returning data.
   */
  offset?: number;
}

export declare namespace V1 {
  export {
    type V1ExecuteSuiteqlResponse as V1ExecuteSuiteqlResponse,
    type V1ExecuteSuiteqlParams as V1ExecuteSuiteqlParams,
  };
}
