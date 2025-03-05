//Create a function using the "function" keyword that takes a str as an argument and returns the number of vowels in the str 
function checkvowel(str){
    let count = 0
    for(let j of str){
        if (j === "a" ||j === "i" || j === "e"||j === "o"||j === "u"){
            count ++;
        } 
    }
    console.log(count);   
    return count;
}
checkvowel("aashlesha");

//same using arrow function
let countvowels = (st_rarray) =>{
    let count = 0
    for(let char of st_rarray){
        if (char === "a" ||char === "i" || char === "e"||char === "o"||char === "u"){
            count ++;
        } 
}
console.log(count);   
    return count;
}
countvowels("aashleshakharunkar");