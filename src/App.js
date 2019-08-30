import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Player from './views/Player'
import Leaderboards from './views/Leaderboards'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/leaderboards/:game_mode" component={Leaderboards} />
        <Route exact path="/:platform/:username" component={Player} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}
