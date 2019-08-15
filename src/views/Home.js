import React from 'react'
import Navigator from '../components/Navigator'
import Footer from '../components/Footer'
import { Container, ImageContainer, FormContainer } from './HomeStyles'

export default function Home(props) {
  const handleClick = path => {
    props.history.push(`/leaderboards/${path}`)
  }

  return (
    <Container>
      <ImageContainer>
        <Navigator handleClick={handleClick} />
      </ImageContainer>
      <FormContainer />
      <Footer />
    </Container>
  )
}
