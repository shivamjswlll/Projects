let choice=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");
let user=document.querySelector(".a");
let comp=document.querySelector(".b");

let a=0;
let b=0;
const playgame=(c)=>{
     const option=["rock","paper","scissor"];
     let i=Math.floor(Math.random()*3);
     console.log(option[i]);
     if(c==="rock" && option[i]==="scissor" ||c==="scissor" && option[i]==="paper" || c==="paper" && option[i]==="rock"){
        msg.innerText="You won";
        msg.style.backgroundColor="green";
        a=a+1;
        user.innerText=a;
     }
     else if(c===option[i]){
        console.log("Draw");
        msg.innerText="Game draw. Play again!";
        msg.style.backgroundColor="grey";
     }
    else{
        console.log("You lost");
        msg.innerText="You lost";
        msg.style.backgroundColor="red";
        b=b+1;
        comp.innerText=b;
    }
}

choice.forEach((c)=>{
    c.addEventListener("click",()=>{
        const choiceid=c.getAttribute("id");
        playgame(choiceid);
    })
})