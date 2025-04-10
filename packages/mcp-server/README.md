# Antire Netsuitempc TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:llrightll/antire-netsuite.git
cd antire-netsuite
yarn && ./scripts/build-all
```

### Running

```sh
# set env vars as needed
export ANTIRE_NETSUITEMPC_API_KEY="My API Key"
npx ./packages/mcp-server
```

> [!NOTE]
> Once this package is [published to npm](https://app.stainless.com/docs/guides/publish), this will become: `npx -y antire-netsuitempc-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "antire_netsuitempc_api": {
      "command": "npx",
      "args": ["-y", "/path/to/local/antire-netsuite/packages/mcp-server"],
      "env": {
        "ANTIRE_NETSUITEMPC_API_KEY": "My API Key"
      }
    }
  }
}
```

## Filtering tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "antire-netsuitempc-mcp/server";

// import a specific tool
import createV1RecordCustomer from "antire-netsuitempc-mcp/tools/record/v1/customer/create-v1-record-customer";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createV1RecordCustomer, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `record.v1.customer`:

- `create_v1_record_customer` (`write`): Create a new customer
- `retrieve_v1_record_customer` (`read`): Retrieve a specific customer
- `update_v1_record_customer` (`write`): Update a specific customer
- `list_v1_record_customer` (`read`): Retrieve a list of customers
- `delete_v1_record_customer` (`write`): Delete a specific customer

### Resource `record.v1.job`:

- `retrieve_v1_record_job` (`read`): Fetch details for a specific project.
- `update_v1_record_job` (`write`): Update a specific project
- `list_v1_record_job` (`read`): Retrieve a list of projects with optional filtering and pagination.

### Resource `record.v1.timebill`:

- `create_v1_record_timebill` (`write`): Create a new time entry
- `retrieve_v1_record_timebill` (`read`): Retrieves a specific timebill
- `update_v1_record_timebill` (`write`): Updates a specific time bill
- `list_v1_record_timebill` (`read`): Retrieve a list of time entries with optional filtering and pagination.

### Resource `query.v1`:

- `execute_suiteql_query_v1` (`write`): Executes an SQL query against NetSuite data using SuiteQL
