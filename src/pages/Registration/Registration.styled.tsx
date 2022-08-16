import styled from 'styled-components';
import { Colors, device } from '../../styles/constansts';

export const RegistrationWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const FormTitle = styled.div`
    padding-top: 62px;
    padding-left: 211px;
    font-weight: 500;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 0.015em;
    color: ${Colors.BLACK}
`;

export const Form = styled.div`
    width: auto;
    max-width: 510px;
    height: auto;
    margin-top: 11.5%;
    margin-left: 37.5%;
    background: ${Colors.WHITE};
    border-radius: 8px;

    form {
        margin-top: 14px;
        padding-left: 86px;
        padding-right: 86px;
        width: auto;
        gap: 24px;
    }

    .MuiFormControl-root {
        width: 339px;
        height: 60px;
        margin-top: 24px;
    }

    input {
        padding: 10px 0 10px 23px;
        border: 2px solid ${Colors.GRAY};
        border-radius: 4px;
    }

    input:active {
        border-color: ${Colors.GREEN};
    }

    button {
        padding: 3px 93px;
        margin-top: 35px;
        margin-left: 125px;
        font-weight: 500;
        font-size: 20px;
        line-height: 40px;
        letter-spacing: 0.015em;
        color: ${Colors.WHITE};
        box-shadow: 2px 4px 10px rgba(0, 186, 137, 0.5);
        border-radius: 15px;
        background-color: ${Colors.GRADIENT};
    }
`;

export const ForgetPassword = styled.div`
    padding-left: 86px;
    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 40px;
        letter-spacing: 0.015em;
        color: ${Colors.MIDDLE_BLACK}
    }
`;
