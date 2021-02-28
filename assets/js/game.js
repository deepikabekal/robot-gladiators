var playerName = window.prompt("What  is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roberto", "Android Amy", "Rob Trumble"];
console.log(enemyNames);
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    
    //asking if the player wants to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

    if (promptFight === "FIGHT" || promptFight === "fight") {
        
        //player attacks enemy
    enemyHealth = enemyHealth - playerAttack;
    console.log(enemyHealth);
    window.alert(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      } 
      else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

    playerHealth = playerHealth - enemyAttack;
    console.log(playerHealth);
    window.alert(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    
    //check if the player robot's health
    if (playerHealth<=0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName+ " still has " + playerHealth + " health left.");
        
    }

    
    }

    else if (promptFight === "skip" || promptFight === "SKIP"){

       var confirmSkip =  window.confirm(playerName + ", are you sure you want to quit?");

       if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            playerMoney = playerMoney - 2;           
            window.alert("Penalty! " + playerName + " has now " + playerMoney + " money left.");
       }
       else {
           fight();
       }
    }

    else {
        window.alert("You need to choose a valid option. Try again!")
    }


};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }

