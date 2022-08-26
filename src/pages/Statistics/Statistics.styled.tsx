import styled from 'styled-components';
import { Colors, WindowSizes } from '../../styles/constansts';
import audio_play from '../../assets/audio_play.svg';
import LevelHint from '../../assets/levelHint.svg';
import footerBackground from '../../assets/FooterBackground.png';

const { textBookSize } = WindowSizes;

export const StatisticsWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  justify-content: center;
  margin: 116px 94px 93px auto;
`;
export const StatisticsTitle = styled.h2.attrs((props: { color: string }) => props)`
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  color: ${props => props.color};
  text-align: center;
`;
export const StatisticsSubtitle = styled.h3`
  font-weight: 500;
  font-size: 22px;
  line-height: 24px;
  letter-spacing: 0.015em;
  color: ${Colors.WHITE};
  text-align: center;
`;
export const StatisticsCommonWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-template-columns: repeat(2, min-content);
  width: min-content;
  grid-gap: 64px 49px;
  margin-top: 68px;
  margin-left: -23px;

  @media (max-width: ${textBookSize}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const StatisticsCommonUpperElement = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  & div{
    margin-left: 19px;
    font-weight: 500;
    font-size: 120px;
    line-height: 120px;
    letter-spacing: 0.015em;
    color: ${Colors.WHITE};
  }
  & h4{
   font-weight: 500;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 0.015em;
  color: ${Colors.WHITE}; 
  }
`;
export const StatisticsCommonCard = styled.div`
  background-color: ${Colors.WHITE};
  border-radius: 8px;
  width: 389px;
  height: 184px;
  & h4{
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 0.015em;
    color: ${Colors.MIDDLE_BLACK};
    margin: 18px 0 0 38px;
  }
  & div.wrapper{
    display: flex;
    gap: 0 65px;
    align-items: center;
    padding-left: 38px;
    img{
      width: 54.81px;
      height: 54.81px;
    }
    table{
      font-weight: 500;
      font-size: 22px;
      line-height: 25px;
      letter-spacing: 0.015em;
      border-collapse: separate;
      margin: 0 -25px;
      border-spacing: 25px 12px;
    }

  }

`;
export const ImageWrapper = styled.div`
    min-width: 78px;
    height: 78px;
    margin-top: -12px;
    border-radius: 100%;
    background: ${(props: { inputColor: string }) => props.inputColor || Colors.WHITE};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StatisticsWaveBlock = styled.div`
  background-image: url(${footerBackground});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position-y: top;
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
    align-items: center;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    padding: 50px 0 10px 0;
  }
`;
