# Auth error

## Error Response

**Kondisi** : Jika token tidak diberikan

**Code** : `401 UNAUTHORIZED`

**Content** :

```json
{
    "message": "Access Denied"
}
```

> Atau

**Kondisi** : Jika tidak menggunakan Bearer Token

**Code** : `401 UNAUTHORIZED`

**Content** :

```json
{
    "message": "Use Bearer Token !"
}
```

> Atau

**Kondisi** : Jika user yang ada di jwt tidak ada di DB

**Code** : `401 UNAUTHORIZED`

**Content** :

```json
{
    "message": "Invalid User"
}
```

> Atau

**Kondisi** : Jika data token tidak valid

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "Invalid Token"
}
```

> Atau

**Kondisi** : Jika token expired

**Code** : `401 UNAUTHORIZED`

**Content** :

```json
{
    "name": "TokenExpiredError",
    "message": "jwt expired",
    "expiredAt": "2021-04-11T16:05:53.000Z"
}
```
