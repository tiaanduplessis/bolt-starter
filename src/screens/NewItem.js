import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, List, ListItem, FormInput } from 'react-native-elements'
import {observer, inject} from 'mobx-react/native'
import colors from '../config/colors'

@inject('listStore') @observer
class NewItem extends Component {

  state = {
    newItem: ''
  }

  static navigationOptions = {
    title: ({ state }) => state.params.item.name
  }

  addItem = () => {
    if (this.state.newItem === '') { return }
    this.props.listStore.addItem(this.props.navigation.state.params.item, this.state.newItem)
    this.setState({ newItem: '' })
  }

  updateNewItem = (text) => this.setState({ newItem: text })

  render () {
    const { item } = this.props.navigation.state.params

    return (
      <View style={styles.container}>

        <List containerStyle={styles.listContainer}>
          {item.items.map((item, i) => {
            return (
              <ListItem
                key={i}
                title={item}
                hideChevron
              />
            )
          })}
        </List>

        <View>

          <FormInput
            value={this.state.newItem}
            containerStyle={styles.addInput}
            onChangeText={this.updateNewItem}
          />

          <Button
            buttonStyle={styles.addButton}
            title='Add Item'
            icon={{name: 'add'}}
            raised
            onPress={this.addItem}
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

export default NewItem
