//create a h2 heading element with text - "hello javascript". append "from apna college students" to this text using js,
// let heading = document.querySelector("h2");
// console.log(heading);
// let heading_append = heading.innerHTML + " from apna college";
// console.log(heading_append);

//create 3 div with common class name -"box" Access them & add same unique text to each of them
// let divs = document.querySelectorAll(".box");
// console.log(divs[0].innerHTML + " hello");
// console.log(divs[1].innerHTML + " hey");
// console.log(divs[2].innerHTML + " how are you");

//create a new button element. give it a text"click me", background color of red and text color of white. Insert the button as the first element inside the body tag.
let Button = document.createElement("button");
Button.innerText = "click me";
Button.style.background = "red";
Button.style.color = "white";
let Body = document.querySelector("body");
Body.prepend(Button);

//create a <p> tag in html, give it a class & some styling. Now create a new class in css and try to append this class to the <p> element. did you notice how you overwrite the class name when you add a new one? solve this problem using classlist
let para = document.querySelector(".h1dom2");
para.classList.add("append_class")