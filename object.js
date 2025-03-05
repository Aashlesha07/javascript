const student1 = {
    name : "sameer",
    age : 21,
    cgpa : 8.6,
    isPass : true,
};

// Update key 
student1.age = student1.age +1;
student1["age"] = student1["age"] +2;

student1.name = "sankalp";
//access the object 
console.log(student1.age);

console.log(student1["age"]);

console.log(student1.name);


//homeWork

const product = {
    title : "Ball Pen",
    rating : 4,
    price : 270,
    offer : 5,
};

const account ={
    userName : "@Shadhakhapra",
    isFollwo : true,
    ismassege : true,
    post :195,
    followers : 569,
}