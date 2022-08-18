import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../../assets/main2.svg';
import Image2 from '../../assets/main3.svg';
import Image3 from '../../assets/main4.svg';
import Image4 from '../../assets/main5.svg';
import { IAboutAppItem } from '../../components/Interfaces';
import { AboutAppItemWrapper, AboutAppItemImage, AboutAppItemTextBlock, AboutAppItemTitle, AboutAppItemText, AboutAppItemButton, AboutAppItemsWrapper } from './MainPage.styled';


const data: IAboutAppItem[] = [
  {
    key: 1,
    title: 'Textbook',
    text: 'The electronic textbook consists of six sections. Each section has 30 pages of 20 words. The translation of the word, the thematic image, as well as the pronunciation of both the word separately and as part of the phrase are presented',
    img: `${Image1}`,
    textButton: 'View textbook',
    linkPage: '/textbook',
    alignImage: 'row',
  },
  {
    key: 2,
    title: 'Sprint minigame',
    text: 'Memorizing English words can be fun and challenging. Check how much points you can get in one minute, making educated guesses about what is right and what is wrong',
    img: `${Image2}`,
    textButton: 'Get started',
    linkPage: '/sprint',
    alignImage: 'row-reverse',
  },
  {
    key: 3,
    title: 'Audio challenge',
    text: 'Check your listening skills, trying to pick the right meaning after hearing a word. Be careful, as you just have one guess.  With our app, learning is a joy',
    img: `${Image3}`,
    textButton: 'Get started',
    linkPage: '/audio',
    alignImage: 'row',
  },
  {
    key: 4,
    title: 'Statistics',
    text: 'All the progress of training can be viewed in statistics, where data for the current day, as well as for the entire training period, are presented. The information is presented both in the form of a table and graphs, which is very convenient',
    img: `${Image4}`,
    textButton: 'View statistics',
    linkPage: '/statistics',
    alignImage: 'row-reverse',
  },
];

const AboutItem = (props: IAboutAppItem) => {

  const { key, title, text, img, textButton, linkPage, alignImage } = props;
 
  return (
    <AboutAppItemWrapper color={alignImage}>
      <AboutAppItemImage>
        <img src={img} alt="man photo" />
      </AboutAppItemImage>
      <AboutAppItemTextBlock>
        <AboutAppItemTitle>{title}</AboutAppItemTitle>
        <AboutAppItemText>{text}</AboutAppItemText>
        <Link to={linkPage}>
          <AboutAppItemButton>{textButton}</AboutAppItemButton>
        </Link>
      </AboutAppItemTextBlock>
    </AboutAppItemWrapper>
  );
};


const AboutAppItems = () => {

  const elements = data.map(item => {
    const { key, ...itemProps } = item;
    return <AboutItem key={key} {...itemProps}/>;
  });
  
  return (
    <AboutAppItemsWrapper>
      {elements}
    </AboutAppItemsWrapper>
  );
};
export default AboutAppItems;


