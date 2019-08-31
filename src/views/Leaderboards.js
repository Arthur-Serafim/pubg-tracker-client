import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navigator from '../components/NavigatorSolid'
import Footer from '../components/Footer'
import {
  Container,
  View,
  PlayerHeader,
  PlayerName,
  ModeSelector,
  ModeOption,
  PlayerStats,
  PlayerHistory,
  NameRank,
  UserName
} from './LeaderboardsStyles'

export default function Leaderboards(props) {
  let gameMode = props.match.params.game_mode
  let [leaderboards, setLeaderboards] = useState([])
  let [loaded, setLoaded] = useState(false)

  const modes = ['solo', 'solo-fpp', 'duo', 'duo-fpp', 'squad', 'squad-fpp',]

  const handleClick = path => {
    props.history.push(`/leaderboards/${path}`)
  }

  const handleUser = user => {
    props.history.push(`/steam/${user}`)
  }

  useEffect(() => {
    if(!modes.includes(gameMode)) {
      props.history.push('/')
    }
    setLoaded(false)
    ;(async () => {
      try {
        const res = await axios.post('https://murmuring-lowlands-38302.herokuapp.com/api/leaderboards', {
          game_mode: gameMode
        })
        console.log(res.data)
        setLeaderboards(res.data)
        setLoaded(true)
      } catch (err) {
        setLoaded(true)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameMode])

  return (
    <Container>
      <Navigator handleClick={handleClick}/>
      <View>
        <PlayerHeader>
          <PlayerName>Leaderboards</PlayerName>
          <ModeSelector>
            {modes.map(mode => (
              <ModeOption
                active={gameMode === mode}
                onClick={() => handleClick(mode)}
                key={Math.random()}>
                {mode}
              </ModeOption>
            ))}
          </ModeSelector>
        </PlayerHeader>
          {loaded ? (
            <PlayerStats>
              {leaderboards.map(user => (
                <PlayerHistory key={Math.random()}>
                  <NameRank>
                    <span>{user.attributes.rank}</span>
                    <UserName onClick={() => handleUser(user.attributes.name)}>{user.attributes.name}</UserName>
                  </NameRank>
                  <span>{user.attributes.stats.killDeathRatio.toFixed(2)} KD</span>
                </PlayerHistory>
              ))}
            </PlayerStats>
          ) : (
            <PlayerStats loading>            
              <div className="loading"></div>
            </PlayerStats>
          )}
      </View>
      <Footer />
    </Container>
  )
}
