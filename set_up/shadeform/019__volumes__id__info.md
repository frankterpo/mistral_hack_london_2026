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

/volumes/{id}/infoCopy
```
curl --request GET \
  --url https://api.shadeform.ai/v1/volumes/{id}/info \
  --header 'X-API-KEY: <api-key>'
```

Copy
```
{
  "id": "78a0dd5a-dbb1-4568-b55c-5e7e0a8b0c40",
  "cloud": "hyperstack",
  "cloud_assigned_id": "13b057d7-e266-4869-985f-760fe75a78b3",
  "region": "canada-1",
  "name": "My storage volume",
  "fixed_size": true,
  "size_in_gb": 100,
  "cost_estimate": "103.4",
  "supports_multi_mount": true,
  "mounted_by": "13b057d7-e266-4869-985f-760fe75a78b3"
}
```

GET/volumes/{id}/info/volumes/{id}/infoCopy
```
curl --request GET \
  --url https://api.shadeform.ai/v1/volumes/{id}/info \
  --header 'X-API-KEY: <api-key>'
```

Copy
```
{
  "id": "78a0dd5a-dbb1-4568-b55c-5e7e0a8b0c40",
  "cloud": "hyperstack",
  "cloud_assigned_id": "13b057d7-e266-4869-985f-760fe75a78b3",
  "region": "canada-1",
  "name": "My storage volume",
  "fixed_size": true,
  "size_in_gb": 100,
  "cost_estimate": "103.4",
  "supports_multi_mount": true,
  "mounted_by": "13b057d7-e266-4869-985f-760fe75a78b3"
}
```

#### Authorizations

[​](#authorization-x-api-key)X-API-KEYstringheaderrequired
#### Path Parameters

[​](#parameter-id)idstringrequired
The volume id.

#### Response

200 - application/json
Return a volume object.

[​](#response-id)idstringrequired
The ID of the storage volume.

Example:
`"78a0dd5a-dbb1-4568-b55c-5e7e0a8b0c40"`

[​](#response-cloud)cloudstringrequired
Specifies the underlying cloud provider. See this [explanation](/getting-started/concepts#cloud-cloud-provider) for more details.

Example:
`"hyperstack"`

[​](#response-cloud-assigned-id)cloud_assigned_idstringrequired
The unique identifier of the storage volume issued by the underlying cloud provider.

Example:
`"13b057d7-e266-4869-985f-760fe75a78b3"`

[​](#response-region)regionstringrequired
Specifies the region.

Example:
`"canada-1"`

[​](#response-name)namestringrequired
The name of the storage volume.

Example:
`"My storage volume"`

[​](#response-fixed-size)fixed_sizebooleanrequired
Denotes whether the volume is fixed in size or elastically scaling.

Example:
`true`

[​](#response-size-in-gb)size_in_gbintegerrequired
Storage volume size in GB

Example:
`100`

[​](#response-cost-estimate)cost_estimatestringrequired
The cost incurred by the instance. This only the cost via Shadeform. If the instance is deployed in your own cloud account, then all billing is through your cloud provider.

Example:
`"103.4"`

[​](#response-supports-multi-mount)supports_multi_mountbooleanrequired
Denotes whether the volume supports multiple instances mounting to it at the same time.

Example:
`true`

[​](#response-mounted-by)mounted_bystringrequired
The ID of the instance that is currently mounting the volume.

Example:
`"13b057d7-e266-4869-985f-760fe75a78b3"`

[/volumes/create](/api-reference/volumes/volumes-create)[/volumes/{id}/delete](/api-reference/volumes/volumes-delete)⌘I