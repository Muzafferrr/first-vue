<template>
  <div>
    <post-for-loop v-for="(item,index) in content" :key="index" :item="item" :value="value"/>
  </div>
</template>

<script>
import PostForLoop from "@/components/PostForLoop";

export default {
  data() {
    return {
      content: [
        {number: 1, content: 'one'},
        {number: 2, content: 'two'},
        {number: 3, content: 'three'},
        {number: 4, content: 'four'},
      ],
      value: '<h1>Value</h1>'
    }
  },
  methods: {},
  computed: {},
  components: {
    PostForLoop
  }
}
</script>
<style>

</style>
