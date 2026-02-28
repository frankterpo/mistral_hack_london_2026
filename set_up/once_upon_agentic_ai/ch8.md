![Header Image](https://static.us-east-1.prod.workshops.aws/5209979b-c825-4380-9e37-e1b6e6fdce6d/static/images/header_8.png?Key-Pair-Id=K36Q2WVO3JP7QD&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9zdGF0aWMudXMtZWFzdC0xLnByb2Qud29ya3Nob3BzLmF3cy81MjA5OTc5Yi1jODI1LTQzODAtOWUzNy1lMWI2ZTZmZGNlNmQvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc3Mjg5MjYzMH19fV19&Signature=Hb0JYI-ILjcCdCaqDtJ7iw9uTorDW09q44KgDFKTdWydqD6WKtFznKsqAbtsioa7XEPCWSOrllPgwrbCMHZKqqx1e6JYjQrBl0xR1X9ONz-nh%7ENqwHeRkVlNzpShc3qj-wcOQ2XKTp21Via9TA5TJykVvk6nNgadRvtQg6oyJGgn269BH6wYw4NKmH8M3kG2dFKUTum%7EfF-qC6LkDposiTKrjPRITHjBNba9F-9fW%7E5Iv1SGij6VG2s99gWSwrMskLQOJ1yw99AGjcYuexKoJ83l99ChBpKWHkx1yKcatgbw%7EvF9%7Eir2oRQMmPcwoS3XsVjAVJJkGMx9JqXX7uMXrw__)

To avoid incurring future charges, clean up the resources created during this workshop (if running this workshop in your own AWS account).

[
## Amazon Bedrock cleanup

](#amazon-bedrock-cleanup)

Since this workshop primarily uses Amazon Bedrock, no specific cleanup is required for the Bedrock service itself. However, be aware of the following:

- **Bedrock Model Usage**: Charges are based on usage (input/output tokens). No ongoing charges will occur if you stop using the models.

- **Bedrock Model Access**: The model access you enabled will remain active but doesn't incur charges unless used.

[
## Local development cleanup

](#local-development-cleanup)

- **Stop local servers**:

- Stop any running MCP servers (Ctrl+C in terminal)

- Terminate any local development servers

- **Clean up temporary files**:

- Remove any temporary log files created during development

- Clear any cached model responses if applicable

[
## Next steps

](#next-steps)

Now that you've cleaned up your resources, you're ready to apply what you've learned in your own projects.

If you have any questions or need further assistance, refer to the [Strands Agents documentation](https://strandsagents.com/latest/documentation/docs/) or reach out to the workshop facilitators.