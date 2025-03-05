let mode = document.querySelector("#toggle");
let currmode = "light";

mode.addEventListener("click", () =>{
    if (currmode === "light"){
        currmode ="dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else if (currmode === "dark"){
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currmode);
} )