// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1';
import { V1, V1ExecuteSuiteqlParams, V1ExecuteSuiteqlResponse } from './v1';

export class Query extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Query.V1 = V1;

export declare namespace Query {
  export {
    V1 as V1,
    type V1ExecuteSuiteqlResponse as V1ExecuteSuiteqlResponse,
    type V1ExecuteSuiteqlParams as V1ExecuteSuiteqlParams,
  };
}
