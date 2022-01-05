<template>
  <div>
    <div style="display: none;">
      <!--    v-model içersiinde yapılan bir değişiklik normalde direkt kendini gösterir. eğer değişikliğin bitmesini bekleyip göstermesini istiyorsak .lazy kullanmalıyız-->
      <!--    v-modelle birlikte kullaılan lazy trim number gibi modifierlar var-->
      <input v-model.lazy="message" type="text" placeholder="edit me">
      <textarea v-model="area" name="text" id="" cols="30" rows="10"></textarea>
      <input type="checkbox" v-model="checked">
      <select v-model="selected">
        <option disabled>select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
      </select>
      <p>{{ message }}</p>
      <p>{{ area }}</p>
      <p>{{ checked }}</p>
      <p>{{ selected }}</p>
    </div>
    <div>
      <select v-model="forSelected">
        <option v-for="(item,index) in items" :value="item.value" :key="index">{{ item.option }}</option>
      </select>
      <p>{{ forSelected }}</p>
      <input type="radio" value="1" id="1" v-model="radio">
      <label for="1">1</label>
      <input type="radio" value="2" id="2" v-model="radio">
      <label for="2">2</label>
      <input type="radio" value="3" id="3" v-model="radio">
      <label for="3">3</label>
      <p>{{ radio }}</p>
    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      message: '',
      area: '',
      checked: '',
      selected: null,
      forSelected: '',
      items: [
        {option: 'a', value: 'one'},
        {option: 'b', value: 'two'},
        {option: 'c', value: 'three'}
      ],
      radio: null
    }
  },
  methods: {}
}
</script>