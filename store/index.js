import storage from '../utils/storageHelper'
import todoService from '../services/todoService'
import { getRandomVal } from '../utils/randomValHelper'
import * as types from './mutationTypes'

const state = () => ({
  tasks: [],
  lang: 'zh',
})

const actions = {
  async addTask({ commit, state }, tasks) {
    window.$nuxt.$loading.start()
    try {
      const res = await todoService.addTask(tasks)
      if (res === 'success') {
        commit(types.ADD_TASK, tasks)
      } else {
        alert(this.$i18n.t(`__errorsOccur`))
      }
    }
    catch{
      alert(this.$i18n.t(`__pleaseEnterTask`)/*  */)
    }
    window.$nuxt.$loading.finish()
  },
  async removeTask({ commit, state }, idx) {
    window.$nuxt.$loading.start()
    try {
      const res = await todoService.removeTask(idx)
      if (res === 'success') {
        commit(types.REMOVE_TASK, idx)
      } else {
        alert(this.$i18n.t(`__errorsOccur`))
      }
    }
    catch {
      alert(this.$i18n.t(`__errorsOccur`))
    }
    window.$nuxt.$loading.finish()
  },
  toggleTask({ commit, state }, data) {
    commit(types.TOGGLE_TASK, data)
  },
  getTasks({ commit, state }, tasks) {
    commit(types.SET_TASKS, tasks)
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
