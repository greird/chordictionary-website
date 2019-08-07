import Vue from 'vue'
import App from './App.vue'

import './assets/css/base.css'
import './assets/css/chordictionary.css'
import './assets/css/mobile.css'
import './assets/vendors/css/chordictionary.min.css' // Tab layout used by the core ChordictionaryJS livrary

Vue.config.productionTip = false

new Vue({
	render: h => h(App)
}).$mount('#app')

window.onload = setCanvaSize;
window.addEventListener('resize', setCanvaSize);
function setCanvaSize() {

    var browser = {}; // browser info

    // Get window's width and height
    browser = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
    };

    var slide = document.getElementsByClassName("slide");
    for (var i = 0; i < slide.length; i++) {
      if (i === 0) slide[i].style.minHeight = browser.height + 'px';
      else slide[i].style.minHeight = browser.height + 'px';
    }
}