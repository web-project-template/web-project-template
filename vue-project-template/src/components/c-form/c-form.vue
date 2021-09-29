<template>
  <form class="c-form">
    <slot></slot>
  </form>
</template>

<script>
import Schema from 'async-validator'
export default {
  name: 'c-form',
  props: {
    model: null,
    rules: null
  },
  methods: {
    validate (callback) {
      var validator = new Schema(this.rules)
      validator.validate(this.model, (errors, fields) => {
        console.log('validate:', errors, fields)
        if (errors) {
          // validation failed, errors is an array of all errors
          // fields is an object keyed by field name with an array of
          // errors per field
          // eslint-disable-next-line
          callback.call(null, false, errors)
          return
        }
        // validation passed
        // eslint-disable-next-line
        callback(true)
      })
      return true
    }
  }
}
</script>
