<template>
  <nav class="navbar-container">
    <div class="navbar">
      <div
        v-if="breakpoint.isBelow(971)"
        class="navbar__hamburger"
      >
        <button
          ref="target"
          class="btn-menu"
          type="button"
          :class="{
            'menu-open': isMenuOpen
          }"
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

      <!-- PC Navigation -->
      <div
        v-if="breakpoint.isAbove(971)"
        class="navbar__links"
      >
        <ul>
          <li
            v-for="(nav, navKey) in navigations"
            :key="navKey"
            class="link__item"
          >
            <router-link :to="nav.to">
              {{ nav.text }}
            </router-link>
          </li>
        </ul>
      </div>

      <div
        v-if="breakpoint.isAbove(971)"
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

      <!-- Mobile Navigation -->
      <div
        v-if="breakpoint.isBelow(971)"
        ref="sidebar"
        class="navbar__aside"
        :class="{
          'sidebar--open': isMenuOpen
        }"
      >
        <div class="sidebar">
          <div class="sidebar__background"></div>

          <div class="sidebar__title">
            <img
              src="./images/logo.png"
              alt="Logo"
              class="sidebar__logo"
            >
          </div>

          <div class="sidebar__links">
            <ul>
              <router-link
                v-for="(nav, navKey) in navigations"
                :key="navKey"
                v-slot="{navigate, isExactActive}"
                custom
                :to="nav.to"
              >
                <li
                  class="link__item"
                  :class="{
                    'link__item--active': isExactActive
                  }"
                  @click="navigate"
                >
                  {{ nav.text }}
                </li>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { inject, ref, reactive } from 'vue'
import { onClickOutside } from '@vueuse/core'

export default {
  name: 'TheNavbar',

  setup () {
    const isMenuOpen = ref(false)

    const navigations = reactive([
      { text: 'Home', to: '/' },
      { text: 'Services', to: '/services' },
      { text: 'About Us', to: '/about-us' },
      { text: 'Blog', to: '/blog' }
    ])

    const sidebar = ref(null)
    onClickOutside(sidebar, () => {
      isMenuOpen.value = false
    })

    return {
      // refs
      sidebar,

      navigations,

      breakpoint: inject('breakpoint'),

      isMenuOpen
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/the-navbar';
</style>
