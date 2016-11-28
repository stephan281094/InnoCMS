<template>
  <div>
    <div class="c-head">
      <h1 class="c-head__title">Quick links</h1>
      <p class="c-head__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum tenetur,
        ipsa repudiandae ipsum adipisci explicabo neque nostrum aspernatur.

      </p>
      <p>
        <router-link to="/foo">Foo</router-link>
      </p>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>
