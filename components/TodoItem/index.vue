<template>
  <div class="m-list-item d-flex align-items-center mb-1">
    <div class="checkbox-wrap">
      <div class="checkbox" :class="isDone ? 'checked' : ''">
        <input
          :id="`isDone${todoItem.id}`"
          v-model="isDone"
          type="checkbox"
          name="isDone"
          @change="toggle"
        />
      </div>
    </div>
    <label
      :for="`isDone${todoItem.id}`"
      class="content flex-500"
      :class="isDone ? 'done' : ''"
      >{{ todoItem.content }}</label
    >
    <button class="m-btn" @click="remove">
      <img class="m-img" :src="trashImg" alt="delete" />
    </button>
  </div>
</template>

<script>
import trash from '~/assets/img/trash.svg'

export default {
  name: 'TodoItem',
  props: {
    todoItem: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      trashImg: trash,
      isDone: false
    }
  },
  mounted () {
    this.isDone = this.todoItem.done
  },
  methods: {
    remove() {
      this.$store.dispatch('removeTask', this.todoItem.id)
    },
    toggle() {
      this.$store.dispatch('toggleTask', this.todoItem)
    },
  },
}
</script>

<style lang="scss" scoped>
.m-btn {
  @include reset-btn();
}
.m-img {
  @include img-size(20px, 20px);
  margin: auto;
}
.m-list-item {
  input,
  label,
  button {
    display: block;
  }
}
.content {
  cursor: pointer;
  line-height: 1.8;
  margin-left: 10px;
  overflow: auto;

  &.done {
    color: $primary;
  }
}
.checkbox-wrap, .m-btn {
  flex-basis: 64px;
  flex-grow: 0;
  flex-shrink: 1;
}
</style>
