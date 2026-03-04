# Contribuir al proyecto SIA

Este documento describe las prácticas recomendadas para que el equipo pueda desarrollar nuevas funcionalidades, corregir errores y colaborar sin afectar la estabilidad del código.

## 📥 Clonación y configuración inicial

1. Clona el repositorio usando la URL oficial (SSH o HTTPS):
   ```bash
   git clone git@github.com:<org>/<repo>.git
   # o
   git clone https://github.com/<org>/<repo>.git
   ```
2. Entra en la carpeta del proyecto y verifica los remotos:
   ```bash
   cd Proyecto
   git remote -v
   ```
   - Asegúrate de que `origin` apunta al repositorio principal.
   - Si trabajas con forks, añade `upstream` para mantenerte sincronizado:
     ```bash
     git remote add upstream git@github.com:<org>/<repo>.git
     ```
3. Instala herramientas comunes si las usa el equipo (node, npm, etc.) según el README.

## 📝 Mensajes de commit (abreviaciones usadas)

Cuando formes tus mensajes, emplea uno de los prefijos estándar para que el historial sea legible y fácil de filtrar:

- `feat:` – nueva funcionalidad
- `fix:` – corrección de bug
- `docs:` – cambios en documentación
- `chore:` – tareas de mantenimiento (deps, scripts)
- `refactor:` – reestructuración sin cambio de lógica
- `test:` – añadir o arreglar pruebas
- `perf:` – mejoras de rendimiento
- `ci:` – cambios en configuración de integración continua
- `build:` – modificaciones en herramientas de build u empaquetado
- `style:` – formato o estilo (sin impacto lógico)

Ejemplo de commit correctamente formado:
```
feat: añadir endpoint de login con JWT
```

Puedes combinar varios prefijos en diferentes commits si la tarea lo requiere, pero evita mensajes generales como "cambios" o "update".

---


---

## 🛠️ Flujo de trabajo básico

1. **Actualiza tu rama local**
   ```bash
   git checkout main
   git pull origin main
   ```
2. **Crea una rama nueva** para cada módulo/feature/fix:
   ```bash
   git checkout -b feature/nombre-descriptivo
   # o fix/nombre-descriptivo, refactor/...
   ```
   - Usa nombres claros y con prefijo (`feature/`, `fix/`, `hotfix/`, `chore/`).

3. **Desarrolla y prueba localmente**
   - Mantén tus cambios limitados al contexto de la tarea.
   - Compila el backend (`npm run dev`) y frontend (`npm run dev`) para verificar que no se rompa nada.
   - Agrega o modifica pruebas automáticas si aplica.
   - Usa `npm run lint` (frontend) y cualquier herramienta de linters en el backend para mantener el estilo.

4. **Commits atómicos y mensajes claros**
   - Cada commit debe representar un paso lógico del trabajo.
   - Sigue convención: `feat: descripción breve`, `fix: descripción`, `docs:`, `chore:` etc.
   - Evita commits con cambios no relacionados.

5. **Rebase/merge antes de solicitar revisión**
   - Mantén tu rama al día con `main`:
     ```bash
     git fetch origin
     git rebase origin/main
     # o git merge origin/main si se prefiere
     ```
   - Resuelve conflictos y vuelve a ejecutar las pruebas.

6. **Abre un Pull Request (PR)**
   - Describe qué hace la rama, por qué y cualquier detalle útil.
   - Vincula con issues o tareas internas si existen.
   - Asigna revisores y espera aprobación.

7. **Revisión y merge**
   - Uno o más compañeros revisarán el código.
   - Realiza cambios solicitados mediante nuevos commits en la misma rama.
   - Una vez aprobado, el PR se mergeará a `main` (se puede usar `squash and merge` o `rebase`).

8. **Eliminar rama** tras merge.

---

## 📦 Estructura y convenciones

- **Backend**
  - Coloca rutas en `backend/routes`, modelos en `backend/models`, controladores en `backend/controllers`.
  - Si agregas paquetes, actualiza `package.json` y corre `npm install`.

- **Frontend**
  - Sigue la estructura de Next.js dentro de `fronted/sia/app`.
  - Usa `utils/api.ts` para llamadas al backend.
  - Añade estilos con Tailwind en `globals.css` o componentes.

- **Variables de entorno**
  - No comitas archivos `.env`; usa `.env.example` o `.env.local` para desarrollo.
  - Actualiza `README.md` si introduces nuevas variables.

- **Subidas y archivos estáticos**
  - Los uploads van a `backend/uploads` y se exponen en `/uploads`.
  - No olvides limpiar archivos de prueba si son sensibles.

---

## ✅ Pautas de calidad

- Asegúrate de que el proyecto arranque sin errores tras tus cambios.
- Añade o actualiza documentación cuando sea necesario (README, comentarios, etc.).
- Usa linters y formateadores antes de commitear.
- Revisa dependencias para evitar versiones vulnerables.

---

## 🧩 Al trabajar en features o fixes

- **Nuevos endpoints/funcionalidades**: documenta la API y añade ejemplos.
- **Corrección de bugs**: reproduce el error, escribe test que falle, luego arregla y verifica el test pase.
- **Refactorizaciones**: realiza commits pequeños y prueba cuidadosamente.

---

## 🆘 Ayuda y comunicación

- Si dudas acerca de la arquitectura o dependencias, pregunta en el canal de equipo antes de empezar.
- Usa issues o tickets para planificar el trabajo.

---

