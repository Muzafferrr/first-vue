<template>
  <div>
    <span class="content">This is try component
    </span>
    <br>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Try",
  data() {
    return {}
  }
}
</script>

<style scoped>
.content {
  color: royalblue;
  font-size: 22px;
  font-family: Caladea, sans-serif;
}
</style>