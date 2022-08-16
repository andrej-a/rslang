import React from 'react';
import gitLogo from '../../assets/gitHub.svg';
import { MemberWrapper, MemberImage, MemberTextBlock, BlockName, BlockRole, BlockAboutMember, BlockProjectTitle, BlockProjectWork } from './MainPage.styled';
import { IMembers } from '../../components/Interfaces';

const Member = (props: IMembers) => {

  const { name, img, role, aboutMember, projectWork, link } = props;
  return (
    <MemberWrapper>
      <MemberImage>
        <img src={img} alt="member photo" />
      </MemberImage>
      <MemberTextBlock>
        <BlockName>
          <p>{name}</p>
          <a href={link}>
            <img src={gitLogo} alt="github icon" />
          </a>
        </BlockName>
        <BlockRole>{role}</BlockRole>
        <BlockAboutMember>{aboutMember}</BlockAboutMember>
        <BlockProjectTitle>Project work</BlockProjectTitle>
        <BlockProjectWork>{projectWork}</BlockProjectWork>
      </MemberTextBlock>
    </MemberWrapper>
  );
};
export  default Member;