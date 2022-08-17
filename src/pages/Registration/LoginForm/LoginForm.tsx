import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from 'styled-components';
import { Formtheme } from '../../../styles/theme';
import { ForgetPassword, StyledButton } from '../Registration.styled';
import { useForm, FieldValues } from 'react-hook-form';
export default function ValidationTextFields() {
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
    <ThemeProvider theme={Formtheme}>
        <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        >
        <div>
            <TextField
            style={{ color: `${isValid ? 'green' : 'black'}` }}
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
            <TextField
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
        <ForgetPassword>
            <p>Forget password?</p>
        </ForgetPassword>
        <StyledButton disabled={!isValid} type='submit' variant="contained">Sign in</StyledButton>
        </Box>
    </ThemeProvider> 
  );
}