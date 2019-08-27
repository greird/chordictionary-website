import Vue from 'vue'
import App from './App.vue'

import './assets/css/base.css'
import './assets/css/chordictionary.css'
import './assets/css/mobile.css'

import '../node_modules/chordictionary/build/chordictionary.min.css'
import {Instrument, isValidTab, isValidTuning} from 'chordictionary'

Vue.config.productionTip = false

Vue.mixin({
	methods: {
		Instrument: Instrument,
		isValidTab: isValidTab,
		isValidTuning: isValidTuning
	}
})

new Vue({
	render: h => h(App),
	created() {
		window.onload = setCanvaSize;
		window.addEventListener('resize', setCanvaSize);
		function setCanvaSize() {

			var browser = {}; // browser info

			// Get window's width and height
			browser = {
				width: window.innerWidth || document.body.clientWidth,
				height: window.innerHeight || document.body.clientHeight
			};

			var slide = document.getElementsByClassName("fullscreen");
			for (var i = 0; i < slide.length; i++) {
				if (i === 0) slide[i].style.minHeight = browser.height + 'px';
				else slide[i].style.minHeight = browser.height + 'px';
			}
		}
	} 
}).$mount('#app')