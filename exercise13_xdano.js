console.log('Logic Challenge - X dan O\n\n')
function xo(str) {
  let balance = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'x') {
      balance++
    }
    else {
      balance--
    }
  }
  if (balance) {
    return false
  }
  return true
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
console.log(xo('xoxxoxoxoxxxxo'));