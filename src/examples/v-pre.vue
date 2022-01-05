<template>

  <div>
    <!--    data içindeki değişkenin değil de direkt olarak stringin yazılmasını istendiği yerlerde kullanılır-->
    <p v-pre>{{ value }}</p>
  </div>

</template>

<script>

export default {
  data() {
    return {
      value: 'vue'
    }
  },
  methods: {}
}
</script>