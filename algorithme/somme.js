
const string = process.argv[2];
console.log(string) 
const array = string.split(",")
console.log(array)

let sum = 0
for (let i = 0; i < array.length; i++) {
      let value = array[i]
      let number = parseInt(value, 10);
      sum += number
    }
console.log(sum)

// const array = [1, 2, 3];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }
// console.log(sum); 



// IN numbers[] of NUMBER
// LET sum = 0 // or of NUMBER
// FOR LET i = 0 TO (numbers LENGTH - 1)
//     LET value = numbers[i]
//     sum = sum + value
//     // sum = sum + numbers[i]
//     // sum += numbers[i]
// OUT "Sum is equal to " + sum