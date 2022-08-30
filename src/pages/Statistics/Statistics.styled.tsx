import styled from 'styled-components';
import { Colors, WindowSizes } from '../../styles/constansts';
import footerBackground from '../../assets/FooterBackground.png';
import Plot from 'react-plotly.js';
import { WrapperFooter } from '../../components/Footer/Footer.styled';
import Ellipse from '../../assets/ellipse.svg';
import EllipseGreen from '../../assets/ellipseGreen.svg';


const { textBookSize, mobile, tablet } = WindowSizes;

export const StatisticsWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  justify-content: center;
  margin: 116px auto 93px auto;
  @media (max-width: ${textBookSize}px) {
    position: relative;
    right: 0;
    width: calc(100% - 117px);
    &.upper{      
    left: 93px;
    margin: 116px auto 93px 0;
    }
  }
  @media (max-width: ${tablet}px) {
    position: relative;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: calc(100% - 117px);
    &.upper{      
    left: 0;
    margin: 116px auto;
    }
   
  }
`;
export const WaveBlock = styled(WrapperFooter)`
  display: block;
  background-position-y: top;
  padding-left: 94px;
  padding-right: 0;
  margin: 0 auto -146px auto;
  @media (max-width: ${tablet}px) {
    margin: 0 auto;
    padding-left: 0 ;
   
  }
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
    grid-gap: 49px;
    margin-left: 0;
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
export const RadioWrapper = styled.div`
display: flex;
gap: 52px;
margin-top: 44px;

`;
export const Radio = styled.div`
display: flex;
gap: 21px;
justify-content: center;
align-items: center;
transform: translateY(-50%);

input{
  height: 19px;
  width: 19px;
cursor: pointer;
  &:checked + label{
    color: ${Colors.LIGHT_GREEN};
  }
  &:checked{
    &::before{
    content: '';
    border: 2px solid ${Colors.LIGHT_GREEN};
    background-image: url(${EllipseGreen});
  }

  }
  &::before{
    content: '';
    min-width: 19px;
    min-height: 19px;
    position: absolute;
    border: 2px solid ${Colors.BLACK};
    background-image: url(${Ellipse});
    background-repeat: no-repeat;
    background-position: 20%;
    border-radius: 50%;
    padding: 0;
    margin: 0;
  }
}
label{
  font-weight: 500;
  font-size: 22px;
  line-height: 24px;
}
`;

export const StyledPlot = styled(Plot)`
  margin: 0;
  padding: 0;
  position: relative;
  min-height: clamp(100px, 500px, 500px);
  min-width: clamp(200px, 918px, 80vw);
  .xtick text{
    font-size: min(22px, 2vmin) !important;
    margin-top: 35px;
  }
  &::before{
    content: 'period';
    position: absolute;
    top: 100%;
    left: 50%;

letter-spacing: 0.015em;
.user-select-none, .svg-container{
  width: 100%;
  height: 100%;
}
  }
  &::after{
    content: 'number learned words';
    position: absolute;
    top: 50%;
    right: 100%;
    transform: rotate(-90deg);
    width: max-content;
    vertical-align: bottom;
    margin-right: -94px;
  }
  &::after, &::before{
    
    font-weight: 500;
    font-size: 22px;
    line-height: 24px;
  }
`;