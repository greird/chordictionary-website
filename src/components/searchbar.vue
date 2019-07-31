<template>
	<div>
		<form onsubmit="return false;" id="main-form">
			<fieldset>
				<input id="inputTab" type="text" name="tab" v-model.lazy.trim="inputTab" placeholder="Insert tab here"
				v-on:change="updateTab"
				required />
			</fieldset>
		</form>
		<p>in searchbar scope: {{ inputTab }}</p>
	</div>
</template>

<script>
	export default {
		name: 'searchbar',
		data() {
			return { inputTab: 'X32010' }
		}, 
		methods: {
			updateTab() {
				this.$emit('newtab', this.inputTab);
			}
		}
	}
</script>