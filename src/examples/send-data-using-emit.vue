<!-- emit ile alt componentteki eventler dinlenilebilir. -->
<!-- alt componentler ana componente event gönderbilir. -->
<template>
  <div>
    {{ cardValue.length }}
    <ProductPage :product="a" @updateValue="updateMainComponent"></ProductPage>
  </div>
</template>

<script>

import ProductPage from "@/components/ProductPage";

export default {
  data() {
    return {
      cardValue: [
        1, 2, 3, 4
      ]
    }
  },
  methods: {
    updateMainComponent(e) {
      this.cardValue.push(e);
    }
  },
  computed: {},
  components: {
    ProductPage
  }
}
</script>