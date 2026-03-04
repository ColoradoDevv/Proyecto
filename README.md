# SIA Proyecto

Este repositorio contiene dos partes principales:

- **backend/** - API construida con Node.js, Express y MongoDB.
- **fronted/sia/** - Aplicación cliente construida con Next.js y React.

## Configuración inicial

1. **Backend**
   - Copia `backend/.env.example` a `backend/.env` y ajusta las variables (`PORT`, `MONGODB_URI`, `FRONTEND_URL`).
   - Instala dependencias:
     ```bash
     cd backend
     npm install
     ```
   - Inicia el servidor en modo desarrollo:
     ```bash
     npm run dev
     ```
   - El servidor escuchará en el puerto configurado (por defecto `4000`).
   - Hay un endpoint de prueba `GET /api/test` que responde con un JSON.

2. **Frontend**
   - Navega a la carpeta del cliente y agrega variables de entorno:
     ```bash
     cd fronted/sia
     # ya existe .env.local con NEXT_PUBLIC_API_URL
     ```
   - Instala dependencias:
     ```bash
     npm install
     ```
   - Ejecuta en desarrollo:
     ```bash
     npm run dev
     ```
   - La aplicación se sirve por defecto en `http://localhost:3000`.
   - Las llamadas a `/api/*` se reescriben automáticamente hacia `http://localhost:4000/api/*`.
     puedes usar la utilidad `utils/api.ts` para facilitar las peticiones.

## Desarrollo conjunto

- Asegúrate de tener ambos procesos corriendo (backend y frontend).
- CORS ya está configurado para permitir el host `http://localhost:3000`.
- Puedes cambiar la URL del frontend en el `.env` del backend si lo despliegas en otro dominio.

## Notas

- La base de datos utiliza `mongoose` y está apuntando a MongoDB local por defecto.
- Los archivos subidos se almacenan en `/backend/uploads` y son accesibles desde `/uploads`.
- Ajusta o añade más rutas y modelos según la lógica de negocio.

---

¡Listo para comenzar a desarrollar! 🚀
