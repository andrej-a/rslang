import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { DivAppNavigation, GamesIconDiv, GroupMenuItem, HomeIconDiv, MenuIconDiv, SignoutIconIconDiv, StatisticsIconDiv, TextBookIconDiv, Blur } from './Header.styled';

type Props = {
  active: boolean,
};

export const Navigation = ({ active }:Props) => {
  return (
    <DivAppNavigation data-testid="navbar" className={active ? 'active' : ''}>
      <Blur className={active ? 'active' : ''}/>
      <GroupMenuItem>
      <Link to={'/'}><HomeIconDiv/>
      <p>Main</p> </Link>
      <Link to={'/textbook'}><TextBookIconDiv/><p>Textbook</p></Link>
      <Link to={'/games'}><GamesIconDiv/><p>Minigames</p></Link>
      <Link to={'/statistics'}><StatisticsIconDiv/><p>Statistics</p></Link>
      </GroupMenuItem>
      <Link to={'/'}><SignoutIconIconDiv/><p>Sign Out</p></Link>
    </DivAppNavigation>
  );
};

Navigation.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
};