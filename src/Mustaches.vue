<template>
  <div>
    <p>{{ value }}</p>      <!--Mustaches-->
    <p>{{ Value }}</p>      <!--Mustaches-->
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: 'TRY',
      Value: 'This is case sensitive TRY variable'
    }
  }
}
</script>