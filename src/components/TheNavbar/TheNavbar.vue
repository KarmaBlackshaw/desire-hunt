<template>
  <nav class="navbar-container">
    <div class="navbar">
      <div
        v-if="breakpoint.isBelow(971)"
        class="navbar__hamburger"
      >
        <button
          class="btn-menu"
          :class="{
            'menu-open': isMenuOpen
          }"
          type="button"
          @click="isMenuOpen = !isMenuOpen"
        >
          <i
            class="btn-menu__bars"
            aria-hidden="true"
          ></i>
        </button>
      </div>
      <div class="navbar__title">
        <img
          src="./images/logo.png"
          alt="Logo"
          class="navbar__logo"
        >

        DesireHunt
      </div>

      <div
        v-if="breakpoint.isAbove(971)"
        class="navbar__link"
      >
        <ul>
          <li class="link__item">
            <router-link to="/">
              Home
            </router-link>
          </li>
          <li class="link__item">
            <router-link to="/services">
              Services
            </router-link>
          </li>
          <li class="link__item">
            <router-link to="/about-us">
              About Us
            </router-link>
          </li>
          <li class="link__item">
            <router-link to="/blog">
              Blog
            </router-link>
          </li>
        </ul>
      </div>

      <div
        v-if="breakpoint.smAndAbove"
        class="navbar__append"
      >
        <div class="append__language">
          <img
            src="./images/globe.png"
            alt=""
          >

          Language
        </div>

        <div class="append__contact">
          Contact
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  name: 'TheNavbar',

  setup () {
    const breakpoint = inject('breakpoint')
    const isMenuOpen = ref(false)

    return {
      breakpoint,
      isMenuOpen
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/the-navbar';
</style>
