<!-- # işareti v-slot un kısaltması olarak kullanılır -->
<!-- mutlaka slot etiketlerinin bir name tagi olmalıdır -->
<template>
  <div>
    <VSlot>
      <template #content="{person}">
        <h2>this is content</h2>
        {{ person.name }}
      </template>
      <!--      <template #content>
              <h2>this is content</h2>
            </template>-->
    </VSlot>
  </div>
</template>

<script>
import VSlot from "@/components/VSlot";

export default {
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {
    VSlot
  }
}
</script>