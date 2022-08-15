import styled from 'styled-components';
import { BLACK, GREEN, LIGHT_GREEN, WHITE } from '../../styles/constansts';

export const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 94px 0px 94px;
  justufy-content: center;
`;

export const Banner = styled.div`
  height: 910px;
  img{
    position: absolute;
    top: 234px;
    right: 94px;
  }

`;
export const BannerTextBlock = styled.div`
  width: 774px;
  margin-left: 194px;
  margin-top: 150px;
  display:flex;
  flex-direction:column;
  color: ${WHITE};
`;
export const ButtonBlock = styled.div`
  display:flex;
  margin-top: 22px;
  gap: 34px;
  p {
    color: ${WHITE};
    font-weight: 500;
    border-bottom: solid ${WHITE};
    line-height: 24px;
  }
  a{ 
    display: flex;
    align-items:center;
    gap: 14px;
    
  }
`;
export const JoinButton = styled.button`
    background-color: ${WHITE};
    font-weight: 500;
    border-radius: 32px;
    color: ${BLACK};
    width: 226px;
    height: 50px;
    align-items: center;
  }
`;

export const PlayVideoButton = styled.button`
position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${WHITE};
  img{
    position: initial;
  }
`;

export const AboutApp = styled.div`

`;

export const ItemBlock = styled.div`

`;
export const ItemBlockInfo = styled.div`

`;
export const OurTeam = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 200px 0 200px;

`;


export const MemberWrapper = styled.div`
  display: flex;
  padding: 60px 60px 60px 40px;
  background: ${WHITE};
  box-shadow: 0px 4px 13px rgba(61, 61, 61, 0.13);
  border-radius: 18px;
  margin-bottom: 92px;
  width: 1040px;
  gap: 64px;
`;
export const MemberImage = styled.div`
  width: 300px;
  height: 300px;
  
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 18px;
  }
`;

export const MemberTextBlock = styled.div`
  width:540px;
  display: flex;
  flex-direction: column;

`;
export const BlockName = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 10px;
  p{
    font-weight: 500px;
    font-size: 24px;
    line-height: 30px;
  }
`;
export const BlockRole = styled.button`
  padding: 0 22px 0 22px;
  border-radius: 30px;
  color: ${BLACK};
  background-color: ${GREEN};
  margin-bottom: 14px;
  width: 262px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;
export const BlockAboutMember = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  margin-bottom: 22px;
`;
export const BlockProjectTitle = styled(BlockRole)`
  background-color: ${LIGHT_GREEN};
  margin-bottom: 10px;
`;

export const BlockProjectWork = styled(BlockAboutMember)`
  margin-bottom: 0px;
`;