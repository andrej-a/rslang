import styled from 'styled-components';

import { Colors } from '../styles/constansts';

export const GreenButton = styled.button`
  width: 261px;
  height: 46px;
  color: ${Colors.WHITE};
  font-weight: 500;
  background: linear-gradient(127.86deg, ${Colors.LIGHT_GREEN}, ${Colors.GREEN} 110.49%);
  border-radius: 15px;
  transition: 0.3s;
  &:hover {
    box-shadow: 2px 4px 10px rgba(0, 186, 137, 0.5);
  }
`;
