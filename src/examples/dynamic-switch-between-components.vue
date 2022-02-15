<template>
  <div>
    <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">{{ tab }}</button>
    <!--    keep alive componentler arası geçişte verinin kalmasını sağlar-->
    <keep-alive>
      <component :is="currentTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import ComponentA from "@/components/ComponentA";
import ComponentB from "@/components/ComponentB";

export default {
  data() {
    return {
      currentTab: 'ComponentA',
      tabs: ['ComponentA', 'ComponentB']
    }
  },
  methods: {},
  computed: {},
  components: {
    ComponentA,
    ComponentB
  }
}
</script>