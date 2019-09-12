<template>
	<div class="chord-card">
		<div class="chord-layout chord-small" v-html="chordLayout"></div>

		<dl class="chordinfo">
			<dt></dt>
			<dd>
				This is a
				<code>{{ chordName }}</code>
			</dd>
			<dd>
				It contains the following notes
				<code>{{ chordNotes }}</code>
			</dd>
			<dd>
				Chord formula is:
				<code>{{ chordFormulas }}</code>
			</dd>
		</dl>
	</div>
</template>

<script>
	export default {
		name: 'chordinfo',
		props: ['message', 'chordName', 'chordTab', 'chordNotes', 'chordFormulas', 'chordTuning', 'chordLayout']
	}
</script>