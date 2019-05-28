import Vue from 'vue'
import App from './App.vue'

import LoinsUI from './index.js'
Vue.use(LoinsUI)
new Vue({
    el: '#app',
    render: h => h(App)
})