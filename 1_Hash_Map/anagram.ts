function anagrams(anagrams: Array<string>): Array<Array<string>>{
  const anagramList = new Map<string, Array<string>>();

  for (const anagram of anagrams){
    const sortedKey = anagram.split('').sort().join('');
    if(anagramList.has(sortedKey)){
      const arr = anagramList.get(sortedKey)!;
      arr.push(anagram);
    }else{
      anagramList.set(sortedKey, [anagram])
    }
  }
  return Array.from(anagramList.values());
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const output = anagrams(input);

console.log(output)

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]

// Expected Output: [ ["eat", "tea", "ate"], ["tan", "nat"], ["bat"] ]