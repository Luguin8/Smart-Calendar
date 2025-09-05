import React from 'react';
import MainLayout from './components/UI/MainLayout';
import { Typography, Card, CardContent, Box } from '@mui/material';

function App() {
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
      </Box>
    </MainLayout>
  );
}

export default App;