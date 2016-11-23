<template>
  <header class="o-header">
    <router-link class="o-header__link o-header__link--logo" to="/">InnoCMS</router-link>
    <div class="o-header__links">
      <router-link class="o-header__link" to="/settings"
        active-class="o-header__link--active">Settings</router-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<style lang="sass">
  .o-header {
    position: relative;
    background-color: #fff;
    display: flex;
    flex-direction: row;

    &__links {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }

    &__link {
      padding: 1rem;
      display: block;
      text-decoration: none;
      color: #888;
      font-weight: 400;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 5px;

      &:hover,
      &--active {
        color: #000;
      }

      &--active {
        box-shadow: inset 0 -2px 0 0 #000;
      }

      &--logo {
        font-weight: 800;
        color: #000;
      }
    }
  }
</style>
