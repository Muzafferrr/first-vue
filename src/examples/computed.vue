<template>
  <div id="app">
    {{ msg }} <br>
    {{ reverseMsg }}
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: "This is message."
    }
  },
  methods: {},
  computed: {
    reverseMsg() {
      return this.msg.split('').reverse().join('');
    }
  }
}
</script>