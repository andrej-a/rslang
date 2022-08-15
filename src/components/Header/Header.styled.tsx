import styled from 'styled-components';
import { WHITE, BLACK } from '../../styles/constansts';

export const WrapperHeader = styled.div`
  display: flex;
  
  heidht: 100vh;
  justify-content: space-between;
`;

export const DivAppNavigation = styled.div`
  width: 94px;
  height: 100vh;
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 26px 30px 26px;
  background-color: ${WHITE};
  color: ${BLACK};
`;

export const UserProfile = styled.div`
  position: absolute;
  right: 94px;
  top: 16px;
  display: flex;
  gap: 18px;
  align-items: center;
  p{
    font-weight: 600;
    line-height: 40px;
  }
`;

export const PageTitle = styled.div`
  z-index: 102;
  color: ${WHITE};
  position: fixed;
  left: 118px;
  top: 20px;
  line-height: 40px;
  font-weight: 600;
  font-size: 30px;
  display: flex;
  gap: 18px;
`;

export const GroupMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;