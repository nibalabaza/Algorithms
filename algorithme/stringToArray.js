//  "Transformation liste de nombres en tableau de nombres"

const string = process.argv[2];
// console.log(string);

const numbers = [];
let tmp = "";

for(let i = 0; i < string.length; i++ ) {
    const candidate = string[i]; 
    if(candidate != ",") {
        tmp += candidate // concatenation
    } else {
        numbers.push(tmp); 
        tmp = ""; // to empty the tmp
    }
}
numbers.push(tmp); 
console.log(numbers);