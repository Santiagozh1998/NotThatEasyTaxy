# NotThatEasyTaxy

nodejs container: https://hub.docker.com/_/node/

## Descargar el proyecto
Seleccionar la carpeta donde se desea almacenar la app.
Descargar el proyecto en su computador e ingresar a la carpeta del proyecto:
```
git clone https://github.com/Santiagozh1998/NotThatEasyTaxy
cd NotThatEasyTaxy
```
Ingresar a la carpeta server e inicializar la app:
```
cd server
npm run dev
```
En caso de no poder iniciar la app, dentro de las carpetas server y client instalar las dependencias y volver a ejecutar el comando:
```
cd client
npm install
cd..
cd server
npm install
npm run dev
```

## Docker con nodejs y npm

Los siguientes pasos fueron tomados de una clase de BD del profesor Andres Castillo
Creamos el Dockerfile con el siguiente contenido:

```
FROM node:6-onbuild
# replace this with your application's default port
EXPOSE 5000
```
Construir y arrancar el contenedor de nodejs:
```
sudo docker build -t node-app .
sudo docker run -it --rm -p 5000:5000 --name my-server-app node-app
sudo docker run -it --rm -p 5000:5000 --link some-postgres:postgres --name my-server-app node-app
```
El contenedor correra la aplicacion que se encuentre referenciada por el archivo package.json
El contenedor de postgres debe estar corriendo y debe llamarse some-postgres
```
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d node-app
```
