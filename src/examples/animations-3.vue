<template>
  <div>
    <transition name="fade" mode="out-in">
      <component :is="view"></component>
    </transition>
    <br>
    <button @click="clicked()">Toggle</button>
  </div>
</template>

<script>
import One from "@/components/One";
import Two from "@/components/Two";
export default {
  data() {
    return {
      show: true,
      view:'One'
    }
  },
  methods: {
    clicked(){
      if (this.view === 'One'){
        this.view = 'Two'
      }
      else{
        this.view = 'One'
      }
    }
  },
  computed: {},
  components: {
    One,
    Two
  }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active{
  transition: opacity 1s ease;
}
.fade-enter,
.fade-leave{
  opacity: 0;
}
</style>