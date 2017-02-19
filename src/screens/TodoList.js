import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, List, ListItem, FormInput } from 'react-native-elements'
import {observer, inject} from 'mobx-react/native'
import colors from '../config/colors'

@inject('listStore') @observer
class TodoList extends Component {

  state = {
    text: ''
  }

  static navigationOptions = {
    title: '⚡ Bolt List'
  }

  addListItem = () => {
    this.props.listStore.addListItem(this.state.text)
    this.setState({ text: '' })
  }

  updateText = (text) => this.setState({text})

  addItemToList = (item) => {
    const { navigate } = this.props.navigation
    navigate('NewItem', { item })
  }

  render () {
    const { list } = this.props.listStore

    return (
      <View style={styles.container}>

        <List containerStyle={styles.listContainer}>
          {list.map((l, i) => {
            return (
              <ListItem
                key={i}
                title={l.name.toUpperCase()}
                onPress={() => this.addItemToList(l)}
                subtitle={`${l.items.length}`}
              />
            )
          })}
        </List>

        <View>

          <FormInput
            value={this.state.text}
            containerStyle={styles.addInput}
            onChangeText={this.updateText}
          />

          <Button
            buttonStyle={styles.addButton}
            title={this.state.text === '' ? 'New List' : 'Add New List Item'}
            icon={{name: 'add'}}
            raised
            onPress={this.state.text === '' ? this.toggleInput : () => this.addListItem(this.state.text)}
          />

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-between'},
  listContainer: { marginTop: 0 },
  addButton: {
    backgroundColor: colors.primary,
    margin: 15
  },
  addInput: {
    margin: 10
  }
})

export default TodoList
