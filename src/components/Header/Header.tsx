import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { WrapperHeader, UserProfile, PageTitle, MenuIconDiv } from './Header.styled';
import { Navigation } from './Navigation';
import ProfileIcon from '../../assets/profile.svg';

const Header = () => {
  const [isActive, setActive] = useState(false);
  return (
    <WrapperHeader>
      <MenuIconDiv onClick={() => setActive(!isActive)} className={isActive ? 'active' : ''}>
        <span />
      </MenuIconDiv>
      <Navigation active={isActive} />
      <PageTitle className={isActive ? 'active' : ''}> EasyEnglish </PageTitle>
      <Link to={'/registration'}>
        <UserProfile>
            <p>Sign in</p>
          <div>
            <img src={ProfileIcon} alt="" />
          </div>
        </UserProfile>
      </Link>
    </WrapperHeader>
  );
};

export default Header;
