import React, { useState, useEffect } from 'react'
import Navigator from '../components/Navigator'
import Footer from '../components/Footer'
import { Container, ImageContainer, FormContainer, FormTitle, Form, FormSelector, FormPlatform, FormDescription } from './HomeStyles'
import Steam from '../images/steam.svg'
import Psn from '../images/playstation.svg'
import Xbox from '../images/xbox.svg'

export default function Home(props) {
  const [platform, setPlatform] = useState('steam')
  const [steamActive, setSteamActive] = useState(true)
  const [psnActive, setPsnActive] = useState(false)
  const [xboxActive, setXboxActive] = useState(false)
  const [showPlatform, setShowPlatform] = useState('steam')

  useEffect(() => {
    switch(platform) {
      case 'steam':
        setSteamActive(true)
        setPsnActive(false)
        setXboxActive(false)
        setShowPlatform('steam')
        break
      case 'psn':
        setSteamActive(false)
        setPsnActive(true)
        setXboxActive(false)
        setShowPlatform('psn')
        break
      case 'xbox':
        setSteamActive(false)
        setPsnActive(false)
        setXboxActive(true)
        setShowPlatform('xbox')        
        break
      default:
        setSteamActive(true)
        setPsnActive(false)
        setXboxActive(false)
        setShowPlatform('steam')
    }
  }, [platform])

  const handleClick = path => {
    props.history.push(`/leaderboards/${path}`)
  }

  const handlePlatformChange = e => {
    setPlatform(e)
    console.log(platform)
  } 

  return (
    <Container>
      <ImageContainer>
        <Navigator handleClick={handleClick} />
      </ImageContainer>
      <FormContainer>
        <FormTitle>PlayersUnknown's Battleground</FormTitle>
        <FormTitle purple>Stats Viewer</FormTitle>
        <Form>
          <FormSelector active={showPlatform}>
            <FormPlatform psn onClick={() => handlePlatformChange('psn')}>
              <img src={Psn} alt="Playstation logo"/>
              <FormDescription show={psnActive}>Playstation Network Username</FormDescription>
            </FormPlatform>
            <FormPlatform xbox onClick={() => handlePlatformChange('xbox')}>
              <img src={Xbox} alt="Xbox logo"/>
              <FormDescription show={xboxActive}>Xbox Live Username</FormDescription>
            </FormPlatform>
            <FormPlatform steam onClick={() => handlePlatformChange('steam')}>
              <img src={Steam} alt="Steam logo"/>    
              <FormDescription show={steamActive}>Steam Username</FormDescription>
            </FormPlatform>
          </FormSelector>
        </Form>
      </FormContainer>
      <Footer />
    </Container>
  )
}
