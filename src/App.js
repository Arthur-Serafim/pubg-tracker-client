import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './views/Home'

const leaderboards = (props) => {
  return (
    <h1>{props.match.params.game_mode}</h1>
  )
}

export default function App() {
  return (
    <Router>
      <Route exact path='/leaderboards/:game_mode' component={leaderboards} />
      <Route exact path='/' component={Home} />
    </Router>
  )
}