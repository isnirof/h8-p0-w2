console.log("1. Menyusun Barisan Bintang\n");

for (let i = 0; i < 5; i++) {
  console.log('*');
}

console.log("\n\n2. Menyusun Barisan Bintang Dengan Nested Looping");

for (let i = 0; i < 5; i++) {
  let asterisk = '';
  for (var j = 0; j < 5; j++) {
    asterisk += '*';
  }
  console.log(asterisk);
}

console.log("\n\n3.Menyusun Barisan Tangga Bintang Dengan Nested Looping");

let asterisk1 = '';
for (let i = 0; i < 5; i++) {
  asterisk1 += '*';
  console.log(asterisk1);
}