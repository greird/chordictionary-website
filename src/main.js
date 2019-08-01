import Vue from 'vue'
import App from './App.vue'

//import './assets/vendors/js/chordictionary'

import './assets/css/base.css'
import './assets/css/chordictionary.css'
import './assets/vendors/css/chordictionary.min.css' // Tab layout used by the core ChordictionaryJS livrary

Vue.config.productionTip = false

new Vue({
	render: h => h(App)
}).$mount('#app')