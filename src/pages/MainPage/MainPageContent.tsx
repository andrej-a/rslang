import BannerImg from '../../assets/main1.svg';
import AppImg_1 from '../../assets/main2.svg';
import AppImg_2 from '../../assets/main3.svg';
import AppImg_3 from '../../assets/main4.svg';
import AppImg_4 from '../../assets/main5.svg';

export MainPageContent = () => {
  return(
    <MainPageWrapper>
      <Banner>
        <BannerTextBlock>
          <p>Welcome back!</p>
          <h1>To have another language is to possess a second soul</h1>
        </BannerTextBlock>
        <ButtonBlock>

        </ButtonBlock>
        <img src={BannerImg} alt="image" />
      </Banner>
      <AboutApp>
        <h2>About app</h2>
        <ItemBlock>
          <img src={AppImg_1} alt="image" />
          <ItemBlockInfo>
            <h3>Textbook </h3>
            <p>The electronic textbook consists of six sections. Each section has 30 pages of 20 words. The translation of the word, the thematic image, as well as the pronunciation of both the word separately and as part of the phrase are presented</p>
            <button>View textbook</button>
          </ItemBlockInfo>
        <ItemBlock>
      </AboutApp>
      <OurTeam>
      <h2>Our team</h2>
      </OurTeam>
    </MainPageWrapper>
  )
}