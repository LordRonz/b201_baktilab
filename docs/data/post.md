# Membuat data baru

Memberikan data baru

**URL** : `/api/data`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : None

**Data example** Tidak semua field harus diberikan, jika salah satu field kosong maka akan berisi string kosong

```json
{
    "Age": 69,
    "Age1stCode": 69,
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

## Success Response

**Kondisi** : Jika data berhasil terkirim

**Code** : `201 CREATED`

**Content example** :

```json
{
    "Age": 69,
    "Age1stCode": 69,
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

## Error Responses

**Kondisi** : Ke [jwt.md](./jwt.md)

**Code** : Ke [jwt.md](./jwt.md)

**Content** : Ke [jwt.md](./jwt.md)
