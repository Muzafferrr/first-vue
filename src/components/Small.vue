<template>
  <div>
    <span>This is small.</span><br>
    <span>{{ message }}</span>
  </div>
</template>

<script>
import {eventBus} from "@/main";

export default {
  name: "Big",
  data() {
    return {
      message: ''
    }
  },
  methods: {},
  created() {
    eventBus.$on('fromBig', (title) => {
      this.message = title;
    });
  }
}
</script>

<style scoped>

</style>