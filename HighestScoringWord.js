// https://www.codewars.com/kata/highest-scoring-word

// Description:
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x){
  let highestScore = 0;
  let highestWord = '';
  const words = x.split(' ');
  for (let i = words.length - 1; i >= 0; i--) {
    const word = words[i];
    let wordScoreCounter = 0;
    word.split('').forEach(letter => {
      // a: 97 - 96 = 1
      wordScoreCounter = wordScoreCounter + (letter.charCodeAt(0) - 96);
    });
    console.log(word, wordScoreCounter);
    
    if(wordScoreCounter >= highestScore) {
      highestScore = wordScoreCounter;
      highestWord = word;
    }
  }
  return highestWord;
}