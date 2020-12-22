import Vue from 'vue'
import App from './App.vue'

import JLoading from './lib'

Vue.use(JLoading)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
