# Show All Data

Memberikan data sesuai dengan id yang diberikan.

**URL** : `/api/data/:id`

**URL Parameters** : `id=[hex string]` dimana `id` adalah ID dari data.

**Method** : `GET`

**Auth required** : YES

**Data constraints** : `{}`

## Success Responses

**Kondisi** : User dapat melihat data dengan id sesuai yang diberikan di url.

**Code** : `200 OK`

**Content** :

```json
{
    "Age": 25,
    "Age1stCode": 18,
    "Country": "Albania",
    "DatabaseDesireNextYear": "",
    "DatabaseWorkedWith": "",
    "DevType": "",
    "Employment": "",
    "Gender": "Man",
    "LanguageDesireNextYear": "",
    "LanguageWorkedWith": "",
    "MiscTechDesireNextYear": "",
    "MiscTechWorkedWith": "",
    "OpSys": "Linux-based",
    "PlatformWorkedWith": "",
    "UndergradMajor": "Computer science, computer engineering, or software engineering",
    "WebframeDesireNextYear": "",
    "WebframeWorkedWith": "",
    "YearsCode": 7,
    "YearsCodePro": 4,
    "_id": "6065dd6f7744ff89004fa9b8"
}
```

## Error Response

**Kondisi** : Ke [jwt.md](./jwt.md)

**Code** : Ke [jwt.md](./jwt.md)

**Content** : Ke [jwt.md](./jwt.md)

> Atau

**Kondisi** : Jika data tidak ditemukan

**Code** : `404 NOT FOUND`

**Content** :

```json
{
    "message": "Data Not Found"
}
```
