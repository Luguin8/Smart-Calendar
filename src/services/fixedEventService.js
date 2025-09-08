import {db} from './database';

export const addFixedEvent = async (event) => {
    return await db.events.add({...event, type: 'FIXED'});
};

export const getFixedEvents = async () => {
    return await db.events.where('type').equals('FIXED').toArray();
};

export const updateFixedEvent = async (id, changes) => {
    return await db.events.update(id, changes);
};

export const deleteFixedEvent = async (id) => {
    return await db.events.delete(id);
};

