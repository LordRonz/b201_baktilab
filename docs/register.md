# Register

Digunakan untuk mendaftarkan user baru, password akan di hash menggunakan HMAC-SHA256 kemudian di enkripsi menggunakan bcrypt.

**URL** : `/api/user/register`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "username": "[alphanumeric and underscore characters ONLY]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "username": "lordronz",
    "password": "AlphaBetaGammaOmega6969"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "_id": "6069e57172a4a85145c41dea",
    "username": "lordronz",
    "password": "$2b$13$PFFwTf4nUGqy.5xZDdJc8u0Jszb8K7bd/mmNH.141VpDgpY8j5i6i",
    "__v": 0
}
```

## Error Response

**Kondisi** : Jika password kurang dari 8 karakter atau lebih dari 255 karakter

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "Password must be between 8-255 characters long"
}
```

**Kondisi** : Jika user tidak ada di database

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "User Not Found"
}
```