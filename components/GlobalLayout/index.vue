<template>
<div class="main-body">
  <layout-header></layout-header>
  <div class="m-content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import LayoutHeader from '../LayoutHeader/index.vue'
export default {
  name: 'GlobalLayout',
  components: {
    LayoutHeader
  }
}
</script>
<style lang="scss" scoped>

</style>
