<template>
		<form onsubmit="return false;">
			<fieldset>
				<input id="inputTab" type="text" name="tab" placeholder="Insert tab here"
				v-if="showTabInput == 1"
				:maxlength="inputTuning.length > 0 ? inputTuning.length : 6" 
				v-model.lazy.trim="inputTab"
				v-on:change="submitForm"
				v-focus
				/>
				<input id="inputChord" type="text" name="chord" placeholder="Insert chord here"
				v-if="showChordInput == 1"
				v-model.lazy.trim="inputChord"
				v-on:change="submitForm"
				/>

				<input id="inputTuning" type="text" list="tunings" name="tuning" placeholder="EADGBE"
				v-model.lazy.trim="inputTuning" 
				v-on:change="submitForm"
				/>
				<datalist id="tunings">
					<option 
						v-for="(desc, tuning) in tuningList" 
						v-bind:key="tuning.id" 
						:value="tuning" 
						:label="desc" 
						/>
				</datalist>
			</fieldset>
		</form>
</template>

<script>
	export default {
		name: 'searchform',
		props: ['showTabInput', 'showChordInput'],
		data() {
			return { 
				tuningList: {
					EADGBE: 'Guitar Standard',
					DADGAD: 'Guitar D Modal',
					GGDGBD: 'Guitar Open G',
					EADG: 'Bass',
					GCEA: 'Ukulele',
					GDAE: 'Violin'
				},
				inputChord: '',
				inputTab: '',
				inputTuning: ''
			}
		}, 
		methods: {
			submitForm() {
				if (!this.inputTuning) this.inputTuning = 'EADGBE';
				if (this.showTabInput) this.$emit('newtab', this.inputTab, this.inputTuning);
				if (this.showChordInput) this.$emit('newchord', this.inputChord, this.inputTuning);
			}
		},
		directives: {
			focus: {
				// directive definition
				inserted: function (el) {
					el.focus()
				}
			}
		}
	}
</script>