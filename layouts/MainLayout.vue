<template>
<div class="main-body">
  <layout-header></layout-header>
  <div class="m-content">
    <nuxt></nuxt>
  </div>
</div>
</template>

<script>
import LayoutHeader from '~/components/LayoutHeader/index.vue'
export default {
  name: 'MainLayout',
  components: {
    LayoutHeader
  }
}
</script>
