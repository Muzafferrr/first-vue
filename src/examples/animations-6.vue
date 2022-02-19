<template>
  <div>
    <input type="number" v-model.number="number" step="20">
    <p>{{animatedNumber}}</p>
  </div>
</template>

<script>
import gsap from "gsap"
export default {
  data() {
    return {
      number:0,
      nextNumber:0
    }
  },
  methods: {},
  computed: {
    animatedNumber(){
      return this.nextNumber.toFixed(0)
    }
  },
  watch:{
    number: function (newValue){
      gsap.to(this.$data, {duration: 1, nextNumber: newValue})
    }
  },
  components: {}
}
</script>
<style>
</style>