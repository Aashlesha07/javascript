let input = prompt("enter the number");

if (input%5 == 0){
    console.log(input + " is multiply by 5");
}else{
    console.log(input + " is not multiple by 5");
}


let score = prompt("enter your score");

if(score >= 90 && score <= 100){
    console.log("grade A");
}else if (score >= 80 && score <= 89){
    console.log("grade b")
}else if (score >= 70 && score <= 79){
    console.log("grade c")
}else if (score >= 60 && score <= 69){
    console.log("grade d")
}else if (score >= 50 && score <= 59){
    console.log("grade e")
}else if (score >= 0 && score <= 49){
    console.log("grade f")
}