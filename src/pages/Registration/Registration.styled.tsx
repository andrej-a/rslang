import { Button } from '@mui/material';
import styled from 'styled-components';
import { Colors, device, WindowSizes } from '../../styles/constansts';

export const RegistrationWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LogForm = styled.div`
    width: auto;
    max-width: 510px;
    height: auto;
    background: ${Colors.WHITE};
    border-radius: 8px;
    margin-left: 105px;

    @media (min-height: 1100px) {
        margin-bottom: 320px;
    }

    @media (max-width: ${WindowSizes.laptop}) {
        margin-bottom: 0;
        margin-left: 0;
    }

    @media (max-width: 560px) {
        width: 290px;
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    form {
        margin-top: 14px;
        padding-left: 86px;
        padding-right: 86px;
        width: auto;
        @media (max-width: 560px) {
            padding-left: 0;
            padding-right: 0;
        }
    }

    .MuiFormControl-root {
        width: 339px;
        height: 60px;
        margin-top: 24px;
        @media (max-width: 560px) {
            width: 250px;
        }
    }

    .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
        padding: 15px 0 15px 23px;
        border: 2px solid ${Colors.GRAY};
        border-radius: 4px;
    }

    .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input input:focus {
        outline:0;outline-offset:0
    }

    .errorMessage {
        margin-top: 5px;
        color: ${Colors.RED}
    }
`;

export const FormTitle = styled.div`
    padding-top: 62px;
    padding-left: 211px;
    font-weight: 500;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 0.015em;
    color: ${Colors.BLACK};
    @media (max-width: 560px) {
        padding-left: 0;
    }
`;


export const ForgetPassword = styled.div`
    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 40px;
        letter-spacing: 0.015em;
        color: ${Colors.MIDDLE_BLACK}
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
        @media (max-width: 560px) {
            margin-left: 0;
            padding: 3px 75px;
            width: 100%;
        }
    
    }
    &.MuiButton-containedPrimary:hover {
        background-color: ${Colors.GREEN};
    }
    &.MuiButton-containedPrimary:disabled {
        background-color: ${Colors.DISABLED};
    }
`;

export const ToggleToRegistration = styled.div`
    margin-top: 14px;
    margin-left: 118px;
    padding-bottom: 63px;
    cursor: pointer;
    p {
        color: ${Colors.FORM_BLUE};
        font-weight: 400;
        font-size: 18px;
        line-height: 40px;
        letter-spacing: 0.015em;
    }
    @media (max-width: 560px) {
        margin-left: 0;
        p {
            font-size: 16px;
        }
    }
`;
