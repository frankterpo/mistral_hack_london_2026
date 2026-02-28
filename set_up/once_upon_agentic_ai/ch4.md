![Header Image](https://static.us-east-1.prod.workshops.aws/5209979b-c825-4380-9e37-e1b6e6fdce6d/static/images/header_4.png?Key-Pair-Id=K36Q2WVO3JP7QD&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdGF0aWMudXMtZWFzdC0xLnByb2Qud29ya3Nob3BzLmF3cy81MjA5OTc5Yi1jODI1LTQzODAtOWUzNy1lMWI2ZTZmZGNlNmQvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc3Mjg5MjYzMH19fV19&Signature=Hb0JYI-ILjcCdCaqDtJ7iw9uTorDW09q44KgDFKTdWydqD6WKtFznKsqAbtsioa7XEPCWSOrllPgwrbCMHZKqqx1e6JYjQrBl0xR1X9ONz-nh%7ENqwHeRkVlNzpShc3qj-wcOQ2XKTp21Via9TA5TJykVvk6nNgadRvtQg6oyJGgn269BH6wYw4NKmH8M3kG2dFKUTum%7EfF-qC6LkDposiTKrjPRITHjBNba9F-9fW%7E5Iv1SGij6VG2s99gWSwrMskLQOJ1yw99AGjcYuexKoJ83l99ChBpKWHkx1yKcatgbw%7EvF9%7Eir2oRQMmPcwoS3XsVjAVJJkGMx9JqXX7uMXrw__)

*"Opening portals to distant realms..."*

Welcome to the arcane arts of planar connections, brave traveler! In this chapter, you'll learn the mystical art of the [Model Context Protocol (MCP)](https://strandsagents.com/latest/documentation/docs/user-guide/concepts/tools/mcp-tools/) - the magic that allows your agents to connect to external services and invoke powers from distant realms.

[
# 🎯 Quest Objective

](#quest-objective)

Make sure you are at the root of Chapter 4 in your terminal:

``1
`cd sample-once-upon-agentic-ai/4_mcp_integration`

Master the art of MCP portals by creating a two-component system:

- **An MCP Server** (`4_mcp_integration/dice_roll_mcp_server.py`) - That exposes the dice rolling service

- **An MCP Client** (`4_mcp_integration/gamemaster_mcp_client.py`) - That connects to the server and uses its tools

[
## 📜 Part 1: Forging the MCP Server (`dice_roll_mcp_server.py`)

](#part-1:-forging-the-mcp-server-(dice_roll_mcp_server.py))
[
### Step 1: Invoke the Necessary Modules 📚

](#step-1:-invoke-the-necessary-modules)
``1
`# TODO: Import `FastMCP` from `mcp.server`.`

You need to import the `FastMCP` class to create your MCP server. The `random` and `logging` modules are already imported for you. Check out the [documentation](https://strandsagents.com/latest/documentation/docs/examples/python/mcp_calculator/#first-create-a-simple-mcp-server) where they create the server to help you.

[
### Step 2: Create the MCP Server 🏰

](#step-2:-create-the-mcp-server)
``1
`# TODO: Create an MCP server with the name "D&D Dice Roll Service" on port 8080.`

Create a `FastMCP` instance with the specified `name`, and `port` 8080. Check out the documentation shared in Part 1/step 1 to help you.

[
### Step 3: Run the Server 🚀

](#step-3:-run-the-server)
``1
`# TODO: Run the MCP server.`

In the main, add the line to start the MCP server with a transport defined as `streamable-http` like in this [example](https://strandsagents.com/latest/documentation/docs/examples/python/mcp_calculator/#first-create-a-simple-mcp-server)
The `@mcp.tool()` decorator is already implemented for you!

[
## 📜 Part 2: Create the MCP Client (`gamemaster_mcp_client.py`)

](#part-2:-create-the-mcp-client-(gamemaster_mcp_client.py))
[
### Step 1: Import Connection Tools 🔗

](#step-1:-import-connection-tools)
``1
`# TODO: Import `Agent`, `MCPClient` and `streamablehttp_client``

For this part, refer to the part of the [documentation](https://strandsagents.com/latest/documentation/docs/examples/python/mcp_calculator/#now-connect-the-server-to-the-strands-agent) where they create the client to help you.

[
### Step 2: Establish the Planar Connection 🌉

](#step-2:-establish-the-planar-connection)
``1
`# TODO: Create a streamable http MCPClient connecting to "http://localhost:8080/mcp"`

Create an MCPClient instance that connects to the dice server. Use a lambda function that returns `streamablehttp_client("http://localhost:8080/mcp")`. Check out the documentation shared in Part 2/step 1 to help you.

[
### Step 3: Use the Context Manager 🔒

](#step-3:-use-the-context-manager)
``1
`# TODO: Use the `MCPClient` in a context manager (with statement)`

Wrap your agent code in a `with` statement using the `MCPClient` to ensure proper connection management. Check out the documentation shared in Part 2/step 1 to help you.

[
### Step 4: Get Available Tools

](#step-4:-get-available-tools)
``1
`# TODO: Get available tools from MCP server using `list_tools_sync()``

Call the `list_tools_sync()` method on your `MCPClient` to retrieve available tools from the server.
Put the list in a variable called `mcp_tools` if you want to use the print statement. Check out the documentation shared in Part 2/step 1 to help you.

[
### Step 5: Add Tools to Agent 🤖

](#step-5:-add-tools-to-agent)
``1
`# TODO: Add the MCP tool to the gamemaster agent`

Check out the documentation shared in Part 2/step 1 to help you.

[
# 🎲 Testing Your MCP System

](#testing-your-mcp-system)
[
## Step 1: Launch the Server

](#step-1:-launch-the-server)
``1
`python dice_roll_mcp_server.py`

You should see: "Starting D&D Dice Roll MCP Server on port 8080..."

[
## Step 2: Launch the Client (in another terminal)

](#step-2:-launch-the-client-(in-another-terminal))
``1
`python gamemaster_mcp_client.py`
[
## Step 3: Test Dice Rolling

](#step-3:-test-dice-rolling)

Try these commands:

- "Roll a d20"

- "Roll a d6"

- "Roll a d100"

- "Roll 4d6 for ability scores"

[
## 🎉 Quest Complete!

](#quest-complete!)

Congratulations, Portal Master! You've mastered the mystical art of the Model Context Protocol. Your system can now:

**What you've mastered:**

- ✅ Creating MCP servers that expose tools

- ✅ Connecting MCP clients to remote services

- ✅ Integrating MCP tools into Strands agents

- ✅ Distributed architecture for agent systems

**Loot Acquired:**

- 🌐 MCP dice rolling server

- 🧙‍♂️ MCP client with Lady Luck

- 🔗 Distributed architecture skills

- 🎲 Centralized and reusable dice system

**Next Adventure**: Head to Chapter 5 where you'll discover Agent-to-Agent (A2A) communication and learn to orchestrate teams of specialized agents!

---

*"A well-opened portal is worth a thousand local tools!"* 🌐✨