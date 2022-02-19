<template>
  <div>
    <input type="text" v-model="query">
    <transition-group tag="ul" name="list" :css="false"
                      @before-enter="beforeEnter"
                      @enter="enter"
                      @leave="leave"
    >
      <li v-for="item in computedList" :key="item.msg">
        {{item.msg}}
      </li>
    </transition-group>
  </div>
</template>

<script>
import Velocity from "velocity-animate"
export default {
  data() {
    return {
      query:'',
      list:[
        {msg:'apple'},
        {msg:'pear'},
        {msg:'orange'},
        {msg:'banana'},
        {msg:'watermelon'},
      ]
    }
  },
  methods: {
    beforeEnter(el){
      el.style.opacity = "0"
      el.style.height = "0"
    },
    enter(el, done){
      const delay = 400;
      setTimeout(() => {
        Velocity(el, {opacity:1, height:"1.6em"},{complete:done})
      },delay);
    },
    leave(el, done){
      const delay = 400;
      setTimeout(() => {
        Velocity(el, {opacity:0, height:"0"},{complete:done})
      },delay);
    }
  },
  computed: {
    computedList(){
      return this.list.filter((item) => {
        return item.msg.toLowerCase().indexOf(this.query.toLowerCase()) !== -1
      });
    }
  },
  components: {}
}
</script>
<style>
</style>