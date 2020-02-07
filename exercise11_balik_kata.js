console.log('Logic Challenge - Balik Kata\n\n')
function balikKata(word) {
  let result='';
  for (let i=word.length-1; i>=0; i--) {
    result += word[i];
  }

  return result;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
console.log(balikKata('isnirof'));