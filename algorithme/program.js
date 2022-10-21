//const input = process.argv[2]; // node js not js 
// console.log("Hello " + input);


const string = process.argv[2];
console.log(string) //command line argument as input
const array = string.split(",") //source
console.log(array)
//
const numbers = []; //destination
for(let i = 0; i< array.length; i++) { //loop code block
    const candidate = array[i]; // type string
    //objective: convert candidtae into a number
    const number = parseInt(candidate, 10); // convert string in number, parseInt takes two parametres, 10 is the radix
    numbers.push(number)
}
console.log(numbers)

//ping bong.js 
//somme.js 
//inversion.js
