import React from 'react';
import { Link } from 'react-router-dom';

import BannerImg from '../../assets/main1.svg';
import PlayArrow from '../../assets/playArrow.svg';
import AboutAppItems from './ItemsBlock';
import TeamMembers from './TeamMembers';
import {
  BannerTextBlock,
  ButtonBlock,
  MainPageWrapper,
  OurTeam,
  Banner,
  PlayVideoButton,
  JoinButton,
  AboutApp,
  VideoPlayer,
  Intro,
  BannerImage,
  ContentWrapper,
  ContentWrapperBanner,
} from './MainPage.styled';

export const MainPageContent = () => {
  return (
    <MainPageWrapper>
      <Banner>
        <ContentWrapperBanner>
          <BannerTextBlock>
            <h3>Welcome back!</h3>
            <h1>To have another language is to possess a second soul</h1>
            <ButtonBlock>
              <Link to={'/registration'}>
                {' '}
                <JoinButton>Join for free</JoinButton>
              </Link>

              <div>
                <a href="#video">
                  <PlayVideoButton>
                    <img src={PlayArrow} alt="play button" />
                  </PlayVideoButton>
                  <p>See how it works</p>
                </a>
              </div>
            </ButtonBlock>
          </BannerTextBlock>
          <BannerImage>
            <img src={BannerImg} alt="image" />
          </BannerImage>
        </ContentWrapperBanner>
      </Banner>
      <AboutApp>
        <ContentWrapper>
          <h2>About app</h2>
          <AboutAppItems />
        </ContentWrapper>
      </AboutApp>
      <Intro>
        <ContentWrapper id="video">
          <h2>Intro</h2>
          <VideoPlayer>
            <iframe
              frameBorder="0"
              allowFullScreen={true}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Ulearning | RS lang"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/9KJxaFHotqI?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fulearning-69team.netlify.app&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"
              id="widget2"
            ></iframe>
          </VideoPlayer>
        </ContentWrapper>
      </Intro>
      <OurTeam>
        <ContentWrapper>
          <h2>Our team</h2>
          <TeamMembers />
        </ContentWrapper>
      </OurTeam>
    </MainPageWrapper>
  );
};
