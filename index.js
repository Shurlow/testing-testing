class TodoList {
  constructor(array) {
    this.list = array || []
  }

  get() {
    return this.list
  }

  add(item) {
    if(typeof item === 'string') this.list.push(item)
  }

  pop() {
    return this.list.pop()
  }
}

module.exports = TodoList