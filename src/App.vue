<template>
	<div id="app">

		<nav>
			<a href="#tabsearch">Search by tab</a>
			<a href="#chordsearch">Search by name</a>
			<a href="#documentation" class="web-only">Library documentation</a>
			<a href="https://github.com/greird/chordictionaryjs" class="right web-only">Sources</a>
		</nav>

		<masthead />

		<tabsearch />

		<chordsearch />

		<documentation />

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
		}
	}
</script>