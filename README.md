# 🚀 API de Prueba con Node.js + Express (MVC)

![Node.js](https://img.shields.io/badge/node-%3E%3D18-green)
![Express](https://img.shields.io/badge/express-4.x-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)
![Status](https://img.shields.io/badge/status-demo-orange)

Este proyecto es un **backend básico** con arquitectura **MVC** usando **Express**.  
Incluye un **único endpoint protegido** que exige un header `x-access-token` con el valor `1234` para registrar un usuario.

---

## 📂 Estructura del proyecto
```
src/
├── app.js               # Configuración de la aplicación Express
├── server.js            # Punto de entrada (inicia el servidor)
├── controllers/
│   └── user.js          # Lógica de negocio para usuarios
├── middleware/
│   └── auth.js          # Middleware que valida el header x-access-token
├── models/
│   └── user.js          # Modelo simulado de usuarios (en memoria)
└── routes/
    └── user.js          # Rutas de usuario (ej: /user/register)
```

---

## ⚙️ Instalación y ejecución
1. Clona este repositorio:
   ```bash
   git clone 
   cd tecplus-node
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el servidor:
   ```bash
   npm start
   ```

4. Por defecto, la API corre en:
   ```
   http://localhost:1234
   ```

---

## 🔐 Middleware de seguridad
- Cada request debe incluir el header `x-access-token`.
- Token esperado: `1234` (o el valor de la variable de entorno `X_ACCESS_TOKEN`).

Ejemplo de cabecera válida:
```
x-access-token: 1234
```

Respuestas:
- `401 Unauthorized`: si no se envía el header.
- `403 Forbidden`: si el token no coincide.

---

## 📌 Endpoint disponible

### **POST /user/register**
Crea un nuevo usuario en memoria.

- **Headers:**
  ```
  Content-Type: application/json
  x-access-token: 1234
  ```

- **Body (JSON):**
  ```json
  {
    "name": "Catalina",
    "email": "catalina@example.com",
    "password": "123456"
  }
  ```

- **Respuesta exitosa (201):**
  ```json
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Catalina",
    "email": "catalina@example.com",
    "password": "123456"
  }
  ```

---

## 🧩 Tecnologías usadas
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [UUID](https://www.npmjs.com/package/uuid) para generar IDs únicos

---

## 📖 Notas
- Los usuarios se almacenan en un **array en memoria** (se pierden al reiniciar).
- Ideal como **ejemplo de arquitectura MVC** simple con middleware de autenticación.
- Extensible para conectar a una base de datos real (Postgres, MySQL, MongoDB).

---
