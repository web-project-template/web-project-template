<template>
  <div class="c-form-item">
    <label class="c-form-item__label" v-if="label || $slots.label">
      <slot name="label">{{label}}</slot>
    </label>
    <div class="c-form-item__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-form-item',
  props: {
    label: String
  },
  created () {
    // console.log(this.$slots.label)
  }
}
</script>

<style lang="stylus">
  .c-form-item{
    display:flex;
    /*line-height:66px;*/
    /*align-items:center;*/
    .c-form-item__label{
      flex:0 0 30%;
      max-width:30%;
      font-size:28px;
      /*font-family:PingFangSC-Regular;
      font-weight:400;*/
      color:rgba(255,211,98,1);
      padding-left:50px;
    }
    .c-form-item__content{
      flex:0 0 70%;
      max-width:70%;

      textarea,
      input{
        width:100%;
        font-size:28px;
        /*font-family:PingFangSC-Regular;
        font-weight:400;*/
        color:white;
        background-color:transparent;
        border:0;
        outline:0;
      }
    }
  }
</style>
