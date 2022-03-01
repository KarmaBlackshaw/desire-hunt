<template>
  <nav class="navbar-container">
    <div class="navbar">
      <div class="navbar__title">
        <img
          src="./images/logo.png"
          alt="Logo"
          class="navbar__logo"
        >

        DesireHunt
      </div>

      <div class="navbar__link">
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

      <div class="navbar__append">
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
export default {
  name: 'TheNavbar'
}
</script>

<style lang="scss" scoped>
@import './styles/the-navbar';
</style>
