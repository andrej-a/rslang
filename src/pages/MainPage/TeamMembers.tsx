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
      "Junior frontend-developer. I like React and green tests. Two my main problems during developing are sometimes my code doesn't work and I dont't know why and sometimes my code works and I don't know why.",
    projectWork:
      'Development of the registration and login form, AudioChallenge game, common game page, formrouter setup, helped to think through the logic of the app. Created few bugs and костылей ',
    link: 'https://github.com/andrej-a',
  },
  {
    key: 2,
    name: 'Anastasia Polivoda',
    img: `${ImageNastya}`,
    role: 'Frontend developer',
    aboutMember:
      'I am optimistic and sociable, although sometimes my shyness gets in the way. I love to learn new things and can do laborious work, I appreciate the creative approach.',
    projectWork:
      'Conducted the development of the pages of the textbook and dictionary. Made a card for words, implemented textbook settings and output of word statistics in the dictionary, backend setup, statistic page view',
    link: 'https://github.com/polivodichka',
  },
  {
    key: 3,
    name: 'Lizaveta Petrova',
    img: `${ImageLiza}`,
    role: 'Frontend developer, designer',
    aboutMember:
      'Our friendship with frontend have been starting 8 mounth ago and now we are inseparable. In this project I fell in love with teamwork',
    projectWork:
      'Designed layout of the application, made main page,burger navigation and sprint game, made games results view',
    link: 'https://github.com/Lizaveta01',
  },
];

const TeamMembers = () => {
  const elements = data.map(({ key, ...itemProps }) => {
    return <Member key={key} {...itemProps} />;
  });

  return <DivContainerMembers>{elements}</DivContainerMembers>;
};
export default TeamMembers;
