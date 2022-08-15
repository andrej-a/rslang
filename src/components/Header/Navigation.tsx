import React from 'react';

import { Link } from 'react-router-dom';
import { DivAppNavigation, GroupMenuItem } from './Header.styled';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ExtensionIcon from '@mui/icons-material/Extension';
import BarChartIcon from '@mui/icons-material/BarChart';
import {BLACK} from '../../styles/constansts';

export const Navigation = () => {
  return(
    <DivAppNavigation data-testid="navbar">
      <GroupMenuItem>
      <MenuIcon sx={{
        width:'40px',
        height: '40px',
        color: BLACK
      }}/>
        <Link data-testid="home-link" to="/">
          <HomeIcon sx={{
        width:'40px',
        height: '40px',
        color: BLACK
      }}/>
          {/* Main */}
        </Link>
        <Link data-testid="about-link" to="/textbook">
          <ImportContactsIcon sx={{
        width:'40px',
        height: '40px',
        color: BLACK
      }}/>
          {/* Textbook */}
        </Link>
        <Link data-testid="form" to="/minigames">
          <ExtensionIcon sx={{
        width:'40px',
        height: '40px',
        color: BLACK
      }}/>
          {/* Minigames */}
        </Link>
        <Link data-testid="form" to="/statistics">
          <BarChartIcon sx={{
            width:'40px',
            height: '40px',
            color: BLACK
          }}/>
          {/* Statistics */}
        </Link>
      </GroupMenuItem>
      
      <LogoutIcon/>
    </DivAppNavigation>
  )
}