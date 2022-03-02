<template>
  <div class="app">
    <TheNavbar class="app__navbar" />

    <div class="app__body">
      <router-view />
    </div>
  </div>
</template>

<script>
import { provide } from 'vue'

import TheNavbar from '@/components/TheNavbar/TheNavbar'

import useBreakpoint from './utils/useBreakpoint'

export default {
  name: 'App',

  components: {
    TheNavbar
  },

  setup () {
    const { breakpoint } = useBreakpoint()
    provide('breakpoint', breakpoint)
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
