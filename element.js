function ElementFinder(selector) {
  this.selector = selector

  this.sendKeys = (value) => {
    console.log(`execute send keys fo current selector ${selector}, current value is ${value}`)
  }
}

module.exports = {
  $: (selector) => new ElementFinder(selector)
}
