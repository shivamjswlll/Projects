let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newGame=document.querySelector(".ng");
let hide=document.querySelector(".hide");
let temp=true;
const WinningPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(temp){
            box.innerText=("X");
            temp=false;
        }
        else{
            box.innerText=("O");
            temp=true;
        }
        box.disabled=true;

        checkWinner();
        
    })
});

const checkWinner=()=>{
    for(let pattern of WinningPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner",pos1);
                boxes.forEach(box=>{
                    box.disabled=true;
                })
                showWinner(pos1);
                
            }
        }
    }
}

const showWinner= (p)=> {
    hide.classList.remove("hide");
    hide.innerText= `Winner is ${p}`;
    hide.style.fontSize = "50px";
}

reset.addEventListener("click",()=>{
    boxes.forEach(box=>{
        box.innerText="";
        box.disabled=false;
    })
    temp=true;
    hide.classList.add("hide");
    
})


