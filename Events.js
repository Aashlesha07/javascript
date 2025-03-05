let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) => {
//     console.log("you are clicked");
//     alert("pleawse is do not click");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// };
let btn2 = document.querySelector("#btn2");
// btn2.ondblclick = () =>{
//     console.log('button is clicked 2x');
//     alert('you clicked 2x!');
// };
let box = document.querySelector("#box");
// box.onmouseover = () =>{
//     console.log('your inside the div');
// };
btn1.addEventListener("click",() => {
    console.log("Button1 was clicked");
})

btn1.addEventListener("click",() => {
    console.log("Button1 was clicked 2");
})

const handler3 = () => {
    console.log("Button1 was clicked 3");
}
btn1.addEventListener("click", handler3);

btn1.removeEventListener("click",handler3);