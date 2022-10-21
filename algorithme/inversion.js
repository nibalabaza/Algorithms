const string = process.argv[2];
console.log(string) 
const array = string.split(",")
console.log(array)

// const array = [1, 2, 3, 4]
let min = 0
let max = array.length -1
while (min < max) {
    let actuel = array[max]
    array[max] =array[min]
    array[min] = actuel
    min++
    max--
}
console.log(array)

