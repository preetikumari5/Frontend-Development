let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame = () => {
    
    msg.innerText = "Game was Draw 🤝";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin , userChoice ,compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win 😀 Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        CompScorePara.innerText = compScore;
        msg.innerText = `You Lose 😢 ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#b90c0c";
    }
}


const playGame = (userChoice) => {
   // console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
   // console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true ;
        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else if(userChoice === "scissor") {
            userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin ,userChoice ,compChoice);
}
}



choices.forEach((choice) => {
    
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
        // console.log("choice was clicked" , userChoice);
        playGame(userChoice);
    })
})