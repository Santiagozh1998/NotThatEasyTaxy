# NotThatEasyTaxy
## Descargar el proyecto
Seleccionar la carpeta donde se desea almacenar la app.
Descargar el proyecto en su computador e ingresar a la carpeta del proyecto:
```
git clone https://github.com/Santiagozh1998/NotThatEasyTaxy
cd NotThatEasyTaxy
```
## Instalar las dependencias:
```
cd client
npm install
cd..
cd server
npm install
```
Crear una base de datos en postgres con el nombre NotThatEasyTaxy
## Importar la DB desde el server del proyecto
Una vez se esté dentro de la carpeta server, ejecutar
```
psql -U postgres -h localhost NotThatEasyTaxy < database.sql
```
## Inicializar la app:
Una vez se esté dentro del server, ejecurtar
```
npm run dev
```
