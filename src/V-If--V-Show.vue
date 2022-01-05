<template>
  <!--  <div>-->
  <!--    computed içerisinde oluşturulan bir fonksiyon kullanılırken parantezler yazılmaz. computedlar değişken gibi davranır.-->
  <!--    method içerisindeki fonksiyonlar kullanılırken parantezler yazılır.-->
  <!--    v-if te her seferinde element doma eklenir ve çıkartılır.-->
  <!--    v-show da ise element başlangıçta oluşturulur ve false olması durumunda display:none yapılır-->
  <!--    <div v-if="tryOne === 1">this is 1</div>-->
  <!--    <div v-else-if="tryOne === 2">this is 2</div>-->
  <!--    <div v-else-if="tryOne === 3">this is 3</div>-->
  <!--    <div v-else>this is 4</div>-->
  <!--  </div>-->

  <div>
    <div v-if="tryOne">
      this is bigger than 0.5
      <input type="text" placeholder="bigger input" key="1">
    </div>
    <div v-else>
      this is smaller than 0.5
      <input type="text" placeholder="smaller input" key="2">
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: 2
    }
  },
  methods: {
    // tryOne(){
    //   return 3
    // }
  },
  computed: {
    tryOne() {
      // return 3
      const a = Math.random() > 0.5;
      console.log(a)
      return a
    }
  }
}
</script>