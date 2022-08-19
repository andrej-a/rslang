import { Box } from '@mui/material';
import React from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import FormTitle from '../../../components/FormTitle/FormTitle';
import { Values } from '../../../styles/constansts';
import { Form, StyledButton, StyledTextField, ToggleToAnotherForm } from '../LoginForm/LoginForm.styled';
interface IRegistrationForm {
  onSetFormToggler: (value: string) => void;
}
const RegistrationForm = ({ onSetFormToggler }: IRegistrationForm) => {
  const { REGISTRATION_FORM_TITLE } = Values;
  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data: FieldValues) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <Form>
      <FormTitle
        TITLE={REGISTRATION_FORM_TITLE}
      />

      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
        <StyledTextField
            error={!!errors.name}
            className={isValid ? 'valid' : ''}
            id="name"
            placeholder='Name'
            {...register('name', {
              minLength: {
                value: 2,
                message: 'Name should be 2 chars minimum.',
              },
              required: true,
            })}
          />
          <p className='errorMessage'>{errors.name && (errors?.name?.message as string || 'Name is required field')}</p>
          <StyledTextField
            error={!!errors.email}
            className={isValid ? 'valid' : ''}
            id="email"
            placeholder='Email'
            {...register('email', {
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Email should have correct format',
              },
              required: true,
            })}
          />
          <p className='errorMessage'>{errors.email && (errors?.email?.message as string || 'Email is required field')}</p>
          <StyledTextField
            error={!!errors.password}
            className={isValid ? 'valid' : ''}
            type='password'
            id="password"
            placeholder="Password"
            {...register('password', {
              required: true,
              minLength: {
                value: 8,
                message: 'Password is too short - should be 8 chars minimum.',
              },
            })}
          />
          <p className='errorMessage'>{errors.password && (errors?.password?.message as string || 'Password is required field')}</p>
        </div>
        <StyledButton disabled={!isValid} type='submit' variant="contained">Sign Up</StyledButton>
      </Box>
      <ToggleToAnotherForm onClick={() => onSetFormToggler('login')}>
        <p>Do you have an account? Sign In</p>
      </ToggleToAnotherForm>
    </Form>
  );
};

export default RegistrationForm;