var playerName = window.prompt("What  is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roberto", "Android Amy", "Rob Trumble"];
console.log(enemyNames);
var enemyHealth = 0;
var enemyAttack = 12;

var shop = function(){
  var playerItem = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE' or 'LEAVE' to make a choice");
  // use switch to carry out action
  switch (playerItem) {
    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 7){
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        // increase attack and decrease money
        playerMoney = playerMoney - 7;
        playerAttack = playerAttack + 6;      
      } else {
        window.alert("You dont have enough money!");
      }      
      break;
    case "REFILL":
    case "refill":
      if (playerMoney >=7){
        window.alert("Refilling player's health by 20 for 7 dollars.");
        // increase health and decrease money
        playerMoney = playerMoney - 7;
        playerHealth = playerHealth + 20; 
      } else {
        window.alert("You dont have enough money!");
      }       
      break;
    case "LEAVE" :
    case "leave":
      window.alert("Leaving the store.");
      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      // call shop() again to force player to pick a valid option
      shop();
      break;
  }


} ;

var endGame = function(){
  window.alert("The game has now ended. Let's see how you did.")

  //if the player is still alive the player wins
  if (playerHealth>0){
  window.alert("Great job, you have survived the game! You now have a score of " + playerMoney + ".");
  } else {
    window.alert("You have lost your robot in the battle!");
  }
  var playerAgainConfirm = window.confirm("Do you want to play again?");
  if  (playerAgainConfirm) {
    //Restart the game.
    startGame();
  } else{
    window.alert("Thank you for playing Robot Gladiator! Come back soon!");
  }

};

// function to generate a random numeric value
var randomNumber = function(min,max) {
  var value = Math.floor(Math.random() * (max-min + 1) + min);

  return value;
};

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
          playerMoney = Math.max(0,playerMoney - 10);           
          window.alert("Penalty! " + playerName + " has now " + playerMoney + " money left.");
          console.log("Penalty! " + playerName + " has now " + playerMoney + " money left.");
          break;
     }
     
    }

    // generate random damage value based on player's attack power
    var damage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);
    console.log(enemyHealth);
    window.alert(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")
    
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
         // award player money for winning
        playerMoney = playerMoney + 20; 
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm('The fight is over, visit the store before the next round?');

        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }

        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
    
        
    
      
    var damage = randomNumber(enemyAttack-3,enemyAttack);
    playerHealth = Math.max(0,playerHealth-damage);
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

var startGame = function(){
  //reset player stats
  playerHealth = 100;
  playerMoney=10;
  playerAttack=10;
  for(var i = 0; i < enemyNames.length; i++) {

    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];
  
      // reset enemyHealth before starting new fight
      enemyHealth = randomNumber(40,60);
      
  
      // use debugger to pause script from running and check what's going on at that moment in the code
      
  
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
    } else {
      break;
    }
    
  }
  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
    
};

startGame();

//function to end the game.







