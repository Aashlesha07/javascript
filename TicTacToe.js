let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let winnerNewGameBtn = document.querySelector("#winner-new-btn"); // Fixed unique ID
let drawNewGameBtn = document.querySelector("#draw-new-btn"); // Fixed unique ID
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let drawmsg = document.querySelector("#draw-msg");
let drawcontainer = document.querySelector(".draw-container");

let turn0 = true;
let dcount = 0;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetbox = () => {
    turn0 = true;
    enabledbtn();
    msgcontainer.classList.add("hide");
    drawcontainer.classList.add("hide");
    dcount = 0; // Reset draw counter
};

const draw = () => {
    drawmsg.innerText = "It's a draw!";
    drawcontainer.classList.remove("hide");
    disabledbtn();
};

const checkDraw = () => {
    dcount = 0;
    for (let box of boxes) {
        if (box.innerText !== "") {
            dcount++;
        }
    }
    if (dcount === 9) {
        draw();
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkwinner();
        checkDraw(); // Now checks for a draw after each move
    });
});

const disabledbtn = () => {
    boxes.forEach(box => box.disabled = true);
};

const enabledbtn = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledbtn();
};

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner:", pos1Val);
                showWinner(pos1Val);
                return;
            }
        }
    }
};

// Attach event listeners to reset and new game buttons
winnerNewGameBtn.addEventListener("click", resetbox);
drawNewGameBtn.addEventListener("click", resetbox);
resetbtn.addEventListener("click", resetbox);
