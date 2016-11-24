<template>
  <div class="c-modules" v-on:keyup.esc="closeModal">
    <div class="c-module-item" v-for="module in modules" @click="openModal($event, module)">
      <span class="c-module-item__title">{{ module.title }}</span>
    </div>

    <pagination />
    <modal :modal="modal" />
  </div>
</template>

<script>
  import Pagination from '../components/Pagination.vue'
  import Modal from '../components/Modal.vue'

  export default {
    name: 'module-list',
    components: {
      pagination: Pagination,
      modal: Modal
    },
    data () {
      return {
        // Retrieve from API/ Graphql endpoint
        modules: [
          { title: 'Ervaren Symfony 2 developer' },
          { title: 'Ervaren VueJS developer' },
          { title: 'Frontend guru gezocht' },
          { title: 'Social media manager worden?' },
          { title: 'Ervaren Symfony 2 developer' },
          { title: 'Ervaren VueJS developer' },
          { title: 'Frontend guru gezocht' },
          { title: 'Social media manager worden?' },
          { title: 'Ervaren Symfony 2 developer' },
          { title: 'Ervaren VueJS developer' }
        ],
        modal: null
      }
    },
    methods: {
      openModal: function (event, module) {
        const el = event.currentTarget

        this.modal = {
          el,
          title: module.title,
          close: this.closeModal
        }
      },
      closeModal: function () {
        this.modal = null
      }
    }
  }
</script>

<style lang="sass">
  .c-modules {
    padding: .5rem;
    display: flex;
    flex-direction: column;
  }

  .c-module-item {
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

    &:hover,
    &:focus {
      // color: #c00;
    }

    &__title {
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
