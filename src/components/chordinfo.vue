<template>
<dl id="chordinfo">
	<dt></dt>
	<dd>
		This is a
		<code>{{ chordName }}</code>
		chord and its tab notation is
		<code>{{ chordTab }}</code>
	</dd>
	<dd>
		It contains the following notes
		<code>{{ chordNotes }}</code>
	</dd>
	<dd>
		Identified formulas are:
		<code>{{ chordFormulas }}</code>
	</dd>
	<dd>
		Tuning is
		<code>{{ chordTuning }}</code>
	</dd>
</dl>
</template>

<script>
	export default {
		name: 'chordinfo',
		props: ['message', 'chordName', 'chordTab', 'chordNotes', 'chordFormulas', 'chordTuning']
	}
</script>