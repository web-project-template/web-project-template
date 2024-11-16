<template>
  <transition name="c-share"
              v-on:before-enter="beforeEnter"
              v-on:after-leave="afterLeave">
    <div class="c-share" v-show="visible" v-on:click.self="clickThis">
        <div class="c-share-container">
          <slot></slot>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'c-share',
  data () {
    return {
      sto: null
    }
  },
  props: {
    visible: {
      type: Boolean,
      deafult: false
    }
  },
  watch: {
    visible (newVal, oldVal) {
      if (newVal) {
        this.sto = setTimeout(() => {
          this.$emit('click')
        }, 3000)
      }
    }
  },
  methods: {
    beforeEnter: function (el) {
      if (this.visible) {
        document.body.classList.add('el-popup-parent--hidden')
      }
    },
    afterLeave: function (el) {
      document.body.classList.remove('el-popup-parent--hidden')
    },
    clickThis () {
      if (this.sto)window.clearTimeout(this.sto)
      this.$emit('click')
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus">
  .c-share {
    /*全屏浮动到页面顶部，并且内部元素可以滚动*/
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;

    .c-share-container {
      /*transition:all 0.3s ease;
      -webkit-transition:all 0.3s ease;*/
    }
  }

  .c-share-enter {
    opacity: 0;
  }

  /*.c-share-enter .c-share-container,
  .c-share-leave-active .c-share-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }*/

  .c-share-leave-active {
    opacity: 0;
  }
</style>
