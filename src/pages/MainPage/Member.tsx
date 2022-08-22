import React from 'react';

import { IMembers } from '../../components/Interfaces';
import gitLogo from '../../assets/gitHub.svg';
import {
  MemberWrapper,
  MemberImage,
  MemberTextBlock,
  BlockName,
  BlockRole,
  BlockAboutMember,
  BlockProjectTitle,
  BlockProjectWork,
} from './MainPage.styled';

const Member = ({ name, img, role, aboutMember, projectWork, link }: IMembers) => {
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
export default Member;
