# Dokumentasi REST API

API dibuat menggunakan NodeJS [https server](https://nodejs.org/api/https.html). Hanya menerima request body berupa [JSON](https://www.json.org/json-en.html), dan merespon dengan JSON.

## Endpoint terbuka

Endpoint ini tidak memerlukan Autentikasi

* [Login](login.md) : `POST /api/user/login`
* [Register](register.md) : `POST /api/user/register`

## Endpoint yang memerlukan autentikasi

Endpoint ini memerlukan token yang valid yang diletakkan pada header dari request. Token didapatkan dari endpoint login. Token yang digunakan adalah JWT.

### Endpoint user

Tiap endpoint membutuhkan token

* [Change Password](user/patch.md) : `PATCH /api/user`
* [Delete User](user/delete.md) : `DELETE /api/user`

### Account related

Endpoint yang berkaitan dengan data non user. Setiap endpoint membutuhkan token

* [Get All Data](data/getAll.md) : `GET /api/data`
* [Get Data by Page](data/getPage.md) : `GET /api/data`
* [Get Data by ID](data/pk/getId.md) : `GET /api/data/:id`
* [Create data](data/pk/post.md) : `POST /api/data`
* [Update data](data/pk/put.md) : `PUT /api/data/:id`
* [Update data](data/pk/patch.md) : `PATCH /api/data/:id`
* [Delete data](data/pk/delete.md) : `DELETE /api/data/:id`