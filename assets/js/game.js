var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  // alert players the round is starting
  window.alert("Welcome to Robot Gladiators!");

  // ask the player if they would fight or skip the fight
  var promptFight = window.prompt("Would you like to FIGHT or SKIP the battle? Enter 'FIGHT' or 'SKIP' to choose.");
  console.log(promptFight);

  //if playe chose to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {

    //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

    // log a resulting message to the console so we know it worked
    console.log(
      playerName + " has attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    )

    //check enemy's health
    if (enemyHealth <=0) {
      window.alert(enemyName + " has died.");
    }
    else {
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
    }
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
  else if (promptFight === "skip" || promptFight === "SKIP") {
      window.alert(playerName + " has chosen to skip the fight.");
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from player
        playerMoney = playerMoney - 2;
      }
      // if no (false), ask again by running fight() function
      else {
        fight();
      }

  }
  else {
    window.alert("You need to choose a valid option. Try again!");
  }
};

fight();