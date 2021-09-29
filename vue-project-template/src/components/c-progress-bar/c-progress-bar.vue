<template>
  <div class="c-pregress-bar">
    <div class="bar">
      <div class="bar-line" :style="{width:progress*100+'%'}"></div>
      <div class="bar-tips" :style="{left:progress*100+'%'}">
        <span v-html="parseInt(progress*100) + '%'"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-progress-bar',
  props: {
    progress: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="stylus">
  @import '../../assets/mixins/index.styl';

  .c-pregress-bar {
    .bar {
      position: relative;
      width: 100%;
      height: 20px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 16px;
      border: 2px solid rgba(0, 0, 0, 0.1);
      &-line {
        pos(absolute, 0, 0);
        left:0;
        top:0;
        width: 50%;
        height: 100%;
        background: rgba(255, 211, 98, 1);
        box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 0.5);
        border-radius: 10px;
      }

      &-tips {
        pos(absolute);
        left:0%;
        top:-62px;
        span {
          position: relative;
          display: inline-block;
          height: 48px;
          background: rgba(255, 255, 255, 1);
          padding: 0 14px;
          font-size: 24px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          border-radius: 10px;
          line-height: 48px;
          transform: translate(-50%, 0);
          box-shadow: 0px 0px 16px 0px rgba(85, 241, 255, 1);
          &:before {
            content: '';
            pos(absolute);
            left:50%;
            bottom:-8px;
            dwh(block, 0, 0);
            margin-left: -9px;
            border-left: 9px solid transparent;
            border-right: 9px solid transparent;
            border-top: 8px solid white;
          }
        }
      }
    }
  }
</style>
