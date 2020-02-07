
function checkerBoard(rows) {
    if (typeof rows !=='number' || rows < 1) {
        return 'Invalid';
    }
    let result=''
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            if ((i + j) % 2 == 0) {
                result += '*';
            }
            else {
                result += ' ';
            }
        }
        result+='\n'
    }
    return result
}
console.log(checkerBoard(1))
// *
console.log(checkerBoard(2))
// * 
//  *
console.log(checkerBoard(3))
// * *
//  *
// * *
console.log(checkerBoard(4))
// * *
//  * *
// * *
//  * *
console.log(checkerBoard(5))
// * * *
//  * *
// * * *
//  * *
// * * *
console.log(checkerBoard(-1)) // Invalid
console.log(checkerBoard('5')) // Invalid
console.log(checkerBoard(false)) // Invalid