# Hapus user

Untuk menghapus user, dibutuhkan header Authorization dan memberikan body json berupa username, dan password akun yang akan dihapus

**URL** : `/api/user`

**Method** : `DELETE`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Data example**

```json
{
    "username": "lordronz",
    "password": "password_PASSWORD-pAsSwOrD--696969",
}
```

**Content examples**

Ketika user berhasil memasukkan data dengan benar

```json
{
    "n": 1,
    "opTime": {
        "ts": "6948308562875514895",
        "t": 2
    },
    "electionId": "7fffffff0000000000000002",
    "ok": 1,
    "$clusterTime": {
        "clusterTime": "6948308562875514895",
        "signature": {
            "hash": "rUaEFZmLecpzv3+/k+PUtWHYkhQ=",
            "keyId": "6943190971903377409"
        }
    },
    "operationTime": "6948308562875514895",
    "deletedCount": 1
}
```

## Error Response

**Kondisi** : Jika password yang dimasukkan tidak cocok

**Code** : `401 UNAUTHORIZED`

**Content** :

```json
{
    "message": "Not Allowed"
}
```

**Kondisi** : Jika body tidak berisi username dan password

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "Provide username and password!"
}
```

**Kondisi** : Username tidak ditemukan di database

**Code** : `404 NOT FOUND`

**Content** :

```json
{
    "message": "User Not Found"
}
```