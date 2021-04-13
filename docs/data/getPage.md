# Show data by page

Memberikan data sesuai dengan halaman yang diberikan. Per halaman terdapat 20 data.

**URL** : `/api/data/page/:page`

**URL Parameters** : `page=[integer]` dimana `page` adalah halaman dari data-data.

**Method** : `GET`

**Auth required** : YES

**Data constraints** : `{}`

## Success Responses

**Kondisi** : User dapat melihat data-data di page yang ditentukan.

**Code** : `200 OK`

**Content** :

```json
[
    {
        "Age": 21,
        "Age1stCode": 15,
        "Country": "United States",
        "DatabaseDesireNextYear": "MariaDB",
        "DatabaseWorkedWith": "MariaDB;Microsoft SQL Server;MongoDB;MySQL;Oracle;PostgreSQL;SQLite",
        "DevType": "Developer, back-end;Developer, desktop or enterprise applications;Developer, full-stack",
        "Employment": "Employed part-time",
        "Gender": "Woman",
        "LanguageDesireNextYear": "JavaScript;Swift",
        "LanguageWorkedWith": "Bash/Shell/PowerShell;C#;Go;HTML/CSS;Java;JavaScript;PHP;Python;SQL;Swift",
        "MiscTechDesireNextYear": "Node.js",
        "MiscTechWorkedWith": ".NET;.NET Core;Cordova;Node.js;React Native;Unity 3D;Unreal Engine",
        "OpSys": "Windows",
        "PlatformWorkedWith": "Docker;iOS;Linux;MacOS;Raspberry Pi;Windows",
        "UndergradMajor": "Web development or web design",
        "WebframeDesireNextYear": "Angular;Angular.js;Django;Flask;jQuery;React.js",
        "WebframeWorkedWith": "ASP.NET;ASP.NET Core;jQuery;React.js",
        "YearsCode": 6,
        "YearsCodePro": 1,
        "_id": "6065dd707744ff89004faa09"
    },
    {
        "Age": 26,
        "Age1stCode": 10,
        "Country": "France",
        "DatabaseDesireNextYear": "MongoDB;PostgreSQL",
        "DatabaseWorkedWith": "Firebase;MongoDB;PostgreSQL",
        "DevType": "Developer, back-end;Developer, front-end;Developer, full-stack;Developer, mobile;Senior executive/VP",
        "Employment": "Independent contractor, freelancer, or self-employed",
        "Gender": "Man",
        "LanguageDesireNextYear": "Go;HTML/CSS;JavaScript;R",
        "LanguageWorkedWith": "Go;HTML/CSS;JavaScript;Python",
        "MiscTechDesireNextYear": "",
        "MiscTechWorkedWith": "Node.js;React Native",
        "OpSys": "MacOS",
        "PlatformWorkedWith": "AWS;Docker;Google Cloud Platform;Linux;MacOS;Raspberry Pi",
        "UndergradMajor": "Computer science, computer engineering, or software engineering",
        "WebframeDesireNextYear": "React.js;Vue.js",
        "WebframeWorkedWith": "React.js",
        "YearsCode": 5,
        "YearsCodePro": 3,
        "_id": "6065dd707744ff89004faa0a"
    },
    {
        "Age": 22,
        "Age1stCode": 17,
        "Country": "Mexico",
        "DatabaseDesireNextYear": "DynamoDB;MongoDB;MySQL;Redis",
        "DatabaseWorkedWith": "Microsoft SQL Server;MySQL",
        "DevType": "Developer, back-end;Developer, desktop or enterprise applications;Developer, embedded applications or devices",
        "Employment": "Employed full-time",
        "Gender": "Man",
        "LanguageDesireNextYear": "Go;Python;Rust",
        "LanguageWorkedWith": "C#;C++;JavaScript;Python",
        "MiscTechDesireNextYear": ".NET Core;Hadoop;TensorFlow",
        "MiscTechWorkedWith": ".NET;TensorFlow",
        "OpSys": "Windows",
        "PlatformWorkedWith": "Linux;Windows",
        "UndergradMajor": "Computer science, computer engineering, or software engineering",
        "WebframeDesireNextYear": "",
        "WebframeWorkedWith": "",
        "YearsCode": 5,
        "YearsCodePro": 2,
        "_id": "6065dd707744ff89004faa0b"
    },
    {
        "Age": 21,
        "Age1stCode": 14,
        "Country": "Canada",
        "DatabaseDesireNextYear": "",
        "DatabaseWorkedWith": "",
        "DevType": "",
        "Employment": "Student",
        "Gender": "Woman",
        "LanguageDesireNextYear": "Go;Python;Scala;SQL",
        "LanguageWorkedWith": "Bash/Shell/PowerShell;C++;Kotlin;Python",
        "MiscTechDesireNextYear": "Ansible;Chef",
        "MiscTechWorkedWith": "Chef",
        "OpSys": "MacOS",
        "PlatformWorkedWith": "Android;Docker;MacOS;Windows",
        "UndergradMajor": "Computer science, computer engineering, or software engineering",
        "WebframeDesireNextYear": "",
        "WebframeWorkedWith": "",
        "YearsCode": 7,
        "YearsCodePro": -1,
        "_id": "6065dd707744ff89004faa0c"
    },
    {
        "Age": 28,
        "Age1stCode": 12,
        "Country": "United States",
        "DatabaseDesireNextYear": "PostgreSQL;Redis",
        "DatabaseWorkedWith": "Elasticsearch;Microsoft SQL Server;MongoDB;Redis",
        "DevType": "Developer, front-end;Developer, full-stack",
        "Employment": "Employed full-time",
        "Gender": "Woman",
        "LanguageDesireNextYear": "Go;HTML/CSS;JavaScript;Ruby",
        "LanguageWorkedWith": "C#;HTML/CSS;JavaScript;SQL;TypeScript",
        "MiscTechDesireNextYear": "Node.js;React Native;Teraform",
        "MiscTechWorkedWith": ".NET;.NET Core;Node.js",
        "OpSys": "MacOS",
        "PlatformWorkedWith": "Docker;Microsoft Azure;Windows;WordPress",
        "UndergradMajor": "A humanities discipline (such as literature, history, philosophy, etc.)",
        "WebframeDesireNextYear": "Express;Gatsby;React.js;Ruby on Rails",
        "WebframeWorkedWith": "Angular;Angular.js;ASP.NET;ASP.NET Core;Express;jQuery;React.js;Vue.js",
        "YearsCode": 6,
        "YearsCodePro": 2,
        "_id": "6065dd707744ff89004faa0d"
    },
    {
        "Age": 28,
        "Age1stCode": 25,
        "Country": "Indonesia",
        "DatabaseDesireNextYear": "PostgreSQL",
        "DatabaseWorkedWith": "PostgreSQL",
        "DevType": "Designer",
        "Employment": "Employed full-time",
        "Gender": "Man",
        "LanguageDesireNextYear": "HTML/CSS;JavaScript;Ruby;TypeScript",
        "LanguageWorkedWith": "HTML/CSS;JavaScript;Ruby;TypeScript",
        "MiscTechDesireNextYear": "",
        "MiscTechWorkedWith": "",
        "OpSys": "Linux-based",
        "PlatformWorkedWith": "Android;iOS;Linux;MacOS;Windows",
        "UndergradMajor": "A health science (such as nursing, pharmacy, radiology, etc.)",
        "WebframeDesireNextYear": "Ruby on Rails",
        "WebframeWorkedWith": "jQuery;Ruby on Rails",
        "YearsCode": 3,
        "YearsCodePro": 2,
        "_id": "6065dd707744ff89004faa0e"
    },
    {
        "Age": 31,
        "Age1stCode": 11,
        "Country": "France",
        "DatabaseDesireNextYear": "Cassandra;Elasticsearch;MariaDB;MongoDB;MySQL",
        "DatabaseWorkedWith": "Cassandra;Elasticsearch;MariaDB;MongoDB;MySQL",
        "DevType": "Developer, back-end;Developer, full-stack;DevOps specialist;System administrator",
        "Employment": "Employed full-time",
        "Gender": "Man",
        "LanguageDesireNextYear": "Bash/Shell/PowerShell;Go;PHP;SQL",
        "LanguageWorkedWith": "Bash/Shell/PowerShell;C;Java;JavaScript;PHP;SQL",
        "MiscTechDesireNextYear": "Ansible;Apache Spark;Node.js;Teraform",
        "MiscTechWorkedWith": "Ansible;Apache Spark;Node.js;Teraform",
        "OpSys": "Linux-based",
        "PlatformWorkedWith": "AWS;Docker;Linux;Raspberry Pi;Slack Apps and Integrations",
        "UndergradMajor": "Computer science, computer engineering, or software engineering",
        "WebframeDesireNextYear": "Express;Spring;Symfony",
        "WebframeWorkedWith": "Express;Spring;Symfony",
        "YearsCode": 19,
        "YearsCodePro": 10,
        "_id": "6065dd707744ff89004faa0f"
    },
    {
        "Age": 42,
        "Age1stCode": 12,
        "Country": "Greece",
        "DatabaseDesireNextYear": "MariaDB;MySQL;SQLite",
        "DatabaseWorkedWith": "MariaDB;MySQL;SQLite",
        "DevType": "Academic researcher;Database administrator;Developer, back-end;Developer, desktop or enterprise applications;Developer, embedded applications or devices;Developer, front-end;Developer, full-stack;Developer, game or graphics;Developer, mobile;Educator;Scientist;System administrator",
        "Employment": "Employed full-time",
        "Gender": "Man",
        "LanguageDesireNextYear": "Assembly;Bash/Shell/PowerShell;C++;HTML/CSS;Java;JavaScript;Objective-C;PHP;SQL",
        "LanguageWorkedWith": "Assembly;Bash/Shell/PowerShell;C;C++;HTML/CSS;Java;JavaScript;Objective-C;Perl;PHP;SQL",
        "MiscTechDesireNextYear": "Node.js;Unity 3D",
        "MiscTechWorkedWith": "Node.js;Unity 3D",
        "OpSys": "Windows",
        "PlatformWorkedWith": "Arduino;iOS;Linux;Windows",
        "UndergradMajor": "",
        "WebframeDesireNextYear": "jQuery",
        "WebframeWorkedWith": "Drupal;jQuery",
        "YearsCode": 24,
        "YearsCodePro": 15,
        "_id": "6065dd707744ff89004faa10"
    },
    {
        "Age": 21,
        "Age1stCode": 12,
        "Country": "Canada",
        "DatabaseDesireNextYear": "Elasticsearch;MySQL;PostgreSQL;Redis;SQLite",
        "DatabaseWorkedWith": "Elasticsearch;MySQL;PostgreSQL;SQLite",
        "DevType": "",
        "Employment": "Employed full-time",
        "Gender": "Man",
        "LanguageDesireNextYear": "Assembly;Bash/Shell/PowerShell;C;Python;Ruby;SQL",
        "LanguageWorkedWith": "Bash/Shell/PowerShell;C;Python;Ruby;SQL",
        "MiscTechDesireNextYear": "Ansible;Hadoop;Teraform",
        "MiscTechWorkedWith": "Ansible;Teraform",
        "OpSys": "Linux-based",
        "PlatformWorkedWith": "AWS;Docker;Linux;Raspberry Pi;Slack Apps and Integrations",
        "UndergradMajor": "A social science (such as anthropology, psychology, political science, etc.)",
        "WebframeDesireNextYear": "",
        "WebframeWorkedWith": "Flask",
        "YearsCode": 9,
        "YearsCodePro": 2,
        "_id": "6065dd707744ff89004faa11"
    },
]
    TRUNCATED
```

## Error Response

**Kondisi** : Ke [jwt.md](./jwt.md)

**Code** : Ke [jwt.md](./jwt.md)

**Content** : Ke [jwt.md](./jwt.md)
