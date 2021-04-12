# Penggunaan docker-compose

Prerequisite: [docker](https://www.docker.com/), [docker-compose](https://docs.docker.com/compose/)

## Langkah-langkah

Ambil file docker-compose di [githubku](https://github.com/LordRonz/b201_baktilab/blob/main/js_webserver/docker-compose.yml).

Lalu taruh file docker-compose.yml di suatu folder. Di folder tersebut buat folder "api" dan folder "nginx" tanpa tanda kutip. Lalu di folder api buat ssl certificate dan beri nama key nya "key.pem", certificatenya "cert.pem", serta file .env yang berisi field PORT=5000, SHA_SECRET_KEY, MONGODB_URI dan ACCESS_TOKEN_SECRET, contoh: [link](https://github.com/LordRonz/b201_baktilab/blob/main/js_webserver/api/.env.example)

Kemudian untuk nginxnya, di folder nginxnya diisi dengan folder "ssl", lalu didalamnya ditaruh key.pem dan cert.pem seperti yang diatas. Lalu dilevel yang sama dengan folder ssl, buat folder nginx-conf dan taruh file confignya yang bernama [nginx.conf](https://github.com/LordRonz/b201_baktilab/blob/main/js_webserver/nginx/nginx-conf/nginx.conf).

Setelah itu, cd ke level yang sama ditempat file docker-compose.yml tadi, lalu execute command(membutuhkan akses root):

**Apabila root user**:

```bash
docker-compose pull
```

**Non-root user**:

```bash
sudo docker-compose pull
```

Setelah itu,

```bash
docker-compose up
```

## File hierarchy

```shell
.
├── api
│   ├── cert.pem
│   └── key.pem
├── docker-compose.yml
└── nginx
    ├── nginx-conf
    │   └── nginx.conf
    └── ssl
        ├── cert.pem
        └── key.pem
```
