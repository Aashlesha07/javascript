//for a given array of numbar , print the square of each value using the forEach loop
let num = [2,3,4,5,6,7,8,9]

num.forEach((val) => {
    console.log(val * val);
})

//we are given array of marks of students. Filter our of the marks of student thet scored 90+.
let marks = [58,97,58,68,98,78,48,87,89,99,95,97,48,68]

let filteredmarks = marks.filter((val) =>{
    return val >= 90;
})
console.log(filteredmarks);

//take a number n as input from user.create an array of number from 1 to n. use reduce method to calculate sum of all numbar in the array, use the reduce method to calculate product of all number in array.
let input = prompt("enter the any number");
let arr = [];
for (let i = 0 ; i <=input ; i++){
    arr.push(i);
}
console.log(arr);
let add = arr.reduce((prev , curr) =>{
    return prev + curr;
})
console.log(add);
let prod = arr.reduce((prev , curr) =>{
    return prev * curr;
})
console.log(prod);