<template>
  <div>
    <span>This is big.</span><br>
    <input type="text" v-model="title" @keyup="eventBusFunction">
  </div>
</template>

<script>
import {eventBus} from "@/main";

export default {
  name: "Big",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    eventBusFunction() {
      eventBus.$emit('fromBig', this.title)
    }
  }
}
</script>

<style scoped>

</style>