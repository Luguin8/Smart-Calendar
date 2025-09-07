// Configuracion IndexedDB con Dexie, simplifica el trabajo
// Aca defino la base de datos, su tabla e indices

import Dexie from "dexie";

// Instancia de la db
const db = new Dexie("SmartCalendarDB");

//Tablas e indices
db.version(2).stores({
    events: `
      ++id,
      name,
      startTime,
      endTime,
      type,
      priority,
      isCompleted,
      timeRange,
      duration,
      actualDuration,
      notes,
      url,
      iconPath
      `,
      weekTemplates: '++id, dayOfWeek, events',
      settings: '++id, key, value'
});

//enum para tipos 
export const EventType = {
  FIXED: 'FIXED',
  DYNAMIC: 'DYNAMIC',
  FLEXIBLE: 'FLEXIBLE'
};

//enum para prioridades
export const Priority = {
  HIGH: 1,
  MEDIUM: 2,
  LOW: 3,
};

//migracion v1 a v2 db
db.version(2).upgrade(tx => {
  return tx.table('events').toCollection().modify(event => {
    event.type = event.type || 'FIXED';
    event.priority = event.priority || 2; //medium
  });
});

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