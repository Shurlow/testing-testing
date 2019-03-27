const TodoList = require('./index');

describe('Todo List tests', function() {

  test('cannot add values other than strings to list', () => {
    const list = new TodoList()
    list.add()
    expect(list.get()).toHaveLength(0)
  });

  test('adds string to list', () => {
    const list = new TodoList()
    list.add('buy groceries')
    expect(list.get()).toEqual(expect.arrayContaining(['buy groceries']))
  });

})