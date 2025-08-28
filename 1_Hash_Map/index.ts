function countWordFrequency(sentence: string): Map<string, number>{
  const words = sentence.toLowerCase().split(' ');
  const wordFrequencies = new Map<string, number>();

  for (const word of words){
    if(wordFrequencies.has(word)){
      const currentCount = wordFrequencies.get(word)!
      wordFrequencies.set(word, currentCount + 1);
    }
    else{
      wordFrequencies.set(word, 1);
    }
  }

  return wordFrequencies;
}

const mySentence = "The quick brown fox jumps over the lazy dog";
const frequency = countWordFrequency(mySentence);

console.log(frequency);