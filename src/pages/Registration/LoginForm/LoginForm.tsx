import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from 'styled-components';
import { Formtheme } from '../../../styles/theme';
import { ForgetPassword, StyledButton } from '../Registration.styled';

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
            />
            <TextField
            id="password"
            name="password"
            placeholder="Password"
            />
        </div>
        <ForgetPassword>
            <p>Forget password?</p>
        </ForgetPassword>
        <StyledButton type='submit' variant="contained">Sign in</StyledButton>
        </Box>
    </ThemeProvider> 
  );
}