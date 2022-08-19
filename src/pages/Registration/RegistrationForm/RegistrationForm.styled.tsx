import { Button } from '@mui/material';
import styled from 'styled-components';
import { Colors } from '../../../styles/constansts';


export const StyledUploadAvatarButton = styled(Button)`
 &.MuiButton-contained {
    margin-top: 39px;
    border: 3px solid ${Colors.GREEN};
    border-radius: 15px;
    background: transparent;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    letter-spacing: 0.015em;
    color: ${Colors.BLACK};
    transition: all .5s ease;
 }
 &.MuiButton-contained:hover {
    border-color: transparent;
    background: ${Colors.GRADIENT};
    color: ${Colors.WHITE};
 }
`;
