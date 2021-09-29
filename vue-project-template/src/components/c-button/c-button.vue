<template>
  <button @click="handleClick"
          :disabled="buttonDisable"
          :class="[
            'c-button',
            type ? 'c-button-' + type : '',
            {
              'is-disabled':buttonDisable
            },
            cusclass]">
    <span v-if="$slots.default"><slot></slot></span>
    <slot name="after"></slot>
  </button>
</template>

<script>
export default {
  name: 'c-button',
  data () {
    return {

    }
  },
  props: {
    cusclass: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: null
    },
    disabled: Boolean
  },
  computed: {
    buttonDisable () {
      return this.disabled
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus">
  @import '../../assets/mixins/index.styl';
  .is-disabled{
    background:linear-gradient(180deg,rgba(242,242,242,1) 0%,rgba(223,223,223,1) 100%) !important;
    box-shadow:0px 6px 0px 0px rgba(0,0,0,0.05) !important;
  }
  .c-button{
    button-size(.5em,1em,16px,1,1.5em);
    button-variant(white,rgba(223,223,223,1),rgba(0,0,0,0.05))
  }
</style>
