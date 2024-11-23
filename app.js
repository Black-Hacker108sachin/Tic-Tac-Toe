let boxes =document.querySelectorAll(".box");
let resertbtn = document.querySelector("#resetbtn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer= document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO =true;

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
    
];

const resetgame = ()=>{
    turnO =true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        console.log("box was clicked"); 

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText="x";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });

});

const disableboxes =() =>{
    for(let box of boxes) {
        box.disabled = true;

    }
};

const enableboxes =() =>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerText="";

    }
};


const showwinner =(Winner)=>{
    msg.innerText = ` Congrulations🎉😎😼, Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkwinner =() =>{
    for(let patten of winpatterns){
       let pos1val = boxes[patten[0]].innerText;
       let pos2val = boxes[patten[1]].innerText;
       let pos3val = boxes[patten[2]].innerText;

       if(pos1val !="" && pos2val != "" && pos3val !=""){
        if(pos1val ===pos2val && pos2val===pos3val){
            console.log("winner", pos1val);
            showwinner(pos1val);
        }
       }
    }
};

newgamebtn.addEventListener("click", resetgame);
resertbtn.addEventListener("click", resetgame);
