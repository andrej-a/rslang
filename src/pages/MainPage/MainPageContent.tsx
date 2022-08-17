import React from 'react';
import BannerImg from '../../assets/main1.svg';
import PlayArrow from '../../assets/playArrow.svg';
import AboutAppItems from './ItemsBlock';
import { BannerTextBlock, ButtonBlock, MainPageWrapper, OurTeam, Banner, PlayVideoButton, JoinButton, AboutApp, VideoPlayer, Intro, BannerImage, ContentWrapper } from './MainPage.styled';
import TeamMembers from './TeamMembers';


export const MainPageContent = () => {
  return (
    <MainPageWrapper>
      <Banner>
        <ContentWrapper>
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
          <BannerImage>
          <img src={BannerImg} alt="image" /> 
          </BannerImage>
        </ContentWrapper>
      </Banner>
       <AboutApp>
        <ContentWrapper>
          <h2>About app</h2>
          <AboutAppItems/>
        </ContentWrapper>
      </AboutApp>  
      <Intro>
        <ContentWrapper>
          <h2>Intro</h2>
          <VideoPlayer></VideoPlayer>
        </ContentWrapper>
      </Intro>  
      <OurTeam>
        <ContentWrapper>
          <h2>Our team</h2>
          <TeamMembers/>
        </ContentWrapper>
      </OurTeam> 
    </MainPageWrapper>
  );
};