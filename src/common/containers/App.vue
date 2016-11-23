<template>
  <div class="o-app">
    <o-header />
    <main class="o-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'

  export default {
    components: {
      'o-header': Header
    }
  }
</script>

<style lang="sass">
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    font: 16px / 1.5 'Helvetica Neue', sans-serif;
    background-color: #f0f0f0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .o-app {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .o-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .o-content {
    flex: 1;
    margin-top: 1px;

    &__head {
      background-color: #fff;
      padding: 1rem 2rem;
    }
  }

  .c-head {
    padding: 1rem;
    background-color: #fff;
    margin-top: 1px;

    &__description {
      margin-bottom: 0;
    }
  }

  .c-nav {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    background-color: #fff;
    margin-top: 1px;
    position: -webkit-sticky;

    &__link {
      padding: .75rem 1rem;
      text-decoration: none;
      color: #888;
      font-size: 12px;
      text-transform: uppercase;
      flex: 1;
      letter-spacing: 3px;
      text-align: center;

      &:hover {
        color: #000;
      }

      &--active {
        color: #000;
        box-shadow: inset 0 -2px 0 0 #000;
      }
    }
  }
</style>
