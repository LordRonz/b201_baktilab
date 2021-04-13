# Update Data

Update data dengan id yang diberikan, namun tidak semua field dibutuhkan

**URL** : `/api/accounts/:id`

**Method** : `PATCH`

**Auth required** : YES

**Permissions required** : None

**Data example** Tidak semua field dibutuhkan, yang diupdate hanya field yang diberikan

```json
{
    "Age": 75,
    "Age1stCode": 8
}
```

## Success Responses

**Kondisi** : Update berhasil

**Code** : `200 OK`

**Content example** :

```json
{
    "Age": 75,
    "Age1stCode": 8,
    "Country": "Germany",
    "DatabaseDesireNextYear": "FoxPro",
    "DatabaseWorkedWith": "Elasticsearch;Microsoft SQL Server;Oracle, FoxPro",
    "DevType": "Developer, desktop or enterprise applications;Developer, full-stack, FoxPro Developer",
    "Employment": "Independent contractor, freelancer, or self-employed, CEO, President",
    "Gender": "Man",
    "LanguageDesireNextYear": "C#;HTML/CSS;JavaScript;Assembly",
    "LanguageWorkedWith": "C#;HTML/CSS;JavaScript;Brainfuck",
    "MiscTechDesireNextYear": ".NET Core;Tamarin",
    "MiscTechWorkedWith": ".NET;.NET Core",
    "OpSys": "DOS",
    "PlatformWorkedWith": "Windows",
    "UndergradMajor": "Law Study",
    "WebframeDesireNextYear": "ASP.NET Core",
    "WebframeWorkedWith": "ASP.NET;ASP.NET Core",
    "YearsCode": 69,
    "YearsCodePro": 69
}
```

## Error Response

**Kondisi** : Ke [jwt.md](./jwt.md)

**Code** : Ke [jwt.md](./jwt.md)

**Content** : Ke [jwt.md](./jwt.md)

> Atau

**Kondisi** : JSON body yang diberikan tidak valid

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "Invalid JSON!"
}
```
