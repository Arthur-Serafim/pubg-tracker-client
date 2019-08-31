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
} from './NavigatorStyles'

import LogoIcon from '../images/pubg.png'

export default function Navigator({ handleClick }) {
  const [toggle, setToggle] = useState(false)
  const modes = ['solo', 'solo-fpp', 'duo', 'duo-fpp', 'squad', 'squad-fpp',]

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
            {modes.map(mode => (
              <DropdownOption
              key={Math.random()}
              onClick={() => {
                handleClick(mode)
                setToggle(false)
              }}>
                {mode}
              </DropdownOption>
            ))}
          </DropdownBox>
        </DropdownContainer>
      </Navigation>
    </Navbar>
  )
}
