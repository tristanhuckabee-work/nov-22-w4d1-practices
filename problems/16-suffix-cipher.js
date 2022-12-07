/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

function suffixCipher(sentence, cipher) { //sentence, object of suffix: callback
  let words = sentence.split(' ');        // split sentence to iterate over

  for (let i = 0; i < words.length; i++) {
    let word = words[i];  // helper variable for the word

    for (let suffix in cipher) {  // iterating over the suffixes of the cipher
      let cb = cipher[suffix];    // helper variable for callback
      if ( word.endsWith( suffix ) ) {  // does the word end with the suffix
        words[i] = cb( word );  // mutate words array, replace word with result of callback
      }
    }
  }

  return words.join(' '); // rejoining sentence and returning
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = suffixCipher;
} catch(e) {
  return null;
}