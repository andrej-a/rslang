import React, { useContext } from 'react';
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
import { ApplicationContext } from '../Context/ApplicationContext';
import { removeItemsFromStorage } from '../../utils/removeItemsFromStorage';

type Props = {
  active: boolean;
};

export const Navigation = ({ active }: Props) => {
  const { isAuthorized, onSetIsAuthorized, onSetUserInformation } = useContext(ApplicationContext);
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
        {/* <NavLink to={'/statistics'} className={({ isActive }) => (isActive ? ' activeLink' : '')}>
          {isAuthorized && <StatisticsIconDiv />}
          {isAuthorized && <p>Statistics</p>}
        </NavLink> */}
      </GroupMenuItem>
      <Link to={'/'}>
        <SignoutIconIconDiv
          onClick={() => {
            onSetIsAuthorized(false);
            onSetUserInformation({ name: '', userID: '' });
            removeItemsFromStorage('userId', 'userInfo', 'userToken');
          }}
        />
        <p>Sign Out</p>
      </Link>
    </DivAppNavigation>
  );
};

Navigation.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
};
