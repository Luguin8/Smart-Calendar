import React, {useEffect, useState} from 'react';
import MainLayout from './components/UI/MainLayout';
import { Typography, Card, CardContent, Box, ListItem, ListItemText, List } from '@mui/material';
import  {db, seedData } from "./services/database";

function App() {

  const [events, setEvents] = useState([]);
  useEffect(()=> {
    async function loadData() {
      await seedData(); //insertar datos de prueba solo si db esta vacia
      const allEvents = await db.events.toArray();
      setEvents(allEvents);
    }
    loadData();
  }, []);

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
              Fase 1: Fundamentos
            </Typography>
            <Typography variant="body1">
              ✅ Proyecto React inicializado<br/>
              ✅ Material-UI configurado<br/>
              ✅ Estructura de carpetas creada<br/>
              🔄 Próximo: Configurar base de datos local
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
      </Box>
    </MainLayout>
  );
}

export default App;