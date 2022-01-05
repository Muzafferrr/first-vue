<template>

  <div>
    <button @click="changeArray()">Change Array</button>
    <p>{{ number }}</p>
  </div>

</template>

<script>

export default {
  data() {
    return {
      alphabet: ['a', 'b', 'c', 'd', 'e'],
      number: [1, 2, 3, 4, 5, 6],
      newArray: []
    }
  },
  methods: {
    changeArray() {
      // this.newArray = this.alphabet.map(item => item === 'c' ? 'newC' : item)
      // this.newArray = this.alphabet.filter(item => item === 'c')
      // this.newArray = this.number.filter(item => item % 2 === 0)
      // this.alphabet.reverse()
      this.number.sort(function () {
        //return a - b    küçükten büyüğe doğru sıralar
        //return b - a    büyükten küçüğe dpğru sıralar
        return 0.5 - Math.random()  //random sıralar
      })
    }
  }
}
</script>