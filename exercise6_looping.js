console.log("1. Melakukan Looping Menggunakan While\n");

console.log("LOOPING PERTAMA\n")
var i=2;
while (i<=20) {
  console.log(`${i} - I love coding`);
  i+=2;
}

console.log("\nLOOPING KEDUA\n")
var j=20;
while (j>=2) {
  console.log(`${j} - I will become fullstack developer`);
  j-=2;
}

console.log("\n\n2. Melakukan Looping Menggunakan For\n");

console.log("LOOPING PERTAMA\n");

for (var k=1; k<=20; k++) {
  console.log(`${k} - I love coding`);
}

console.log("LOOPING KEDUA\n");

for (var l=20; l>=1; l--) {
  console.log(`${l} - I will become fullstack developer`);
}

console.log("\n\n3. Angka Ganjil dan Genap\n");

console.log("GANJIL GENAP\n")
for (var counter=1; counter<=100; counter++) {
  if (counter%2==0) {
    console.log(`${counter} - GENAP`);
  }
  else {
    console.log(`${counter} - GANJIL`);
  }
}

console.log("\nKELIPATAN 3")
for (var counter2=1; counter2<=100; counter2+=2) {
  if (counter2%3==0) {
    console.log(`${counter2} kelipatan 3`)
  }
  else {
    console.log(' ');
  }
}

console.log("\n\nKELIPATAN 6")
for (var counter3=1; counter3<=100; counter3+=5) {
  if (counter3%6==0) {
    console.log(`${counter3} KELIPATAN 6`)
  }
  else {
    console.log(' ');
  }
}

console.log("\n\nKELIPATAN 10")
for (var counter4=1; counter4<=100; counter4+=9) {
  if (counter4%10==0) {
    console.log(`${counter4} KELIPATAN 10`)
  }
  else {
    console.log(' ');
  }
}



