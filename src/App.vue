<template>
  <div class="app">
    <TheNavbar class="app__navbar" />

    <div class="app__body">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar/TheNavbar'

export default {
  components: {
    TheNavbar
  },
  setup () {

  }
}
</script>

<style lang="scss">
.app {
  height: 100%;
  min-height: 100vh;

  .app__body {
    height: 100%;
  }
}
</style>
