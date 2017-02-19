'use strict'

import React, { Component } from 'react'
import codePush from 'react-native-code-push'
import { Provider } from 'mobx-react/native'
import Navigation from './Navigation'

// ===[ Stores ]===
import listStore from './stores/listStore'

@codePush
class App extends Component {
  render () {
    return (
      <Provider listStore={listStore}>
        <Navigation />
      </Provider>
    )
  }
}

export default App
