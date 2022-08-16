import React from 'react';

import { Link } from 'react-router-dom';
import { DivAppNavigation, GamesIconDiv, GroupMenuItem, HomeIconDiv, MenuIconDiv, SignoutIconIconDiv, StatisticsIconDiv, TextBookIconDiv } from './Header.styled';



import { Colors } from '../../styles/constansts';

export const Navigation = () => {
  return (
    <DivAppNavigation data-testid="navbar">
      <GroupMenuItem>
      <MenuIconDiv/>
      <HomeIconDiv/>
      <TextBookIconDiv/>
      <GamesIconDiv/>
      <StatisticsIconDiv/>
      </GroupMenuItem>
      <SignoutIconIconDiv/>
    </DivAppNavigation>
  );
};