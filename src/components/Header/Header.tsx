import React, { useContext, useState } from 'react';

import { WrapperHeader, UserProfile, PageTitle, MenuIconDiv, UserAvatar } from './Header.styled';
import { Navigation } from './Navigation';
import ProfileIcon from '../../assets/profile.svg';
import { Link } from 'react-router-dom';
import { ApplicationContext } from '../Context/ApplicationContext';

const Header = ({ title }: { title: string }) => {
  const [isActive, setActive] = useState(false);
  const { isAuthorized, userInformation } = useContext(ApplicationContext);
  const firstNamesLetter = userInformation.name ? userInformation.name[0].toUpperCase() : null;
  return (
    <WrapperHeader>
      <MenuIconDiv onClick={() => setActive(!isActive)} className={isActive ? 'active' : ''}>
        <span />
      </MenuIconDiv>
      <Navigation active={isActive} />
      <PageTitle className={isActive ? 'active' : ''}> {title} </PageTitle>
      <UserProfile>
        <Link to={'/registration'}>{!isAuthorized && <p>Sign in</p>}</Link>
        {isAuthorized ? (
          <UserAvatar>{firstNamesLetter}</UserAvatar>
        ) : (
          <div>
            <img src={ProfileIcon} alt="" />
          </div>
        )}
      </UserProfile>
    </WrapperHeader>
  );
};

export default Header;
