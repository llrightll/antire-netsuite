# Record

## V1

### Customer

Types:

- <code><a href="./src/resources/record/v1/customer.ts">CustomerRetrieveResponse</a></code>
- <code><a href="./src/resources/record/v1/customer.ts">CustomerListResponse</a></code>

Methods:

- <code title="post /record/v1/customer">client.record.v1.customer.<a href="./src/resources/record/v1/customer.ts">create</a>({ ...params }) -> void</code>
- <code title="get /record/v1/customer/{id}">client.record.v1.customer.<a href="./src/resources/record/v1/customer.ts">retrieve</a>(id) -> CustomerRetrieveResponse</code>
- <code title="patch /record/v1/customer/{id}">client.record.v1.customer.<a href="./src/resources/record/v1/customer.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /record/v1/customer">client.record.v1.customer.<a href="./src/resources/record/v1/customer.ts">list</a>({ ...params }) -> CustomerListResponse</code>
- <code title="delete /record/v1/customer/{id}">client.record.v1.customer.<a href="./src/resources/record/v1/customer.ts">delete</a>(id) -> void</code>

### Job

Types:

- <code><a href="./src/resources/record/v1/job.ts">JobRetrieveResponse</a></code>
- <code><a href="./src/resources/record/v1/job.ts">JobUpdateResponse</a></code>
- <code><a href="./src/resources/record/v1/job.ts">JobListResponse</a></code>

Methods:

- <code title="get /record/v1/job/{id}">client.record.v1.job.<a href="./src/resources/record/v1/job.ts">retrieve</a>(id) -> JobRetrieveResponse</code>
- <code title="patch /record/v1/job/{id}">client.record.v1.job.<a href="./src/resources/record/v1/job.ts">update</a>(id, { ...params }) -> JobUpdateResponse</code>
- <code title="get /record/v1/job">client.record.v1.job.<a href="./src/resources/record/v1/job.ts">list</a>({ ...params }) -> JobListResponse</code>

### Timebill

Types:

- <code><a href="./src/resources/record/v1/timebill.ts">TimeBill</a></code>
- <code><a href="./src/resources/record/v1/timebill.ts">TimebillRetrieveResponse</a></code>
- <code><a href="./src/resources/record/v1/timebill.ts">TimebillListResponse</a></code>

Methods:

- <code title="post /record/v1/timebill">client.record.v1.timebill.<a href="./src/resources/record/v1/timebill.ts">create</a>({ ...params }) -> void</code>
- <code title="get /record/v1/timebill/{id}">client.record.v1.timebill.<a href="./src/resources/record/v1/timebill.ts">retrieve</a>(id) -> TimebillRetrieveResponse</code>
- <code title="patch /record/v1/timebill/{id}">client.record.v1.timebill.<a href="./src/resources/record/v1/timebill.ts">update</a>(pathID, { ...params }) -> void</code>
- <code title="get /record/v1/timebill">client.record.v1.timebill.<a href="./src/resources/record/v1/timebill.ts">list</a>({ ...params }) -> TimebillListResponse</code>

# Query

## V1

Types:

- <code><a href="./src/resources/query/v1.ts">V1ExecuteSuiteqlResponse</a></code>

Methods:

- <code title="post /query/v1/suiteql">client.query.v1.<a href="./src/resources/query/v1.ts">executeSuiteql</a>({ ...params }) -> V1ExecuteSuiteqlResponse</code>
