![Header Image](https://static.us-east-1.prod.workshops.aws/5209979b-c825-4380-9e37-e1b6e6fdce6d/static/images/header_3.png?Key-Pair-Id=K36Q2WVO3JP7QD&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdGF0aWMudXMtZWFzdC0xLnByb2Qud29ya3Nob3BzLmF3cy81MjA5OTc5Yi1jODI1LTQzODAtOWUzNy1lMWI2ZTZmZGNlNmQvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc3Mjg5MjYzMH19fV19&Signature=Hb0JYI-ILjcCdCaqDtJ7iw9uTorDW09q44KgDFKTdWydqD6WKtFznKsqAbtsioa7XEPCWSOrllPgwrbCMHZKqqx1e6JYjQrBl0xR1X9ONz-nh%7ENqwHeRkVlNzpShc3qj-wcOQ2XKTp21Via9TA5TJykVvk6nNgadRvtQg6oyJGgn269BH6wYw4NKmH8M3kG2dFKUTum%7EfF-qC6LkDposiTKrjPRITHjBNba9F-9fW%7E5Iv1SGij6VG2s99gWSwrMskLQOJ1yw99AGjcYuexKoJ83l99ChBpKWHkx1yKcatgbw%7EvF9%7Eir2oRQMmPcwoS3XsVjAVJJkGMx9JqXX7uMXrw__)

[
# 🎯 Quest Objective

](#quest-objective)

Master the art of **custom tool** creation by forging the legendary **Dice of Destiny** - an essential tool for any self-respecting Dungeon Master.

Make sure you are at the root of Chapter 3 in your terminal:

``1
`cd sample-once-upon-agentic-ai/3_custom_tools`

Open and modify the `agent_with_dice_roll_tool.py` file to create an agent capable of rolling dices with a custom tool.

[
## 🔮 The Philosophy of Custom Tools

](#the-philosophy-of-custom-tools)

In Strands, a custom tool is nothing more than a Python function blessed with special enchantments:

- **🎭 The `@tool` Decorator**: The magical rune that transforms an ordinary function into an agent tool

- **📜 The Sacred Docstring**: The description that guides the agent on when and how to use the tool

[
## Step 1: Import the Sacred Tool Magic 📚

](#step-1:-import-the-sacred-tool-magic)
``1
`# TODO: Import `tool` from strands to use the `@tool` decorator`

Before you can forge any custom tools, you must first import the sacred `@tool` decorator from the Strands library. Look at this example in the [documentation](https://strandsagents.com/latest/documentation/docs/user-guide/concepts/tools/custom-tools/) to help you on this quest.

[
## Step 2: Invoke the Transformation Rune 🪄

](#step-2:-invoke-the-transformation-rune)
``1
`# TODO: Add the decorator to transform your function into a tool`

The `@tool` decorator is the incantation that transforms an ordinary Python function into a tool that your agent can automatically discover and use. Look at the documentation shared in step 1 to help you.

[
## Step 3: Write the Documentation Grimoire 📚 (optional)

](#step-3:-write-the-documentation-grimoire-(optional))
``1
`# TODO: Modify the docstring with information about arguments and return value`

The docstring isn't just simple documentation - it's the instruction manual that your agent uses to understand the tool. Check the [documentation best practices](https://strandsagents.com/latest/documentation/docs/user-guide/concepts/tools/#tool-design-best-practices) to help you.

**Tips:** LLMs are generally really good at creating docstrings for agents. Give them the function you want to transform as a tool and an example of tool design best practices and see what it generates.

[
## Step 4: Equip Your Agent with the Tool ⚔️

](#step-4:-equip-your-agent-with-the-tool)
``1
`# TODO: Add the tool to the agent`

Once your tool is forged, you must equip your agent with it. Look at the documentation shared in step 1 to help you.

**Why this matters:**

- The agent can only use tools that are explicitly provided in the `tools=[]` list

- Without this step, your perfectly crafted tool remains unused

- The agent automatically discovers and learns how to use all provided tools

[
## Step 5: Testing Your Creation 🔧

](#step-5:-testing-your-creation)

Once TODOs are completed, run your script:

``1
`python agent_with_dice_roll_tool.py`

Watch the agent in action:

- **Analyze** the character creation request

- **Plan** necessary rolls (4 abilities × 4d6 each)

- **Execute** dice rolls with your custom tool

- **Calculate** final scores (keep the best 3 dice)

- **Present** results with theatrical drama

[
## 🎉 Quest Complete!

](#quest-complete!)

Congratulations, Master Forger! You've mastered the ancient art of custom tool creation. Your agent can now use unique capabilities that you've forged specifically for your adventures.

**What you've mastered:**

- ✅ Transforming Python functions into agent tools

- ✅ Writing effective docstrings to guide agents

- ✅ Creating specialized tools for specific domains

- ✅ Integrating custom tools into complex workflows

**Loot Acquired:**

- 🎲 The legendary Dice of Destiny

- 🔨 Custom tool forging skills

- 🎭 An agent with theatrical personality

- 📊 D&D character creation capabilities

**Next Adventure**: Head to Chapter 4 where you'll discover the planar portals of the Model Context Protocol (MCP) and learn to connect your agents to distant realms!

---

*"A tool forged with care is worth a thousand artifacts found by chance!"* 🔨✨