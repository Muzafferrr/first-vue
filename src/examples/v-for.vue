<template>
  <div>
    <p v-for="(item,index) in person" :key="index">name: {{ item.name }}, age: {{ item.age }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      person: [
        {name: 'david', age: 12},
        {name: 'john', age: 25},
        {name: 'nash', age: 44},
        {name: 'tom', age: 23},
      ]
    }
  }
}
</script>