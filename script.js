let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");


const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random() *3);
    return options[ranIdx];
}
const showWinner=(userWin)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText="You win";
    }else{
        compscore++;
       compScorePara.innerText=compscore;
        msg.innerText="You Lose";
    }

}

const playgame=(userChoice)=>{
    console.log("userchoice" , userChoice);   //to print user choice
    const compChoice=genComputerChoice();
    console.log("computer choice",compChoice); //to print computer's choice
    if(compChoice===userChoice){
        msg.innerText="draw";
        console.log("draw")
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin= compChoice==="paper" ? false:true;
        }else if(userChoice==="paper"){
            //rock,scissors
            compChoice="scissors" ? false:true;
        }else{
            //rock,paper
            userWin=compChoice==="rock" ? false:true;
        }
        showWinner(userWin);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        // console.log("btn was clicked")
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})