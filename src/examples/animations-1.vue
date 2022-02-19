<template>
  <div>
    <transition name="fade">
      <span v-if="show">Hello</span>
    </transition>
    <br>
    <button @click="show = !show">Toggle</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      show: true
    }
  },
  methods: {},
  computed: {},
  components: {}
}
</script>
<style>
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active{
  transition: opacity 1s;
}
</style>