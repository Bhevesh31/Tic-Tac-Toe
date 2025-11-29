let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let container = document.querySelector(".container");

let turnO = true;//playerX, playerO.

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

container.classList.remove("hide");

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}



const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    container.classList.remove("hide");
    resetBtn.classList.remove("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){//playerO turn
            box.innerText = "O";
            turnO = false;
            box.style.color = "#ffeb3b";
        }
        else{      //playerX turn
            box.innerText = "X";
            turnO = true;
            box.style.color = "#00eaff"; 
        }
        box.disabled = true;

        checkWinner();
    });
});




const showWinner = (winner) =>{
        msg.innerText = `Congratulations, winner is ${winner}`;
        msgContainer.classList.remove("hide");
        container.classList.add("hide");
        resetBtn.classList.add("hide");
        disableBoxes();
}

const checkWinner = (()=>{
    winPatterns.forEach((pattern)=>{
        let pos1Val = boxes[pattern[0]].innerText;
        console.log(pos1Val);
        
        let pos2Val = boxes[pattern[1]].innerText;
        console.log(pos2Val);
        
        let pos3Val = boxes[pattern[2]].innerText;
        console.log(pos3Val);
        

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
            }
        }
    })

});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);