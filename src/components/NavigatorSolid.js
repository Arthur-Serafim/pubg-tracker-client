import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

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
} from './NavigatorSolidStyles'

import LogoIcon from '../images/pubg.png'

export default function NavigatorSolid({ handleClick }) {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <Navbar>
      <NavLink to="/">
        <LogoContainer>
          <Logo src={LogoIcon} />
        </LogoContainer>
      </NavLink>
      <Navigation>
        <NavLink active="active" to="/" className="link">
          <HomeLink>Home</HomeLink>
        </NavLink>
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
