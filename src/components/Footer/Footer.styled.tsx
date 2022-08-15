import styled from 'styled-components';
import footerBackground from '../../assets/FooterBackground.png'
import { BLACK, GREEN} from '../../styles/constansts'

export const WrapperFooter = styled.div`
  background-image: url(${footerBackground});
  background-size: 100% 100%;
  display: flex;
  padding: 96px 200px 20px 200px;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 18px;
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
    color: ${BLACK}
  }
  a:hover{
    color: ${GREEN}
  }
  `;

export const GitIcon = styled.div`


`;
