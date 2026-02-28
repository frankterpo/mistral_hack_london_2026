![Header Image](https://static.us-east-1.prod.workshops.aws/5209979b-c825-4380-9e37-e1b6e6fdce6d/static/images/header_2.png?Key-Pair-Id=K36Q2WVO3JP7QD&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdGF0aWMudXMtZWFzdC0xLnByb2Qud29ya3Nob3BzLmF3cy81MjA5OTc5Yi1jODI1LTQzODAtOWUzNy1lMWI2ZTZmZGNlNmQvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc3Mjg5MjYzMH19fV19&Signature=Hb0JYI-ILjcCdCaqDtJ7iw9uTorDW09q44KgDFKTdWydqD6WKtFznKsqAbtsioa7XEPCWSOrllPgwrbCMHZKqqx1e6JYjQrBl0xR1X9ONz-nh%7ENqwHeRkVlNzpShc3qj-wcOQ2XKTp21Via9TA5TJykVvk6nNgadRvtQg6oyJGgn269BH6wYw4NKmH8M3kG2dFKUTum%7EfF-qC6LkDposiTKrjPRITHjBNba9F-9fW%7E5Iv1SGij6VG2s99gWSwrMskLQOJ1yw99AGjcYuexKoJ83l99ChBpKWHkx1yKcatgbw%7EvF9%7Eir2oRQMmPcwoS3XsVjAVJJkGMx9JqXX7uMXrw__)

[
# 🎯 Quest Objective

](#quest-objective)

Tools are the primary mechanism for extending agent capabilities, enabling them to perform actions beyond simple text generation. Tools allow agents to interact with external systems, access data, and manipulate their environment. Transform your basic agent into a web-enabled information gatherer by mastering the `http_request` tool. You'll complete the `2_built_in_tools/agent_with_built_in_tools.py` file.

Make sure you are at the root of Chapter 2 in your terminal:

``1
`cd sample-once-upon-agentic-ai/2_built_in_tools`

Open and modify the `agent_with_built_in_tools.py` file to create an agent capable of fetching and analyzing web content.

[
## 🏺 The Ancient Arsenal: Built-in Tools

](#the-ancient-arsenal:-built-in-tools)

Strands comes pre-enchanted with legendary artifacts, ready for immediate use. Here are some examples:

- **🌐 `http_request`**: A mystical web-weaver that can fetch content from distant realms

- **⏰ `current_time`**: A chronometer revealing the current date and time

- **🧮 `calculator`**: An enchanted abacus for mathematical sorcery

- **📁 `file_read`/`file_write`**: Magical scrolls for reading and inscribing parchments

- **🐍 `python_repl`**: A code execution chamber for casting Python spells

- **🌐 `browser`**: An automated web navigator for complex interactions

[View the complete arsenal in the documentation →](https://strandsagents.com/latest/documentation/docs/user-guide/concepts/tools/community-tools-package/)

[
## Step 1: Summon the Web-Weaver 🌐

](#step-1:-summon-the-web-weaver)
``1
`# TODO: Import the `http_request` built-in tool`

The `http_request` tool is your gateway to the vast information networks of the digital realm. It can fetch web pages, call APIs, and retrieve data from distant servers. Here is an [example](https://strandsagents.com/latest/documentation/docs/user-guide/concepts/tools/community-tools-package/#human-in-the-loop-with-handoff_to_user) of how to import a tool from the `strands_tools` library.

[
## Step 2: Arm Your Agent 🗡️

](#step-2:-arm-your-agent)
``1
`# TODO: Add the `http_request` tool to your agent's arsenal`

Equip your agent with the web-weaver so it can venture beyond its initial knowledge and fetch fresh information from the internet. The documentation [here](https://strandsagents.com/latest/documentation/docs/user-guide/concepts/tools/community-tools-package/#human-in-the-loop-with-handoff_to_user) shows you an example of how to pass a tool to an agent.

[
## Step3: Testing Your Enhanced Agent 🔧

](#step3:-testing-your-enhanced-agent)

Once you've completed both TODOs, run your script:

``1
`python agent_with_built_in_tools.py`

Watch as your agent:

- Receives the quest about D&D's creators

- Automatically decides to use the `http_request` tool

- Fetches the Wikipedia page content

- Analyzes the HTML to find historical information

- Reports the names of D&D's legendary designers back to you

You can check if the answer your agent gave you is correct [here](https://en.wikipedia.org/wiki/Dungeons_%26_Dragons).

[
# 🌟 Bonus Quest: The Arcane Codex Challenge (optional)

](#bonus-quest:-the-arcane-codex-challenge-(optional))

Ready for a more advanced adventure? Try this legendary challenge located in `2_built_in_tools/bonus_quest.py`:

**The Fibonacci Scroll Quest**: Create an agent equipped with `python_repl` and `file_write` tools that can:

- Generate a magical scroll (Python file) containing Fibonacci sequence code

- Execute the spell to demonstrate its power

- Create visual representations of mathematical beauty

**⚠️ Important: Enable Debug Logs for Interactive Tools!**

Before attempting this bonus quest, you **must** enable `DEBUG` logging to see the tool consent prompts. The `python_repl` and `file_write` tools will ask for your permission before executing, and you need to see these prompts in your terminal to accept them. Here is the [documentation to enable logging](https://strandsagents.com/latest/documentation/docs/user-guide/observability-evaluation/logs/#configuring-logging).

**What you'll see**: When the agent tries to create files or run code, you'll see prompts like:

`DEBUG | strands.tools | Tool 'file_write' requires consent. Do you want to allow this action? (y/n):`

Simply type `y` and press Enter to allow the tool to proceed with its magical work!

Check that the fibonacci scroll has been successfully created at the root of your project.

[
## 🛡️ Safety Enchantments

](#safety-enchantments)

**Tool Consent Prompts**: By default, certain powerful tools (like `file_write` and `python_repl`) will ask for your permission before executing. This protective ward ensures you maintain control over potentially system-altering actions.

**Bypass for Testing** (use with caution):

``1
`export BYPASS_TOOL_CONSENT=true`
[
# 🎉 Quest Complete!

](#quest-complete!)

Congratulations, Tool Master! You've successfully armed your agent with the power of web access. Your digital companion can now venture beyond its training data to fetch real-time information from the vast digital realm.

**What you've mastered:**

- ✅ Importing and configuring built-in tools

- ✅ Understanding how agents autonomously choose when to use tools

- ✅ Web content fetching and information extraction

- ✅ The balance between agent autonomy and user control

**Loot Acquired:**

- 🌐 Web-scraping capabilities

- 📊 Real-time information access

- 🔧 Foundation for more complex tool combinations

**Next Adventure**: Journey to Chapter 3 where you'll forge your own custom magical implements and create the legendary Dice Rolling tool for epic D&D adventures!

---

*"Give an agent a fact, and they know it for a moment. Give an agent a tool, and they can discover facts for a lifetime!"* ⚔️✨