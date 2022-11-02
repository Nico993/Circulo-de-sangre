# E-Commerce

Desarrollamos un sistema gestor que permite generar promociones de manera rápida y eficiente. Brindando la posibilidad de modificar promociones existentes y generando un json para las diferentes áreas del proyecto.


## Opción 1 docker (sin descargar el proyecto):

- Instalar docker desktop.
- Descargar unicamente el archivo docker-compose.yml
- Ir a la carpeta donde este el docker-compose.yml
- Ejecutar el siguiente comando en consola: docker-compose up

## Opción 2 manual:

### Requisitos previos:

- Instalar nodejs.

- Instalar mongodb.

### Ejecutar client:

- cd client

- npm install

- npm start

### Ejecutar server:

- cd server

- Crear archivo .env con la siguiente estructura:

- CONECCTION\_URL = mongodb://localhost:27017/gestorPromocionesDB

- npm install

- npm start