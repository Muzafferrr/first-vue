<template>
  <div>
    <button @click="addToCard">click me</button>
  </div>
</template>

<script>
export default {
  props: {
    product: String
  },
  data() {
    return {}
  },
  methods: {
    addToCard() {
      this.$emit('updateValue', this.product)
    }
  }
}
</script>

<style scoped>

</style>