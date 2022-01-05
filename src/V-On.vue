<template>
  <div>
    <input type="text" :placeholder="inputHolder" v-on:change="changeInputCatch()">
    <input type="text" :placeholder="eventInput" v-on:change="changeInput($event)">
    <input type="text" :maxlength="maxLength">
    <button v-on:click="buttonClick">Button</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      inputHolder: 'try it again',
      eventInput: 'write event value',
      maxLength: 10
    }
  },
  methods: {
    changeInput($event) {
      console.log($event.target.value)
    },
    changeInputCatch() {
      console.log('value değişti')
    },
    buttonClick() {
      console.log('tıklandı')
    }
  }
}
</script>