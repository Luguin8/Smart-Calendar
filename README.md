# SmartCalendar

**SmartCalendar** es un calendario inteligente en desarrollo, pensado para organizar eventos y tareas de manera eficiente. Construido con **React**, **Material-UI** y base de datos local usando **Dexie.js**.

---

## 🚀 Estado actual (Fase 1 - Fundamentos)

- Proyecto React inicializado con Vite.
- Material-UI configurado con tema personalizado.
- Estructura de carpetas modularizada:
  - `components/` para componentes reutilizables.
  - `services/` para lógica de base de datos.
- Base de datos local inicializada con datos de prueba.
- Pantalla principal mostrando:
  - Bienvenida.
  - Estado de la fase 1.
  - Lista de eventos desde la base de datos local.

---

## 🌟 Objetivo del proyecto

**SmartCalendar** pretende ser:

- Un calendario inteligente y visualmente atractivo.
- Permitir agregar, editar y eliminar eventos.
- Contar con filtros, prioridades y duraciones de eventos.
- Sincronización futura con base de datos en la nube (planificado en fases posteriores).

---

## 💻 Instalación local

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd smartcalendar
npm install
npm run dev
Abrir http://localhost:5173 en el navegador.


📝 Notas

Proyecto en fase inicial, muchas funcionalidades pendientes.

Se recomienda Node.js >= 18 y npm >= 9.

Base de datos local en IndexedDB (datos solo en la máquina local).