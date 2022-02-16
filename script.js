function GetRand(max, min) {
 return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function Roll(numOfSides) {
    let rolls = [GetRand(numOfSides,1), GetRand(numOfSides,1)];
    return rolls;
}

function PrintRoll(rolls, rollNum) {
    console.log(`${rollNum}. die number one is ${rolls[0]} and die two is ${rolls[1]}`);
}

function FinalPrintout(doubles, rollNum, d1Total, d2Total) {
    console.log(`You got snake eyes! Finally! On try number ${rollNum}!`);
    console.log(`Along the way you rolled doubles ${doubles} times`);
    console.log(`The average roll for die #1 was ${d1Total/rollNum}`);
    console.log(`The average roll for die #2 was ${d2Total/rollNum}`);
}

function CheckSnake(rolls) {
 if(rolls[0] === rolls[1] && rolls[1] === 1) {
     console.log("Snake Eyes!");
     return true;
 } else {
     return false;
 }
}

function PlayGame() {
    let rollNum = 0;
    let doubles = 0;
    let d1Total = 0;
    let d2Total = 0;

    let valid;
    let numOfSides;
    do {
        numOfSides = parseInt(prompt("Please enter the number of sides you would like: "));
        if(numOfSides <= 2) {
            valid = true;
        } else {
            valid = false;
        }
    } while(valid)

    do {
        rolls = Roll(numOfSides);
        rollNum++;
        d1Total+= rolls[0];
        d2Total+= rolls[1];
        
        PrintRoll(rolls, rollNum);

        if(CheckSnake(rolls)) {
            doubles++;
            FinalPrintout(doubles, rollNum, d1Total, d2Total);
        } else if (rolls[0] === rolls[1]) {
            doubles++;
        }
    } while(CheckSnake())
}

PlayGame();
