import React from 'react'
import { Actions, Router, Scene } from 'react-native-router-flux'
import { Home } from './Home'
import { Login } from './Login'

export const Pages = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene initial key="login" component={Login} hideNavBar path={'home'} />
        <Scene key="home" component={Home} hideNavBar path={'home'} />
      </Scene>
    </Router>
  )
}
