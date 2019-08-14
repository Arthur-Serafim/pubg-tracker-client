import React from 'react'
import { Link } from 'react-router-dom'

import {
  Navbar,
  LogoContainer,
  Logo,
  Navigation,
  Select,
  HomeLink,
  SelectOption
} from './NavigatorStyles'

import LogoIcon from '../images/pubg.png'

export default function Navigator({ handleClick }) {
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
        <Select onChange={handleClick}>
          <SelectOption selected disabled>
            Leaderboards
          </SelectOption>
          <SelectOption value="duo" onClick={e => handleClick(e)}>
            Duo
          </SelectOption>
          <SelectOption value="duo-fpp" onClick={e => handleClick(e)}>
            Duo FPP
          </SelectOption>
          <SelectOption value="solo" onClick={e => handleClick(e)}>
            Solo
          </SelectOption>
          <SelectOption value="solo-fpp" onClick={e => handleClick(e)}>
            Solo FPP
          </SelectOption>
          <SelectOption value="squad" onClick={e => handleClick(e)}>
            Squad
          </SelectOption>
          <SelectOption value="squad-fpp" onClick={e => handleClick(e)}>
            Squad FPP
          </SelectOption>
        </Select>
      </Navigation>
    </Navbar>
  )
}
