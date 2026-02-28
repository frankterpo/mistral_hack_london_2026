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

/templates/{template_id}/infoCopy
```
curl --request GET \
  --url https://api.shadeform.ai/v1/templates/{template_id}/info \
  --header 'X-API-KEY: <api-key>'
```

Copy
```
{
  "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "name": "My AwesomeTemplate",
  "description": "A template for running vLLM",
  "author": "John Doe",
  "logo": "https://example.com/logo.png",
  "public": true,
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
  ],
  "networking": {
    "ufw_rules": [
      {
        "rule": "allow",
        "from_ip": "192.168.1.0/24",
        "to_ip": "10.0.0.0/8",
        "port": "80",
        "proto": "tcp"
      }
    ]
  }
}
```

GET/templates/{template_id}/info/templates/{template_id}/infoCopy
```
curl --request GET \
  --url https://api.shadeform.ai/v1/templates/{template_id}/info \
  --header 'X-API-KEY: <api-key>'
```

Copy
```
{
  "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "name": "My AwesomeTemplate",
  "description": "A template for running vLLM",
  "author": "John Doe",
  "logo": "https://example.com/logo.png",
  "public": true,
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
  ],
  "networking": {
    "ufw_rules": [
      {
        "rule": "allow",
        "from_ip": "192.168.1.0/24",
        "to_ip": "10.0.0.0/8",
        "port": "80",
        "proto": "tcp"
      }
    ]
  }
}
```

#### Authorizations

[​](#authorization-x-api-key)X-API-KEYstringheaderrequired
#### Path Parameters

[​](#parameter-template-id)template_idstringrequired
The template ID

#### Response

200 - application/json
Returns template information

[​](#response-id)idstringrequired
Unique identifier for the template, generated by Shadeform

Example:
`"d290f1ee-6c54-4b01-90e6-d701748f0851"`

[​](#response-name)namestringrequired
Name of the template

Example:
`"My AwesomeTemplate"`

[​](#response-description)descriptionstring
Description of the template

Example:
`"A template for running vLLM"`

[​](#response-author)authorstring
Author of the template

Example:
`"John Doe"`

[​](#response-logo)logostring
URL to the template's logo

Example:
`"https://example.com/logo.png"`

[​](#response-public)publicboolean
Whether the template is publicly available

Example:
`true`

[​](#response-launch-configuration)launch_configurationobject
Defines automatic actions after the instance becomes active.

Show child attributes

[​](#response-auto-delete)auto_deleteobject
Set a date or spend threshold to automatically delete the instance

Show child attributes

[​](#response-alert)alertobject
Set a date or spend threshold to receive an email alert

Show child attributes

[​](#response-volume-mount)volume_mountobject
Settings for mounting volumes onto file systems

Show child attributes

[​](#response-tags)tagsstring[]
Add custom, searchable tags to instances.

Tag for searching and grouping

[​](#response-envs)envsobject[]
List of environment variable name and values to automatically add to the instance

Show child attributes

[​](#response-networking)networkingobject
Network and firewall configuration

Show child attributes

[/templates](/api-reference/templates/templates)[/templates/featured](/api-reference/templates/templates-featured)⌘I