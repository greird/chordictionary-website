import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

import './assets/css/base.css'
import './assets/css/chordictionary.css'
import './assets/css/mobile.css'

import '../node_modules/chordictionary/build/chordictionary.min.css'
import {Instrument, isValidTab, isValidTuning} from 'chordictionary'

import tabsearch from './components/tabsearch.vue'

Vue.config.productionTip = false

Vue.mixin({
	methods: {
		Instrument: Instrument,
		isValidTab: isValidTab,
		isValidTuning: isValidTuning
	}
})

const router = new VueRouter({
	routes: [
		{ path: '/:tab', component: tabsearch },
		{ path: '/tab/:tab', component: tabsearch },
		{ path: '/tab/:tab/tuning/:tuning', component: tabsearch }
	],
	scrollBehavior: function (to) {
		if (to.hash) {
			return {
				selector: to.hash
			}
		}
	}
})

new Vue({
	render: h => h(App),
	beforeMount() {
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
	},
	router
}).$mount('#app')