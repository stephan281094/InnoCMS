<template>
  <div class="c-list">
    <div class="c-list__item" v-for="item in items" @click="openModal($event, item)">
      <div class="c-list__item__name">
        {{ item.name }}
      </div>
    </div>

    <modal :modal="modal" />
  </div>
</template>

<script>
  import Modal from '../components/Modal.vue'

  export default {
    props: {
      type: {
        type: String,
        required: true
      }
    },
    components: {
      modal: Modal
    },
    data () {
      const isInitialRender = !this.$root._isMounted

      return {
        modal: null,
        items: isInitialRender ? this.$store.getters.getActiveItems : []
      }
    },
    methods: {
      openModal: function (event, item) {
        this.modal = {
          el: event.currentTarget,
          name: item.name,
          close: this.closeModal
        }
      },
      closeModal: function () {
        this.modal = null
      }
    },
    beforeMount () {
      this.$store.commit('SET_ACTIVE_TYPE', { type: this.type })
      this.items = this.$store.getters.getActiveItems
    }
  }
</script>

<style lang="sass">
  .c-list {
    position: absolute;
    width: 100%;
    padding: .5rem;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }

  .c-list__item {
    padding: 1rem;
    background-color: #fff;
    margin-bottom: 1px;
    cursor: pointer;
    overflow: hidden;
    color: #000;
    user-select: none;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    box-shadow: none;
    flex-wrap: nowrap;

    &__name {
      display: inline-block;
      color: inherit;
      font-weight: 400;
      flex: 1;
    }

    &__date {
      align-self: flex-end;
      text-decoration: none;
      color: #888;
    }
  }

  .c-pagination {
    margin-top: .5rem;
    flex: 1;
    overflow: hidden;
    display: flex;

    &__link {
      padding: .75rem 1rem;
      background-color: #fff;
      margin-right: 1px;
      text-decoration: none;
      color: #000;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-size: 12px;
      flex: 1;
      text-align: center;

      &:hover {
        color: #000;
      }

      &:active {
        background-color: #fafafa;
      }
    }
  }
</style>
