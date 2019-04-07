# NotThatEasyTaxy

nodejs container: https://hub.docker.com/_/node/

## Crear el proyecto en github

Crear una carpeta que se llame NotThatEasyTaxy
```
mkdir NotThatEasyTaxy
cd NotThatEasyTaxy
```



Crear un archivo que se llame package.json con el siguiente contenido:

```
{
  "name": "NotThatEasyTaxy",
  "version": "1.0.0",
  "description": "Aplicación para solicitar servicio de taxi.",
  "author": "mapamoree",
  "repository": "Santiagozh1998/NotThatEasyTaxy",
  "bugs": {
    "url": "https://github.com/Santiagozh1998/NotThatEasyTaxy/issues"
  },
  "homepage": "https://github.com/Santiagozh1998/NotThatEasyTaxy",
  "license": "MIT",
  "main": "./client/src/index.js",
  "scripts": {
    "start": "node client/src/index.js"
  },

  "dependencies": {
    "express":"4.15.1",
    "supervisor": "0.11.0",
    "pg":"6.1.0"
  }
}
```
Crear una carpeta src para almacenar el código fuente de la apliación:
```
mkdir src
```
Crear el primer archivo para nuestro primer servicio web que escuchará en el puerto 5000 en src/index.js
```
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})
```

Crear un repositorio en github para guardar este proyecto:


## Docker con nodejs y npm

Los siguientes pasos fueron tomados de una clase de BD del profesor Andres Castillo:

Crear el Dockerfile con el siguiente contenido

```
FROM node:6-onbuild
# replace this with your application's default port
EXPOSE 5000
```
Arrancar construir y arrancar el contenedor de nodejs:

```
sudo docker build -t node-app .
sudo docker run -it --rm -p 5000:5000 --name my-server-app node-app
sudo docker run -it --rm -p 5000:5000 --link some-postgres:postgres --name my-server-app node-app
```
El contenedor correra la aplciacion que se encuentre referenciada por el archivo package.json

El contenedor de postgres debe estar corriendo y debe llamarse some-postgres

```
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d Santiagozh1998/database
```
