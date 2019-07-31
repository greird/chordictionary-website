<template>
	<div id="app">
		<masthead />
		<searchbar v-on:newtab="updateTab" />
		<br />in root scope: {{ tab }}
	</div>
</template>

<script>
	import masthead from './components/masthead.vue'
	import searchbar from './components/searchbar.vue'

	export default {
		name: 'app',
		components: {
			masthead,
			searchbar
		}, 
		data() {
			return { tab: 'no input' }
		},
		methods: {
			updateTab(inputTab) {
				this.tab = inputTab;
			}
		}
	}
</script>