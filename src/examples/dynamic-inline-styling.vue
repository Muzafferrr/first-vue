<template>
  <div>
    <div :style="styleObj">
      this is try
    </div>
    <div :style="{color: activeColor, fontSize: fontSize1}">
      this is try
    </div>
    <div :style="[styleObj, styleObj2]">
      this is try
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeColor: 'blue',
      fontSize1: '23px',
      styleObj: {
        fontSize: '34px',
        color: 'red'
      },
      styleObj2: {
        color: 'yellow'
      }
    }
  },
  methods: {},
  computed: {}
}
</script>
<style>
</style>
