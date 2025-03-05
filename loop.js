// for (let count = 1; count <= 5; count++){
//     console.log("Hello , lets lern loops" + count);
// }

// Sum of first n number
// let sum = 0;
// let n =prompt("enter a number for sum of");
// for (let i = 1;i<=n; i++){
//     sum +=  i;
// }
// console.log (sum);

//while loop
// let i = 0;
// while( i <= 5){
//     console.log("whilw loop");
//     i++;
// }

//do while loop
// let j = 20;
// do{
//     console.log("whilw loop");
//     i++;  
// }while(i<=5);

//for- of loop
let str = "how are you?";
let size = 0
for (let i of str){
    console.log(i + "string are");
    size++
}
console.log(size);

let student={
    name : "Aashlesha Kharunkar",
    age : 21,
    cgpa : 8.07,
}
for (let i in student){
    console.log("i="+i);
    console.log("value" , student[i]);
}