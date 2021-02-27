alert("Bonjour et bienvenue aventurier");
var userPlayer = prompt("Veuillez entrer votre nom pour commencer à jouer!");
var userPlayerChoice = prompt("Merci " + userPlayer + "!" + "\n" + "Pouvez-faire un choix maintenant entre ciseaux, feuille et pierre");
alert("Vous avez choisis " + userPlayerChoice);

var choice = [
    "pierre",
    "feuille",
    "ciseaux"
];

var computerPlayerChoice = Math.floor(Math.random() * choice.length);
computerPlayerChoice = choice[computerPlayerChoice];
    alert("L'ordinateur a choisi " + computerPlayerChoice);

    if(userPlayerChoice === "pierre" && computerPlayerChoice === "ciseaux"){
        alert("You won!");
    }
    else if(userPlayerChoice === "pierre" && computerPlayerChoice === "pierre") {
        alert("Draw!");
    }
    else if(userPlayerChoice === "feuille" && computerPlayerChoice === "pierre") {
        alert("You won");
    }
    else if(userPlayerChoice === "ciseaux" && computerPlayerChoice === "feuille") {
        alert("You won");
    }
    else if(userPlayerChoice === "feuille" && computerPlayerChoice === "feuille") {
        alert("Draw");
    }
    else if(userPlayerChoice === "ciseaux" && computerPlayerChoice === "ciseaux") {
        alert("Draw");
    }
    else {
        alert("You lose!");
    }