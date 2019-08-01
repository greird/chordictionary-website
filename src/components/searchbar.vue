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
			</fieldset>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'searchbar',
		props: ['inputLength'],
		data() {
			return { inputTab: '' }
		}, 
		methods: {
			findTab() {
				this.$emit('newtab', this.inputTab);
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