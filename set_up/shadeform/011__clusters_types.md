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

/clusters/typesCopy
```
curl --request GET \
  --url https://api.shadeform.ai/v1/clusters/types \
  --header 'X-API-KEY: <api-key>'
```

Copy
```
{
  "cluster_types": [
    {
      "cloud": "denvr",
      "num_instances": 2,
      "availability": {
        "region": "houston-usa-1",
        "display_name": "US, Houston, TX",
        "available": true
      },
      "cluster_type": {
        "cloud": "denvr",
        "shade_instance_type": "H100_sxm5x8",
        "cloud_instance_type": "H100_80GB_SXM_8x",
        "configuration": {
          "memory_in_gb": 940,
          "storage_in_gb": 20000,
          "vcpus": 208,
          "num_gpus": 8,
          "gpu_type": "H100",
          "interconnect": "sxm5",
          "nvlink": true,
          "os_options": [
            "ubuntu22.04_cuda12.4_shade_os",
            "ubuntu20.04_cuda12.4_shade_os",
            "ubuntu20.04",
            "ubuntu22.04"
          ],
          "vram_per_gpu_in_gb": 80,
          "gpu_manufacturer": "nvidia"
        },
        "memory_in_gb": 940,
        "storage_in_gb": 20000,
        "vcpus": 208,
        "num_gpus": 8,
        "gpu_type": "H100",
        "interconnect": "sxm5",
        "nvlink": true,
        "hourly_price": 1400,
        "boot_time": {
          "min_boot_in_sec": 600,
          "max_boot_in_sec": 1200
        },
        "deployment_type": "vm"
      }
    }
  ]
}
```

GET/clusters/types/clusters/typesCopy
```
curl --request GET \
  --url https://api.shadeform.ai/v1/clusters/types \
  --header 'X-API-KEY: <api-key>'
```

Copy
```
{
  "cluster_types": [
    {
      "cloud": "denvr",
      "num_instances": 2,
      "availability": {
        "region": "houston-usa-1",
        "display_name": "US, Houston, TX",
        "available": true
      },
      "cluster_type": {
        "cloud": "denvr",
        "shade_instance_type": "H100_sxm5x8",
        "cloud_instance_type": "H100_80GB_SXM_8x",
        "configuration": {
          "memory_in_gb": 940,
          "storage_in_gb": 20000,
          "vcpus": 208,
          "num_gpus": 8,
          "gpu_type": "H100",
          "interconnect": "sxm5",
          "nvlink": true,
          "os_options": [
            "ubuntu22.04_cuda12.4_shade_os",
            "ubuntu20.04_cuda12.4_shade_os",
            "ubuntu20.04",
            "ubuntu22.04"
          ],
          "vram_per_gpu_in_gb": 80,
          "gpu_manufacturer": "nvidia"
        },
        "memory_in_gb": 940,
        "storage_in_gb": 20000,
        "vcpus": 208,
        "num_gpus": 8,
        "gpu_type": "H100",
        "interconnect": "sxm5",
        "nvlink": true,
        "hourly_price": 1400,
        "boot_time": {
          "min_boot_in_sec": 600,
          "max_boot_in_sec": 1200
        },
        "deployment_type": "vm"
      }
    }
  ]
}
```

#### Authorizations

[​](#authorization-x-api-key)X-API-KEYstringheaderrequired
#### Response

200 - application/json
Returns a ClusterTypesResponse object

[​](#response-cluster-types)cluster_typesobject[]required
Show child attributes

Example:
```
[  {    "cloud": "denvr",    "num_instances": 2,    "availability": {      "region": "houston-usa-1",      "display_name": "US, Houston, TX",      "available": true    },    "cluster_type": {      "cloud": "denvr",      "shade_instance_type": "H100_sxm5x8",      "cloud_instance_type": "H100_80GB_SXM_8x",      "configuration": {        "memory_in_gb": 940,        "storage_in_gb": 20000,        "vcpus": 208,        "num_gpus": 8,        "gpu_type": "H100",        "interconnect": "sxm5",        "nvlink": true,        "os_options": [          "ubuntu22.04_cuda12.4_shade_os",          "ubuntu20.04_cuda12.4_shade_os",          "ubuntu20.04",          "ubuntu22.04"        ],        "vram_per_gpu_in_gb": 80,        "gpu_manufacturer": "nvidia"      },      "memory_in_gb": 940,      "storage_in_gb": 20000,      "vcpus": 208,      "num_gpus": 8,      "gpu_type": "H100",      "interconnect": "sxm5",      "nvlink": true,      "hourly_price": 1400,      "boot_time": {        "min_boot_in_sec": 600,        "max_boot_in_sec": 1200      },      "deployment_type": "vm"    }  }]
```

[/clusters/{id}/delete](/api-reference/clusters/clusters-delete)[/clusters](/api-reference/clusters/clusters)⌘I