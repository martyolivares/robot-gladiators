// game states
// "win" - player defeated all enemy robots
//  * fight all enemy robots
//  * defeat all enemy robots
// "lose" - player robot's health is zero or less


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

/* console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);
*/

 var fight = function(enemyName) {
  // repeat and execute as long as enemy is alive

  while(enemyHealth > 0 && playerHealth > 0) {
   // alert players the round is starting
  // window.alert("Welcome to Robot Gladiators!");

  // ask the player if they would fight or skip the fight
  var promptFight = window.prompt("Would you like to FIGHT or SKIP the battle? Enter 'FIGHT' or 'SKIP' to choose.");
  console.log(promptFight);
  // if player picks skip, confirm and then stop loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    //window.alert(playerName + " has chosen to skip the fight.");
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from player
      playerMoney = playerMoney - 10;
      console.log("playerMoney", + playerMoney);
      break;
    }
  }

    //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

    // log a resulting message to the console so we know it worked
    console.log(
      playerName + " has attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    )

    //check enemy's health
    if (enemyHealth <=0) {
      window.alert(enemyName + " has died.");
    // award player for winning
    playerMoney = playerMoney + 20;
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;

    // log a resulting message to the console so we know it worked
    console.log(
      enemyName + " has attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaning."
    )
    //check player's health
    if (playerHealth <=0) {
      window.alert(playerName + " has died.");
      break;
    }
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  } // end of while
}; // end of var

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        // let player know what round they're in, arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );

        // pick new enemy to fight based on the index of enemyNames array
        var pickedEnemyName = enemyNames[i];

        // reset enemyHealth before starting new fight
        enemyHealth = 50;
        
    // call fight function with enemy
    fight(pickedEnemyName);
  }
}



// fight();