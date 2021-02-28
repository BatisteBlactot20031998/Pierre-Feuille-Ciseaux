        //Create a window alert for user

    alert("Bonjour et bienvenue aventurier");

        //Create two var: one var for user and one var for userchoice

var userPlayer = prompt("Veuillez entrer votre nom pour commencer à jouer!");
var userPlayerChoice = prompt("Merci " + userPlayer + "!" + "\n" + "Pouvez-faire un choix maintenant entre ciseaux, feuille et pierre");

    alert("Vous avez choisis " + userPlayerChoice);

        //Create a var for choices games with feuille, pierre and ciseaux

var choice = [
    "pierre",
    "feuille",
    "ciseaux"
];
        //Create a computer choice with a random number at Mathfloor - Mathrandom

var computerPlayerChoice = Math.floor(Math.random() * choice.length);
computerPlayerChoice = choice[computerPlayerChoice];

    alert("L'ordinateur a choisi " + computerPlayerChoice);

        //Create conditions for differences at choices pierre feuille ciseaus for win, lose or draw

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

//Create a window alert for say the game is finish

    alert("End of the game");