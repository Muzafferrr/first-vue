<template>

  <div>
    <p>{{ number + 1 }}</p>
    <p>{{ number * 2 }}</p>
    <p>{{ number === 4 ? 'four' : 'not four' }}</p>
    <p>{{ message.length }}</p>
    <p>{{ message.split('').reverse().join('') }}</p>
  </div>

</template>

<script>

export default {
  data() {
    return {
      number: 4,
      message: 'this is message'
    }
  },
  methods: {}
}
</script>