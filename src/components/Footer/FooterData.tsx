import React from 'react';
import { MemberItem, MembersInfo } from './Footer.styled';
import gitLogo from '../../assets/gitHub.svg';
import { IContact } from '../Interfaces';

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

const Item = (props: IContact) => {
  const { name, link } = props;
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
  const elements = data.map( item => {
    const { key, ...itemProps } = item;
    return <Item key ={key} {...itemProps}/>;
  });
  return (
    <MembersInfo>
      {elements}
    </MembersInfo>
  );
};


