<!-- default value özellikle propsun gönderilmesi şart olmadığı yerlerde kullanılır. -->
<template>
  <div>
    <props-validation :title-big="titleValue"></props-validation>
  </div>
</template>

<script>
import globalComponents from "@/globalComponents";

export default {
  data() {
    return {
      titleValue: 'title'
      // titleValue: 'this is title'
    }
  },
  methods: {},
  computed: {},
  components: {
    ...globalComponents
  }
}
</script>