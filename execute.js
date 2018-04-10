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
      console.log(key)
      this[key].sendKeys(data[key])
    }
    console.log('\n ------------------------------------ \n')
  }
}



const data1 = {
  field1: '1',
  field2: '2',
  field3: '3',
  field4: '4',
  list1: 'list 1'
}
const data2 = {
  field1: '1',
  field3: '3',
  list1: 'list 1',
  list2: 'list 2'
}
const data3 = {
  field2: '2',
  field3: '3',
  field4: '4'
}

const executor = new Executor()


executor.setData(data1)

