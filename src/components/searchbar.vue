<template>
	<div>
		<form onsubmit="return false;" id="main-form">
			<fieldset>
				<input id="inputTab" type="text" name="tab" v-model.lazy.trim="inputTab" placeholder="Insert tab here"
				v-on:change="updateTab"
				v-focus
				required />
			</fieldset>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'searchbar',
		data() {
			return { inputTab: '' }
		}, 
		methods: {
			updateTab() {
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