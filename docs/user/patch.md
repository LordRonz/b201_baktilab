# Ubah password

Untuk mengubah password user, dibutuhkan header login dan memberikan body json berupa username, oldPassword, dan newPassword

**URL** : `/api/user`

**Method** : `PATCH`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Data example** :

```json
{
    "username": "lordronz",
    "oldPassword": "password_PASSWORD-pAsSwOrD--696969",
    "newPassword": "password_PASSWORD-pAsSwOrD--420420"
}
```

**Content examples** :

Ketika user berhasil memasukkan data dengan benar

```json
{
    "_id": "606ad0b92b332634fdc3c02f",
    "username": "lordronz",
    "password": "$2b$13$d8Xj5dgTtIDP4jdIZVM4ZOgAKWO4p/TAR2gwTbqkyDqJlk2dn7M9G",
    "__v": 0
}
```

## Error Response

**Kondisi** : Jika user salah memasukkan password lama

**Code** : `401 UNAUTHORIZED`

**Content** :

```json
{
    "message": "Not Allowed"
}
```

> Atau

**Kondisi** : Jika body tidak berisi username, oldPassword dan newPassword

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "'Provide username, oldPassword, and newPassword!',"
}
```

> Atau

**Kondisi** : Jika user tidak ada di database

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "User Not Found"
}
```

> Atau

**Kondisi** : Jika password yang diberikan terlalu lemah

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "Password is too weak!"
}
```
