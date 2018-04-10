class ListSelect {
  constructor(element) {
    this.element = element
  }

  sendKeys(value) {
    console.log(`execute send keys for select list, current value is ${value}`)
  }
}

module.exports = {
  ListSelect
}
