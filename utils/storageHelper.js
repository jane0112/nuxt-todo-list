const keys = {
  todoList: 'todoList',
  locale: 'locale'
}

export default {
  set todoList (val) {
    if (val) {
      window.localStorage.setItem(keys.todoList, JSON.stringify(val))
    }
  },
  get todoList () {
    return JSON.parse(window.localStorage.getItem(keys.todoList))
  },
  set locale (val) {
    if (val) {
      window.localStorage.setItem(keys.locale, JSON.stringify(val))
    }
  },
  get locale () {
    return JSON.parse(window.localStorage.getItem(keys.locale))
  },
  keys
}
