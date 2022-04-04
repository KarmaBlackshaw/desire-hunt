<template>
  <div class="hero">
    <div
      class="hero__img"
      :style="{
        backgroundImage: 'url(https://images.pexels.com/photos/368893/pexels-photo-368893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
      }"
    ></div>

    <div class="hero__body">
      <div class="hero__body--item item__main">
        <h1>Lorem ipsum dolor, sit amet consectetur</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quidem deleniti quibusdam aliquid commodi unde vero dolores suscipit possimus ea.
        </p>
      </div>

      <div
        v-if="!breakpoint.smAndBelow"
        class="hero__body--item"
      ></div>
    </div>

    <div class="hero__footer">
      Creating films in Tacloban City, Leyte
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Hero',

  setup () {
    return {
      breakpoint: inject('breakpoint')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/hero';
</style>
