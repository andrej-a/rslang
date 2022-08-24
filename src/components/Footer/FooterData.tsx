import React from 'react';

import { MemberItem, MembersInfo } from './Footer.styled';
import { IContact } from '../Interfaces';
import gitLogo from '../../assets/gitHub.svg';


const data: IContact[] = [
  {
    key: 1,
    name: 'Andrej Amelyanovitsch',
    link: 'https://github.com/andrej-a',
  },
  {
    key: 2,
    name: 'Anastasia Polivoda',
    link: 'https://github.com/polivodichka',
  },
  {
    key: 3,
    name: 'Lizaveta Petrova',
    link: 'https://github.com/Lizaveta01',
  },
];

const Item = ({ name, link }: IContact) => {
  return (
    <MemberItem>
      <a href={link}>
        <img src={gitLogo} alt="github icon" />
        <p>{name}</p>
      </a>
    </MemberItem>
  );
};

export const Contacts = () => {
  const elements = data.map(({ key, ...itemProps }) => {
    return <Item key={key} {...itemProps} />;
  });
  return <MembersInfo>{elements}</MembersInfo>;
};
