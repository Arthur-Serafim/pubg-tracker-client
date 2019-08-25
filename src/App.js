import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Player from './views/Player'

const leaderboards = props => {
  return <h1>{props.match.params.game_mode}</h1>
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/leaderboards/:game_mode" component={leaderboards} />
        <Route exact path="/:platform/:username" component={Player} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}
