import React, {useEffect, useState} from 'react';
import MainLayout from './components/UI/MainLayout';
import { Typography, Card, CardContent, Box, ListItem, ListItemText, List, Button } from '@mui/material';
import  {db, seedData } from "./services/database";

// import servicios y componentes FIXED
import {getFixedEvents, addFixedEvent} from './services/fixedEventService';
import FixedEventBlock from './components/Events/FixedEventBlock.jsx';
import FixedEventForm from './components/Events/FixedEventForm.jsx';

function App() {
  //estados
  const [events, setEvents] = useState([]);
  const [fixedEvents, setFixedEvents] = useState([]);
  const [formOpen, setFormOpen] = useState(false);

  // cargar datos iniciales
  useEffect(()=> {
    async function loadData() {
      await seedData(); //insertar datos de prueba solo si db esta vacia
      const allEvents = await db.events.toArray();
      setEvents(allEvents);

      const fe = await getFixedEvents();
      setFixedEvents(fe);
    }
    loadData();
  }, []);

  // guardar fixed new
  async function handleAddFixedEvent(eventData) {
    await addFixedEvent(eventData);
    const fe = await getFixedEvents();
    setFixedEvents(fe);
  }

  return (
    <MainLayout>
      <Box sx={{textAlign: 'center', mt: 4}}>
        <Typography variant='h4' component="h1" gutterBottom>
          Bienvenido a SmartCalendar
        </Typography>

        <Typography variant="h6" color="text.secondary" paragraph>
          Tu calendario inteligente esta en construccion
        </Typography>

        <Card sx={{mt:4, maxWidth: 600, mx: 'auto'}}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Fase Actual: 2.3
            </Typography>
            <Typography variant="body1">
              2.3 Eventos Dinámicos (4-5 días)
**Qué implementar:**
- Solo requieren duración, no horario fijo
- Algoritmo básico de asignación a espacios libres
- Visual distintivo (borde punteado)
- Capacidad de ser movidos automáticamente

**Estado al completar 2.3:**
- Eventos dinámicos se asignan automáticamente a espacios disponibles
- Algoritmo básico de scheduling funcional
- Consideración de prioridades en asignación
- Interfaz clara para eventos sin horario fijo
            </Typography>
          </CardContent>
        </Card>

        {/*lista de eventos de prueba*/}
        <Box sx={{mt: 4, textAlign: "left", maxWidth: 600, mx: "auto"}}>
          <Typography variant="h6">Eventos guardados en DB:</Typography>
          <List>
            {events.map((ev) =>(
              <ListItem key={ev.id}>
                <ListItemText 
                  primary={`${ev.name} (${ev.type})`}
                  secondary={`Duracion: ${ev.duration} min - Prioridad ${ev.priority}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/*seccion de eventos fijos */}
        <Box sx={{mt: 6, textAlign: "left", maxWidth: 600, mx: "auto"}}>
          <Typography variant="h6">Eventos Fijos: </Typography>

          {/*boton para abrir modal */}
          <Button 
          variant="contained" 
          color="primary" 
          sx={{mt: 2, mb: 2}}
          onClick={() => setFormOpen(true)}>
            Nuevo Evento Fijo
          </Button>

          {/*Bloque de eventos fijos */}
          {fixedEvents.map(ev =>(
            <FixedEventBlock key={ev.id} event={ev} />
          ))}
        </Box>
      </Box>

      {/* formulario en modal */}
      <FixedEventForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onAdd={handleAddFixedEvent}
      />
    </MainLayout>
  );
}

export default App;