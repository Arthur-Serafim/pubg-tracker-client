import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Navbar,
  LogoContainer,
  Logo,
  Navigation,
  Dropdown,
  HomeLink,
  DropdownBox,
  DropdownContainer,
  DropdownOption
} from './NavigatorStyles'

import LogoIcon from '../images/pubg.png'

export default function Navigator({ handleClick }) {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <Navbar>
      <Link to="/">
        <LogoContainer>
          <Logo src={LogoIcon} />
        </LogoContainer>
      </Link>
      <Navigation>
        <Link to="/" className="link">
          <HomeLink>Home</HomeLink>
        </Link>
        <DropdownContainer>
          <Dropdown onClick={() => handleToggle()}>
            Leaderboards
            <i className="fas fa-caret-down" />
          </Dropdown>
          <DropdownBox show={toggle}>
            <DropdownOption onClick={() => handleClick('duo')}>
              Duo
            </DropdownOption>
            <DropdownOption onClick={() => handleClick('duo-fpp')}>
              Duo FPP
            </DropdownOption>
            <DropdownOption onClick={() => handleClick('solo')}>
              Solo
            </DropdownOption>
            <DropdownOption onClick={() => handleClick('solo-fpp')}>
              Solo FPP
            </DropdownOption>
            <DropdownOption onClick={() => handleClick('squad')}>
              Squad
            </DropdownOption>
            <DropdownOption onClick={() => handleClick('squad-fpp')}>
              Squad FPP
            </DropdownOption>
          </DropdownBox>
        </DropdownContainer>
      </Navigation>
    </Navbar>
  )
}
