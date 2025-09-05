// Configuracion IndexedDB con Dexie, simplifica el trabajo
// Aca defino la base de datos, su tabla e indices

import Dexie from "dexie";

// Instancia de la db
const db = new Dexie("SmartCalendarDB");

//Tablas e indices, primary key siempre ++id, adicionales separados por coma
db.version(1).stores({
    events: "++id, date, type, priority",
    // id clave primaria, date fecha evento, type tipo, priority prioridad 1-3
})

// Ejemplo de datos iniciales (TEST)
async function seedData() {
  const count = await db.events.count();
  if (count === 0) {
    await db.events.bulkAdd([
      {
        date: "2025-09-05",
        type: "fixed",
        name: "Clase de prueba",
        duration: 120, // en minutos
        priority: 1,
      },
      {
        date: "2025-09-06",
        type: "dynamic",
        name: "Estudiar matemáticas",
        duration: 90,
        priority: 2,
      },
    ]);
    console.log("✅ Datos iniciales insertados en IndexedDB");
  }
}

// Exportamos la DB y la función opcional de seeding
export { db, seedData };