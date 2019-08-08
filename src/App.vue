<template>
	<div id="app">

		<nav>
			<a href="#tabsearch">Search by tab</a>
			<a href="#chordsearch">Search by name</a>
			<a href="#documentation">Library documentation</a>
			<a href="https://github.com/greird/chordictionaryjs" class="right">Sources</a>
		</nav>

		<masthead />

		<tabsearch v-bind:Chordictionary="Chordictionary" />

		<chordsearch v-bind:Chordictionary="Chordictionary" />

		<documentation v-bind:Chordictionary="Chordictionary" />

	</div>
</template>

<script>
	import masthead from './components/masthead.vue'
	import tabsearch from './components/tabsearch.vue'
	import chordsearch from './components/chordsearch.vue'
	import documentation from './components/documentation.vue'

	export default {
		name: 'app',
		components: {
			masthead,
			tabsearch,
			chordsearch,
			documentation
		}, 
		data() {
			return { 
				Chordictionary: require('./assets/vendors/js/chordictionary.js'), // load ChordictionaryJS lib
			}
		},
	}
</script>