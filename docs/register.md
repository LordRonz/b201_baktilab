# Register

Digunakan untuk mendaftarkan user baru, password akan di hash menggunakan HMAC-SHA256 kemudian di enkripsi menggunakan bcrypt.

**URL** : `/api/user/register`

**Method** : `POST`

**Auth required** : NO

**Data constraints** :

```json
{
    "username": "[alphanumeric and underscore characters ONLY]",
    "password": "[password in plain text]"
}
```

**Data example** :

```json
{
    "username": "lordronz",
    "password": "AlphaBetaGammaOmega6969"
}
```

## Success Response

**Code** : `200 OK`

**Content example** :

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

> Atau

**Kondisi** : Jika username tidak diberikan/kosong

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "Invalid Username"
}
```

> Atau

**Kondisi** : Jika username berisi karakter selain alphanumeric dan underscore

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "Username must contain only letters, numbers, and underscores"
}
```

> Atau

**Kondisi** : Jika username yang diberikan sudah ada di DB

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "Username taken!"
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

> Atau

**Kondisi** : Jika username yang diberikan melebihi 255 karakter

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "Username is too long!"
}
```

> Atau

**Kondisi** : JSON body yang diberikan tidak valid

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "Invalid JSON!"
}
```
