<template>
	<section class="slide white" id="tabsearch">

		<h2>Tab dictionary</h2>
		<p>Search for a tab (e.g. "X32010") and change the tuning of your instrument if needed.</p>

		<searchform 
			v-bind:showTabInput='1'
			v-on:newtab="findTab" 
			/>

		<p v-if="message">{{ message }}</p>

		<div class="results" v-else>
			<div class="chord-layout chord-small"
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
</template>

<script>
	import searchform from './searchform.vue'
	import chordinfo from './chordinfo.vue'

	export default {
		name: 'tabsearch',
		components: {
			searchform,
			chordinfo
		}, 
		props: ['Chordictionary'],
		data() {
			return { 
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
					this.instrument = new this.Instrument(inputTuning, 24, 5, 4);
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