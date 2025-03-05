//print even number between 1 to 100
// let n = 100;
// for (let i = 1; i<= n; i++){
//     if( i % 2 == 0){
//         console.log (i)
//     }
// }

//create a game where you start with any random game number, ask the user to keep gussing  the game number until the user enter correct value
let num = 25;
let guss = prompt ("gussing  the game number");
while (guss != num){
    guss = prompt ("gussing  the game number");
}
console.log("you enter the right number");