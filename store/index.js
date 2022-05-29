import storage from '../utils/storageHelper'
import todoService from '../services/todoService'
import { getRandomVal } from '../utils/randomValHelper'
import * as types from './mutationTypes'

const state = () => ({
  tasks: [],
  isLoading: false,
  lang: 'zh',
})

const actions = {
  async addTask({ commit, state }, tasks) {
    commit(types.SET_IS_LOADING, true)
    const res = await todoService.addTask(tasks)
    if (res === 'success') {
      commit(types.ADD_TASK, tasks)
      commit(types.SET_IS_LOADING, false)
    } else {
      alert('Error !!!')
    }
  },
  async removeTask({ commit, state }, idx) {
    commit(types.SET_IS_LOADING, true)
    const res = await todoService.removeTask()
    if (res === 'success') {
      commit(types.REMOVE_TASK, idx)
      commit(types.SET_IS_LOADING, false)
    } else {
      alert('Error !!!')
    }
  },
  toggleTask({ commit, state }, data) {
    commit(types.TOGGLE_TASK, data)
  },
  getTasks({ commit, state }, tasks) {
    commit(types.SET_TASKS, tasks)
  },
  setIsLoading({ commit, state }, isLoading) {
    commit(types.SET_IS_LOADING, isLoading)
  },
  setLang({ commit, state }, lang) {
    commit(types.SET_LANG, lang)
  },
}

const mutations = {
  [types.ADD_TASK](state, task) {
    state.tasks = [
      ...state.tasks,
      { content: task, done: false, id: getRandomVal() },
    ]
    storage.todoList = state.tasks
  },
  [types.REMOVE_TASK](state, id) {
    const idx = state.tasks.map(item=>item.id).indexOf(id)
    state.tasks.splice(idx, 1)
    storage.todoList = state.tasks
  },
  [types.TOGGLE_TASK](state, task) {
    task.done = !task.done
    storage.todoList = state.tasks
  },
  [types.SET_IS_LOADING](state, isLoading) {
    state.isLoading = isLoading
  },
  [types.SET_TASKS](state, tasks) {
    state.tasks = tasks || []
  },
  [types.SET_LANG](state, lang) {
    state.lang = lang
    storage.locale = lang
  },
}

export default {
  state,
  actions,
  mutations,
}
