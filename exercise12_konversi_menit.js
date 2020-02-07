console.log('Logic Challenge - KOnversi Menit\n\n')
function konversiMenit(menit) {
  konvMenit = Math.floor(menit / 60);
  konvDetik = menit - (konvMenit * 60);
  konvDetik = konvDetik < 10 ? '0' + konvDetik : konvDetik
  return `${konvMenit}:${konvDetik}`;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
console.log(konversiMenit(1203));