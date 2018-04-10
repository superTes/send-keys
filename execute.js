const {$} = require('./element')
const {ListSelect} = require('./optionList')

class Executor {
  constructor() {
    this.field1 = $('input#id1')
    this.field2 = $('input#id2')
    this.field3 = $('input#id3')
    this.field4 = $('input#id4')
    this.list1 = new ListSelect($('select#1'))
    this.list2 = new ListSelect($('select#2'))
  }

  setData(data) {
    const keys = Object.keys(data)
    for(const key of keys) {
      this[key].sendKeys(data[key])
    }
  }
}


