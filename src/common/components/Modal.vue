<template>
  <div class="c-modal-wrapper">
    <transition name="opacity">
      <div class="c-modal-background" v-if="modal"
        @click.self="modal.close()"></div>
    </transition>
    <transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false">
      <div class="c-modal c-list__item" v-if="modal">
        <button class="c-modal__close" @click.self="modal.close()"></button>
        <span class="c-list__item__name">{{ modal.name }}</span>
        <div class="c-modal__content">
          <slot />
        </div>
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
    created: function () {
      if (typeof window !== 'undefined') {
        window.addEventListener('keyup', this.handleKeyPress)
      }
    },
    beforeDestroy: function () {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keyup', this.handleKeyPress)
      }
    },
    methods: {
      handleKeyPress: function (event) {
        if (event.keyCode === 27) {
          this.modal.close()
        }
      },
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
            el.style.top = '16px'
            el.style.left = '16px'
            el.style.width = 'calc(100% - 32px)'
            el.style.height = 'calc(100% - 32px)'

            const content = el.querySelectorAll('.c-modal__content')[0]
            const close = el.querySelectorAll('.c-modal__close')[0]
            content.classList.add('c-modal__content--visible')
            close.classList.add('c-modal__close--visible')

            setTimeout(() => {
              done()
            }, 350)
          }, 0)
        }
      },
      leave: function (el, done) {
        const { top, left, width, height } = cache.el.getBoundingClientRect()

        el.style.top = top + 'px'
        el.style.left = left + 'px'
        el.style.width = width + 'px'
        el.style.height = height + 'px'

        const content = el.querySelectorAll('.c-modal__content')[0]
        const close = el.querySelectorAll('.c-modal__close')[0]
        content.classList.remove('c-modal__content--visible')
        close.classList.remove('c-modal__close--visible')

        setTimeout(() => {
          cache.el.style.opacity = null
          done()
        }, 350)
      }
    }
  }
</script>

<style lang="sass">
  .opacity-enter-active {
    transition: .35s ease-in-out;
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
    transition: .35s ease-in-out;
    pointer-events: auto;
  }

  .c-modal {
    position: absolute;
    background-color: #fff;
    transition: .35s ease-in-out;
    z-index: 1000;
    pointer-events: auto;
    cursor: default;
    display: block;

    &__close {
      position: absolute;
      right: 0;
      top: 0;
      width: 50px;
      height: 50px;
      background-color: #c00;
      border: 0;
      outline: 0;
      cursor: pointer;
      opacity: 0;
      transition: .35s ease-in-out;

      &--visible {
        opacity: 1;
      }
    }

    &__content {
      opacity: 0;
      transform: translateY(50px);
      transition: .35s ease-in-out;

      &--visible {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
</style>
