The Shadeform API uses API key authentication for all requests. This guide covers how to create, manage, and use API keys.

## [​](#api-key-authentication)API Key Authentication

API keys provide a simple way to authenticate requests for programmatic access. They are ideal for server-to-server communication, CI/CD pipelines, and automation scripts.

### [​](#getting-an-api-key)Getting an API Key

Generate an API key through the [Shadeform Platform](https://platform.shadeform.ai/settings/api). Once created, the API key will be displayed once - **store it securely** as it cannot be retrieved again.
Each workspace can have up to 10 API keys. You can create multiple API keys for different use cases (e.g., one for production, one for development).

### [​](#using-api-keys)Using API Keys

Include your API key in the `X-API-KEY` header:
Copy
```
curl -X GET https://api.shadeform.ai/v1/instances \
  -H "X-API-KEY: your-api-key-here"
```

### [​](#api-key-permissions)API Key Permissions

API keys are created with `admin` permissions, providing full access to all platform resources and management features.

### [​](#important-notes)Important Notes

- **Key Storage**: All API keys are hashed with a pepper and stored securely. Once created, you cannot retrieve the original key value

- **Key Limits**: Each workspace can have a maximum of 10 API keys

- **Key Visibility**: API key values are never returned in GET requests for security. They are only shown once during creation or refresh

- **Security**: All API keys are fully hashed and secured in our database

## [​](#error-responses)Error Responses

### [​](#unauthorized-401)Unauthorized (401)

The API returns `401 Unauthorized` when:

- No `X-API-KEY` header is provided

- Invalid or expired API key

Example response:
Copy
```
{
  "message": "Invalid API key"
}
```

### [​](#forbidden-403)Forbidden (403)

The API returns `403 Forbidden` when:

- Account mismatch (e.g., accessing another account’s resources)

## [​](#best-practices)Best Practices

### [​](#security)Security

1. **Never commit API keys** to version control

1. **Rotate API keys regularly** using the refresh endpoint

1. **Use environment variables** to store credentials

1. **Monitor API key usage** and revoke unused keys

### [​](#api-key-management)API Key Management

- **Multiple Keys**: Create separate API keys for different environments or use cases (e.g., “Production CI/CD”, “Development Script”)

- **Naming**: Use descriptive names for API keys to easily identify their purpose

- **Permissions**: All API keys have `admin` permissions, providing full access to platform resources

- **Rotation**: Refresh API keys periodically for security. Use the refresh endpoint to rotate keys without losing access

- **Cleanup**: Delete unused or compromised API keys immediately. You can have up to 10 API keys per workspace

- **Key Storage**: Never store API keys in code or version control. Use environment variables or secure secret management systems

## [​](#examples)Examples

### [​](#using-api-key-for-instance-operations)Using API Key for Instance Operations

Copy
```
API_KEY="your-api-key"

# List instances
curl -X GET https://api.shadeform.ai/v1/instances \
  -H "X-API-KEY: $API_KEY"

# Create an instance
curl -X POST https://api.shadeform.ai/v1/instances/create \
  -H "X-API-KEY: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "cloud": "massedcompute",
    "region": "us-central-1",
    "shade_instance_type": "A6000_plus",
    "shade_cloud": true,
    "name": "my-instance"
  }'
```

## [​](#api-key-management-2)API Key Management

API keys are managed through the [Shadeform Platform](https://platform.shadeform.ai/settings/api). You can:

- Create new API keys

- View all your API keys (names, creation dates)

- Refresh (rotate) existing API keys

- Delete unused API keys

## [​](#troubleshooting)Troubleshooting

### [​](#”invalid-api-key”)”Invalid API key”

**Solution**:

- Verify the API key is correct (no extra spaces or characters)

- Check if the API key has been deleted or rotated

- Ensure you’re using the correct API key for your account