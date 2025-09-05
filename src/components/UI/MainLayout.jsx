import React from "react";
import {Container, AppBar, Toolbar, Typography, Box} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../../theme/theme'; //importo el tema modularizado 

const MainLayout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            {/*CssBaseline normaliza estilos css entre navegadores*/}
            <CssBaseline />
            {/*Barra superior de la app*/}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Smart Calendar
                    </Typography>
                </Toolbar>
            </AppBar>
            {/*Contenido Princial*/}
            <Container maxWidth="xl" sx={{mt: 2, mb: 2}}>
                <Box>
                    {children}
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default MainLayout;