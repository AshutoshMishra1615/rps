
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
function getHumanChoice(Button){
    return Button.className

}
let humanScore=0;
let computerScore=0;
function playGame(Button){

    
    function playRound(humanChoice, computerChoice){

        const choices =document.querySelector('.choice')
        choices.setAttribute('style', 'white-space: pre;');
        choices.textContent=`human choose ${humanChoice} \r\n`
        choices.textContent+=`computer choose ${computerChoice}`
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
    document.querySelector('h2').textContent='Score : '+ humanScore+'-'+computerScore;

    }
 

    playRound(getHumanChoice(Button),getComputerChoice());


    if (!(humanScore==computerScore || (humanScore+computerScore<5))) {
        if (humanScore>computerScore){
            document.querySelector('h2').textContent='humans wins with '+humanScore+"-"+computerScore;
            humanScore=0;
            computerScore=0;
        }
        else{
            document.querySelector('h2').textContent='Computer Wins'+computerScore+'-'+humanScore;
            humanScore=0
            computerScore=0
        }
     }
 
}    
const buttons=document.querySelectorAll('button');
buttons.forEach((Button)=> Button.addEventListener('click',()=>playGame(Button)));

