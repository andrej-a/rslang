import React from 'react';
import BannerImg from '../../assets/main1.svg';
import AppImg_1 from '../../assets/main2.svg';
import AppImg_2 from '../../assets/main3.svg';
import AppImg_3 from '../../assets/main4.svg';
import AppImg_4 from '../../assets/main5.svg';
import PlayArrow from '../../assets/playArrow.svg';
import { AboutApp, BannerTextBlock, ButtonBlock, ItemBlock, ItemBlockInfo, MainPageWrapper, OurTeam, Banner, PlayVideoButton, JoinButton } from './MainPage.styled';
import TeamMembers from './TeamMembers';


export const MainPageContent = () => {
  return(
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
      {/* <AboutApp>
        <h2>About app</h2>
        <ItemBlock>
          <img src={AppImg_1} alt="image" />
          <ItemBlockInfo>
            <h3>Textbook </h3>
            <p>The electronic textbook consists of six sections. Each section has 30 pages of 20 words. The translation of the word, the thematic image, as well as the pronunciation of both the word separately and as part of the phrase are presented</p>
            <button>View textbook</button>
          </ItemBlockInfo>
        </ItemBlock>
      </AboutApp> */}
      <OurTeam>
        <h2>Our team</h2>
        <TeamMembers/>
      </OurTeam>
    </MainPageWrapper>
  )
}