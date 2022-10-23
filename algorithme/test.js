// Algo bonus
// Pseudo-code puis implémentation en JS. 
// Pseudo-code doit être validé avant implémentation. 

// Problème :
// Soit un tableau de chaînes de caractères en entrée avec au moins 2 prenoms.
// Écrire un programme qui gère le tableau en entrée comme une file d'attente à la caisse d'un supermarché.
// A chaque itération on a en sortie, l'état actuel de la file, le prénom sortie de la file, le nouvel état de la file. 
//Les prénoms sont déplacés de droite à gauche. 
//Les places libérées dans la file sont représentées par une chaîne vide.
// Important : le programme ne gère qu'1 file d'attente pas plusieurs, il n'y a donc qu'1 seul tableau, celui en entrée. 

// Exemple :
// Input = ["Toto", "Tutu", "Titi"]
// Output iter 1 = 
// Actual state = ["4", "2", "3"]
//                   a    b    c
// Last exited = "Toto" 
// New state = ["Tutu", "Titi", ""]


//***
// IN names[] of TEXT
// LET  LastExited = names[0] // Toto 
// FOR i = 1 TO (names LENGTH - 1)
//     names [i-1] = names[i] 

// IF(names[names.length-1]!= "") THEN
//     names[names.length-1] = "" 
// 
// OUT names
// OUT LastExited

let names = ["Toto", "Tutu", "Titi"]
console.log(names)
let LastExited = names[0]
console.log(LastExited)
for (let i = 1; i < names.length; i++) {
    names [i-1] = names[i]
    
}
if(names[names.length-1]!= ""){
    names[names.length-1] = "" 
}
console.log(names)


