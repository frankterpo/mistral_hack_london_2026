[Skip to main content](#content-area)[Shadeform Documentation home page![light logo](https://mintcdn.com/shadeform-67/lzAxNF7kTU5nDqcG/logo/light-shadeform.svg?fit=max&auto=format&n=lzAxNF7kTU5nDqcG&q=85&s=d688dd98f8455717be483952d2328b35)![dark logo](https://mintcdn.com/shadeform-67/lzAxNF7kTU5nDqcG/logo/dark-shadeform.svg?fit=max&auto=format&n=lzAxNF7kTU5nDqcG&q=85&s=fe071ef02ef2137a0c81893b1945e080)](/)[Documentation](/getting-started/introduction)[API Reference](/api-reference/instances/instances-create)
- [Support](https://www.shadeform.ai/?slack=true)
- [Community](https://discord.gg/dCEd77nQYc)

Instances
- [POST/instances/create](/api-reference/instances/instances-create)
- [GET/instances/{id}/info](/api-reference/instances/instances-info)
- [POST/instances/{id}/update](/api-reference/instances/instances-update)
- [POST/instances/{id}/delete](/api-reference/instances/instances-delete)
- [POST/instances/{id}/restart](/api-reference/instances/instances-restart)
- [GET/instances/types](/api-reference/instances/instances-types)
- [GET/instances](/api-reference/instances/instances)

Clusters
- [POST/clusters/create](/api-reference/clusters/clusters-create)
- [GET/clusters/{id}/info](/api-reference/clusters/clusters-info)
- [POST/clusters/{id}/delete](/api-reference/clusters/clusters-delete)
- [GET/clusters/types](/api-reference/clusters/clusters-types)
- [GET/clusters](/api-reference/clusters/clusters)

SSH Keys
- [POST/sshkeys/add](/api-reference/sshkeys/sshkeys-add)
- [GET/sshkeys/{id}/info](/api-reference/sshkeys/sshkeys-info)
- [POST/sshkeys/{id}/delete](/api-reference/sshkeys/sshkeys-delete)
- [GET/sshkeys](/api-reference/sshkeys/sshkeys)
- [POST/sshkeys/{id}/setdefault](/api-reference/sshkeys/sshkeys-setdefault)

Volumes
- [POST/volumes/create](/api-reference/volumes/volumes-create)
- [GET/volumes/{id}/info](/api-reference/volumes/volumes-info)
- [POST/volumes/{id}/delete](/api-reference/volumes/volumes-delete)
- [GET/volumes/types](/api-reference/volumes/volumes-types)
- [GET/volumes](/api-reference/volumes/volumes)

Templates
- [GET/templates](/api-reference/templates/templates)
- [GET/templates/{template_id}/info](/api-reference/templates/templates-info)
- [GET/templates/featured](/api-reference/templates/templates-featured)
- [POST/templates/save](/api-reference/templates/templates-save)
- [POST/templates/{template_id}/update](/api-reference/templates/templates-update)
- [POST/templates/{template_id}/delete](/api-reference/templates/templates-delete)

API Documentation
- [Authentication](/api-reference/authentication)

/instances/createCopy
```
curl --request POST \
  --url https://api.shadeform.ai/v1/instances/create \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: <api-key>' \
  --data '
{
  "cloud": "hyperstack",
  "region": "canada-1",
  "shade_instance_type": "A6000",
  "shade_cloud": true,
  "name": "cool-gpu-server",
  "os": "ubuntu22.04_cuda12.2_shade_os",
  "template_id": "template-123",
  "launch_configuration": {
    "type": "docker",
    "docker_configuration": {
      "image": "vllm/vllm-openai:latest",
      "args": "--model mistralai/Mistral-7B-v0.1",
      "shared_memory_in_gb": 8,
      "envs": [
        {
          "name": "HUGGING_FACE_HUB_TOKEN",
          "value": "hugging_face_api_token"
        }
      ],
      "port_mappings": [
        {
          "host_port": 80,
          "container_port": 8000
        }
      ],
      "volume_mounts": [
        {
          "host_path": "~/.cache/huggingface",
          "container_path": "/root/.cache/huggingface"
        }
      ],
      "registry_credentials": {
        "username": "username",
        "password": "password"
      }
    },
    "script_configuration": {
      "base64_script": "IyEvYmluL2Jhc2gKCiMgRW5kbGVzcyBsb29wCndoaWxlIHRydWUKZG8KICAgICMgRmV0Y2ggYSBjYXQgZmFjdCB3aXRoIGEgbWF4aW11bSBsZW5ndGggb2YgMTQwIGNoYXJhY3RlcnMKICAgIGN1cmwgLS1uby1wcm9ncmVzcy1tZXRlciBodHRwczovL2NhdGZhY3QubmluamEvZmFjdD9tYXhfbGVuZ3RoPTE0MAoKICAgICMgUHJpbnQgYSBuZXdsaW5lIGZvciByZWFkYWJpbGl0eQogICAgZWNobwoKICAgICMgU2xlZXAgZm9yIDMgc2Vjb25kcyBiZWZvcmUgdGhlIG5leHQgaXRlcmF0aW9uCiAgICBzbGVlcCAzCmRvbmUKCgo="
    }
  },
  "volume_ids": [
    "78a0dd5a-dbb1-4568-b55c-5e7e0a8b0c40"
  ],
  "ssh_key_id": "78a0dd5a-dbb1-4568-b55c-5e7e0a8b0c40",
  "auto_delete": {
    "date_threshold": "2006-01-02T15:04:05-07:00",
    "spend_threshold": "3.14"
  },
  "alert": {
    "date_threshold": "2006-01-02T15:04:05-07:00",
    "spend_threshold": "3.14"
  },
  "volume_mount": {
    "auto": true
  },
  "tags": [
    "tag1"
  ],
  "envs": [
    {
      "name": "HUGGING_FACE_HUB_TOKEN",
      "value": "hugging_face_api_token"
    }
  ]
}
'
```

Copy
```
{
  "id": "d290f1ee-6c54-4b01-90e6-d701748f0851"
}
```

POST/instances/create/instances/createCopy
```
curl --request POST \
  --url https://api.shadeform.ai/v1/instances/create \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: <api-key>' \
  --data '
{
  "cloud": "hyperstack",
  "region": "canada-1",
  "shade_instance_type": "A6000",
  "shade_cloud": true,
  "name": "cool-gpu-server",
  "os": "ubuntu22.04_cuda12.2_shade_os",
  "template_id": "template-123",
  "launch_configuration": {
    "type": "docker",
    "docker_configuration": {
      "image": "vllm/vllm-openai:latest",
      "args": "--model mistralai/Mistral-7B-v0.1",
      "shared_memory_in_gb": 8,
      "envs": [
        {
          "name": "HUGGING_FACE_HUB_TOKEN",
          "value": "hugging_face_api_token"
        }
      ],
      "port_mappings": [
        {
          "host_port": 80,
          "container_port": 8000
        }
      ],
      "volume_mounts": [
        {
          "host_path": "~/.cache/huggingface",
          "container_path": "/root/.cache/huggingface"
        }
      ],
      "registry_credentials": {
        "username": "username",
        "password": "password"
      }
    },
    "script_configuration": {
      "base64_script": "IyEvYmluL2Jhc2gKCiMgRW5kbGVzcyBsb29wCndoaWxlIHRydWUKZG8KICAgICMgRmV0Y2ggYSBjYXQgZmFjdCB3aXRoIGEgbWF4aW11bSBsZW5ndGggb2YgMTQwIGNoYXJhY3RlcnMKICAgIGN1cmwgLS1uby1wcm9ncmVzcy1tZXRlciBodHRwczovL2NhdGZhY3QubmluamEvZmFjdD9tYXhfbGVuZ3RoPTE0MAoKICAgICMgUHJpbnQgYSBuZXdsaW5lIGZvciByZWFkYWJpbGl0eQogICAgZWNobwoKICAgICMgU2xlZXAgZm9yIDMgc2Vjb25kcyBiZWZvcmUgdGhlIG5leHQgaXRlcmF0aW9uCiAgICBzbGVlcCAzCmRvbmUKCgo="
    }
  },
  "volume_ids": [
    "78a0dd5a-dbb1-4568-b55c-5e7e0a8b0c40"
  ],
  "ssh_key_id": "78a0dd5a-dbb1-4568-b55c-5e7e0a8b0c40",
  "auto_delete": {
    "date_threshold": "2006-01-02T15:04:05-07:00",
    "spend_threshold": "3.14"
  },
  "alert": {
    "date_threshold": "2006-01-02T15:04:05-07:00",
    "spend_threshold": "3.14"
  },
  "volume_mount": {
    "auto": true
  },
  "tags": [
    "tag1"
  ],
  "envs": [
    {
      "name": "HUGGING_FACE_HUB_TOKEN",
      "value": "hugging_face_api_token"
    }
  ]
}
'
```

Copy
```
{
  "id": "d290f1ee-6c54-4b01-90e6-d701748f0851"
}
```

The example in the right sidebar is a schema only and will not work out of the box. Only ‘docker_configuration’ or ‘script_configuration’ can be specified but not both.
See the following tutorials related to instance creation:
[## 

Creating an Instance](/getting-started/quickstart#launching-the-instance)
[## 

Creating an Instance with a Running Container](/guides/dockercontainers)
[## 

Creating an Instance with a Startup Script](/guides/startupscript)
#### Authorizations

[​](#authorization-x-api-key)X-API-KEYstringheaderrequired
#### Body

application/json[​](#body-cloud)cloudstringrequired
Specifies the underlying cloud provider. See this [explanation](/getting-started/concepts#cloud-cloud-provider) for more details.

Example:
`"hyperstack"`

[​](#body-region)regionstringrequired
Specifies the region.

Example:
`"canada-1"`

[​](#body-shade-instance-type)shade_instance_typestringrequired
The Shadeform standardized instance type. See this [explanation](/getting-started/concepts#shade-instance-type-and-cloud-instance-type) for more details.

Example:
`"A6000"`

[​](#body-shade-cloud)shade_cloudbooleanrequired
Specifies if the instance is launched in [Shade Cloud](/getting-started/concepts#shade-cloud) or in a linked cloud account.

Example:
`true`

[​](#body-name)namestringrequired
The name of the instance

Example:
`"cool-gpu-server"`

[​](#body-os)osstring
The operating system of the instance.

Example:
`"ubuntu22.04_cuda12.2_shade_os"`

[​](#body-template-id)template_idstring
The ID of the template to use for this instance

Example:
`"template-123"`

[​](#body-launch-configuration)launch_configurationobject
Defines automatic actions after the instance becomes active.

Show child attributes

[​](#body-volume-ids)volume_idsstring[]
List of volume IDs to be mounted. Currently only supports 1 volume at a time.

The ID of the storage volume.

[​](#body-ssh-key-id)ssh_key_idstring
The ID of the SSH Key.

Example:
`"78a0dd5a-dbb1-4568-b55c-5e7e0a8b0c40"`

[​](#body-auto-delete)auto_deleteobject
Set a date or spend threshold to automatically delete the instance

Show child attributes

[​](#body-alert)alertobject
Set a date or spend threshold to receive an email alert

Show child attributes

[​](#body-volume-mount)volume_mountobject
Settings for mounting volumes onto file systems

Show child attributes

[​](#body-tags)tagsstring[]
Add custom, searchable tags to instances.

Tag for searching and grouping

[​](#body-envs)envsobject[]
List of environment variable name and values to automatically add to the instance

Show child attributes

#### Response

200 - application/json
Returns a CreateResponse object

Response of the /instances/create API call

[​](#response-id)idstring<uuid>required
The unique identifier for the instance. Used in the instances for the /instances/{id}/info and /instances/{id}/delete APIs.

Example:
`"d290f1ee-6c54-4b01-90e6-d701748f0851"`

[/instances/{id}/info](/api-reference/instances/instances-info)⌘I