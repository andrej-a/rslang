import React, { useState } from 'react';
import { RegistrationWrapper } from './LoginForm/LoginForm.styled';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import { Values } from '../../styles/constansts';

const Registration = () => {
  const { LOGIN_FORM_STATE } = Values;
  const [formToggler, setFormToggler] = useState<string>(LOGIN_FORM_STATE);
  const onSetFormToggler = (value: string) => {
    setFormToggler(value);
  };
  return (
    <RegistrationWrapper>
      {formToggler === LOGIN_FORM_STATE ? (
        <LoginForm onSetFormToggler={onSetFormToggler} />
      ) : (
        <RegistrationForm onSetFormToggler={onSetFormToggler} />
      )}
    </RegistrationWrapper>
  );
};

export default Registration;
