import React from 'react';
import BannerImg from '../../assets/main1.svg';
import PlayArrow from '../../assets/playArrow.svg';
import AboutAppItems from './ItemsBlock';
import { BannerTextBlock, ButtonBlock, MainPageWrapper, OurTeam, Banner, PlayVideoButton, JoinButton, AboutApp, VideoPlayer, Intro } from './MainPage.styled';
import TeamMembers from './TeamMembers';


export const MainPageContent = () => {
  return (
    <MainPageWrapper>
      <Banner>
        <BannerTextBlock>
          <h3>Welcome back!</h3>
          <h1>To have another language is to possess a second soul</h1>
          <ButtonBlock>
            <JoinButton>Join for free</JoinButton>
            <div>
              <a href="https://github.com/Lizaveta01">
                <PlayVideoButton>
                  <img src={PlayArrow} alt="play button"/>
                </PlayVideoButton>
                <p>See how it works</p>
              </a>
            </div>
          </ButtonBlock>
        </BannerTextBlock>
        <img src={BannerImg} alt="image" /> 
      </Banner>
      <AboutApp>
        <h2>About app</h2>
        <AboutAppItems/>
      </AboutApp> 
      <Intro>
        <h2>Intro</h2>
        <VideoPlayer/>
      </Intro>  
      <OurTeam>
        <h2>Our team</h2>
        <TeamMembers/>
      </OurTeam>
    </MainPageWrapper>
  );
};