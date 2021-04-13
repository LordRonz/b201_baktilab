# Dokumentasi REST API

API dibuat menggunakan NodeJS [https server](https://nodejs.org/api/https.html). Hanya menerima request body berupa [JSON](https://www.json.org/json-en.html), dan merespon dengan JSON. 

**IP**: `52.168.12.75`

## Endpoint terbuka

Endpoint ini tidak memerlukan Autentikasi

* [Login](login.md) : `POST /api/user/login`
* [Register](register.md) : `POST /api/user/register`

## Endpoint yang memerlukan autentikasi

Endpoint ini memerlukan token yang valid yang diletakkan pada header dari request. Token didapatkan dari endpoint login. Token yang digunakan adalah JWT.

### Endpoint user

Endpoint-endpoint ini hanya membutuhkan password yang diberikan di request body

* [Change Password](user/patch.md) : `PATCH /api/user`
* [Delete User](user/delete.md) : `DELETE /api/user`

### Data related

Endpoint yang berkaitan dengan data non user. Setiap endpoint membutuhkan token

* [Get All Data](data/getAll.md) : `GET /api/data`
* [Get Data by Page](data/getPage.md) : `GET /api/data`
* [Get Data by ID](data/getId.md) : `GET /api/data/:id`
* [Create data](data/post.md) : `POST /api/data`
* [Update data](data/put.md) : `PUT /api/data/:id`
* [Update data](data/patch.md) : `PATCH /api/data/:id`
* [Delete data](data/delete.md) : `DELETE /api/data/:id`

### Penggunaan Docker

[Docker](./docker.md)

### Dokumentasi POSTMAN

[Postman](./B201Baktilab.postman_collection.json)
