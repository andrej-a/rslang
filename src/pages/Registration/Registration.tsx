import React, { useState } from 'react';
import { RegistrationWrapper } from './LoginForm/LoginForm.styled';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';

const Registration = () => {
  const [formToggler, setFormToggler] = useState('registration');
  const onSetFormToggler = (value: string) => {
    setFormToggler(value);
  };
  return (
        <RegistrationWrapper>
            {formToggler === 'login' ? <LoginForm 
            onSetFormToggler={onSetFormToggler}
            /> : 
            <RegistrationForm 
            onSetFormToggler={onSetFormToggler}
            />}
        </RegistrationWrapper>
  );
};

export default Registration;