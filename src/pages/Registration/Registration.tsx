import React, { useState } from 'react';
import { ForgetPassword, LogForm, FormTitle, RegistrationWrapper, StyledButton, ToggleToRegistration } from './Registration.styled';
import ValidationTextFields from './LoginForm/LoginForm';
const Registration = () => {
  const [formToggler, setFormToggler] = useState('login');
  const onSetFormToggler = (value: string) => {
    setFormToggler(value);
  };  
  return (
        <RegistrationWrapper>
            {formToggler === 'login' ? <LogForm>
                <FormTitle>
                    <p>Log in</p>
                </FormTitle>
                <ValidationTextFields />
                <ToggleToRegistration onClick={() => onSetFormToggler('registration')}>
                    <p>Don’t have an account? Sign Up</p>
                </ToggleToRegistration>
            </LogForm> : null}
        </RegistrationWrapper>
  );
};

export default Registration;