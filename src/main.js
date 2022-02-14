import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue();

// Componentlerin main.js içinde tanımlanması için kullanılan iki yol

// import One from "@/components/One";
// Vue.component('first', One);

// Vue.component('Two', () => {
//   import('./components/Two')
// })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
