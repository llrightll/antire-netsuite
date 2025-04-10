// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Customer extends APIResource {
  /**
   * Create a new customer
   */
  create(body: CustomerCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/record/v1/customer', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a specific customer
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CustomerRetrieveResponse> {
    return this._client.get(path`/record/v1/customer/${id}`, options);
  }

  /**
   * Update a specific customer
   */
  update(id: string, body: CustomerUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/record/v1/customer/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of customers
   */
  list(
    query: CustomerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerListResponse> {
    return this._client.get('/record/v1/customer', { query, ...options });
  }

  /**
   * Delete a specific customer
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/record/v1/customer/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CustomerRetrieveResponse {
  addressBook?: CustomerRetrieveResponse.AddressBook;

  aging?: number;

  aging1?: number;

  aging2?: number;

  aging3?: number;

  aging4?: number;

  alcoholRecipientType?: CustomerRetrieveResponse.AlcoholRecipientType;

  balance?: number;

  billingRateCard?: CustomerRetrieveResponse.BillingRateCard;

  billingSchedule?: CustomerRetrieveResponse.BillingSchedule;

  comments?: string;

  companyName?: string;

  contact?: CustomerRetrieveResponse.Contact;

  email?: string;

  entityId?: string;

  links?: Array<CustomerRetrieveResponse.Link>;

  phone?: string;

  /**
   * Sales representative assigned to this customer.
   */
  salesRep?: CustomerRetrieveResponse.SalesRep;

  subsidiary?: CustomerRetrieveResponse.Subsidiary;

  terms?: CustomerRetrieveResponse.Terms;

  unbilledOrders?: number;

  url?: string;
}

export namespace CustomerRetrieveResponse {
  export interface AddressBook {
    links?: Array<AddressBook.Link>;
  }

  export namespace AddressBook {
    export interface Link {
      href?: string;

      rel?: string;
    }
  }

  export interface AlcoholRecipientType {
    id?: string;

    refName?: string;
  }

  export interface BillingRateCard {
    id?: string;

    links?: Array<BillingRateCard.Link>;

    refName?: string;
  }

  export namespace BillingRateCard {
    export interface Link {
      href?: string;

      rel?: string;
    }
  }

  export interface BillingSchedule {
    id?: string;

    links?: Array<BillingSchedule.Link>;

    refName?: string;
  }

  export namespace BillingSchedule {
    export interface Link {
      href?: string;

      rel?: string;
    }
  }

  export interface Contact {
    id?: string;

    links?: Array<Contact.Link>;

    refName?: string;
  }

  export namespace Contact {
    export interface Link {
      href?: string;

      rel?: string;
    }
  }

  export interface Link {
    href?: string;

    rel?: string;
  }

  /**
   * Sales representative assigned to this customer.
   */
  export interface SalesRep {
    /**
     * Sales representative ID.
     */
    id?: string;

    /**
     * API links related to the sales representative
     */
    links?: Array<SalesRep.Link>;

    /**
     * Sales representative name.
     */
    refName?: string;
  }

  export namespace SalesRep {
    export interface Link {
      href?: string;

      rel?: string;
    }
  }

  export interface Subsidiary {
    id?: string;

    links?: Array<Subsidiary.Link>;

    refName?: string;
  }

  export namespace Subsidiary {
    export interface Link {
      href?: string;

      rel?: string;
    }
  }

  export interface Terms {
    id?: string;

    links?: Array<Terms.Link>;

    refName?: string;
  }

  export namespace Terms {
    export interface Link {
      href?: string;

      rel?: string;
    }
  }
}

export interface CustomerListResponse {
  /**
   * The total number of customers
   */
  count?: number;

  /**
   * Indicates if there are more customers to retrieve
   */
  hasMore?: boolean;

  items?: Array<CustomerListResponse.Item>;
}

export namespace CustomerListResponse {
  export interface Item {
    /**
     * The internal ID of the customer
     */
    id?: string;

    /**
     * The address of the customer
     */
    address?: string;

    /**
     * The name of the company
     */
    companyName?: string;

    /**
     * The email address of the customer
     */
    email?: string;

    /**
     * The phone number of the customer
     */
    phone?: string;
  }
}

export interface CustomerCreateParams {
  /**
   * The name of the company
   */
  companyName: string;

  /**
   * The email address of the customer
   */
  email: string;

  /**
   * The internal ID of the status of the customer record
   */
  entityStatus: string;

  /**
   * The phone number of the customer
   */
  phone: string;

  /**
   * The internal ID of the billing rate card
   */
  billingRateCard?: string;

  /**
   * The billing transaction type for the customer
   */
  billingTransactionType?: string;

  /**
   * The internal ID of the primary subsidiary
   */
  subsidiary?: string;
}

export interface CustomerUpdateParams {
  /**
   * account number for this customer
   */
  accountNumber?: string;

  /**
   * Collection of addresses associated with the customer.
   */
  addressBook?: string;

  /**
   * overdue A/R balance with the balance totals
   */
  aging?: number;

  /**
   * 1-30 Days overdue balance.
   */
  aging1?: number;

  /**
   * 31-60 Days overdue balance.
   */
  aging2?: number;

  /**
   * 61-90 Days overdue balance.
   */
  aging3?: number;

  /**
   * Over 90 Days overdue balance.
   */
  aging4?: number;

  alcoholRecipientType?: CustomerUpdateParams.AlcoholRecipientType;

  /**
   * Alternate email address for this customer.
   */
  altEmail?: string;

  /**
   * Alternate phone number.
   */
  altPhone?: string;

  /**
   * Assigned website.
   */
  assignedWebSite?: string;

  /**
   * If true, NetSuite assigns a name automatically.
   */
  autoName?: boolean;

  /**
   * Current accounts receivable balance.
   */
  balance?: number;

  /**
   * Billing rate card associated with the customer.
   */
  billingRateCard?: string;

  /**
   * Billing schedule ID.
   */
  billingSchedule?: string;

  billingTransactionForm?: CustomerUpdateParams.BillingTransactionForm;

  billingTransactionType?: CustomerUpdateParams.BillingTransactionType;

  /**
   * Customer category.
   */
  category?: string;

  /**
   * Additional notes about the customer.
   */
  comments?: string;

  /**
   * The legal name of the customer.
   */
  companyName?: string;

  /**
   * Consolidated overdue balance for the customer hierarchy.
   */
  consolAging?: number;

  /**
   * Consolidated accounts receivable balance.
   */
  consolBalance?: number;

  /**
   * Primary contact for the customer.
   */
  contact?: unknown;

  contactList?: Array<unknown>;

  creditHoldOverride?: CustomerUpdateParams.CreditHoldOverride;

  /**
   * Maximum currency amount the customer is allowed to accrue
   */
  creditLimit?: number;

  /**
   * Currency used for transactions.
   */
  currency?: string;

  /**
   * The date when the customer was created.
   */
  dateCreated?: string;

  /**
   * Default billing address.
   */
  defaultAddress?: string;

  /**
   * Customer's email address.
   */
  email?: string;

  /**
   * Unique entity identifier.
   */
  entityId?: string;

  /**
   * Status of the customer.
   */
  entityStatus?: CustomerUpdateParams.EntityStatus;

  /**
   * External ID.
   */
  externalId?: string;

  /**
   * Fax number.
   */
  fax?: string;

  /**
   * First name of the customer.
   */
  firstName?: string;

  /**
   * if true, this customer will be set inactive.
   */
  isInactive?: boolean;

  /**
   * if false,customer will be classified as a company
   */
  isPerson?: boolean;

  /**
   * Preferred language.
   */
  language?: string;

  /**
   * Last name of the customer.
   */
  lastName?: string;

  /**
   * Mobile phone number.
   */
  mobilePhone?: string;

  /**
   * Total amount owed for past due transactions.
   */
  overdueBalance?: number;

  /**
   * Primary phone number.
   */
  phone?: string;

  /**
   * Price level assigned to the customer.
   */
  priceLevel?: string;

  /**
   * Assigned sales representative.
   */
  salesRep?: string;

  /**
   * The subsidiary associated with the customer.
   */
  subsidiary?: string;

  /**
   * Payment terms associated with the customer.
   */
  terms?: string;

  /**
   * Total unbilled orders for the customer.
   */
  unbilledOrders?: number;

  /**
   * Website URL of the customer.
   */
  url?: string;
}

export namespace CustomerUpdateParams {
  export interface AlcoholRecipientType {
    /**
     * Internal identifier.
     */
    id?: 'CONSUMER' | 'LICENSEE';

    /**
     * Reference Name.
     */
    refName?: string;
  }

  export interface BillingTransactionForm {
    /**
     * Internal identifier.
     */
    id?: string;

    /**
     * Reference Name.
     */
    refName?: string;
  }

  export interface BillingTransactionType {
    /**
     * Internal identifier.
     */
    id?: 'CashSale' | 'CustInvc';

    /**
     * Reference Name.
     */
    refName?: string;
  }

  export interface CreditHoldOverride {
    /**
     * Internal identifier.
     */
    id?: 'AUTO' | 'OFF' | 'ON';

    /**
     * Reference Name.
     */
    refName?: string;
  }

  /**
   * Status of the customer.
   */
  export interface EntityStatus {
    /**
     * Status ID.
     */
    id?: string;

    /**
     * Status name.
     */
    refName?: string;
  }
}

export interface CustomerListParams {
  /**
   * The maximum number of results to return on a single page.
   */
  limit?: number;

  /**
   * The starting point for selecting a specific page of results.
   */
  offset?: number;

  /**
   * The search query used to filter results.
   */
  q?: string;
}

export declare namespace Customer {
  export {
    type CustomerRetrieveResponse as CustomerRetrieveResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };
}
