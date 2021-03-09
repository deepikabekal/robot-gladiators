var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    this.health += 20;
    this.money -= 7;
  }, // comma!
  upgradeAttack: function() {
    this.attack += 6;
    this.money -= 7;
  }
};
//console.log(playerInfo.name, playerInfo.health, playerInfo.money);

//object for enemy features
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10,14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10,14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10,14)
  }
];

var shop = function(){
  var playerItem = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE' or 'LEAVE' to make a choice");
  // use switch to carry out action
  switch (playerItem) {
    case "UPGRADE":
    case "upgrade":
      if (playerInfo.money >= 7){
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        // increase attack and decrease money
        playerInfo.upgradeAttack;   
      } else {
        window.alert("You dont have enough money!");
      }      
      break;
    case "REFILL":
    case "refill":
      if (playerInfo.money >=7){
        window.alert("Refilling player's health by 20 for 7 dollars.");
        // increase health and decrease money
        playerInfo.refillHealth;
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
  window.alert("The game has now ended. Let's see how you did.");

  //if the player is still alive the player wins
  if (playerInfo.health>0){
  window.alert("Great job, you have survived the game! You now have a score of " + playerInfo.money + ".");
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
 function randomNumber(min,max) {
  var value = Math.floor(Math.random() * (max-min + 1) + min);

  return value;
}

var fight = function(enemy) {
  console.log (enemy);
    // repeat and execute as long as the enemy-robot is alive 
  while(enemy.health  > 0 && playerInfo.health > 0) {
       
    //asking if the player wants to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP"){

      // confirm player wants to skip
     var confirmSkip =  window.confirm(playerInfo.name + ", are you sure you want to quit?");

     // if yes (true), leave fight
     if (confirmSkip) {
          window.alert(playerInfo.name + " has chosen to skip the fight. Goodbye!");
          playerInfo.money = Math.max(0,playerInfo.money - 10);           
          window.alert("Penalty! " + playerInfo.name + " has now " + playerInfo.money + " money left.");
          console.log("Penalty! " + playerInfo.name + " has now " + playerInfo.money + " money left.");
          break;
     }
     
    }

    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(enemy.health);
    window.alert(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
    console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.")
    
    // check enemy's health
    if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
         // award player money for winning
        playerInfo.money = playerInfo.money + 20; 
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm('The fight is over, visit the store before the next round?');

        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }

        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }
    
        
    
      
    var damage = randomNumber(enemy.attack-3,enemy.attack);
    playerInfo.health = Math.max(0,playerInfo.health-damage);
    console.log(playerInfo.health);
    window.alert(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
    console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo + " now has " + playerInfo.health + " health remaining.");
    
    //check if the player robot's health
    if (playerInfo.health===0) {
        window.alert(playerInfo.name + " has died!");
        console.log(playerInfo.name + " has died!");

        // leave while() loop if player is dead
        break;
    }
    else {
        window.alert(playerInfo.name+ " still has " + playerInfo.health + " health left.");
        console.log(playerInfo.name+ " still has " + playerInfo.health + " health left.");
        
    }

  }

};

var startGame = function(){
  //reset player stats
  playerInfo.reset();
  for(var i = 0; i < enemyInfo.length; i++) {

    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyObj = enemyInfo[i];
  
      // reset enemyHealth before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);
      
  
      // use debugger to pause script from running and check what's going on at that moment in the code
      debugger;
  
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyObj);
    } else {
      break;
    }
    
  }
  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
    
};
  

startGame();

//function to end the game.







