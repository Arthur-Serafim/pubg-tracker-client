import React from 'react';
import { Link } from 'react-router-dom'

import {
  Container, 
  ImageContainer, 
  FormContainer, 
  Footer, 
  Navbar, 
  LogoContainer, 
  Logo,
  Navigation,
  Select,
  HomeLink,
  SelectOption
} from './HomeStyles'

import LogoIcon from '../images/pubg.png'

export default function Home(props) {

  const handleClick = e => {
    let path = e.target.value
    props.history.push(`/leaderboards/${path}`)
  }

  return (
    <Container>
      <ImageContainer>
        <Navbar>
          <Link to="/">
            <LogoContainer>
              <Logo src={LogoIcon} />
            </LogoContainer>
          </Link>
          <Navigation>
            <Link to="/" className="link">
              <HomeLink>
                Home
              </HomeLink>
            </Link>
            <Select onChange={handleClick}>
              <SelectOption selected disabled>
                Leaderboards
              </SelectOption>
              <SelectOption value='duo' onClick={e => handleClick(e)}>Duo</SelectOption>
              <SelectOption value='duo-fpp' onClick={e => handleClick(e)}>Duo FPP</SelectOption>
              <SelectOption value='solo' onClick={e => handleClick(e)}>Solo</SelectOption>
              <SelectOption value='solo-fpp' onClick={e => handleClick(e)}>Solo FPP</SelectOption>
              <SelectOption value='squad' onClick={e => handleClick(e)}>Squad</SelectOption>
              <SelectOption value='squad-fpp' onClick={e => handleClick(e)}>Squad FPP</SelectOption>
            </Select>
          </Navigation>
        </Navbar>
      </ImageContainer>
      <FormContainer></FormContainer>
      <Footer></Footer>
    </Container>
  );
}
