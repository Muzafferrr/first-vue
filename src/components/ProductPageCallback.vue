<template>
  <div>
    <input type="text" v-model.lazy="message" @keyup="keyFunc">
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    myCallbackFunction: Function
  },
  data() {
    return {}
  },
  methods: {
    keyFunc() {
      this.myCallbackFunction(this.message)
    }
  }
}
</script>