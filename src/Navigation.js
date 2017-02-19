'use strict'

import { StackNavigator } from 'react-navigation'

// ===[ Screens ]===
import TodoList from './screens/TodoList'
import NewItem from './screens/NewItem'

const navigationConfig = {
  initialRouteName: 'TodoList'
}

const Navigation = StackNavigator({
  TodoList: { screen: TodoList },
  NewItem: { screen: NewItem }
}, navigationConfig)

export default Navigation
