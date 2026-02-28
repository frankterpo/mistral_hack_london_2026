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

/instances/typesCopy
```
curl --request GET \
  --url https://api.shadeform.ai/v1/instances/types \
  --header 'X-API-KEY: <api-key>'
```

Copy
```
{
  "instance_types": [
    {
      "cloud": "hyperstack",
      "shade_instance_type": "A6000",
      "cloud_instance_type": "gpu_1x_a6000",
      "configuration": {
        "memory_in_gb": 12,
        "storage_in_gb": 256,
        "vcpus": 6,
        "num_gpus": 1,
        "gpu_type": "A100",
        "interconnect": "pcie",
        "vram_per_gpu_in_gb": 48,
        "os_options": [
          "ubuntu22.04_cuda12.2_shade_os",
          "ubuntu20.04_cuda12.0_shade_os"
        ],
        "gpu_manufacturer": "nvidia",
        "nvlink": true
      },
      "hourly_price": 210,
      "deployment_type": "vm",
      "availability": [
        {
          "region": "us-central-1",
          "available": true,
          "display_name": "US, Wichita, KS"
        },
        {
          "region": "us-central-2",
          "available": false,
          "display_name": "US, Wichita, KS"
        }
      ],
      "boot_time": {
        "min_boot_in_sec": 180,
        "max_boot_in_sec": 300
      }
    }
  ]
}
```

GET/instances/types/instances/typesCopy
```
curl --request GET \
  --url https://api.shadeform.ai/v1/instances/types \
  --header 'X-API-KEY: <api-key>'
```

Copy
```
{
  "instance_types": [
    {
      "cloud": "hyperstack",
      "shade_instance_type": "A6000",
      "cloud_instance_type": "gpu_1x_a6000",
      "configuration": {
        "memory_in_gb": 12,
        "storage_in_gb": 256,
        "vcpus": 6,
        "num_gpus": 1,
        "gpu_type": "A100",
        "interconnect": "pcie",
        "vram_per_gpu_in_gb": 48,
        "os_options": [
          "ubuntu22.04_cuda12.2_shade_os",
          "ubuntu20.04_cuda12.0_shade_os"
        ],
        "gpu_manufacturer": "nvidia",
        "nvlink": true
      },
      "hourly_price": 210,
      "deployment_type": "vm",
      "availability": [
        {
          "region": "us-central-1",
          "available": true,
          "display_name": "US, Wichita, KS"
        },
        {
          "region": "us-central-2",
          "available": false,
          "display_name": "US, Wichita, KS"
        }
      ],
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
#### Query Parameters

[​](#parameter-cloud)cloudstring
Filter the instance type results by cloud.

[​](#parameter-region)regionstring
Filter the instance type results by region.

[​](#parameter-num-gpus)num_gpusstring
Filter the instance type results by the number of gpus.

[​](#parameter-gpu-type)gpu_typestring
Filter the instance type results by gpu type.

[​](#parameter-shade-instance-type)shade_instance_typestring
Filter the instance type results by the shade instance type.

[​](#parameter-available)availableboolean
Filter the instance type results by availability.

[​](#parameter-sort)sortenum<string>
Sort the order of the instance type results.

Available options: `price` 
#### Response

200 - application/json
Returns an InstanceTypesResponse object

Response of /instances/types

[​](#response-instance-types)instance_typesobject[]required
Show child attributes

[/instances/{id}/restart](/api-reference/instances/instances-restart)[/instances](/api-reference/instances/instances)⌘I