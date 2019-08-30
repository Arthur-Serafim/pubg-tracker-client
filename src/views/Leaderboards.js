import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Navigator from '../components/NavigatorSolid'
import Footer from '../components/Footer'
import { Container, View } from './LeaderboardsStyles'

export default function Leaderboards(props) {
  let gameMode = props.match.params.game_mode
  let [leaderboards, setLeaderboards] = useState([])
  let [loaded, setLoaded] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        const res = await axios.post('http://localhost:5000/api/leaderboards', {
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
  }, [])

  return (
    <Container>
      <Navigator />
      <View>
        {loaded ? <h1>{gameMode}</h1> : <div className="loading"></div>}
      </View>
      <Footer />
    </Container>
  )
}
