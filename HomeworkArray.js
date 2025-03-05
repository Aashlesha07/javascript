// for given array with marks of student [85,97,44,37,76,60] find average of entair class

let marks = [85,97,44,37,76,60];
let sum = 0;

for (let mark of marks){
    sum += mark;
}

let avg = sum / (marks.length-1);

console.log(avg, sum );

//for a given array with prices of 5 items [250,645,300,900,50] all item have offer of 10% off on them change the array to store final price after applying offer

let prices = [250,645,300,900,50];

for (let price of prices){
    let off = price * (10/100);
    let final = price - off;
    console.log(final);
}

//Create an array to store companies ["Bloomberg","Microsoft","Uber","Google","IBM", "Netflix"] a.Remove the first company from the array b. Remove Uber and  add ola in its place C. add amezon at  the end 

let company = ["Bloomberg","Microsoft","Uber","Google","IBM", "Netflix"];

console.log(company.shift());

console.log(company.splice(1,1,"ola"), company);

console.log(company.push("amezon"),company);