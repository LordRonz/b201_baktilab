# Ubah password

Untuk mengubah password user, dibutuhkan header login dan memberikan body json berupa username, oldPassword, dan newPassword

**URL** : `/api/user`

**Method** : `PATCH`

**Auth required** : YES

**Permissions required** : None

## Success Response

**Code** : `200 OK`

**Data example**

```json
{
    "username": "lordronz",
    "oldPassword": "password_PASSWORD-pAsSwOrD--696969",
    "newPassword": "password_PASSWORD-pAsSwOrD--420420"
}
```

**Content examples**

Ketika user berhasil memasukkan data dengan benar

```json
{
    "_id": "606ad0b92b332634fdc3c02f",
    "username": "lordronz",
    "password": "$2b$13$d8Xj5dgTtIDP4jdIZVM4ZOgAKWO4p/TAR2gwTbqkyDqJlk2dn7M9G",
    "__v": 0
}
```

Jika user salah memasukkan password lama

```json
{
    "message": "Not Allowed"
}
```

## Notes

* If the User does not have a `UserInfo` instance when requested then one will
  be created for them.