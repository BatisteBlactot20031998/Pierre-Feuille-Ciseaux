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