import styled from 'styled-components';
import { Colors, device } from '../../styles/constansts';
import next from '../../assets/next.svg';
import previous from '../../assets/prev.svg';
import WaveImage from '../../assets/wave.png';
import WaveImageReverse from '../../assets/waveReverse.png';
import LevelHint from '../../assets/levelHint.svg';
import { GreenButton } from '../../components/Buttons.styled';

export const PaginationWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;
export const PaginationButton = styled.button.attrs((props: { state: boolean }) => props)`
  height: 44px;
  width: 44px;
  display: inline-block;
  background-color: ${props => props.state ? Colors.WHITE : 'rgba(255, 255, 255, 0.4)'};
  color: ${props => props.state ? Colors.BLACK : Colors.WHITE};
  font-weight: 500;
  font-size: 22px;
  line-height: 35px;
  border-radius: 50%;
`;
export const PreviousButton =  styled(PaginationButton)`
  background: url('${previous}');
  background-position: center;
`;
export const NextButton =  styled(PaginationButton)`
  background: url('${next}');
  background-position: center;
`;