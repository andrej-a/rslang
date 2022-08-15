import React from "react"
import { MemberItem, MembersInfo, WrapperFooter } from "./Footer.styled";
import gitLogo from '../../assets/gitHub.svg';
import rssLogo from '../../assets/rssLogo.svg';

const Footer = () => {
  return (
      <WrapperFooter>
        <MembersInfo>
          <MemberItem>        
              <a href="https://github.com/andrej-a">
                <img src={gitLogo} alt="github icon" />
                <p>Andrej Amelyanovitsch</p>
              </a>
          </MemberItem>
          <MemberItem>
              <a href="https://github.com/polivodichka">
                <img src={gitLogo} alt="github icon" />
                <p>Anastasia Polivoda</p>
              </a>
          </MemberItem>
          <MemberItem>
              <a href="https://github.com/Lizaveta01">
                <img src={gitLogo} alt="github icon" />
                <p>Lizaveta Petrova</p>
              </a>
          </MemberItem>
        </MembersInfo>
        <p>@2022</p>
        <div> 
          <a href="https://rs.school/js/">
          <img src={rssLogo} alt="github icon" />
          </a>
        </div>
      </WrapperFooter>

  )
}

export default Footer;