import React, {useState} from 'react';
import { TextField, Button, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import {formatISO} from 'date-fns';

const FixedEventForm = ({open, onClose, onAdd, initialData}) => {
    const [name, setName] = useState(initialData?.name || '');
    const [startTime, setStartTime] = useState(initialData?.startTime ? formatISO(new Date(initialData.startTime)).slice(0,16): '');
    const [endTime, setEndTime] = useState(initialData?.endTime ? formatISO(new Date(initialData.endTime)).slice(0,16): '');
    const [priority, setPriority] = useState(initialData?.priority || 2);
    const [notes, setNotes] = useState(initialData?.notes || '');

    const handleSubmit = async () => {
        if (!name || !startTime || !endTime) {
            alert('Todos los campos obligatorios deben ser completados');
            return;
        }
        if (new Date(startTime) >= new Date(endTime)) {
            alert ('La hora de inicio debe ser anterior a la de fin');
            return;
        }
        const newEvent ={
            name,
            type: 'FIXED',
            startTime: new Date(startTime),
            endTime: new Date(endTime),
            duration: (new Date(endTime) - new Date(startTime)) / 60000,
            priority,
            notes,
            isCompleted: false
        };
        if (onAdd) {
            await onAdd(newEvent);
        }
        onClose();
    };
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{initialData ? 'Editar Evento Fijo' : 'Nuevo Evento Fijo'}</DialogTitle>
            <DialogContent>
                <TextField
                    label= "Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="dense"
                />
                <TextField
                    label="Inicio"
                    type="datetime-local"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    fullWidth
                    margin="dense"
                />
                <TextField
                    label="Fin"
                    type="datetime-local"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    fullWidth
                    margin="dense"
                />
                <TextField
                    select
                    label="Prioridad"
                    value={priority}
                    onChange={(e) => setPriority(Number(e.target.value))}
                    fullWidth
                    margin="dense"
                >
                    <MenuItem value={1}>1 - Alta</MenuItem>
                    <MenuItem value={2}>2 - Media</MenuItem>
                    <MenuItem value={3}>3 - Baja</MenuItem>
                </TextField>
                <TextField
                    label="Notas"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    fullWidth
                    margin="dense"
                    multiline
                    rows={2}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button onClick={handleSubmit} variant="contained">Guardar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default FixedEventForm;