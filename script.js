
function getComputerChoice(){
    
 let num = Math.floor(Math.random() * 3);
    console.log(num);


    if(num ==0){
         return "rock";
    }else if (num ==1){
        return "paper";
    }else{
        return "scissors";
    }
    }


console.log(getComputerChoice());



function getHumanChoice(){
let userInput = prompt("Rock,Paper,Scissor, Shoot!:", '');
return userInput;

}

console.log(getHumanChoice());