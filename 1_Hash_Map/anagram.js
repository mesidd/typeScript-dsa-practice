function anagrams(anagrams) {
    var anagramList = new Map();
    for (var _i = 0, anagrams_1 = anagrams; _i < anagrams_1.length; _i++) {
        var anagram = anagrams_1[_i];
        var sortedKey = anagram.split('').sort().join();
        if (anagramList.has(sortedKey)) {
            var arr = anagramList.get(sortedKey);
            arr.push(anagram);
        }
        else {
            anagramList.set(sortedKey, [anagram]);
        }
    }
    return Array.from(anagramList.values());
}
var input = ["eat", "tea", "tan", "ate", "nat", "bat"];
var output = anagrams(input);
console.log(output);
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Expected Output: [ ["eat", "tea", "ate"], ["tan", "nat"], ["bat"] ]
