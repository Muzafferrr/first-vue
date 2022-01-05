<template>

  <div>
    <ul>
      <li v-for="(item,index) in items" :key="index">Product Name: {{ item.type }} Stock Quantity: {{ item.number }}
      </li>
    </ul>
    <button @click="tryArray()">Add</button>
  </div>

</template>

<script>

export default {
  data() {
    return {
      items: [
        {type: 'pen', number: 33},
        {type: 'ball', number: 344},
        {type: 'rocket', number: 563},
        {type: 'guitar', number: 64},
        {type: 'table', number: 12}
      ]
    }
  },
  methods: {
    tryArray() {
      // this.items.push({type:'pencil', number:888})   sona eleman ekler
      // this.items.unshift({type:'pencil', number:888})   başa eleman ekler
      // const a = this.items.pop();   sondan eleman siler
      // const a = this.items.shift();    baştan eleman siler
      // const a = this.items.splice(1, 2)  verilen index aralığında elemanları siler
      // const a = this.items.splice(1, 2, {type:'pencil', number:888}, {type:'paper', number:77})  verilen index aralığında elemanları siler ve yerine verilen elemanı ekler
      //const a = this.items.concat({type:'pencil', number:888})  ana diziyi bozmadan yeni diziye elemanı ekler
      // const a = [...this.items, {type:'pencil', number:888}]
      // this.items[2] = {type:'pencil', number:888} bu kullanımı vue algılamaz kullanma
      this.$set(this.items, 2, {type: 'pencil', number: 888})  //belli bir indexteki elemana direkt atama yapmak istiyorsak yukarıdakini değil $set() fonkstyonunu kullanmalıyız
    }
  }
}
</script>