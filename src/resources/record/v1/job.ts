// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Job extends APIResource {
  /**
   * Fetch details for a specific project.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<JobRetrieveResponse> {
    return this._client.get(path`/record/v1/job/${id}`, options);
  }

  /**
   * Update a specific project
   */
  update(id: string, body: JobUpdateParams, options?: RequestOptions): APIPromise<JobUpdateResponse> {
    return this._client.patch(path`/record/v1/job/${id}`, { body, ...options });
  }

  /**
   * Retrieve a list of projects with optional filtering and pagination.
   */
  list(query: JobListParams | null | undefined = {}, options?: RequestOptions): APIPromise<JobListResponse> {
    return this._client.get('/record/v1/job', { query, ...options });
  }
}

export interface JobRetrieveResponse {
  /**
   * Actual time logged for the job.
   */
  actualTime?: string;

  /**
   * Time allocated to the job.
   */
  allocatedTime?: string;

  /**
   * If true, allows all resources for project task assignment.
   */
  allowAllResourcesForTasks?: boolean;

  /**
   * If true, allows expenses to be entered for this job.
   */
  allowExpenses?: boolean;

  /**
   * allows allocated resources to enter time for all tasks.
   */
  allowTaskTimeForRsrcAlloc?: boolean;

  /**
   * If true, allows time entry for this project.
   */
  allowTime?: boolean;

  /**
   * applies the selected project expense type to all time entries.
   */
  applyProjectExpenseTypeToAll?: boolean;

  /**
   * Duration of the last project plan recalculation.
   */
  averageProjectPlanRecalculationDuration?: string;

  /**
   * Check this box to create a billing shedule
   */
  billingSchedule?: JobRetrieveResponse.BillingSchedule;

  /**
   * calculated end date
   */
  calculatedEndDate?: string;

  /**
   * calculated start date
   */
  calculatedStartDate?: string;

  /**
   * Total planned work in hours.
   */
  calculatedWork?: string;

  /**
   * The category of the job
   */
  category?: JobRetrieveResponse.Category;

  /**
   * The company name associated with this project.
   */
  companyName?: string;

  links?: Array<JobRetrieveResponse.Link>;
}

export namespace JobRetrieveResponse {
  /**
   * Check this box to create a billing shedule
   */
  export interface BillingSchedule {
    /**
     * Internal identifier for billing schedule.
     */
    id?: string;

    /**
     * API links related to the billing schedule.
     */
    links?: Array<BillingSchedule.Link>;

    /**
     * Reference Name of the billing schedule.
     */
    refName?: string;
  }

  export namespace BillingSchedule {
    export interface Link {
      /**
       * API endpoint for billing schedule details
       */
      href?: string;

      /**
       * Relationship type of the link.
       */
      rel?: string;
    }
  }

  /**
   * The category of the job
   */
  export interface Category {
    /**
     * Internal ID of the job category.
     */
    id?: string;

    /**
     * API links related to the job category.
     */
    links?: Array<Category.Link>;

    /**
     * Category name or reference.
     */
    refName?: string;
  }

  export namespace Category {
    export interface Link {
      /**
       * API endpoint for category details.
       */
      href?: string;

      /**
       * Relationship type of the link.
       */
      rel?: string;
    }
  }

  export interface Link {
    /**
     * The URL of the job.
     */
    href?: string;

    /**
     * Relationship type of the link.
     */
    rel?: string;
  }
}

export interface JobUpdateResponse {
  /**
   * The department associated with the job.
   */
  department?: string;

  /**
   * The end date of the job.
   */
  endDate?: string;

  /**
   * Description of the job.
   */
  jobDescription?: string;

  /**
   * The title of the job.
   */
  jobTitle?: string;

  /**
   * The start date of the job.
   */
  startDate?: string;

  /**
   * The status of the job.
   */
  status?: 'Open' | 'Closed' | 'Pending';
}

export interface JobListResponse {
  /**
   * The total number of jobs.
   */
  count?: number;

  /**
   * Indicates whether more results are available.
   */
  hasMore?: boolean;

  items?: Array<JobListResponse.Item>;

  links?: Array<JobListResponse.Link>;
}

export namespace JobListResponse {
  export interface Item {
    /**
     * The unique identifier of the job.
     */
    id?: string;

    links?: Array<Item.Link>;
  }

  export namespace Item {
    export interface Link {
      /**
       * The URL of the specific job.
       */
      href?: string;

      /**
       * The relationship type of the link.
       */
      rel?: string;
    }
  }

  export interface Link {
    /**
     * The URL of the current job listing.
     */
    href?: string;

    /**
     * The relationship type of the link.
     */
    rel?: string;
  }
}

export interface JobUpdateParams {
  /**
   * Account number assigned to the project.
   */
  accountNumber?: string;

  /**
   * Total actual work logged for the project.
   */
  actualTime?: string;

  addressBook?: Array<unknown>;
}

export interface JobListParams {
  /**
   * The maximum number of results per page.
   */
  limit?: number;

  /**
   * The starting point for paginated results.
   */
  offset?: number;

  /**
   * The search query used to filter job results.
   */
  q?: string;
}

export declare namespace Job {
  export {
    type JobRetrieveResponse as JobRetrieveResponse,
    type JobUpdateResponse as JobUpdateResponse,
    type JobListResponse as JobListResponse,
    type JobUpdateParams as JobUpdateParams,
    type JobListParams as JobListParams,
  };
}
