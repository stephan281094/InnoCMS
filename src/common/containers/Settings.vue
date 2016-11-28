<template>
  <div>
    <div class="c-head">
      <h1 class="c-head__title">Settings</h1>
      <p class="c-head__description">Configure modules, users and other administrative settings.</p>
    </div>
    <div class="c-nav">
      <router-link class="c-nav__link" to="/settings/modules"
        active-class="c-nav__link--active">Modules</router-link>
      <router-link class="c-nav__link" to="/settings/users"
        active-class="c-nav__link--active">Users</router-link>
    </div>
    <div class="o-content">
      <transition :name="transition">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'settings',
    data () {
      return {
        transition: 'slide-left'
      }
    },
    watch: {
      $route: function (to, from) {
        this.transition = this.$route.meta.transition
      }
    }
  }
</script>

<style lang="sass">
  .o-content {
    flex: 1;
  }

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: .35s ease-in-out;
  }

  .slide-left-enter,
  .slide-left-leave-active,
  .slide-right-enter,
  .slide-right-leave-active {
    transform: translateX(0);
  }

  .slide-left-enter,
  .slide-right-leave-active {
    transform: translateX(100%);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    transform: translateX(-100%);
  }
</style>
