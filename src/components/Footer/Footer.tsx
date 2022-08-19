import React from 'react';
import { WrapperFooter } from './Footer.styled';
import rssLogo from '../../assets/rssLogo.svg';
import { Contacts } from './FooterData';


const Footer = () => {
  return (
    <WrapperFooter>
      <Contacts/>
      <p>@2022</p>
        <div> 
          <a href="https://rs.school/js/">
          <img src={rssLogo} alt="github icon" />
          </a>
        </div>
    </WrapperFooter>

  );
};

export default Footer;


