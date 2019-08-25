import React, { useState, useEffect } from 'react'
import Navigator from '../components/Navigator'
import Footer from '../components/Footer'
import {
  Container,
  ImageContainer,
  FormContainer,
  FormTitle,
  Form,
  FormSelector,
  FormPlatform,
  FormDescription,
  FormInputContainer,
  FormInput,
  FormInputArea,
  FormSubmit
} from './HomeStyles'
import Steam from '../images/steam.svg'
import Psn from '../images/playstation.svg'
import Xbox from '../images/xbox.svg'

export default function Home(props) {
  const [platform, setPlatform] = useState('steam')
  const [steamActive, setSteamActive] = useState(true)
  const [psnActive, setPsnActive] = useState(false)
  const [xboxActive, setXboxActive] = useState(false)
  const [showPlatform, setShowPlatform] = useState('steam')
  const [user, setUser] = useState('')
  const [color, setColor] = useState('white')

  useEffect(() => {
    switch (platform) {
      case 'steam':
        setSteamActive(true)
        setPsnActive(false)
        setXboxActive(false)
        setShowPlatform('steam')
        setColor('white')
        break
      case 'psn':
        setSteamActive(false)
        setPsnActive(true)
        setXboxActive(false)
        setShowPlatform('psn')
        setColor('var(--purple)')
        break
      case 'xbox':
        setSteamActive(false)
        setPsnActive(false)
        setXboxActive(true)
        setShowPlatform('xbox')
        setColor('var(--green)')
        break
      default:
        setSteamActive(true)
        setPsnActive(false)
        setXboxActive(false)
        setShowPlatform('steam')
        setColor('white')
    }
  }, [platform])

  const handleClick = path => {
    props.history.push(`/leaderboards/${path}`)
  }

  const handlePlatformChange = e => {
    setPlatform(e)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.history.push(`/${platform}/${user}`)
  }

  const handleInputChange = e => {
    setUser(e.target.value)
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
              <img src={Psn} alt="Playstation logo" />
              <FormDescription show={psnActive}>
                Playstation Network Username
              </FormDescription>
            </FormPlatform>
            <FormPlatform xbox onClick={() => handlePlatformChange('xbox')}>
              <img src={Xbox} alt="Xbox logo" />
              <FormDescription show={xboxActive}>
                Xbox Live Username
              </FormDescription>
            </FormPlatform>
            <FormPlatform steam onClick={() => handlePlatformChange('steam')}>
              <img src={Steam} alt="Steam logo" />
              <FormDescription show={steamActive}>
                Steam Username
              </FormDescription>
            </FormPlatform>
          </FormSelector>
          <FormInputArea color={color}>
            <span>Player username</span>
            <FormInputContainer onSubmit={handleSubmit}>
              <FormInput
                color={color}
                type="text"
                value={user}
                onChange={e => handleInputChange(e)}
                placeholder={`Enter ${platform} username`}
                required
              />
              <div>
                <FormSubmit color={color} type="submit">
                  Search Player
                </FormSubmit>
              </div>
            </FormInputContainer>
          </FormInputArea>
        </Form>
      </FormContainer>
      <Footer />
    </Container>
  )
}
