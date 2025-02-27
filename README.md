# README

## Estructura del Proyecto y MVC
Este proyecto usa **NestJS** para el backend y **React** para el frontend. A continuación, se explican las carpetas y la arquitectura MVC utilizada.

### 📂 Estructura de Carpetas
```
react-client/
src/
  ├── DB/
  ├── Modules/
  │    ├── prueba_hdi/
  │    │    ├── entity/
  │    │    │    ├── estado-entity.ts
  │    │    ├── database-seeder.service.ts
  │    │    ├── hdi.controller.ts
  │    │    ├── hdi.module.ts
  │    │    ├── hdi.service.ts
  ├── app.controller.spec.ts
  ├── app.controller.ts
  ├── app.module.ts
  ├── app.service.ts
  ├── main.ts
  ├── docker-compose.yml
```

### 📌 Descripción de Carpetas y Archivos

- **react-client/** → Contiene la aplicación frontend construida con React.
- **src/** → Carpeta principal del backend en NestJS.
  - **DB/** → Sección destinada a la configuración y administración de la base de datos.
  - **Modules/prueba_hdi/** → Módulo `prueba_hdi` de la aplicación.
    - **entity/** → Contiene los modelos de datos, como `estado-entity.ts`.
    - **database-seeder.service.ts** → Servicio para poblar la base de datos con datos iniciales.
    - **hdi.controller.ts** → Controlador que maneja las rutas y peticiones del módulo `prueba_hdi`.
    - **hdi.module.ts** → Archivo que define el módulo `hdi`, donde se importan controladores y servicios.
    - **hdi.service.ts** → Servicio que maneja la lógica de negocio para `prueba_hdi`.
  - **app.controller.ts** → Controlador principal de la aplicación.
  - **app.module.ts** → Módulo principal donde se importan todos los submódulos.
  - **app.service.ts** → Servicio principal de la aplicación.
  - **main.ts** → Punto de entrada de la aplicación NestJS.
  - **docker-compose.yml** → Archivo de configuración para ejecutar MySQL en Docker.

---

## 🎭 Arquitectura MVC (Modelo - Vista - Controlador)
Este proyecto sigue la arquitectura **MVC**, que separa la lógica de negocio, la presentación y la interacción con el usuario.

1. **Modelo (`entity/` en NestJS)**
   - Representa la estructura de los datos y las entidades del sistema.
   - Se define en archivos TypeScript dentro de `entity/`.
   - Ejemplo: `estado-entity.ts` define la entidad `Estado`.

2. **Vista (React - `react-client/`)**
   - Es la interfaz de usuario, manejada por la aplicación React.
   - Consume la API NestJS para obtener y mostrar datos.

3. **Controlador (`*.controller.ts`)**
   - Maneja las peticiones HTTP y dirige los datos entre el servicio y la vista.
   - Ejemplo: `hdi.controller.ts` gestiona las rutas relacionadas con `prueba_hdi`.

4. **Servicio (`*.service.ts`)**
   - Contiene la lógica de negocio y procesamiento de datos.
   - Ejemplo: `hdi.service.ts` realiza operaciones en la base de datos y devuelve resultados al controlador.

Con esta estructura, el proyecto mantiene una organización clara y modular, facilitando el mantenimiento y escalabilidad. 🚀

---

## 🐳 Uso de Docker Compose
Este proyecto incluye un archivo `docker-compose.yml` en la raíz para levantar un contenedor de MySQL 5.7 de manera rápida y sencilla.

### 📌 Contenido de `docker-compose.yml`
```yaml
version: '3.8' 
services:
  db:
    image: mysql:5.7
    restart: always
    container_name: SQL-HDI
    environment:
      MYSQL_ROOT_PASSWORD: hdi
      MYSQL_DATABASE: HDI
      MYSQL_USER: hdi12345678
      MYSQL_PASSWORD: hdi12345678
    ports:
      - "3306:3306"
    volumes:
      - dbdata:/var/lib/mysql
volumes:
  dbdata:
```

### 🚀 Cómo ejecutar Docker Compose en Windows

1. **Instalar Docker Desktop** (si no lo tienes instalado) desde [Docker](https://www.docker.com/products/docker-desktop/).
2. Asegurar que Docker esté corriendo y habilitar la integración con WSL2 si es necesario.
3. Abrir una terminal en la raíz del proyecto y ejecutar:
   ```sh
   docker-compose up -d
   ```
   Esto iniciará el contenedor de MySQL en segundo plano.

### 🔄 Comandos Útiles
- Para detener el contenedor:
  ```sh
  docker-compose down
  ```
- Para ver los logs de MySQL:
  ```sh
  docker logs SQL-HDI
  ```
- Para acceder al contenedor MySQL desde la terminal:
  ```sh
  docker exec -it SQL-HDI mysql -u hdi12345678 -p
  ```

Con estos pasos, tu base de datos estará lista para usarse en el entorno de desarrollo. 🚀

## 🚀 Cómo Usarlos
Ejecuta estos comandos en la terminal según sea necesario:

### 1️⃣ Instalar dependencias
```sh
npm install
```

### 2️⃣ Construir la aplicación
```sh
npm run build
```

### 3️⃣ Formatear código
```sh
npm run format
```

### 4️⃣ Iniciar solo el backend
```sh
npm run start:dev
```

### 5️⃣ Iniciar solo el frontend
```sh
npm run start:client:app
```

### 6️⃣ Iniciar todo el proyecto (backend + frontend)
```sh
npm run start:dev:app
```

Con estos scripts, el flujo de desarrollo será más eficiente y organizado. 🚀

