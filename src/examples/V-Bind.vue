<template>
  <div>
    <input type="text" :placeholder="inputHolder">
    <input type="text" :maxlength="maxLength">
  </div>
</template>

<script>

export default {
  data() {
    return {
      inputHolder: 'try it again',
      maxLength: 10
    }
  }
}
</script>