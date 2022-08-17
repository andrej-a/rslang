import styled from 'styled-components';
import footerBackground from '../../assets/FooterBackground.png';
import { Colors, device } from '../../styles/constansts';

export const WrapperFooter = styled.div`
  background-image: url(${footerBackground});
  background-size: auto 100%;
  background-position-y: bottom;
  display: flex;
  padding: 96px 200px 20px 200px;
  align-items: end;
  justify-content: space-between;
  p {
    font-size: 18px;
  }
  
  @media (max-width: 1024px) {
    padding: 96px 100px 20px 100px;
  }
  @media (max-width: 768px) {
    align-items: start;
    flex-direction: column;
    gap: 20px;
    padding-left: 100px;
  }
`;

export const MembersInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
` ;

export const MemberItem = styled.div`
  display: flex;
  
  align-items: center;
  p {
    font-size: 16px;
    font-weight: 500;
    margin:0;
  }
  a {
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${Colors.BLACK}
  }
  a:hover{
    color: ${Colors.GREEN}
  }
  `;

export const GitIcon = styled.div`


`;
