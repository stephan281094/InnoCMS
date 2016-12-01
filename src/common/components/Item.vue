<template>
  <dl class="c-d-list">
    <dd class="c-d-list__item" v-for="key in Object.keys(item)">
      <strong class="c-d-list__label">{{ key }}</strong>
      <span class="c-d-list__value">{{ item[key] }}</span>
    </dd>
  </dl>
</template>

<script>
  export default {
    name: 'item',
    data () {
      return {
        item: this.$store.getters.getItemById
      }
    }
  }
</script>

<style lang="sass">
  .c-d-list {
    &__item {
      width: 100%;
      display: flex;
      flex-direction: row;
    }

    &__label {
      flex: 1
    }

    &__value {
      flex: 4
    }
  }
</style>
