<template>

  <div id="app">
    <span v-color-changer:bold.border="{color: 'yellow', fontsize:'56px'}">Try</span><br>
    <span v-color-changer="{color: 'green', fontsize: ''}">try</span>
  </div>

</template>

<script>

export default {
  data() {
    return {}
  },
  directives: {
    colorChanger: {
      bind: (el, binding) => {
        el.style.backgroundColor = binding.value.color
        el.style.fontSize = binding.value.fontsize    //çoklu özellik değişimi olabilir
        console.log("directive worked")
        if (binding.modifiers.border) {
          el.style.border = 'thick solid #0000ff'
          console.log("directive worked with modifier")
        }
        if (binding.arg.bold) {
          el.style.fontWeight = 'bold'
        }
        console.log("EL STYLE", el.style)
        console.log("BINDING", binding)
      }
    }
  },
  methods: {}
}
</script>