# Show Accessible Accounts

Memberikan semua data yang ada. Karena datanya yang banyak response biasanya datang dalam waktu sekitar 3 detik

**URL** : `/api/data`

**Method** : `GET`

**Auth required** : YES

**Data constraints** : `{}`

## Success Responses

**Condition** : User dapat melihat semua data.

**Code** : `200 OK`

**Content** : 

```json
[
    {
        "account": {
            "id": 123,
            "name": "Lots of Admins Project",
            "enterprise": false,
            "url": "http://testserver/api/accounts/123/"
        },
        "permission": "AA"
    },
    {
        "account": {
            "id": 234,
            "name": "Feel free to View this",
            "enterprise": false,
            "url": "http://testserver/api/accounts/234/"
        },
        "permission": "VV"
    },
    {
        "account": {
            "id": 345,
            "name": "Mr Owner Project",
            "enterprise": false,
            "url": "http://testserver/api/accounts/345/"
        },
        "permission": "OO"
    }
]
```