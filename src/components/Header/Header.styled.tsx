import styled from 'styled-components';
import { Colors } from '../../styles/constansts';
import MenuIcon from '../../assets/menu.svg';
import HomeIcon from '../../assets/home.svg';
import TextBookIcon from '../../assets/book.svg';
import GameIcon from '../../assets/puzzle.svg';
import StatisticsIcon from '../../assets/statistics.svg';
import SignoutIcon from '../../assets/signout.svg';

export const WrapperHeader = styled.div`
  display: flex;
  heidht: 100vh;
  justify-content: space-between;
`;
export const Blur = styled.div`
  display:none;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(2px);
  position: absolute;
  left: 286px;
  &.active{
    display:flex;
    overflow: hidden;
  }
`;
const IconDiv = styled.div`
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  cursor: pointer;
  &:active {
    background-color: ${Colors.GREEN};
    outline: solid 6px ${Colors.GREEN};
    border-radius: 12px;
  }
`;
export const MenuIconDiv = styled.div`
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  cursor: pointer;
  z-index: 200;
  width: 42px;
  height: 40px;
  position: fixed;
  top: 20px;
  left: 26px;
  display:flex;
  justify-content:center;
  padding: 8px 0px;
  cursor: pointer;
  &::before{
    content: '';
    position: absolute;
    top:6px;
    width: 36px;
    height: 3px;
    background-color: ${Colors.BLACK};
    transition: transform 0.4s ease-in-out;
  }
  &::after{
    content: '';
    position: absolute;
    bottom:5px;
    width: 36px;
    height: 3px;
    background-color: ${Colors.BLACK};
    transition: transform 0.4s ease-in-out;
  }
  span{
    content: '';
    position: absolute;
    top: 20px;
    width: 36px;
    height: 3px;
    background-color: ${Colors.BLACK}; 
    transition: transform 0.2s ease-in-out;
  }
  &.active{
    &::before{
      transform: rotate(-45deg);
      margin-top: 11px;
    }
    &::after{
      transform: rotate(45deg);
      margin-bottom: 14px;
    }
    span{
      opacity: 0;
      transform: rotate(45deg);
      margin-top: -3px;
    }
    
  }
  
`;
export const HomeIconDiv = styled(IconDiv)`
  background-image: url(${HomeIcon});
  
`;
export const TextBookIconDiv = styled(IconDiv)`
  background-image: url(${TextBookIcon});
`;
export const GamesIconDiv = styled(IconDiv)`
  background-image: url(${GameIcon});
`;
export const StatisticsIconDiv = styled(IconDiv)`
  background-image: url(${StatisticsIcon});
`;
export const SignoutIconIconDiv = styled(IconDiv)`
  background-image: url(${SignoutIcon});
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
  transform: translateX(0px);
  background-color: ${Colors.WHITE};
  color: ${Colors.BLACK};
  transition: 0.8s;
  a{
    display: flex;
    gap: 26px;
    color: ${Colors.BLACK};
    alidn-items: center;
    font-weight: 500;
    font-size: 22px;
    line-height: 40px;
  }
  p{
   display: none;
  }
  a:hover {
    p{
      color: ${Colors.GREEN};
    }
    div{
      background-color: ${Colors.GREEN};
    outline: solid 6px ${Colors.GREEN};
    border-radius: 12px;
    }
  }  
  &.active{
    width: 286px;
    p{
      display: flex;
    }
  }
  @media (max-width: 700px) {
    display:none;
    &.active{
      display:flex;
      width: 100vw;
      height: 100vh;
    }
  }
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
    color: ${Colors.WHITE};
    &:hover{

    }
  }
  @media (max-width: 768px) {
    right: 50px;
  }
  @media (max-width: 600px) {
    p{
      display:none;
    }
  }
`;

export const PageTitle = styled.p`
  z-index: 102;
  position: absolute;
  color: ${Colors.WHITE};
  margin-left: 110px;
  margin-top: 20px;
  line-height: 40px;
  font-weight: 600;
  font-size: 30px;
  display: flex;
  gap: 18px;
  transition: 1s;
  &.active{
    color: ${Colors.BLACK};
    margin-left: 86px;
    position: fixed;
    left: 0px;
    top: 0px;
    opacity: 100%;

  }
  @media (max-width: 400px) {
      opacity: 0;

    }
`;

export const GroupMenuItem = styled.div`
margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
`;