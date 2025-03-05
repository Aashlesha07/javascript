let marks = [25,96,35,48,12];
let sub = ['marathi', 'hindi','maths', 'english','science'];
console.log(marks);
console.log(marks.length);
console.log(marks[2] = 77); // modify the index 2 number with 77
console.log(marks);//  here we get modify list

// for (let i = 0; i<=marks.length; i++){
//     console.log(marks[i]);
// }

for (let j of marks){
    console.log(j);
}

// for (let y in marks){
//     console.log(marks[y]);
// }

//method
marks.push(69,87,89);
console.log(marks);

marks.pop();
console.log(marks);

console.log(marks.toString());

console.log(marks.concat(sub));

console.log(sub.unshift("history") , sub);

console.log(marks.shift(), marks);

console.log(marks.slice(0,3));

console.log(marks.splice(2,2,145 ,168), marks);

console.log(marks.splice(2,2), marks);

console.log(marks.splice(2,0, 145), marks);
