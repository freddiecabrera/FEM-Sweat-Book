import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './scripts/store'
import Splash from './scripts/components/Splash'
import App from './scripts/components/App'
import { AppRegistry, Text, View } from 'react-native'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      started: false
    }
  }

  startWorkout = () => {
    this.setState({ started: true })
  }

  renderRoot(ComponentToRender) {
    return (
      <Provider store={store}>
        <ComponentToRender startWorkout={this.startWorkout} />
      </Provider>
    )
  }

  render() {
    const { started } = this.state
    return started ? this.renderRoot(App) : this.renderRoot(Splash)
  }
}

AppRegistry.registerComponent('FEMSweatBook', () => Main);
