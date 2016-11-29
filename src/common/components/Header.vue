<template>
  <header class="o-header">
    <router-link class="o-header__link o-header__link--logo" to="/">InnoCMS</router-link>
    <div class="o-header__links">
      <router-link class="o-header__link" to="/settings"
        active-class="o-header__link--active">Settings</router-link>
        <div class="o-header__profile">
          <div class="o-header__avatar">
            <img class="o-header__avatar__image" src="/static/avatar.jpg" alt="Profile picture">
          </div>
        </div>
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
    align-items: center;
    padding: 0 .5rem;

    &__links {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }

    &__link {
      padding: .5rem;
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

      &--logo {
        font-weight: 800;
        color: #000;
      }
    }

    &__profile {
      position: relative;
      user-select: none;
      padding: .5rem;
      display: flex;
    }

    &__avatar {
      position: relative;
      width: 35px;
      height: 35px;
      margin: auto;

      &:after {
        content: "";
        position: absolute;
        margin: auto;
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0;
        border-radius: 50%;
        overflow: hidden;
      }

      &:active:after {
        opacity: .2;
      }

      &__image {
        margin: auto;
        display: block;
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }
</style>
