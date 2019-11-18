console.log("1. Menyusun Barisan Bintang\n");

var rows1=5;

for(var i=0; i<rows1; i++) {
  console.log('*');
}

console.log("\n\n2. Menyusun Barisan Bintang Dengan Nested Looping");

var rows2=5;
for(var i=0; i<rows2; i++) {
    asterisk='';
    for(var j=0; j<rows2; j++){
    asterisk+='*';
    }
    console.log(asterisk);
}

console.log("\n\n3.Menyusun Barisan Tangga Bintang Dengan Nested Looping");
var rows3=5;
for(var i=0; i<rows3; i++) {
    asterisk1='';
    for(var j=0; j<=i; j++){
    asterisk1 +='*';
    }
    console.log(asterisk1);
}