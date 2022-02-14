<template>
  <div>
    <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">{{ tab }}</button>
    <component :is="currentTab"></component>
  </div>
</template>

<script>
import globalComponents from "@/globalComponents";

export default {
  data() {
    return {
      currentTab: 'first',
      tabs: ["first", "second", "third"]
    }
  },
  methods: {},
  computed: {},
  components: {
    ...globalComponents
  }
}
</script>