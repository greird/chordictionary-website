<template>
	<div id="app">

		<masthead />

		<searchbar 
		v-on:newtab="findTab" 
		v-bind:inputLength="tuning.length > 0 ? tuning.length : 6" 
		/>

		<p v-if="message">{{ message }}</p>
		
		<div id="results" v-else>
			<div id="chord-layout" class="chord-small"
			v-if="chordLayout"
			v-html="chordLayout"></div>

			<chordinfo 
			v-if="chordName && !message"
			v-bind:chordName="chordName"
			v-bind:chordTab="tab" 
			v-bind:chordNotes="chordNotes"
			v-bind:chordFormulas="chordFormulas"
			v-bind:chordTuning="tuning"
			/>
			<div class="clear"></div>
		</div>

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
				message: '',
				tuning: '',
				tab: '',
				chordName: '',
				chordNotes: '',
				chordFormulas: '',
				chordLayout: ''
			}
		},
		methods: {
			findTab(inputTab, inputTuning) {
				// Create new instrument
				try {
					this.instrument = new this.Chordictionary.Instrument(inputTuning, 24, 5, 4);
					this.tuning = this.instrument.tuning.join('')
				} catch (e) {
					this.message = 'Woops, check your tuning, you sound a bit out of tune!';
				}

				// Search for the tab in Chordictionary
				try {
					this.tab = inputTab;

					if (this.tab.length === this.tuning.length) {

						let chordInfo = this.instrument.getChordInfo(this.tab);

						if (chordInfo.error) {
							this.message = chordInfo.error;
							this.chordName = '';
						} else {
							this.chordName = chordInfo.name.join(', ');
							this.chordNotes = chordInfo.notes;
							this.chordFormulas = chordInfo.formula;
							this.message = '';
						}

						this.chordLayout = this.instrument.getChordLayout(this.chordName, this.tab, this.tuning);
					} else {
						this.message = 'The tab length should be the same as the tuning.';
					}
				} catch (e) {
					// Do nothing
				}
			}
		}
	}
</script>