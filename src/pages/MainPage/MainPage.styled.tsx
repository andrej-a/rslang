import styled from 'styled-components';

import { Colors } from '../../styles/constansts';
import WaveImage from '../../assets/wave.png';
import WaveImageReverse from '../../assets/waveReverse.png';
import { GreenButton } from '../../components/Buttons.styled';

export const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${WaveImage});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position-y: bottom;
`;
export const BannerImage = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    width: 100%;
  }
  @media (max-width: 1040px) {
    img {
      width: 600px;
    }
  }
  @media (max-width: 768px) {
    justify-content: center;
    img {
      width: 300px;
    }
  }
`;
export const BannerTextBlock = styled.div`
  width: 774px;
  display: flex;
  margin-top: 120px;
  margin-bottom: 220px;
  margin-left: 140px;
  flex-direction: column;
  color: ${Colors.WHITE};
  @media (max-width: 1040px) {
    width: 640px;
    margin-bottom: 0px;
    margin-left: 0px;
  }
  @media (max-width: 768px) {
    width: 400px;
    margin: 0 auto;
    margin-top: 160px;
    h1 {
      font-size: 40px;
      line-height: 60px;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    padding: 0 40px;
    h3 {
      font-size: 20px;
      line-height: 30px;
    }
    h1 {
      font-size: 30px;
      line-height: 38px;
    }
  }
`;
export const ButtonBlock = styled.div`
  display: flex;
  margin-top: 22px;
  gap: 34px;
  p {
    color: ${Colors.WHITE};
    font-weight: 500;
    line-height: 24px;
    transition: 0.2s;
  }
  a {
    display: flex;
    align-items: center;
    gap: 14px;
    img {
      width: auto;
      position: relative;
      top: 0;
      right: 0;
    }
    &:hover {
      p {
        border-bottom: solid ${Colors.WHITE};
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
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
  cursor: pointer;
  &:hover {
    color: ${Colors.GREEN};
  }
`;

export const PlayVideoButton = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${Colors.WHITE};
  cursor: pointer;
  &:hover {
    color: ${Colors.WHITE};
  }
  img {
    position: initial;
  }
  &:hover {
    box-shadow: 2px 4px 10px rgba(0, 186, 137, 0.5);
  }
`;
export const AboutApp = styled.div`
  margin-top: -3px;
  display: flex;
  flex-direction: column;
  color: ${Colors.BLACK};
  align-items: center;
  width: 100wh;
  background-color: ${Colors.WHITE};
  background-image: url(${WaveImage});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position-y: bottom;
  h2 {
    margin-top: 120px;
    margin-bottom: 48px;
  }
  @media (max-width: 768px) {
  }
`;

export const AboutAppItemsWrapper = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 64px;
  }
`;
export const AboutAppItemWrapper = styled.div`
  align-items: center;
  justify-content: center;
  gap: 10%;
  display: flex;
  width: 800px;
  flex-direction: ${(props) => props.color};
  @media (min-width: 1180px) {
    width: auto;
  }
  @media (max-width: 1024px) {
    width: auto;
    gap: 20px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
export const AboutAppItemImage = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1180px) {
    img {
      width: 360px;
    }
  }
  @media (max-width: 500px) {
    img {
      width: 200px;
    }
  }
`;
export const AboutAppItemTextBlock = styled.div`
  width: 576px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    align-items: center;
    padding: 0 60px;
  }
`;
export const AboutAppItemTitle = styled.p`
  font-weight: 500;
  font-size: 30px;
  line-height: 40px;
  margin-bottom: 20px;
  @media (max-width: 700px) {
    font-size: 22px;
  }
`;
export const AboutAppItemText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 36px;
`;
export const AboutAppItemButton = styled(GreenButton)``;
export const Intro = styled.div`
  margin-top: -3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.WHITE};
  h2 {
    margin-top: 80px;
    margin-bottom: 48px;
  }
  @media (max-width: 768px) {
    h2 {
      margin-bottom: 20px;
    }
  }
`;
export const VideoPlayer = styled.div`
  width: 600px;
  height: 400px;
  background-color: black;
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 320px;
    height: 180px;
  }
`;
export const OurTeam = styled.div`
  margin-top: -3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${WaveImageReverse});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position-y: top;
  h2{
    margin-top: 240px;
    margin-bottom: 48px;
    color: ${Colors.WHITE};
    text-align: center;
  }
  @media (max-width: 1280px){
    h2{
      margin-top: 160px;
    }
  }
  @media (max-width: 1024px){
    h2{
      margin-top: 140px;
    }
  }
`;
export const DivContainerMembers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
  margin-bottom: 20px;
`;
export const MemberWrapper = styled.div`
  align-items: center;
  display: flex;
  padding: 4%;
  background: ${Colors.WHITE};
  box-shadow: 0px 4px 13px rgba(61, 61, 61, 0.13);
  border-radius: 18px;
  width: 800px;
  gap: 20px;
  @media (max-width: 1024px) {
    width: 640px;
  }
  @media (max-width: 768px) {
    width: 400px;
    flex-direction: column;
  }
  @media (max-width: 440px) {
    width: 320px;
  }
`;
export const MemberImage = styled.div`
  width: 300px;
  height: 300px;
  align-items: center;
  display: flex;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 18px;
  }
`;
export const MemberTextBlock = styled.div`
  width: 72%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const BlockName = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 10px;
  p {
    font-weight: 500;
    font-size: 20px;
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
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  margin-bottom: 22px;
`;
export const BlockProjectTitle = styled(BlockRole)`
  background-color: ${Colors.LIGHT_GREEN};
  margin-bottom: 10px;
  width: 130px;
`;

export const BlockProjectWork = styled(BlockAboutMember)`
  margin-bottom: 0px;
`;
export const ContentWrapper = styled.div`
  padding-left: 94px;
  margin: 0 auto;
  h2 {
    text-align: center;
  }
  @media (max-width: 700px) {
    padding-left: 0px;
    width: 100%;
    h2 {
      font-size: 28px;
    }
  }
`;
export const ContentWrapperBanner = styled(ContentWrapper)`
  padding-left: 94px;
  display: flex;
  @media (max-width: 1040px) {
    flex-direction: column;
  }
  @media (max-width: 700px) {
    padding-left: 0px;
  }
`;
