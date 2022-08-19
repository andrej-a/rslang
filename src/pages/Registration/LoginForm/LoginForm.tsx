import React from 'react';
import Box from '@mui/material/Box';
import { ForgetPassword, Form, StyledButton, StyledTextField, ToggleToAnotherForm } from './LoginForm.styled';
import { useForm, FieldValues } from 'react-hook-form';
import { Values } from '../../../styles/constansts';
import FormTitle from '../../../components/FormTitle/FormTitle';

interface ILoginForm {
  onSetFormToggler: (value: string) => void;
}
const LoginForm = ({ onSetFormToggler }: ILoginForm) => {
  const { LOGIN_FORM_TITLE } = Values;  
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
                TITLE={LOGIN_FORM_TITLE}
            />
            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
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
                <ForgetPassword>
                    <p>Forget password?</p>
                </ForgetPassword>
                <StyledButton disabled={!isValid} type='submit' variant="contained">Sign in</StyledButton>
            </Box>
            <ToggleToAnotherForm onClick={() => onSetFormToggler('registration')}>
                <p>Don’t have an account? Sign Up</p>
            </ToggleToAnotherForm>
        </Form>
  );
};

export default LoginForm;