<template>
  <div>
    this is slot component <br>
    <slot name="title"></slot>
    <slot name="content" :person="person">{{ person.age }}</slot> <!-- fallback content -->
  </div>
</template>

<script>
export default {
  name: "Slot",
  data() {
    return {
      person: {name: 'vue', age: '33'}
    }
  }
}
</script>

<style scoped>

</style>