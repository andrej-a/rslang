import styled from 'styled-components';
import { Colors } from '../../styles/constansts';

export const FormTitleStyled = styled.div`
    padding-top: 62px;
    font-weight: 500;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 0.015em;
    color: ${Colors.BLACK};
    @media (max-width: 560px) {
        padding-left: 0;
    }
`;
