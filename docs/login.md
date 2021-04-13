# Login

Digunakan untuk mendapat token bagi user yang sudah registrasi

**URL** : `/api/user/login`

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
    "message": "Success",
    "token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDY5NGM2MzRiNDI3NzJiN2Y1YTg3ZTAiLCJpYXQiOjE2MTc1NTIyODksImV4cCI6MTYxNzU1MzQ4OX0.-4RX8HmMCAo9vgsaYdf79YDxYszEJqYck9KqEksC7zePKwIwVA6EIv4JmqCQ5GWqdJn5icm_s5gvGr0RwC159g"
}
```

## Error Response

**Kondisi** : Jika password yang dimasukkan tidak cocok dengan yang ada di database

**Code** : `401 UNAUTHORIZED`

**Content** :

```json
{
    "message": "Not Allowed"
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

**Kondisi** : Jika body tidak berisi username dan password

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "Provide username and password!"
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
