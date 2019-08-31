import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavigatorSolid from '../components/NavigatorSolid'
import Footer from '../components/Footer'
import {
  Container,
  View,
  PlayerHeader,
  PlayerName,
  ModeSelector,
  ModeOption,
  PlayerStats,
  PlayerHistory
} from './PlayerStyles'

export default function Player(props) {
  const [notFound, setNotFound] = useState(false)
  const [user, setUser] = useState()
  const [loaded, setLoaded] = useState()
  const [gamemode, setGamemode] = useState('solo')

  const { username, platform } = props.match.params

  const handleClick = path => {
    props.history.push(`/leaderboards/${path}`)
  }

  useEffect(() => {
    ;(async () => {
      try {
        const res = await axios.post('http://localhost:5000/api/players', {
          platform,
          username
        })
        setUser(res.data.attributes)
        setLoaded(true)
      } catch (err) {
        setNotFound(true)
        setLoaded(true)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleGamemodeChange = e => {
    setGamemode(e)
  }

  if (loaded) {
    const stats = [
      'assists',
      'kills',
      'dailyKills',
      'weeklyKills',
      'teamKills',
      'headshotKills',
      'wins',
      'dailyWins',
      'weeklyWins',
      'losses',
      'top10s',
      'roundsPlayed'
    ]

    const modes = ['solo', 'solo-fpp', 'duo', 'duo-fpp', 'squad', 'squad-fpp',]


    return (
      <Container>
        <NavigatorSolid solid={true} handleClick={handleClick} />
        <View>
          {notFound ? (
            <>
              <h1>404 Player not found</h1>
            </>
          ) : (
            <>
              <PlayerHeader>
                <PlayerName>{user.name}</PlayerName>
                <ModeSelector>
                  {modes.map(mode => (
                    <ModeOption
                      active={gamemode === mode}
                      onClick={() => handleGamemodeChange(mode)}>
                      {mode}
                    </ModeOption>
                  ))}
                </ModeSelector>
              </PlayerHeader>
              <PlayerStats>
                {stats.map(stat => (
                  <PlayerHistory key={Math.random()}>
                    <span>{stat}</span>
                    <span>
                      {user.stats.attributes.gameModeStats[gamemode][stat]}
                    </span>
                  </PlayerHistory>
                ))}
              </PlayerStats>
            </>
          )}
        </View>
        <Footer />
      </Container>
    )
  } else {
    return (
      <Container>
        <NavigatorSolid solid={true} handleClick={handleClick} />
        <View>
          <div className="loading" />
        </View>
        <Footer />
      </Container>
    )
  }
}
