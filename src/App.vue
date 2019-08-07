<template>
	<div id="app">

		<section class="slide introduction">
			<nav>
				<a href="#documentation">Documentation</a>
				<a href="https://github.com/greird/chordictionaryjs" class="right">Sources</a>
			</nav>

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
		</section>

		<section class="slide" id="documentation" style="background-color: #FFF;">
			<documentation v-bind:Chordictionary="Chordictionary" />
		</section>

	</div>
</template>

<script>
	import masthead from './components/masthead.vue'
	import searchbar from './components/searchbar.vue'
	import chordinfo from './components/chordinfo.vue'
	import documentation from './components/documentation.vue'

	export default {
		name: 'app',
		components: {
			masthead,
			searchbar,
			chordinfo,
			documentation
		}, 
		data() {
			return { 
				Chordictionary: require('./assets/vendors/js/chordictionary.js'), // load ChordictionaryJS lib
				instrument: null,
				message: 'Search for a tab (e.g. "X32010") and change the tuning of your instrument if needed.',
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