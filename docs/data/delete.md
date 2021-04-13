# Delete Data

Hapus salah satu data dengan id yang diberikan

**URL** : `/api/accounts/:id`

**URL Parameters** : `id=[hex string]` dimana `id` adalah id dari data yang mau dihapus

**Method** : `DELETE`

**Auth required** : YES

**Data** : `{}`

## Success Response

**Kondisi** : Jika data ada

**Code** : `200 OK`

**Content** :

```json
{
    "n": 1,
    "opTime": {
        "ts": "6949924552910569483",
        "t": 2
    },
    "electionId": "7fffffff0000000000000002",
    "ok": 1,
    "$clusterTime": {
        "clusterTime": "6949924552910569483",
        "signature": {
            "hash": "PJicGDU4QWUSYHv/3aTTU032BIg=",
            "keyId": "6943190971903377409"
        }
    },
    "operationTime": "6949924552910569483",
    "deletedCount": 1,
    "message": "Successful"
}
```

## Error Responses

**Kondisi** : Jika data tidak ada

**Code** : `404 NOT FOUND`

**Content** :

```json
{
    "message": "Data Not Found"
}
```

> Atau

**Kondisi** : Ke [jwt.md](./jwt.md)

**Code** : Ke [jwt.md](./jwt.md)

**Content** : Ke [jwt.md](./jwt.md)
