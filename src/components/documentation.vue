<template>
    <div>
        <h1>Documentation</h1>
            <h2>I. Instrument definition</h2>
            <code>var guitar = new Chordictionary('EADGBE', 24, 5, 4);</code><br /><br />
            <pre>{{ demo_guitar }}</pre>

            <h2>II. Chord recognition</h2>
            <code>guitar.getChordInfo('131211')</code><br /><br />
            <pre>{{ demo_guitar.getChordInfo('131211') }}</pre>

            <h2>III. Chord generation</h2>
            <code>guitar.getChordsList("G");</code><br /><br />
            <p>{{ chordGeneration.chordList.length }} chords found.</p>
            <pre style="height: 400px">{{ chordGeneration }}</pre>

            <h4>Most common placements for these chords</h4>
            <p>By keeping only the ones with a "basic" or "bar" tag, we are able to visualize the most common chord placements.</p>

            <div id="chord" style="margin-right: 20px;float:left;" 
                v-for="(chord, index) in commonChords" v-bind:key="index">
                <div v-html='chord'></div>
            </div>
            <div style="clear:both; height:20px;"></div>

            <h2>IV. Tools</h2>

            <h3>Tab notation validation</h3>
            <code>guitar.isValidTab("x32010")</code><br /><br />
            <pre>{{ demo_guitar.isValidTab("x32010") }}</pre>

            <h3>Tuning notation validation</h3>
            <code>guitar.isValidTuning("E#A#D#G#B#E#")</code><br /><br />
            <pre>{{ demo_guitar.isValidTuning('E#A#D#G#B#E#') }}</pre>
 
            <h3>Graphical tab representation</h3>
            <code>guitar.getChordLayout("C", "x32010")</code><br /><br />
            <div id="chord" style="margin-right: 20px;float:left;">
                <div v-html='demo_guitar.getChordLayout("C", "x32010")'></div>
            </div>
            <div style="clear:both;"></div>

    </div>
</template>

<script>
    export default {
        name: 'documentation',
        props: ['Chordictionary'], 
        data() {
            return {
                demo_guitar: '',
                chordGeneration: '',
                commonChords: [],
            }
        },
        mounted() {
            this.demo_guitar = new this.Chordictionary.Instrument('EADGBE', 24, 5, 4);
            this.chordGeneration = this.demo_guitar.getChordsList("G");

            for (var i in this.chordGeneration.chordList) {
              var tagList = "";
              if (this.chordGeneration.chordList[i].tag.length) {
                for (var tag in this.chordGeneration.chordList[i].tag) {
                  if (tagList != "") tagList += ',' + this.chordGeneration.chordList[i].tag[tag];
                  else tagList = this.chordGeneration.chordList[i].tag[tag];
                }
                this.commonChords.push(this.demo_guitar.getChordLayout(tagList, this.chordGeneration.chordList[i].tab.join('')));
              }
            }
        },
    }
</script>