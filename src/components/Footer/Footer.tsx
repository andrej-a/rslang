import React from 'react';

import { WrapperFooter } from './Footer.styled';
import { Contacts } from './FooterData';
import rssLogo from '../../assets/rssLogo.svg';

const Footer = () => {
  return (
    <WrapperFooter>
      <Contacts />
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
