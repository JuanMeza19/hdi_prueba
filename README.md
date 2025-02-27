# README

> **Nota:** Para poder correr el proyecto, es necesario tener instalado **Node.js**, **npm** y **Docker**.

## Requisitos

- Node.js (versión 20.16.0(Recomendado) o superior)
- npm (viene incluido con Node.js)
- Docker
- visual Studio Code: [(https://code.visualstudio.com/)](https://code.visualstudio.com/).

SEGUIR LEYENDO EL README.

---

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

## 🗃️ DatabaseSeederService (Seeder y Procedimientos Almacenados)

El servicio `DatabaseSeederService` es responsable de insertar datos iniciales en la base de datos y crear procedimientos almacenados.

### 🔹 Funcionamiento
Este servicio implementa la interfaz `OnModuleInit`, lo que significa que se ejecutará automáticamente al iniciarse el módulo donde está definido.

### 📌 Métodos principales

#### 1️⃣ `onModuleInit()`
- Llama a los métodos `insertEstados()` y `createStoredProcedure()` al iniciar el módulo.

#### 2️⃣ `insertEstados()`
- Verifica si los estados ya existen en la base de datos.
- Si no existen, los inserta en la tabla `tb_estados`.
- Imprime en consola cada estado insertado.

#### 3️⃣ `createStoredProcedure()`
- Borra el procedimiento almacenado `ObtenerTodosLosEstados` si ya existe.
- Crea un nuevo procedimiento almacenado en MySQL que selecciona todos los registros de la tabla `tb_estados`.
- Muestra un mensaje en consola cuando se crea correctamente.

### 🛠 Uso del Stored Procedure
Una vez creada la base de datos y ejecutado el servicio, se puede llamar al procedimiento almacenado con el siguiente comando en MySQL:
```sql
CALL ObtenerTodosLosEstados();
```
Esto devolverá todos los registros de la tabla `tb_estados`.

---

## 🛠️ Instalación de Node.js en Windows

Sigue estos pasos para instalar **Node.js versión 20.16.0** en tu computadora con Windows:

### 1. Descargar Node.js
1. **Abre tu navegador** y ve al sitio oficial de Node.js: [https://nodejs.org](https://nodejs.org).
2. Busca la sección de **"Descargas"** (Downloads).
3. Haz clic en el botón que dice **"Windows Installer"** para descargar la versión 20.16.0 de Node.js.

   > 💡 Si no encuentras la versión 20.16.0 directamente, visita el enlace de descarga específico: [Node.js 20.16.0](https://nodejs.org/dist/v20.16.0/). Descarga el archivo que termina en `.msi` (por ejemplo, `node-v20.16.0-x64.msi`).

---

### 2. Instalar Node.js
1. **Abre el archivo descargado** (el archivo `.msi` que acabas de descargar).
2. Sigue los pasos del instalador:
   - Haz clic en **"Next"** (Siguiente) en cada pantalla.
   - Acepta los términos y condiciones.
   - Selecciona la carpeta donde quieres instalar Node.js (puedes dejar la carpeta predeterminada).
   - Asegúrate de que la opción **"Automatically install the necessary tools"** esté marcada.
   - Haz clic en **"Install"** (Instalar) y espera a que termine la instalación.

---

### 3. Verificar la instalación
1. **Abre la terminal** de Windows:
   - Presiona `Win + R`, escribe `cmd` y presiona `Enter`.
2. Escribe el siguiente comando para verificar la versión de Node.js instalada:
   ```bash
   node -v

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

  ## 🛠 Instalación de Docker en Windows
Para ejecutar Docker en Windows, sigue estos pasos:

1. Descarga e instala **Docker Desktop** desde el sitio oficial: [Docker Desktop para Windows](https://www.docker.com/products/docker-desktop/).
2. Habilita la **virtualización** en la BIOS si es necesario.
3. Asegúrate de que **WSL 2** esté instalado y configurado correctamente.
4. Reinicia tu computadora y abre Docker Desktop.
5. Verifica que Docker esté funcionando ejecutando en la terminal:
   ```sh
   docker --version
   ```
   Esto debería mostrar la versión instalada de Docker.

Para más información sobre instalación y configuración, consulta la documentación oficial: [Guía de instalación de Docker](https://docs.docker.com/get-docker/).

Con estos pasos, Docker estará listo para usar en Windows. 🚀

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

---

## 🚀 Resumen para ejecutar la aplicación en modo desarrollo

Para ejecutar correctamente la aplicación en un entorno de desarrollo, sigue estos pasos:

1️⃣ **Instalar dependencias (✅ ASEGURARSE QUE ESTE EN LA CARPETA RAIZ DE LA APP YA QUE PUEDE DAR UN ERROR AL INSTALAR DEPENDENCIAS)** 
```sh
npm install
```
   
2️⃣ **Instalar dependencias del cliente**
```sh
cd react-client
npm install
```

3️⃣ **Regresar a la carpeta raiz HDI**
```sh
cd ..
```

4️⃣ **Iniciar la base de datos con Docker Compose**
```sh
docker-compose up -d
```

5️⃣ **Ejecutar el backend en modo desarrollo (api)**
```sh
npm run start:dev
```

6️⃣ **Ejecutar el frontend (cliente)**
```sh
npm run start:client:app
```

7️⃣ **Ejecutar backend y frontend simultáneamente (✅ RECOMENDADO)**
```sh
npm run start:dev:app
```

> **Nota:** Esperar un momento para que se ejecuten los servicios ( API y cliente ) .


Con estos pasos, la base de datos se iniciará en un contenedor de Docker, el backend de NestJS se ejecutará en modo `watch` para reflejar cambios en caliente y el frontend en React estará disponible en modo desarrollo. 🚀