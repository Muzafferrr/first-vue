<!-- props larda ana componentten alt componente doğru bir akış vardır. -->
<!-- propstan gelen veriler direkt olarak işlenmemeli datanın içinde bi değişken eklenip atama yapılarak işlenmeli -->
<template>
  <div>
    <props :title-big="titleValue"></props>
    <!--    <first title-big="this is title"></first>       statik değer gönderimi -->
  </div>
</template>

<script>
import globalComponents from "@/globalComponents";

export default {
  data() {
    return {
      titleValue: 'this is title'
    }
  },
  methods: {},
  computed: {},
  components: {
    ...globalComponents
  }
}
</script>