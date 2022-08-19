import styled from 'styled-components';
import { Colors } from '../../styles/constansts';
import Audio from '../../assets/Audio.svg';
import LevelHint from '../../assets/levelHint.svg';

export const TextBookWrapper = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
	margin: 100px auto;
	gap: 97px;
`;
export const GameBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 29px;
`;
export const LevelButtonStyled = styled.button.attrs((props: { levelColor: string, title: string, state: boolean }) => props)`
  height: 52px;
  width: 52px;
  border-radius: 4px;
  position:relative;
  background-color: ${props => props.state ? props.levelColor : Colors.WHITE}; 
  color: ${props => props.state ? Colors.WHITE : Colors.BLACK}; 
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;
  &:before {
		display: block;
    position: absolute;
    top: 4px;
    right: 4px;
		content: '';
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background-color: ${props => props.levelColor};
	}
  &:after{
    background: url('${LevelHint}') no-repeat; 
    padding: 5px 0;
    position: absolute;
    top: -37px;
    left: -7px;
    text-align: center;
    width: 122px;
    height: 37px;
    z-index: 1;
    visibility: hidden;
    font-size: 14px;
    line-height: 16px;
		content: '${props => props.title}';
  }
  &:hover:after{    
    visibility: visible;
  }
  
`;
export const LevelButtonsWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  align-items: center;  
  gap: 18px;
`;
export const WordButtonStyled = styled.button.attrs((props: { state: boolean }) => props)`
  width: 220px;
  height: 50px;
  font-weight: ${props => props.state ? '600' : '400'};;
  font-size: 22px;
  line-height: 35px;
  letter-spacing: 0.015em;
  border: 3px solid ${Colors.WHITE};
  border-radius: 4px;
  background-color: ${props => props.state ? 'transparent' : Colors.WHITE}; 
  cursor: pointer;
  &:hover{
    background-color: transparent;
    color: ${Colors.WHITE};
  }
  color: ${props => props.state ? Colors.WHITE : Colors.BLACK}; 
`;
export const WordButtonsWrapper = styled.div`
  flex-wrap: wrap;
  max-width: 455px;
  display: flex;
  justify-content: center;
  align-items: center;  
  gap: 12px;
`;

export const WordCardWrapper = styled.div`
  width: 455px;
  min-height: 586px;
	height: fit-content;
  border-radius: 9px;
  background-color: ${Colors.WHITE}; 

`;

export const WordCardImage = styled.div.attrs((props: { imgPath: string }) => props)`
  width: 100%;
  height: 278px;
  border-radius: 9px;
  background: url('${props => props.imgPath}');
  background-size: 100%;
`;

export const AudioButton = styled.button`
  margin-top: 30px;
  width: 38px;
  height: 38px;
  background: url('${Audio}');
  cursor: pointer;
`;

export const CardTitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	height: 96px;
	padding: 0 39px 0;
`;
export const WordTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.015em;
  color: #2F2F2F;
	display: inline;
`;

export const WordTranscription = styled.h4`
	font-weight: 400;
	font-size: 22px;
  line-height: 17px;
	letter-spacing: 0.015em;
	color: #2F2F2F;
	display: inline;
	padding: 27px 0 0 12px;
`;

export const WordTranslation = styled.h4`
	font-weight: 400;
	font-size: 24px;
	line-height: 22px;
	letter-spacing: 0.015em;
	color: #898989;
	display: inline;
`;
export const Line = styled.hr.attrs((props: { color: string }) => props)`
	width: 360px;
	height: 3px;
	margin: 0 47px 0 32px;
	padding-left: 15px;
	color: ${props => props.color};
`;
export const WordDescritionBlock = styled.div`
	margin: 19px 37px;
`;
export const WordDescritionBlockTitle = styled.h3`
	font-weight: 500;
	font-size: 20px;
	line-height: 20px;
`;
export const WordDescritionBlockExample = styled.h3`
	font-size: 16px;
	line-height: 22px;
	letter-spacing: 0.015em;
	color: #222222;
	padding: 10px 0 4px;
`;
export const WordDescritionBlockTranslation = styled.h3`
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	letter-spacing: 0.015em;
	color: #222222;
`;
