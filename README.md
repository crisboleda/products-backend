# API CRUD de Productos - Igloolab

API REST para la gestión de productos con operaciones CRUD (Crear, Leer, Actualizar, Eliminar). El proyecto está desarrollado con **Express**, **TypeScript**, **Sequelize** y **PostgreSQL**, con soporte para pruebas unitarias y documentación con **Swagger**.

---

## 🚀 Tecnologías y Herramientas Utilizadas

- Node.js
- Express
- TypeScript
- Sequelize
- PostgreSQL
- SQLite (para pruebas)
- Jest
- Swagger
- dotenv
- Joi (Validaciones)

---

## 📄 Instalación

### Prerrequisitos
- Node.js
- PostgreSQL

### Paso 1: Clonar el repositorio
```bash
git clone https://github.com/tu_usuario/nombre_proyecto.git
cd nombre_proyecto
```

### Paso 2: Instalar dependencias
```bash
npm install
```

### Paso 3: Configurar las variables de entorno
Crea un archivo ```.env``` en la raíz del proyecto con la siguiente configuración:
```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=products_db
NODE_ENV=development
```

### ▶️ Ejecutar el Proyecto
En modo desarrollo:
```bash
npm run dev
```
El servidor se ejecutará en:
```bash
http://localhost:3000
```


### 📄 Documentación con Swagger
La API está documentada con Swagger. Para abrir la documentación, accede a:
```bash
http://localhost:3000/api-docs
```

### 🧪 Ejecutar Pruebas Unitarias
Las pruebas unitarias validan las siguientes funcionalidades:
- Operaciones CRUD.
- Validaciones con Joi.
- Conexión con la base de datos.

Ejecuta los tests con el siguiente comando:
```bash
NODE_ENV=test npm run test
```

### 📌 Estructura del Proyecto
```bash
src/
├─ controllers/      
├─ models/           
├─ routes/           
├─ validations/      
├─ docs/             
├─ tests/            
└─ app.ts            
```
