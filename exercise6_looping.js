console.log("1. Melakukan Looping Menggunakan While\n");

console.log("LOOPING PERTAMA\n")
let i = 2;
while (i < 21) {
  console.log(`${i} - I love coding`);
  i += 2;
}

console.log("\nLOOPING KEDUA\n")
let j = 20;
while (j > 1) {
  console.log(`${j} - I will become fullstack developer`);
  j -= 2;
}

console.log("\n\n2. Melakukan Looping Menggunakan For\n");

console.log("LOOPING PERTAMA\n");

for (let i = 1; i < 21; i++) {
  console.log(`${i} - I love coding`);
}

console.log("LOOPING KEDUA\n");

for (let i = 20; i > 0; i--) {
  console.log(`${i} - I will become fullstack developer`);
}

console.log("\n\n3. Angka Ganjil dan Genap\n");

console.log("GANJIL GENAP\n")
for (let counter = 1; counter <= 100; counter++) {
  if (counter % 2 === 0) {
    console.log(`${counter} - GENAP`);
  }
  else {
    console.log(`${counter} - GANJIL`);
  }
}

console.log("\nKELIPATAN 3")
for (let counter = 1; counter <= 100; counter += 2) {
  if (counter % 3 == 0) {
    console.log(`${counter} kelipatan 3`)
  }
  else {
    console.log(' ');
  }
}

console.log("\n\nKELIPATAN 6")
for (let counter = 1; counter <= 100; counter += 5) {
  if (counter % 6 == 0) {
    console.log(`${counter} KELIPATAN 6`)
  }
  else {
    console.log(' ');
  }
}

console.log("\n\nKELIPATAN 10")
for (let counter = 1; counter <= 100; counter += 9) {
  if (counter % 10 == 0) {
    console.log(`${counter} KELIPATAN 10`)
  }
  else {
    console.log(' ');
  }
}