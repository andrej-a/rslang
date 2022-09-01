import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import {
  DivAppNavigation,
  GamesIconDiv,
  GroupMenuItem,
  HomeIconDiv,
  MenuIconDiv,
  SignoutIconIconDiv,
  StatisticsIconDiv,
  TextBookIconDiv,
  Blur,
} from './Header.styled';

type Props = {
  active: boolean;
};

export const Navigation = ({ active }: Props) => {
  return (
    <DivAppNavigation data-testid="navbar" className={active ? 'active' : ''}>
      <Blur className={active ? 'active' : ''} />
      <GroupMenuItem>
        <NavLink to="/" className={({ isActive }) => (isActive ? ' activeLink' : '')}>
          <HomeIconDiv />
          <p>Main</p>{' '}
        </NavLink>
        <NavLink to={'/textbook'} className={({ isActive }) => (isActive ? ' activeLink' : '')}>
          <TextBookIconDiv />
          <p>Textbook</p>
        </NavLink>
        <NavLink to={'/games'} className={({ isActive }) => (isActive ? ' activeLink' : '')}>
          <GamesIconDiv />
          <p>Minigames</p>
        </NavLink>
        <NavLink to={'/statistics'} className={({ isActive }) => (isActive ? ' activeLink' : '')}>
          <StatisticsIconDiv />
          <p>Statistics</p>
        </NavLink>
      </GroupMenuItem>
      <Link to={'/'}>
        <SignoutIconIconDiv />
        <p>Sign Out</p>
      </Link>
    </DivAppNavigation>
  );
};

Navigation.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
};
