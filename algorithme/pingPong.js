// const array = process.argv[2];

const string = process.argv[2];
console.log(string) 
const array = string.split(",")
console.log(array)

// const array = ["ping", "pong", "ping", "ping", "pong"]
let pings = 0;
let pongs = 0;
for(let i = 0; i< array.length; i++) {
    if(array[i] == "ping") {
        pings++
    }else{
        pongs++
    }
}
console.log(pings + "," + pongs)

// IN pingsAndPongs[] of TEXT
// LET pings = 0
// LET pongs = 0
// FOR i = 0 TO (pingsAndPongs LENGTH - 1)
//     IF pingsAndPongs[i] == "ping"
//         pings++
//     ELSE
//         pongs++
// OUT "Match result ping vs pong: " + pings + "-" + pongs