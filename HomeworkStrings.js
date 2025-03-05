//prompt the user  to enter their  full name, Generate a username for them base on the input. start usermane with @ , followed by their fullname and ending with fulllength.

let fullName = prompt("enter your full name without the any scape like mihirsahu");

let userName = "@" + fullName + fullName.length;
console.log(userName);