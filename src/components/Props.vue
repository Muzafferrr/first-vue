<template>
  <div class="container">
    {{ mutateTitle }}<br>
    <button @click="tryOne()"> Prop değiştirme butonu</button>
  </div>
</template>

<script>
export default {
  name: "One",
  props: ['titleBig'],
  data() {
    return {
      mutateTitle: this.titleBig
    }
  },
  methods: {
    tryOne() {
      this.mutateTitle = 'new Value'
    }
  }
}
</script>

<style scoped>
.container {
  font-size: 22px;
  color: darkblue;
}
</style>