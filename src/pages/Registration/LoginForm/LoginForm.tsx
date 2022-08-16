import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from 'styled-components';
import { Formtheme } from '../../../styles/theme';

export default function ValidationTextFields() {
  return (
    <ThemeProvider theme={Formtheme}>
        <Box
        component="form"
        noValidate
        autoComplete="off"
        >
        <div>
            <TextField
            id="email"
            name="email"
            placeholder='Email'
            color='primary'
            border-color='red'
            />
            <TextField
            id="password"
            name="password"
            placeholder="Password"
            color='primary'
            />
        </div>
        </Box>
    </ThemeProvider> 
  );
}