
function getComputerChoice() {
    let choice=Math.random()*3
    if (choice<1){
        return "rock";

    }
    else if (choice>=1 & choice<2){
        return "paper";

    }
    else{
        return "scissor";
    }
}
function getHumanChoice(){
    return prompt('tell your choice');
}

function playGame(){
    let humanScore=0;
    let computerScore=0;
    
    function playRound(humanChoice, computerChoice){
        console.log("human choose "+humanChoice)
        console.log("computer choose "+computerChoice)
        let winner=2;

    if (humanChoice.toLowerCase()=='rocks'){
        if (computerChoice.toLowerCase()=='paper'){
            winner=0;}
        
        else if (computerChoice.toLowerCase()=='scissor'){
            winner=1;
        }
    }
    if (humanChoice.toLowerCase()=='paper'){
        if (computerChoice.toLowerCase()=='scissor'){
            winner=0;}
        
        else if (computerChoice.toLowerCase()=='rock'){
            winner=1;
        }
    }
    if (humanChoice.toLowerCase()=='scissor'){
        if (computerChoice.toLowerCase()=='rock'){
            winner=0;}
        
        else if (computerChoice.toLowerCase()=='paper'){
            winner=1;
        }
    }
    if (winner==1){
            humanScore++;
            console.log('Human Wins this round score with '+humanScore);
    }        
    else if (winner==0){
        computerScore++;
        console.log("Computer wins this round score with "+computerScore);
    }        
    else{
        console.log("this round is tied");
    }


    }
 

    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());

    while (humanScore==computerScore || (humanScore+computerScore<5)) {
        playRound(getHumanChoice(),getComputerChoice());
    }
    if (humanScore>computerScore){
        console.log('humans wins with '+humanScore+"-"+computerScore)

    }
    else{
        console.log('Computer Wins'+computerScore+'-'+humanScore)
    }
}    
playGame()

