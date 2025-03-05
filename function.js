//without parameter
function myfirstfunction() {
    console.log("hello, i am learning javascript");
    console.log("now i create my first function in javascript");
}
myfirstfunction();

//with parameter
function parameterfunction(msg){
    console.log(msg);
}
parameterfunction("withparameter");

//retun kryword
function retunkeyword(x,y){
    let sum = x+y;
    console.log("befor return");
    return sum;
    console.log("afterr return");//after the retun its never print anything
}
let result = retunkeyword(3,5);
console.log(result);

//arrow function with parameter
const additionarrow = (a,b) => {
    console.log(a+b);
}
let add = additionarrow(5,6);
console.log(add);

//arrow function without parameter
const print = ()=>{
    console.log("hello");
}
print();
