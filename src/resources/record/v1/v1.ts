// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CustomerAPI from './customer';
import {
  Customer,
  CustomerCreateParams,
  CustomerListParams,
  CustomerListResponse,
  CustomerRetrieveResponse,
  CustomerUpdateParams,
} from './customer';
import * as JobAPI from './job';
import {
  Job,
  JobListParams,
  JobListResponse,
  JobRetrieveResponse,
  JobUpdateParams,
  JobUpdateResponse,
} from './job';
import * as TimebillAPI from './timebill';
import {
  TimeBill,
  Timebill,
  TimebillCreateParams,
  TimebillListParams,
  TimebillListResponse,
  TimebillRetrieveResponse,
  TimebillUpdateParams,
} from './timebill';

export class V1 extends APIResource {
  customer: CustomerAPI.Customer = new CustomerAPI.Customer(this._client);
  job: JobAPI.Job = new JobAPI.Job(this._client);
  timebill: TimebillAPI.Timebill = new TimebillAPI.Timebill(this._client);
}

V1.Customer = Customer;
V1.Job = Job;
V1.Timebill = Timebill;

export declare namespace V1 {
  export {
    Customer as Customer,
    type CustomerRetrieveResponse as CustomerRetrieveResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };

  export {
    Job as Job,
    type JobRetrieveResponse as JobRetrieveResponse,
    type JobUpdateResponse as JobUpdateResponse,
    type JobListResponse as JobListResponse,
    type JobUpdateParams as JobUpdateParams,
    type JobListParams as JobListParams,
  };

  export {
    Timebill as Timebill,
    type TimeBill as TimeBill,
    type TimebillRetrieveResponse as TimebillRetrieveResponse,
    type TimebillListResponse as TimebillListResponse,
    type TimebillCreateParams as TimebillCreateParams,
    type TimebillUpdateParams as TimebillUpdateParams,
    type TimebillListParams as TimebillListParams,
  };
}
