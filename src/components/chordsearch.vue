<template>
	<section class="slide grey" id="chordsearch">

		<h2>Chord generation</h2>
		<p>Type a chord name (e.g. C, F#min, Gsus4, ...) and find out how to play it on your instrument.</p>

		<searchform 
		v-bind:showChordInput="1" 
		v-on:newchord="getChord"
		/>

		<p v-if="results.error">{{ results.error }}</p>

		<div class="results" v-else-if="results.chordList">
			<div class="chord-layout chord-small"
				v-for="chord in simpleChordsList"
				v-bind:key="chord.id"
				v-html="instrument.getChordLayout(chord.tag.join(', '), chord.tab.join(''))">
			</div><div class="clear"></div>

			<br /><button v-on:click="simpleChordsOnly = simpleChordsOnly ? false : true;">Toggle complex chords</button>

			<div v-if="!simpleChordsOnly">
				<div class="chord-layout chord-small"
					v-for="chord in results.chordList"
					v-bind:key="chord.id"
					v-html="instrument.getChordLayout(chord.tag.join(', '), chord.tab.join(''))">
				</div><div class="clear"></div>
			</div>
		</div>



	</section>
</template>

<script>
	import searchform from './searchform.vue'

	export default {
		name: 'chordsearch',
		components: {
			searchform
		}, 
		props: ['Chordictionary'],
		data() {
			return {
				instrument: null,
				simpleChordsOnly: true,
				results: {
					error: ''
				}
			}
		},
		computed: {
			simpleChordsList: function () {
				var chordList = [];
				for (var i = 0; i < this.results.chordList.length; i++) {
					if (this.results.chordList[i].tag.length) chordList.push(this.results.chordList[i]);
				}
				return chordList;
			},
			complexChordsList: function () {
				var chordList = [];
				for (var i = 0; i < this.results.chordList.length; i++) {
					if (!this.results.chordList[i].tag.length) chordList.push(this.results.chordList[i]);
				}
				return chordList;
			}
		},
		methods: {
			getChord(inputChord, inputTuning) {
				// Create new instrument
				try {
					this.instrument = new this.Chordictionary.Instrument(inputTuning, 24, 5, 4);
				} catch (e) {
					this.results.error = 'Woops, check your tuning, you sound a bit out of tune!';
				}

				try {
					this.results = this.instrument.getChordsList(inputChord);
				} catch(e) {
					// Do nothing
				}
			}
		}
	}
</script>