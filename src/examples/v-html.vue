<template>
  <div>
    <!--    v-html içerisine verilen değişkenler html kodu olarak algılanır.-->
    <p v-html="vue"></p>
  </div>

</template>

<script>

export default {
  data() {
    return {
      vue: '<a href="https://vuejs.org/">vue web</a>'
    }
  },
  methods: {}
}
</script>