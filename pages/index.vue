<template>
  <global-layout>
    <todo-list></todo-list>
    <loader-spinner></loader-spinner>
  </global-layout>
</template>

<script>
import GlobalLayout from '../components/GlobalLayout/index.vue'
import TodoList from '../pages/TodoList/index.vue'
import LoaderSpinner from '../components/LoaderSpinner/index.vue'
export default {
  name: 'IndexPage',
  components: {
    GlobalLayout,
    TodoList,
    LoaderSpinner
  },
}
</script>
