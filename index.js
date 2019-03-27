class TodoList {
  constructor() {
    this.list = []
  }

  get() {
    return this.list
  }

  add(item) {
    this.list.push(item)
  }

  pop() {
    return this.list.pop()
  }
}

module.exports = TodoList