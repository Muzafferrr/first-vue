<template>
  <div>
    <transition name="bounce">
      <p v-if="show">Hello! It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
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
.bounce-enter-active{
  animation: bounce-in 0.5s;
}
.bounce-leave-active{
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(1.5);
  }
  100%{
    transform: scale(1);
  }
}
</style>