import React from 'react';
import { Box } from '@mui/material';
import { useForm, FieldValues } from 'react-hook-form';
import { ThemeProvider } from '@mui/system';

import { mailRegularCheeker, Values } from '../../../styles/constansts';
import { theme } from '../../../styles/theme';
import {
  Form,
  StyledButton,
  StyledTextField,
  ToggleToAnotherForm,
} from '../LoginForm/LoginForm.styled';

import FormTitle from '../../../components/FormTitle/FormTitle';

interface IRegistrationForm {
  onSetFormToggler: (value: string) => void;
}
const RegistrationForm = ({ onSetFormToggler }: IRegistrationForm) => {
  const {
    REGISTRATION_FORM_TITLE,
    LOGIN_FORM_STATE,
    EMAIL_ERROR_MESSAGE,
    EMAIL_FORMAT_ERROR_MESSAGE,
    EMAIL_PLACEHOLDER,
    PASSWORD_LENGTH_ERROR_MESSAGE,
    PASSWORD_ERROR_MESSAGE,
    PASSWORD_PLACEHOLDER,
    NAME_PLACEHOLDER,
    NAME_LENGTH_ERROR_MESSAGE,
    NAME_ERROR_MESSAGE,
  } = Values;

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data: FieldValues) => {
    alert(JSON.stringify(data)); //IN DATA ARE AN INFORMATION FROM INPUTS
    reset();
  };

  return (
    <Form>
      <FormTitle TITLE={REGISTRATION_FORM_TITLE} />
      <ThemeProvider theme={theme}>
        <Box component="form" noValidate autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <StyledTextField
              sx={[
                { '&:focus-within': { outline: 'none', borderColor: theme.palette.success.main } },
              ]}
              error={!!errors.name}
              className={isValid ? 'valid' : ''}
              id="name"
              placeholder={NAME_PLACEHOLDER}
              {...register('name', {
                minLength: {
                  value: 2,
                  message: NAME_LENGTH_ERROR_MESSAGE,
                },
                required: true,
              })}
            />
            <p className="errorMessage">
              {errors.name && ((errors?.name?.message as string) || NAME_ERROR_MESSAGE)}
            </p>
            <StyledTextField
              sx={[
                { '&:focus-within': { outline: 'none', borderColor: theme.palette.success.main } },
              ]}
              error={!!errors.email}
              className={isValid ? 'valid' : ''}
              id="email"
              placeholder={EMAIL_PLACEHOLDER}
              {...register('email', {
                pattern: {
                  value: mailRegularCheeker,
                  message: EMAIL_FORMAT_ERROR_MESSAGE,
                },
                required: true,
              })}
            />
            <p className="errorMessage">
              {errors.email && ((errors?.email?.message as string) || EMAIL_ERROR_MESSAGE)}
            </p>
            <StyledTextField
              sx={[
                { '&:focus-within': { outline: 'none', borderColor: theme.palette.success.main } },
              ]}
              error={!!errors.password}
              className={isValid ? 'valid' : ''}
              type="password"
              id="password"
              placeholder={PASSWORD_PLACEHOLDER}
              {...register('password', {
                required: true,
                minLength: {
                  value: 8,
                  message: PASSWORD_LENGTH_ERROR_MESSAGE,
                },
              })}
            />
            <p className="errorMessage">
              {errors.password && ((errors?.password?.message as string) || PASSWORD_ERROR_MESSAGE)}
            </p>
          </div>
          <StyledButton disabled={!isValid} type="submit" variant="contained">
            Sign Up
          </StyledButton>
        </Box>
      </ThemeProvider>
      <ToggleToAnotherForm onClick={() => onSetFormToggler(LOGIN_FORM_STATE)}>
        <p>Do you have an account? Sign In</p>
      </ToggleToAnotherForm>
    </Form>
  );
};

export default RegistrationForm;
