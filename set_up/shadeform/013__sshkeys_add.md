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

/sshkeys/addCopy
```
curl --request POST \
  --url https://api.shadeform.ai/v1/sshkeys/add \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: <api-key>' \
  --data '
{
  "name": "My ssh key",
  "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSU GPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3 Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XA t3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/En mZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbx NrRFi9wrf+M7Q== schacon@mylaptop.local"
}
'
```

Copy
```
{
  "id": "78a0dd5a-dbb1-4568-b55c-5e7e0a8b0c40"
}
```

POST/sshkeys/add/sshkeys/addCopy
```
curl --request POST \
  --url https://api.shadeform.ai/v1/sshkeys/add \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: <api-key>' \
  --data '
{
  "name": "My ssh key",
  "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSU GPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3 Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XA t3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/En mZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbx NrRFi9wrf+M7Q== schacon@mylaptop.local"
}
'
```

Copy
```
{
  "id": "78a0dd5a-dbb1-4568-b55c-5e7e0a8b0c40"
}
```

#### Authorizations

[​](#authorization-x-api-key)X-API-KEYstringheaderrequired
#### Body

application/json[​](#body-name)namestringrequired
The name of the SSH Key.

Example:
`"My ssh key"`

[​](#body-public-key)public_keystringrequired
The public key.

Example:
`"ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSU GPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3 Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XA t3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/En mZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbx NrRFi9wrf+M7Q== schacon@mylaptop.local"`

#### Response

200 - application/json
Returns a AddSshKeyResponse object

[​](#response-id)idstringrequired
The ID of the SSH Key.

Example:
`"78a0dd5a-dbb1-4568-b55c-5e7e0a8b0c40"`

[/clusters](/api-reference/clusters/clusters)[/sshkeys/{id}/info](/api-reference/sshkeys/sshkeys-info)⌘I