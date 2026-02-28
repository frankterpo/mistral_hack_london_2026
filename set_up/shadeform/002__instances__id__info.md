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

/instances/{id}/infoCopy
```
curl --request GET \
  --url https://api.shadeform.ai/v1/instances/{id}/info \
  --header 'X-API-KEY: <api-key>'
```

Copy
```
{
  "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "cloud": "hyperstack",
  "region": "canada-1",
  "shade_instance_type": "A6000",
  "cloud_instance_type": "gpu_1x_a6000",
  "cloud_assigned_id": "13b057d7-e266-4869-985f-760fe75a78b3",
  "shade_cloud": true,
  "name": "cool-gpu-server",
  "configuration": {
    "memory_in_gb": 12,
    "storage_in_gb": 256,
    "vcpus": 6,
    "num_gpus": 1,
    "gpu_type": "A100",
    "interconnect": "pcie",
    "vram_per_gpu_in_gb": 48,
    "gpu_manufacturer": "nvidia",
    "os": "ubuntu_22_shade_os",
    "nvlink": true
  },
  "ip": "1.0.0.1",
  "ssh_user": "shadeform",
  "ssh_port": 22,
  "status": "active",
  "cost_estimate": "103.4",
  "created_at": "2016-08-29T09:12:33.001Z",
  "deleted_at": "2016-08-29T09:12:33.001Z",
  "status_details": "downloading",
  "hourly_price": 210,
  "volume_ids": [
    "78a0dd5a-dbb1-4568-b55c-5e7e0a8b0c40"
  ],
  "ssh_key_id": "78a0dd5a-dbb1-4568-b55c-5e7e0a8b0c40",
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
  "port_mappings": [
    {
      "internal_port": 8000,
      "external_port": 80
    }
  ],
  "active_at": "2016-08-29T09:12:33.001Z",
  "boot_time": {
    "min_boot_in_sec": 180,
    "max_boot_in_sec": 300
  }
}
```

GET/instances/{id}/info/instances/{id}/infoCopy
```
curl --request GET \
  --url https://api.shadeform.ai/v1/instances/{id}/info \
  --header 'X-API-KEY: <api-key>'
```

Copy
```
{
  "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "cloud": "hyperstack",
  "region": "canada-1",
  "shade_instance_type": "A6000",
  "cloud_instance_type": "gpu_1x_a6000",
  "cloud_assigned_id": "13b057d7-e266-4869-985f-760fe75a78b3",
  "shade_cloud": true,
  "name": "cool-gpu-server",
  "configuration": {
    "memory_in_gb": 12,
    "storage_in_gb": 256,
    "vcpus": 6,
    "num_gpus": 1,
    "gpu_type": "A100",
    "interconnect": "pcie",
    "vram_per_gpu_in_gb": 48,
    "gpu_manufacturer": "nvidia",
    "os": "ubuntu_22_shade_os",
    "nvlink": true
  },
  "ip": "1.0.0.1",
  "ssh_user": "shadeform",
  "ssh_port": 22,
  "status": "active",
  "cost_estimate": "103.4",
  "created_at": "2016-08-29T09:12:33.001Z",
  "deleted_at": "2016-08-29T09:12:33.001Z",
  "status_details": "downloading",
  "hourly_price": 210,
  "volume_ids": [
    "78a0dd5a-dbb1-4568-b55c-5e7e0a8b0c40"
  ],
  "ssh_key_id": "78a0dd5a-dbb1-4568-b55c-5e7e0a8b0c40",
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
  "port_mappings": [
    {
      "internal_port": 8000,
      "external_port": 80
    }
  ],
  "active_at": "2016-08-29T09:12:33.001Z",
  "boot_time": {
    "min_boot_in_sec": 180,
    "max_boot_in_sec": 300
  }
}
```

#### Authorizations

[​](#authorization-x-api-key)X-API-KEYstringheaderrequired
#### Path Parameters

[​](#parameter-id)idstringrequired
The instance id

#### Response

200 - application/json
Return an instance object.

[​](#response-id)idstring<uuid>required
The unique identifier for the instance. Used in the instances for the /instances/{id}/info and /instances/{id}/delete APIs.

Example:
`"d290f1ee-6c54-4b01-90e6-d701748f0851"`

[​](#response-cloud)cloudstringrequired
Specifies the underlying cloud provider. See this [explanation](/getting-started/concepts#cloud-cloud-provider) for more details.

Example:
`"hyperstack"`

[​](#response-region)regionstringrequired
Specifies the region.

Example:
`"canada-1"`

[​](#response-shade-instance-type)shade_instance_typestringrequired
The Shadeform standardized instance type. See this [explanation](/getting-started/concepts#shade-instance-type-and-cloud-instance-type) for more details.

Example:
`"A6000"`

[​](#response-cloud-instance-type)cloud_instance_typestringrequired
The instance type for the underlying cloud provider. See this [explanation](/getting-started/concepts#shade-instance-type-and-cloud-instance-type) for more details.

Example:
`"gpu_1x_a6000"`

[​](#response-cloud-assigned-id)cloud_assigned_idstringrequired
The unique identifier of the instance issued by the underlying cloud provider.

Example:
`"13b057d7-e266-4869-985f-760fe75a78b3"`

[​](#response-shade-cloud)shade_cloudbooleanrequired
Specifies if the instance is launched in [Shade Cloud](/getting-started/concepts#shade-cloud) or in a linked cloud account.

Example:
`true`

[​](#response-name)namestringrequired
The name of the instance

Example:
`"cool-gpu-server"`

[​](#response-configuration)configurationobjectrequired
Show child attributes

[​](#response-ip)ipstringrequired
The public IP address of the instance. In select cases, it may also be the DNS.

Example:
`"1.0.0.1"`

[​](#response-ssh-user)ssh_userstringrequired
The SSH user used to SSH into the instance.

Example:
`"shadeform"`

[​](#response-ssh-port)ssh_portintegerrequired
The SSH port of the instance. In most cases, this will be port 22 but for some clouds, this may be a different port.

Example:
`22`

[​](#response-status)statusenum<string>required
The status of the instance.

Available options: `creating`, `pending_provider`, `pending`, `active`, `error`, `deleting`, `deleted` Example:
`"active"`

[​](#response-cost-estimate)cost_estimatestringrequired
The cost incurred by the instance. This only the cost via Shadeform. If the instance is deployed in your own cloud account, then all billing is through your cloud provider.

Example:
`"103.4"`

[​](#response-created-at)created_atstring<date-time>required
The timestamp of when the instance was created in UTC.

Example:
`"2016-08-29T09:12:33.001Z"`

[​](#response-deleted-at)deleted_atstring<date-time>required
The timestamp of when the instance was deleted in UTC.

Example:
`"2016-08-29T09:12:33.001Z"`

[​](#response-status-details)status_detailsstring
Additional context for the status

Example:
`"downloading"`

[​](#response-hourly-price)hourly_priceinteger
The hourly price of the instance in cents.

Example:
`210`

[​](#response-volume-ids)volume_idsstring[]
List of volume IDs to be mounted. Currently only supports 1 volume at a time.

The ID of the storage volume.

[​](#response-ssh-key-id)ssh_key_idstring
The ID of the SSH Key.

Example:
`"78a0dd5a-dbb1-4568-b55c-5e7e0a8b0c40"`

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

[​](#response-port-mappings)port_mappingsobject[]
List of port mappings on an instance that a Cloud Provider might have automatically set up.

Show child attributes

[​](#response-active-at)active_atstring<date-time>
The timestamp of when the instance was active in UTC.

Example:
`"2016-08-29T09:12:33.001Z"`

[​](#response-boot-time)boot_timeobject
Show child attributes

[/instances/create](/api-reference/instances/instances-create)[/instances/{id}/update](/api-reference/instances/instances-update)⌘I