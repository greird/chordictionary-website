<template>
	<div id="app">
		<masthead />
		<searchbar 
			v-on:newtab="findTab" 
			v-bind:inputLength="this.tuning.length" 
			/>
		<p>{{ message }}</p>
		<chordinfo 
			v-if="this.tab.length === this.tuning.length"
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
				Chordictionary: require('./assets/vendors/js/chordictionary.js'), // load ChordictionaryJS lib
				instrument: null,
				tuning: 'EADGBE',
				fretNumber: 24,
				fretsToDisplay: 7,
				maxSpan: 4,
				message: '',
				tab: '',
				chordName: '',
				chordNotes: '',
				chordFormulas: ''
			}
		},
		methods: {
			findTab(inputTab) {
				let chordInfo = this.instrument.getChordInfo(inputTab);
				if (chordInfo.error) {
					this.message = chordInfo.error;
				} else {
					this.tab = inputTab;
					this.chordName = chordInfo.name.join(', ');
					this.chordNotes = chordInfo.notes;
					this.chordFormulas = chordInfo.formula;
					this.message = '';
				}
			}
		},
		created() {
			this.instrument = new this.Chordictionary.Instrument('EADGBE', 24, 7, 4); // Define default instrument
		}
	}
</script>