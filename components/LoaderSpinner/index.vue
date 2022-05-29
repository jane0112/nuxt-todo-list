<template>
  <div v-if="isLoading" class="mask">
    <div class="spinner"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LoaderSpinner',
  computed: {
    ...mapState(['isLoading']),
  },
}
</script>
<style lang="scss" scoped>
.mask {
  background: rgba(255, 255, 255, 0.479);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 5px solid $primary;
  border-radius: 50%;
  border-top-color: rgba(255, 255, 255, 0.479);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  position: fixed;
  top: 50%;
  left: 50%;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
