import React from 'react';

import { IMembers } from '../../components/Interfaces';
import Member from './Member';
import { DivContainerMembers } from './MainPage.styled';
import ImageAndrej from '../../assets/andrej.jpg';
import ImageLiza from '../../assets/liza.jpg';
import ImageNastya from '../../assets/nastya.jpg';

const data: IMembers[] = [
  {
    key: 1,
    name: 'Andrej Amelyanovitsch',
    img: `${ImageAndrej}`,
    role: 'Team leader, frontend developer',
    aboutMember:
      'Did basic project settings, initial layout, redux setup, router setup, login form, part of the TextBook page, "Audio Challenge" game, "Savannah" game, backend',
    projectWork:
      'Did basic project settings, initial layout, redux setup, router setup, login form, part of the TextBook page, "Audio Challenge" game, "Savannah" game, backend',
    link: 'https://github.com/andrej-a',
  },
  {
    key: 2,
    name: 'Anastasia Polivoda',
    img: `${ImageNastya}`,
    role: 'Frontend developer',
    aboutMember:
      'Did basic project settings, initial layout, redux setup, router setup, login form, part of the TextBook page, "Audio Challenge" game, "Savannah" game, backend',
    projectWork:
      'Did basic project settings, initial layout, redux setup, router setup, login form, part of the TextBook page, "Audio Challenge" game, "Savannah" game, backend',
    link: 'https://github.com/polivodichka',
  },
  {
    key: 3,
    name: 'Lizaveta Petrova',
    img: `${ImageLiza}`,
    role: 'Frontend developer, designer',
    aboutMember:
      'Did basic project settings, initial layout, redux setup, router setup, login form, part of the TextBook page, "Audio Challenge" game, "Savannah" game, backend',
    projectWork:
      'Did basic project settings, initial layout, redux setup, router setup, login form, part of the TextBook page, "Audio Challenge" game, "Savannah" game, backend',
    link: 'https://github.com/Lizaveta01',
  },
];

const TeamMembers = () => {
  const elements = data.map((item) => {
    const { key, ...itemProps } = item;
    return <Member key={key} {...itemProps} />;
  });

  return <DivContainerMembers>{elements}</DivContainerMembers>;
};
export default TeamMembers;
