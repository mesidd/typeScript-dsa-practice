function countWordFrequency(sentence) {
    var words = sentence.toLowerCase().split(' ');
    var wordFrequencies = new Map();
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (wordFrequencies.has(word)) {
            var currentCount = wordFrequencies.get(word);
            wordFrequencies.set(word, currentCount + 1);
        }
        else {
            wordFrequencies.set(word, 1);
        }
    }
    return wordFrequencies;
}
var mySentence = "The quick brown fox jumps over the lazy dog";
var frequency = countWordFrequency(mySentence);
console.log(frequency);
