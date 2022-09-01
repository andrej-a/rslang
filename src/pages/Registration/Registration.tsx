import React, { useContext, useState } from 'react';
import { RegistrationWrapper } from './LoginForm/LoginForm.styled';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import { Values } from '../../styles/constansts';
import { ApplicationContext } from '../../components/Context/ApplicationContext';

const Registration = () => {
  const { LOGIN_FORM_STATE } = Values;
  const { formToggler } = useContext(ApplicationContext);
  return (
    <RegistrationWrapper>
      {formToggler === LOGIN_FORM_STATE ? <LoginForm /> : <RegistrationForm />}
    </RegistrationWrapper>
  );
};

export default Registration;
