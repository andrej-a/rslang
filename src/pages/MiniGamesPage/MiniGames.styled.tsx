import { Button } from '@mui/material';
import styled from 'styled-components';
import { Colors } from '../../styles/constansts';
const { WHITE, PLAY_BUTTON_GRADIENT } = Colors;

interface IImageWrapperProps {
  inputColor: string;
}

  
export const MiniGamesWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 126px;
    padding-left: 123px;
`;

export const Card = styled.div`
    width: auto;
    min-width: 280px;
    max-width: 404px;
    min-height: 150px;
    height: auto;
    margin-top: 200px;
    background: ${WHITE};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const ImageWrapper = styled.div`
    width: 111px;
    height: 111px;
    margin-top: 30px;
    border-radius: 100%;
    background: ${(props: IImageWrapperProps) => props.inputColor || WHITE};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Description = styled.div`
    margin-top: 17px;
    padding: 0 46px;

    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        text-align: center;
        letter-spacing: 0.015em;
    }
`;

export const StyledPlayButton = styled(Button)`
    &.MuiButton-contained {
        margin-top: 36px;
        margin-bottom: 47px;
        padding: 6px 73px;
        background: ${PLAY_BUTTON_GRADIENT};
        border-radius: 15px;
        transition: all .3s ease;
    }
    &.MuiButton-contained:hover {
        box-shadow: 2px 4px 10px rgba(0, 186, 137, 0.5);
    }
`;