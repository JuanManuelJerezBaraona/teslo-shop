# Descripción

## Correr en Dev

1. Clonar el repositorio
2. Crear una copia del archivo ```.env.template``` y renombrarlo a ```.env``` y cambiar las variables de entorno
3. Instalar dependencias ```npm install```
4. Abrir Docker y levantar la base de datos con docker ```docker compose up -d```
5. Correr las migraciones de Prisma ```npx prisma migrate dev```
6. Ejecutar seed ```npm run seed```
7. Correr el proyecto ```npm run dev```



## Correr en Producción