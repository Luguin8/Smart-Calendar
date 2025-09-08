import React from 'react';
import {Paper, Typography} from '@mui/material';
import {format} from 'date-fns';

const FixedEventBlock = ({event}) => {
    return (
        <Paper
            elevation={3}
            sx={{
                backgroundColor: '#1976d2',
                color: '#fff',
                padding: '4px',
                marginBottom: '2px',
                borderRadius: '4px'
            }}
        >
            <Typography variant="body2">{event.name}</Typography>
            <Typography variant="caption">
                {format(new Date(event.startTime), 'HH:mm')} - {format(new Date(event.endTime), 'HH:mm')}
            </Typography>
        </Paper>
    );
};

export default FixedEventBlock;