<template>
  <div class="home">
    <div class="hero">
      <div
        class="hero__img"
        :style="{
          backgroundImage: 'url(https://images.pexels.com/photos/1090972/pexels-photo-1090972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        }"
      ></div>

      <div class="hero__body">
        <div class="hero__body--item item__main">
          <h1>Your Desire</h1>

          <h3>Is Our Responsibility</h3>

          <p>
            Make a deal in fastest time possible by a man <br> at
            <a href="">DesireHunt.com</a>
          </p>

          <div class="hero__search">
            <input
              type=""
              name=""
              value=""
              placeholder="Search Now"
            >

            <button>
              <img
                src="./images/search-icon.png"
                alt=""
              >
            </button>
          </div>
        </div>

        <div
          v-if="!breakpoint.smAndBelow"
          class="hero__body--item"
        ></div>
      </div>

      <div class="hero__footer">
        <div class="hero__instructions instructions">
          <div class="instructions__background"></div>

          <div
            v-for="i in 3"
            :key="i"
            class="instructions__item"
          >
            <div class="instructions__img">
              <img
                :src="require(`./images/sample-${i}.png`)"
                alt=""
              >
            </div>

            <div class="instructions__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam dolorem distinctio unde sit
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Home',

  setup () {
    return {
      breakpoint: inject('breakpoint')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/home';
</style>
