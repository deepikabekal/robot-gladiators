var playerName = window.prompt("What  is your robot's name?");
var playerHealth = 70;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roberto", "Android Amy", "Rob Trumble"];
console.log(enemyNames);
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName) {

    // repeat and execute as long as the enemy-robot is alive 
  while(enemyHealth  > 0 && playerHealth > 0) {
       
    //asking if the player wants to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP"){

      // confirm player wants to skip
     var confirmSkip =  window.confirm(playerName + ", are you sure you want to quit?");

     // if yes (true), leave fight
     if (confirmSkip) {
          window.alert(playerName + " has chosen to skip the fight. Goodbye!");
          playerMoney = playerMoney - 10;           
          window.alert("Penalty! " + playerName + " has now " + playerMoney + " money left.");
          console.log("Penalty! " + playerName + " has now " + playerMoney + " money left.");
          break;
     }
     
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(enemyHealth);
    window.alert(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")
    
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
         // award player money for winning
        playerMoney = playerMoney + 20;
        break;
    } 
      else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(playerHealth);
    window.alert(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    
    //check if the player robot's health
    if (playerHealth<=0) {
        window.alert(playerName + " has died!");
        console.log(playerName + " has died!");

        // leave while() loop if player is dead
        break;
    }
    else {
        window.alert(playerName+ " still has " + playerHealth + " health left.");
        console.log(playerName+ " still has " + playerHealth + " health left.");
        
    }

  }

};

for(var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
     // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
     window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

     // pick new enemy to fight based on the index of the enemyNames array
     var pickedEnemyName = enemyNames[i];
 
     // reset enemyHealth before starting new fight
     enemyHealth = 50;
 
     // use debugger to pause script from running and check what's going on at that moment in the code
     // debugger;
 
     // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
     fight(pickedEnemyName);
  }
  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
}
