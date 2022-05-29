<template>
  <div class="todo d-flex dir-col">
    <h1 class="m-title">{{ $t('__todoList') }}</h1>
    <div class="t-body">
      <template v-for="todoItem in tasks">
        <todo-item :key="todoItem.id" :todo-item="todoItem"></todo-item>
      </template>
    </div>
    <div class="t-footer d-flex">
      <div class="input-box">
        <input
          v-model="content"
          class="input"
          type="text"
          name="addTodo"
          :placeholder="$t('__pleaseEnterTask')"
          @keypress.enter="addTask"
        />
      </div>
      <div class="btn-box">
        <button class="add-btn" @click="addTask">
          <img :src="addImg" class="add-img" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import add from '../../assets/img/add.svg'
import stroage from '../../utils/storageHelper'
import TodoItem from './components/TodoItem.vue'

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  data() {
    return {
      content: '',
      addImg: add,
      res: null
    }
  },
  computed: {
    ...mapState(['tasks']),
    todos() {
      return this.tasks.map((item) => item.content)
    },
  },
  mounted() {
    this.$store.dispatch('getTasks', stroage.todoList || [])
  },
  methods: {
    addTask() {
      if (this.content.trim() === '') {
        return
      }
      this.$store.dispatch('addTask', this.content)
      this.content = ''
    }
  },
}
</script>
<style lang="scss" scoped>
.todo {
  margin: auto;
  padding: 20px;
  max-width: 50%;
  height: 650px;
  border: 1px solid $secondary;
  border-radius: 4px;
  background: #fff;
  font-size: 1.1em;
  .t-body {
    height: 85%;
    overflow: auto;
    padding: 20px;
  }
  .m-title {
    height: 10%;
  }
}
.t-footer {
  width: 100%;
  height: 5%;
}

.input-box {
  width: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 300px;
  .input {
    width: 95%;
    height: 100%;
    border: 1px solid $secondary;
    border-radius: 4px;
    display: block;
    outline: none;
    font-size: 1em;
    flex-grow: 1;
  }
}
.add-btn {
  @include reset-btn();
  position: relative;
  display: block;
  width: 35px;
  height: 34px;
  background: $primary;
  border-radius: 4px;
  margin: auto;
  .add-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.btn-box {
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 50px;
}
</style>
