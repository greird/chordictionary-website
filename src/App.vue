<template>
	<div id="app">
		<masthead />
		<searchbar v-on:newtab="updateTab" />
		<chordinfo
			v-bind:message="message"
			v-bind:chordName="chordName"
			v-bind:chordTab="tab" 
			v-bind:chordNotes="chordNotes"
			v-bind:chordFormulas="chordFormulas"
			v-bind:chordTuning="tuning"
			/>
	</div>
</template>

<script>
	import masthead from './components/masthead.vue'
	import searchbar from './components/searchbar.vue'
	import chordinfo from './components/chordinfo.vue'

	export default {
		name: 'app',
		components: {
			masthead,
			searchbar,
			chordinfo
		}, 
		data() {
			return { 
				message: '',
				tuning: 'EADGBE',
				tab: 'X32010',
				chordName: 'C',
				chordNotes: 'xCEGCE',
				chordFormulas: '1-3-5'
			}
		},
		methods: {
			updateTab(inputTab) {
				this.tab = inputTab;
			}
		}
	}
</script>