<template>
  <transition name="c-dialog"
              v-on:before-enter="beforeEnter"
              v-on:after-leave="afterLeave">
    <div class="c-dialog" v-show="visible">
      <div class="c-dialog-mask">
        <div class="c-dialog-wrapper" v-on:click.self="$emit('click')">
          <div class="c-dialog-container">

            <div class="c-dialog-header" v-if="$slots.header">
              <slot name="header">default header</slot>
            </div>

            <div class="c-dialog-body">
              <slot>default body</slot>
            </div>

            <div class="c-dialog-footer" v-if="$slots.footer">
              <slot name="footer">
                <!--<button class="dialog-default-button" v-on:click="$emit('close')">关闭</button>-->
              </slot>
            </div>
          </div>
          <!--<div class="dialog-close" @click="$emit('close')">
            <span>X</span>
          </div>-->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      deafult: false
    }
  },
  methods: {
    beforeEnter: function (el) {
      if (this.visible) { document.body.classList.add('el-popup-parent--hidden') }
    },
    afterLeave: function (el) {
      document.body.classList.remove('el-popup-parent--hidden')
    }
  },
  mounted () {
    // console.log('c-dialog mounted')
  },
  destroyed () {
    // console.log('c-dialog destroyed')
  }
}
</script>

<style lang="stylus">
  .c-dialog{
    /*全屏浮动到页面顶部，并且内部元素可以滚动*/
    position:fixed;
    z-index:999;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin:0;
    overflow: auto;
    -webkit-overflow-scrolling : touch;

    background-color:rgba(0,0,0,0.5);
    transition:opacity 0.3s ease;
    -webkit-transition:opacity 0.3s ease;
  }
  .c-dialog-mask{
    display:table;
    width:100%;
    height:100%;
    .c-dialog-wrapper{
      display:table-cell;
      vertical-align:middle;

      .c-dialog-container{
        width:calc(90% - 0);
        margin:1.5rem auto;

        background-color:rgba(255,255,255,1);
        border-radius:1em;
        transition:all 0.3s ease;
        -webkit-transition:all 0.3s ease;

        .c-dialog-header{
          /*h3{
            margin-top:0;
            color:#42b983;
          }*/
        }
        .c-dialog-body{
          padding:.25rem .3rem;
        }

        .c-dialog-default-button{
          float:right;
        }
      }
    }
  }

  .c-dialog-enter{
    opacity:0;
  }
  .c-dialog-enter .c-dialog-container,
  .c-dialog-leave-active .c-dialog-container{
    -webkit-transform:scale(1.1);
    transform:scale(1.1);
  }
  .c-dialog-leave-active{
    opacity:0;
  }
</style>
