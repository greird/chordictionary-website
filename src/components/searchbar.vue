<template>
	<div>
		<form onsubmit="return false;" id="main-form">
			<fieldset>
				<input id="inputTab" type="text" name="tab" placeholder="Insert tab here"
				:maxlength="inputLength" 
				v-model.lazy.trim="inputTab"
				v-on:change="findTab"
				v-focus
				/>

				<input id="inputTuning" type="text" list="tunings" name="tuning" placeholder="EADGBE"
				v-model.lazy.trim="inputTuning" 
				v-on:change="findTab"
				/>
				<datalist id="tunings">
					<option value="EADGBE" label="Guitar Standard" />
					<option value="DADGAD" label="Guitar D Modal" />
					<option value="GGDGBD" label="Guitar Open G" />
					<option value="EADG" label="Bass" />
					<option value="GCEA" label="Ukulele" />
					<option value="GDAE" label="Violin" />
				</datalist>
			</fieldset>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'searchbar',
		props: ['inputLength'],
		data() {
			return { 
				inputTab: '',
				inputTuning: ''
			}
		}, 
		methods: {
			findTab() {
				if (!this.inputTuning) this.inputTuning = 'EADGBE';
				this.$emit('newtab', this.inputTab, this.inputTuning);
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