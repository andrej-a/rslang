import React from "react"
import { WrapperHeader, UserProfile, PageTitle } from "./Header.styled"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Navigation } from "./Navigation";
import { BLACK } from "../../styles/constansts";

const Header = () => {
  return (
      <WrapperHeader>
        <Navigation/>
        <PageTitle> 
          EasyEnglish
        </PageTitle>
        <UserProfile>
          <p>Sign in</p>
          <div>
            <AccountCircleIcon sx={{
            width:'40px',
            height: '40px',
            color: BLACK
          }}/>
          </div>
        </UserProfile>
      </WrapperHeader>

  )
}

export default Header;