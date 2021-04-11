# Penggunaan docker-compose

Prerequisite: [docker](https://www.docker.com/), [docker-compose](https://docs.docker.com/compose/)

Ambil file docker-compose di [githubku](https://github.com/LordRonz/b201_baktilab/blob/main/js_webserver/docker-compose.yml).

Lalu taruh file docker-compose.yml di suatu folder. Di folder tersebut buat folder "api" dan folder "nginx" tanpa tanda kutip. Lalu di folder api buat ssl certificate dan beri nama key nya "key.pem", certificatenya "cert.pem", serta file .env yang berisi field PORT=5000, SHA_SECRET_KEY, MONGODB_URI dan ACCESS_TOKEN_SECRET, contoh: [link]()
