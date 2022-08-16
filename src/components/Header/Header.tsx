import React from 'react';
import { WrapperHeader, UserProfile, PageTitle } from './Header.styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Navigation } from './Navigation';
import ProfileIcon from '../../assets/profile.svg';

const Header = () => {
  return (
      <WrapperHeader>
        <Navigation/>
        <PageTitle> 
          EasyEnglish
        </PageTitle>
        <UserProfile>
          <p>Sign in</p>
          <div>
            <img src={ProfileIcon} alt="" />
          </div>
        </UserProfile>
      </WrapperHeader>

  );
};

export default Header;