import styled from 'styled-components';
import { Colors } from '../../styles/constansts';
import next from '../../assets/next.svg';
import previous from '../../assets/prev.svg';

export const PaginationWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
  cursor: pointer;
`;
export const PreviousButton =  styled(PaginationButton)`
  background: url('${previous}');
  background-position: center;
`;
export const NextButton =  styled(PaginationButton)`
  background: url('${next}');
  background-position: center;
`;