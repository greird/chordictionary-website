<template>
    <section class="slide white" id="documentation">
        <h2>Javascript library</h2>
            <p>This website is powered by the Chordictionary library, available on <a href="https://github.com/greird/chordictionaryjs">Github</a>.</p>

            <h3>I. Setup</h3>
            <code>npm install chordictionary</code><br /><br />
            <code>const chordictionary = require('chordictionary');</code><br /><br />

            <h3>II. Instrument definition</h3>
            <code>var guitar = new choridctionary.Instrument('EADGBE', 24, 5, 4);</code><br /><br />
            <pre>{{ demo_guitar }}</pre>

            <h3>III. Chord recognition</h3>
            <code>guitar.getChordInfo('x33210')</code><br /><br />
            <pre>{{ chordInfo }}</pre>

            <h3>IV. Chord generation</h3>
            <code>guitar.getChordsList("G");</code><br /><br />
            <p>{{ numberOfChordsFound }} chords found.</p>
            <pre style="height: 400px">{{ chordGeneration }}</pre>

            <h4>Most common placements for these chords</h4>
            <p>By keeping only the ones with a "basic" or "bar" tag, we are able to visualize the most common chord placements.</p>

            <div id="chord" style="margin-right: 20px;float:left;" 
                v-for="(chord, index) in commonChords" v-bind:key="index">
                <div v-html='chord'></div>
            </div>
            <div style="clear:both; height:20px;"></div>

            <h3>V. Tools</h3>

            <h4>Tab notation validation</h4>
            <code>chordictionary.isValidTab("x33210")</code><br /><br />
            <pre>{{ tabValidation }}</pre>

            <h4>Tuning notation validation</h4>
            <code>chordictionary.isValidTuning("E#A#D#G#B#E#")</code><br /><br />
            <pre>{{ tuningValidation }}</pre>
 
            <h4>Graphical tab representation</h4>
            <code>guitar.getChordLayout("x33210", {name: "Fmaj7", notes:[null, "C", "F", "A", "C", "E"]})</code><br /><br />
            <div id="chord" style="margin-right: 20px;float:left;">
                <div v-html='chordLayout'></div>
            </div>
            <div style="clear:both;"></div>

    </section>
</template>

<script>
    export default {
        name: 'documentation',
        data() {
            return {
                demo_guitar: '',
                chordGeneration: '',
                chordInfo: '',
                numberOfChordsFound: '',
                tabValidation: '',
                tuningValidation: '',
                chordLayout: '',
                commonChords: [],
            }
        },
        mounted() {
            this.demo_guitar = new this.Instrument('EADGBE', 24, 5, 4);
            this.chordGeneration = this.demo_guitar.getChordsList("G");
            this.chordInfo = this.demo_guitar.getChordInfo('x33210');
            this.numberOfChordsFound = this.chordGeneration.chordList.length;
            this.tabValidation = this.isValidTab("x33210");
            this.tuningValidation = this.isValidTuning('E#A#D#G#B#E#');
            this.chordLayout = this.demo_guitar.getChordLayout(this.chordInfo.tab.join(""), this.chordInfo.chords[0]);

            for (var i in this.chordGeneration.chordList) {
              var tagList = "";
              if (this.chordGeneration.chordList[i].tag.length) {
                for (var tag in this.chordGeneration.chordList[i].tag) {
                  if (tagList != "") tagList += ',' + this.chordGeneration.chordList[i].tag[tag];
                  else tagList = this.chordGeneration.chordList[i].tag[tag];
                }
                this.commonChords.push(this.demo_guitar.getChordLayout("x33210", {name: "Fmaj7", notes:[null, "C", "F", "A", "C", "E"]}));
              }
            }
        },
    }
</script>