<!--App.vue Post component props gönderme kodları-->
<template>
  <div>
    <post :content="content"/>
  </div>
</template>

<script>
import Post from "@/components/Post";

export default {
  data() {
    return {
      content: [
        {number: 1, content: 'one'},
        {number: 2, content: 'two'},
        {number: 3, content: 'three'},
        {number: 4, content: 'four'},
      ]
    }
  },
  methods: {},
  computed: {},
  components: {
    Post
  }
}
</script>
<style>

</style>
