<template>
	<div id="app">
		<masthead />
		<searchbar v-on:update:inputTab="this.tab = inputTab" />
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
		}
	}
</script>