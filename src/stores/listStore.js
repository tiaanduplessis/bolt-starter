'use strict'

import {observable, action} from 'mobx'

let index = 0

class ObservableListStore {
  @observable list = []

  @action addListItem (item) {
    this.list.push({
      name: item,
      items: [],
      index
    })
    index++
  }

  @action addItem (item, name) {
    this.list.forEach((l) => {
      if (l.index === item.index) {
        l.items.push(name)
      }
    })
  }
}

const observableListStore = new ObservableListStore()
export default observableListStore
