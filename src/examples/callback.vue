<template>
  <div>
    <product-page-callback :my-callback-function="otherFunc" :message="value"></product-page-callback>
    <span>{{ value }}</span>
  </div>
</template>

<script>
import ProductPageCallback from "@/components/ProductPageCallback";

export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    otherFunc(message) {
      this.value = message
    }
  },
  computed: {},
  components: {
    ProductPageCallback
  }
}
</script>