import React, { useContext } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import Box from '@mui/material/Box';
import FadeLoader from 'react-spinners/FadeLoader';
import { ForgetPassword, Form, StyledButton, StyledTextField, ToggleToAnotherForm } from './LoginForm.styled';
import { mailRegularCheeker, Values } from '../../../styles/constansts';

import FormTitle from '../../../components/FormTitle/FormTitle';
import { ThemeProvider } from '@mui/system';
import { theme } from '../../../styles/theme';
import { signIn } from '../../../service/Authorization';
import { ISignInInfo } from '../../../service/constants';
import { ApplicationContext } from '../../../components/Context/ApplicationContext';

const LoginForm = () => {
  const { onSetIsAuthorized, onSetUserInformation, onSetFormToggler, onSetIsLoading, isLoading } =
    useContext(ApplicationContext);

  const {
    LOGIN_FORM_TITLE,
    REGISTRATION_FORM_STATE,
    EMAIL_ERROR_MESSAGE,
    EMAIL_FORMAT_ERROR_MESSAGE,
    EMAIL_PLACEHOLDER,
    PASSWORD_LENGTH_ERROR_MESSAGE,
    PASSWORD_ERROR_MESSAGE,
    PASSWORD_PLACEHOLDER,
  } = Values;

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data: FieldValues) => {
    signIn(data as ISignInInfo, onSetIsLoading).then((result) => {
      if (result.userId) {
        const value = { name: result.name, userID: result.userId };
        onSetUserInformation(value);
        localStorage.setItem('userInfo', JSON.stringify(value));
        onSetIsAuthorized(true);
        window.location.assign('/');
      }
    });
    reset();
  };

  return (
    <Form>
      <FormTitle TITLE={LOGIN_FORM_TITLE} />
      <ThemeProvider theme={theme}>
        <Box component="form" noValidate autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <StyledTextField
              sx={[{ '&:focus-within': { outline: 'none', borderColor: theme.palette.success.main } }]}
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
              sx={[{ '&:focus-within': { outline: 'none', borderColor: theme.palette.success.main } }]}
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
          <ForgetPassword>
            <p>Forget password?</p>
          </ForgetPassword>
          {!isLoading ? (
            <StyledButton disabled={!isValid} type="submit" variant="contained">
              Sign in
            </StyledButton>
          ) : (
            <FadeLoader className="spinner" color="#07D6A0" />
          )}
        </Box>
      </ThemeProvider>
      <ToggleToAnotherForm onClick={() => onSetFormToggler(REGISTRATION_FORM_STATE)}>
        <p>Don’t have an account? Sign Up</p>
      </ToggleToAnotherForm>
    </Form>
  );
};

export default LoginForm;
