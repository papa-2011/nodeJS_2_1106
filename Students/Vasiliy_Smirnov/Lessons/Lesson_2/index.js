const readline = require("readline-sync");

let getNumber = () => {
    let number = [];
    while (number.length < 4) {
        let newNumber = Math.floor(Math.random () * 10);
        if (number.indexOf(newNumber) < 0) {
            number.push(newNumber);
        }
    }
    return number;
};

let pcNumber = getNumber();

let getUserNumber = () => {
    let userNumber = parseInt(readline.question("?"));
    let arr = [];

    for (let i = 0; i < 4; i++) {
        let newUserArrElement = parseInt(userNumber.substr(i, 1));
        arr.push(newUserArrElement);
    }
    cheked ();
};

let cheked = (par) => {
    let bulls = 0;
    let cows = 0;
    let turns = 10;
    
    for (let i = 0; i < 4; i++) {
        if (par[i] == pcNumber[i]) {
            bulls++;
        } else if (pcNumber.indexOf(par[i]) >= 0) {
            cows++;
        }
    }

    turns--;

    if (turns == 0 || bulls == 4) {
        let status = 'Вы проиграли!';
        if (bulls == 4) {
            status = 'Вы выйграли!';
        }
    }
};
getUserNumber();
console.log(pcNumber, userNumber);