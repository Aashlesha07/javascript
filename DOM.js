console.log("Hello");
// alert("hey lets lern javascrpit");
let heading = document.getElementById("Heading");
console.log(heading);
let heading4 = document.getElementsByClassName("Heding4");
console.log(heading4);
let paragraph = document.getElementsByTagName("p");
console.log(paragraph);
let elements = document.querySelector("p");
console.log(elements);
let element_all = document.querySelectorAll("p");
console.log(element_all);
let elements_class = document.querySelector(".Heding4");
console.log(elements_class);
let elements_id = document.querySelector("#Heading");
console.log(elements_id);

//properties
console.log(elements.tagName);
console.log(elements.innerText);
console.log(elements.innerHTML);
console.log(elements.textContent);

//attribute - class, src , etc
let divs = document.querySelector("div")
console.log(divs);
let Class = divs.getAttribute("class");
console.log(Class)
console.log(divs.setAttribute("box","firstclass"));
console.log(heading.style.color="green");
heading.style.fontSize="70px";

//insert element
let newbtn = document.createElement("button");
newbtn.innerText = "click me....:)"
console.log(newbtn);
let data = document.querySelector(".dom");
// data.append(newbtn);
data.prepend(newbtn);
// data.before(newbtn);
// data.after(newbtn);
let btn = document.querySelector("#btn");
btn.remove();