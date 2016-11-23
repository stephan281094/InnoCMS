<template>
  <div class="c-modal-wrapper">
    <transition name="opacity">
      <div class="c-modal-background" v-if="modal" @click.self="modal.close(modal.el)"></div>
    </transition>
    <transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false">
      <div class="c-modal c-module-item" v-if="modal">
        <span class="c-module-item__title">{{ modal.title }}</span>
      </div>
    </transition>
  </div>
</template>

<script>
  let cache = {}

  export default {
    props: {
      modal: {
        type: Object,
        required: false
      }
    },
    methods: {
      enter: function (el, done) {
        const { modal } = this

        if (modal) {
          cache = modal
          modal.el.style.opacity = 0
          const { top, left, width, height } = modal.el.getBoundingClientRect()

          el.style.top = top + 'px',
          el.style.left = left + 'px',
          el.style.width = width + 'px',
          el.style.height = height + 'px'

          setTimeout(() => {
            el.style.top = '32px'
            el.style.left = '32px'
            el.style.width = 'calc(100% - 64px)'

            setTimeout(() => {
              done()
            }, 500)
          }, 0)
        }
      },
      leave: function (el, done) {
        const { top, left, width, height } = cache.el.getBoundingClientRect()

        el.style.top = top + 'px'
        el.style.left = left + 'px'
        el.style.width = width + 'px'
        el.style.height = height + 'px'

        setTimeout(() => {
          cache.el.style.opacity = null
          done()
        }, 500)
      }
    }
  }
</script>

<style lang="sass">
  .opacity-enter-active {
    transition: .5s ease-in-out;
  }

  .opacity-enter,
  .opacity-leave-active {
    opacity: 0;
  }

  .c-modal-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: flex;
    pointer-events: none;
  }

  .c-modal-background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 999;
    transition: .5s ease-in-out;
    pointer-events: auto;
  }

  .c-modal {
    position: absolute;
    background-color: #fff;
    transition: .5s ease-in-out;
    z-index: 1000;
    pointer-events: auto;
  }
</style>
