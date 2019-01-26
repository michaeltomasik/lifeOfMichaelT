// https://www.codewars.com/kata/simple-pig-latin

// Description:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  const words = str.split(' ');

  const convertedWords = words.map(word => {
    var letters = /^[A-Za-z]+$/;
    return word.match(letters) ?
      word.substring(1) + word[0] + 'ay' : word;
  });

  return convertedWords.join(' ');
}