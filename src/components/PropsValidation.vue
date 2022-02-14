<template>
  <div class="container">
    <h3>This is try</h3>
    {{ titleBig }}
  </div>
</template>

<script>
export default {
  name: "One",
  props: {
    titleBig: {
      type: String, Number,
      required: true,
      default: () => {
        return 'default value'
      },
      validator: (value) => {
        // return ['this is title', 'index', 'header'].indexOf(value) !== -1
        return value.length === 5
      }
    }
  },
  data() {
    return {
      mutateTitle: this.titleBig
    }
  },
  methods: {
    tryOne() {
      this.mutateTitle = 'new Value'
    }
  }
}
</script>

<style scoped>
.container {
  font-size: 22px;
  color: darkblue;
}
</style>