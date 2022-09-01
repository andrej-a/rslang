import { Button, TextField } from '@mui/material';
import styled from 'styled-components';

import { Colors, WindowSizes } from '../../../styles/constansts';
const { tablet } = WindowSizes;

export const RegistrationWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${tablet}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Form = styled.div`
  width: auto;
  max-width: 100%;
  min-width: 280px;
  height: auto;
  background: ${Colors.WHITE};
  border-radius: 8px;
  margin-left: 105px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${tablet}px) {
    margin-left: 0;
    width: 60%;
    margin-top: 60px;
  }

  .MuiBox-root {
    margin-top: 14px;
    padding-left: 86px;
    padding-right: 86px;
    width: 100%;

    .spinner {
      height: 15px;
      margin-left: 45%;
    }

    @media (max-width: ${tablet}px) {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  .MuiFormControl-root {
    width: 339px;
    height: 60px;
    margin-top: 24px;

    @media (max-width: ${tablet}px) {
      width: 100%;
    }
  }

  .errorMessage {
    margin-top: 5px;
    color: ${Colors.RED};
  }
`;

export const StyledTextField = styled(TextField)`
  &.MuiTextField-root {
    input {
      padding: 15px 0 15px 23px;
      border: 2px solid ${Colors.GRAY};
      border-radius: 4px;
    }

    &.valid input {
      color: ${Colors.GREEN};
      border: 2px solid ${Colors.GREEN};
    }
  }
`;

export const ForgetPassword = styled.div`
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 40px;
    letter-spacing: 0.015em;
    color: ${Colors.MIDDLE_BLACK};
  }
`;

export const StyledButton = styled(Button)`
  &.MuiButton-containedPrimary {
    padding: 3px 93px;
    margin-top: 32px;
    margin-left: 37px;
    font-weight: 500;
    font-size: 20px;
    line-height: 40px;
    letter-spacing: 0.015em;
    color: ${Colors.WHITE};
    box-shadow: 2px 4px 10px rgba(0, 186, 137, 0.5);
    border-radius: 15px;
    background-color: ${Colors.LIGHT_GREEN};

    @media (max-width: ${tablet}px) {
      margin-left: 0;
      padding: 3px 50px;
      width: 100%;
    }
  }
  &.MuiButton-containedPrimary:hover {
    background-color: ${Colors.GREEN};
  }
  &.MuiButton-containedPrimary:disabled {
    border-color: transparent;
    background-color: ${Colors.DISABLED};
  }
`;

export const ToggleToAnotherForm = styled.div`
  margin-top: 14px;
  padding-bottom: 63px;
  cursor: pointer;
  p {
    color: ${Colors.FORM_BLUE};
    font-weight: 400;
    font-size: 18px;
    line-height: 40px;
    letter-spacing: 0.015em;
  }

  @media (max-width: ${tablet}px) {
    margin-left: 0;
    p {
      font-size: 16px;
    }
  }
`;
