<template>
  <div>
    <Try v-html="slotValue"></Try>
  </div>
</template>

<script>
import Try from "@/components/Try";

export default {
  data() {
    return {
      slotValue: '<h3>This is slot with html</h3>'
    }
  },
  methods: {},
  computed: {},
  components: {
    Try
  }
}
</script>