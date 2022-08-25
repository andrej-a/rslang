import { Button } from '@mui/material';
import styled from 'styled-components';
import { Colors, WindowSizes } from '../../styles/constansts';
const { WHITE, PLAY_BUTTON_GRADIENT } = Colors;
const { laptop, tablet } = WindowSizes;
interface IImageWrapperProps {
  inputColor: string;
}

  
export const MiniGamesWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 10%;
    padding-left: 10%;
    padding-bottom: 100px;

    @media (max-width: ${laptop}px) {
        flex-direction: column;
        align-items: center;
        padding-left: 0;
        padding: 0 20px;
        padding-top: 100px;
        gap: 50px;
    }
`;

export const Card = styled.div`
    width: auto;
    min-width: 280px;
    max-width: 404px;
    min-height: 150px;
    height: auto;
    margin-top: 100px;
    background: ${WHITE};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: ${laptop}px) {
        margin-top: 0px;
    }
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

    @media (max-width: ${tablet}px) {
        padding: 0 20px;
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