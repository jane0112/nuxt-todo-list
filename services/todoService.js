const addTask = (param) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (param) {
        resolve('success')
      } else {
        reject(new Error('error'))
      }
    }, 1000)
  })
}

const removeTask = (param) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (param) {
        resolve('success')
      } else {
        reject(new Error('error'))
      }
    }, 1000)
  })
}

export default {
  addTask,
  removeTask
}
