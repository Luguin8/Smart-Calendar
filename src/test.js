import { addEvent, getEvents, updateEvent, deleteEvent } from "./services/eventService";

async function runTests() {
    console.log("===TEST DE eventService===");

    //1. crear evento
    const newEventID = await addEvent({
        title: "Evento de prueba",
        date: new Date(),
        duration: 60,
        notes:  "probando Indexed DB"
    });
    console.log("Evento creado con ID: ", newEventID);

    //2. ver todos los eventos
    const events = await getEvents();
    console.log("Eventos actuales:", events);

    //3. actualizar evento
    await updateEvent(newEventID, {title: "Evento actualizado"});
    console.log("Evento actualizado:", await getEvents());

    //4. eliminar
    await deleteEvent(newEventID);
    console.log("Eventos despues de borrar: ", await getEvents());
}

runTests();