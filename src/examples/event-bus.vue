<!-- event bus basit projeler için uygundur. karmaşık yapılarda kullanılması önerilmez -->
<!-- child componentler arası ilişkileri sağlar -->
<!-- main js içine oluşlturulan eventBus değişkeni bu ders içindir. -->
<template>
  <div>
    <Big/>
    <Small/>
  </div>
</template>

<script>
import Big from "@/components/Big";
import Small from "@/components/Small";

export default {
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {
    Big,
    Small
  }
}
</script>