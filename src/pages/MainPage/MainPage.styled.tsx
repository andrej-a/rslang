import styled from 'styled-components';
import { Colors, device } from '../../styles/constansts';
import WaveImage from '../../assets/wave.png';
import WaveImageReverse from '../../assets/waveReverse.png';
import { GreenButton } from '../../components/Buttons.styled';

export const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // padding: 0px 94px 0px 94px;
  justufy-content: center;
`;

export const Banner = styled.div`
  height: 910px;
  background-image: url(${WaveImage});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position-y: bottom;
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
  color: ${Colors.WHITE};
`;
export const ButtonBlock = styled.div`
  display:flex;
  margin-top: 22px;
  gap: 34px;
  p {
    color: ${Colors.WHITE};
    font-weight: 500;
    border-bottom: solid ${Colors.WHITE};
    line-height: 24px;
  }
  a{ 
    display: flex;
    align-items:center;
    gap: 14px;
    
  }
`;
export const JoinButton = styled.button`
    background-color: ${Colors.WHITE};
    font-weight: 500;
    border-radius: 32px;
    color: ${Colors.BLACK};
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
  background-color: ${Colors.WHITE};
  img{
    position: initial;
  }
`;

export const AboutApp = styled.div`
  padding: 0 178px 0 200px;
  display: flex;
  flex-direction: column;
  color:${Colors.BLACK};
  align-items: center;
  width: 100wh;
  background-color: ${Colors.WHITE};
  background-image: url(${WaveImage});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position-y: bottom;
  h2{
    margin-top: 54px;
  }
`;


export const AboutAppItemWrapper = styled.div`
  align-item: center;
  justify-content: center;
  gap: 135px;
  display: flex;
  height: 458px;
  margin-top: 30px;
  flex-direction: ${(props) => props.color} ;
`;

export const AboutAppItemImage = styled.div`

`;
export const AboutAppItemTextBlock = styled.div`
  width: 576px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
`;
export const AboutAppItemTitle = styled.p`
  font-weight: 500;
  font-size: 30px;
  line-height: 40px;
  margin-bottom: 20px;

`;
export const AboutAppItemText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 36px;
`;

export const AboutAppItemButton = styled(GreenButton)`
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 200px 0 200px;
  background-color: ${Colors.WHITE};
  h2{
    margin-top: 54px;
    margin-bottom: 70px;
  }
`;

export const VideoPlayer = styled.div`
    width: 834px;
    height: 504px;
    background-color: ${Colors.BLACK};
`;

export const OurTeam = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 200px 0 200px;
  align-items: center;
  background-image: url(${WaveImageReverse});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position-y: top;
  h2{
    margin-top: 240px;
    margin-bottom: 48px;
    color ${Colors.WHITE};
    text-align: center;
  }

`;


export const MemberWrapper = styled.div`
  display: flex;
  padding: 60px 60px 60px 40px;
  background: ${Colors.WHITE};
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
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }
`;
export const BlockRole = styled.button`
  padding: 0 22px 0 22px;
  border-radius: 30px;
  color: ${Colors.BLACK};
  background-color: ${Colors.GREEN};
  margin-bottom: 14px;
  width: 262px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
`;
export const BlockAboutMember = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  margin-bottom: 22px;
  font-weight: 500;
`;
export const BlockProjectTitle = styled(BlockRole)`
  background-color: ${Colors.LIGHT_GREEN};
  margin-bottom: 10px;
  width: 130px;
`;

export const BlockProjectWork = styled(BlockAboutMember)`
  margin-bottom: 0px;
`;