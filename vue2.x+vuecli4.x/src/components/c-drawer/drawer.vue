<template>
  <div class="flow-drawer"
       :class="{'visible': visible}"
       :style="{'width': width}"
       ref='drawer'>
    <div class="flow-drawer-main" v-if="visible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default SysComponent({
    name: 'drawer',
    props: ['visible', 'data', 'width'],
    data: function () {
      return {}
    },
    methods: {
      close() {
        this.$emit('close')
      },
      submit() {
        this.$emit('submit', this.form)
      }
    },
    mounted() {

    },
    watch: {
      visible(val) {
        const bg = document.querySelector('.drawer-bg')
        if (val) {
          if (!bg) {
            const dom = document.createElement('div')
            dom.className = 'drawer-bg'
            document.body.appendChild(dom)
            dom.addEventListener('click', () => {
              this.close()
            })
          }
        } else {
          bg && bg.parentNode.removeChild(bg)
        }
      }
    },
    beforeDestroy() {
      const self = document.querySelector('.drawer-bg')
      if (self) {
        self.parentNode.removeChild(self)
      }
    }
  })
</script>

<style lang="scss">
  .flow-drawer {
    overflow: hidden;
    position: fixed;
    top: 0;
    right: -100%;
    bottom: 0;
    width: 640px;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .06);
    background-color: #fff;
    transition: right .5s;
    z-index: 921;

    &.visible {
      right: 0;
    }

    .flow-drawer-main {
      height: 100%;
    }
  }

  .drawer-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 920;
    background-color: rgba(0, 0, 0, .3);
  }
</style>