console.log("Hello");
function compChoice() {
    let choice = Math.floor(Math.random()*3);
    if(choice == 0) {
        return "rock";
    }
    else if(choice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function humanChoice() {
    let choice = prompt("Enter your choice: ");
    return choice.toLowerCase();
}
let humansc = 0;
let compsc = 0;
function round(cc,ch) {
    if(cc == "rock" && ch == "paper") {
        console.log(cc+" vs "+ch+" You win!!!");
        return ++humansc;
    }
    else if(cc == "rock" && ch == "scissors") {
       console.log(cc+" vs "+ch+" Computer wins");
        return ++compsc;
    }
    else if(cc == "paper" && ch == "rock") {
        console.log(cc+" vs "+ch+" Computer wins");
        return ++compsc;
    }
    else if(cc == "paper" && ch == "scissors") {
        console.log(cc+" vs "+ch+" You win!!!");
        return ++humansc;
    }
    else if(cc == "scissors" && ch == "paper") {
        console.log(cc+" vs "+ch+" Computer wins");
        return ++compsc;
    }
    else if(cc == "scissors" && ch == "rock") {
        console.log(cc+" vs "+ch+" You win!!!");
        return ++humansc;
    }
    else if(cc == ch) {
        console.log("DRAW//");
        return 0;
    }
    else {
        console.log("invalid choice");
    }
}
function play() {
    for(let i=0;i<5;i++) {
        let cc = compChoice();
        let ch = humanChoice();
        let str = round(cc,ch);
        console.log("The current score is as follows:\nComputer: "+compsc+"\nHuman: "+humansc);
    }
    if(humansc>compsc) console.log("You win the game");
    else console.log("You lost");
}
play();

