import React, { useState } from 'react';
import { WrapperHeader, UserProfile, PageTitle, MenuIconDiv } from './Header.styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Navigation } from './Navigation';
import ProfileIcon from '../../assets/profile.svg';
import { Link } from 'react-router-dom';

const Header = ({ title }: { title: string }) => {
  const [isActive, setActive] = useState(false);
  return (
    <WrapperHeader>
      <MenuIconDiv
        onClick={() => setActive(!isActive)}
        className={isActive ? 'active' : ''}>
      </MenuIconDiv>
      <Navigation active={isActive} />
      <PageTitle className={isActive ? 'active' : ''}> {title} </PageTitle>
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