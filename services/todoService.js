const addTask = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('success')
    }, 1000)
  })
}

const removeTask = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('success')
    }, 1000)
  })
}

export default {
  addTask,
  removeTask
}
