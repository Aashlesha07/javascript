let mode = "dark";
let color;

if (mode === "dark") console.log("dark");

//if condition one or more can run
if(mode === "light"){
    color = "white"
}

if (mode === "dark"){
    color = "black"
}
console.log(color)

//if else condition
let age = 18;
 let result = age >= 18 ? "adult" : "not adult";
 console.log(result);
 //ternary operator
  age >= 18 ? console.log("conditin 1 adult") : console.log(" condition 2 not adult");

if (age >= 18) {
    console.log("you can vote");
}else{
    console.log("you can not vote");
}

// else if condition
let num = 26;

if (num%2 === 0){
    console.log("even number")
} else if (num%2 !== 0){
    console.log("odd number")
} else {
    console.log("invalid")
}