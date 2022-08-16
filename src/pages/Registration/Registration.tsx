import React from 'react';
import { ForgetPassword, Form, FormTitle, RegistrationWrapper } from './Registration.styled';
import ValidationTextFields from './LoginForm/LoginForm';
import Button from '@mui/material/Button/Button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
const Registration = () => {
  return (
        <RegistrationWrapper>
            <Form>
                <FormTitle>
                    <p>Log in</p>
                </FormTitle>
                <ValidationTextFields />
                <ForgetPassword>
                    <p>Forget password?</p>
                </ForgetPassword>
                <ThemeProvider theme={theme}>
                    <Button variant="contained">Sign in</Button>
                </ThemeProvider>
            </Form>
        </RegistrationWrapper>
  );
};

export default Registration;