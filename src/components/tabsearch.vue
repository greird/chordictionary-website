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
			<div v-for="chord in chords" v-bind:key="chord.id">
				<chordinfo 
					v-if="chord.name && !message"
					v-bind:chordLayout="instrument.getChordLayout(tab, chord)"
					v-bind:chordName="chord.pitch + ' ' + chord.quality"
					v-bind:chordNotes="chord.notes.filter((item, index) => chord.notes.indexOf(item) === index && item !== 'x').join()"
					v-bind:chordFormulas="chord.formula.join('-')"
					/>
				<div class="clear"></div>
			</div>
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
		data() {
			return { 
				instrument: null,
				message: '',
				tuning: this.$route.params.tuning || '',
				tab: this.$route.params.tab || '',
				chords: []
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
							this.chords = [];
						} else {
							this.chords = chordInfo.chords;
						}
					} else {
						this.message = 'The tab length should be the same as the tuning.';
					}
				} catch (e) {
					// do nothing
				}
			}
		}
	}
</script>