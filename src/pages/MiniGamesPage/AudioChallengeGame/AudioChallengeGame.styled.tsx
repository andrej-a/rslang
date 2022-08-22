import styled from 'styled-components';

export const AudioChallengeWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MainBlock = styled.div`
    min-width: 280px;
    min-height: 400px;
    width: 100%;
    height: auto;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InnerBlock = styled.div`
    width: 80%;
    min-height: 100%;
    height: auto;
    background: blue;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ButtonBlock = styled.div`
    width: 50%;
    height: 100%;
    background: orange;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
`;
export const PictureBlock = styled.div`
    width: 50%;
    height: 100%;
    background: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AnswerButton = styled.button`
    padding-left: 53px;
    padding-right: 190px;
    padding-top: 9px;
    padding-bottom: 9px;
    background: linear-gradient(1.8deg, #FEFEFE -43.56%, #E6E6E6 123.62%);
    box-shadow: 3px 4px 11px rgba(0, 0, 0, 0.08);
    border-radius: 15px;
    cursor: pointer;
    font-weight: 500;
    font-size: 20px;
    line-height: 40px;
    letter-spacing: 0.015em;
    color: #000;
`;

export const SkipQuestion = styled(AnswerButton)`
    padding: 9px 108px;
    background: #FFFFFF;
    border-radius: 38px;
`;