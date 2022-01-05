<template>
  <div>
    <!--    çok fazla değişikliğin olmadığı yerlerde her seferinde renderlamamak için kullanılır-->
    <button v-once v-on:click="changeValue">{{ value }}</button>
  </div>

</template>

<script>

export default {
  data() {
    return {
      value: true
    }
  },
  methods: {
    changeValue() {
      this.value = !this.value
      console.log(this.value)
    }
  }
}
</script>