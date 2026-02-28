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

/instancesCopy
```
curl --request GET \
  --url https://api.shadeform.ai/v1/instances \
  --header 'X-API-KEY: <api-key>'
```

Copy
```
{
  "instances": [
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
      "tags": [
        "tag1"
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
  ]
}
```

GET/instances/instancesCopy
```
curl --request GET \
  --url https://api.shadeform.ai/v1/instances \
  --header 'X-API-KEY: <api-key>'
```

Copy
```
{
  "instances": [
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
      "tags": [
        "tag1"
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
  ]
}
```

#### Authorizations

[​](#authorization-x-api-key)X-API-KEYstringheaderrequired
#### Response

200 - application/json
Returns an InstancesResponse object.

[​](#response-instances)instancesobject[]required
Show child attributes

[/instances/types](/api-reference/instances/instances-types)[/clusters/create](/api-reference/clusters/clusters-create)⌘I