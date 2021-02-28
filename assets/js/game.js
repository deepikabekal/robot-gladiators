var playerName = window.prompt("What  is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    enemyHealth = enemyHealth - playerAttack;
    console.log(enemyHealth);
    window.alert(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    playerHealth = playerHealth - enemyAttack;
    console.log(playerHealth);
    window.alert(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
};

fight();