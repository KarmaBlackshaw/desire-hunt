<template>
  <nav class="navbar-container">
    <div class="navbar">
      <div
        v-if="breakpoint.isBelow(774)"
        class="navbar__hamburger"
      >
        <button
          ref="target"
          class="btn-menu"
          type="button"
          :class="{
            'menu-open': isMenuOpen
          }"
          @click.stop="toggleMenu"
        >
          <i
            class="btn-menu__bars"
            aria-hidden="true"
          ></i>
        </button>
      </div>

      <div class="navbar__title">
        Anade Photography
      </div>

      <!-- PC Navigation -->
      <div
        v-if="breakpoint.isAbove(774)"
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
        v-if="breakpoint.isAbove(774)"
        class="navbar__append"
      >
        <div class="append__contact">
          Contact
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition>
        <div
          v-if="breakpoint.isBelow(774) && isMenuOpen"
          class="navbar__aside"
        >
          <div class="sidebar">
            <div class="sidebar__background"></div>

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
                    @click="navigate(), isMenuOpen = false"
                  >
                    {{ nav.text }}
                  </li>
                </router-link>
              </ul>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script>
import { inject, ref, reactive } from 'vue'

export default {
  name: 'TheNavbar',

  setup () {
    const isMenuOpen = ref(false)

    const navigations = reactive([
      { text: 'Home', to: '/' },
      { text: 'Services', to: '/services' },
      { text: 'About', to: '/about' },
      { text: 'Blog', to: '/blog' }
    ])

    function toggleMenu () {
      isMenuOpen.value = !isMenuOpen.value
    }

    return {
      toggleMenu,

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
