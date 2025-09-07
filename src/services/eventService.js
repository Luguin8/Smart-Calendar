import { db, EventType, Priority } from './database';

//crear evento
export const addEvent = async (event) => {
    const newEvent = {
        name: event.name,
        startTime: event.startTime || null,
        endTime: event.endTime || null,
        type: event.type || EventType.FIXED,
        priority: event.priority || Priority.MEDIUM,
        isCompleted: false,
        timeRange: event.timeRange || null,
        duration: event.duration || null,
        actualDuration: null,
        notes: event.notes || '',
        url: event.url || '',
        iconPath: event.iconPath || ''
    };
    return await db.events.add(newEvent);
};

// leer todos los eventos
export const getEvents = async () => {
    return await db.events.toArray();
}

// actualizar evento
export const updateEvent = async (id, updates) => {
    return await db.events.update(id, updates);
};

// eliminar evento
export const deleteEvent = async (id) => {
    return await db.events.delete(id);
};