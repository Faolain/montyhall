function MontyHall(){
  this.choices = {
          1: "goat",
          2: "car",
          3: "goat"
        };
}

MontyHall.prototype = {
  switch: function (num){
      var switchWins = 0;
      var switchLosses = 0;

      for(var i = 0; i < num; i ++){

      var userChoice = Math.floor((Math.random()*3)+1);
      var newUserChoice = 0;

      for(var key in this.choices){
        if(key != userChoice && this.choices[key] != "car")
          delete this.choices[key];
      }

      for (var key in this.choices){
        if(key != userChoice){
          newUserChoice = this.choices[key];
        }
      }

      if(newUserChoice == "car")
        switchWins++;
      else{
        switchLosses++;
      }
    }

    return {
      switchWins: switchWins,
      switchLosses: switchLosses
    };
  },
  noSwitch: function(num){
      var noSwitchWins = 0;
      var noSwitchLosses = 0;

      for(var i = 0; i < num; i ++){

      var userChoice = Math.floor((Math.random()*3)+1);
      if(this.choices[userChoice] == "car"){
        noSwitchWins++;
      }
      else{
        noSwitchLosses++;
      }
    }

    return{
      noSwitchWins: noSwitchWins,
      noSwitchLosses: noSwitchLosses
    };
  }
};

var game = new MontyHall();
var rounds = 1000;
var switching = game.switch(rounds);
var noSwitching = game.noSwitch(rounds);


console.log("Switching Wins: " + switching.switchWins/(rounds/100) + "% " + "Switching Losses: " + switching.switchLosses/(rounds/100) + "%" );
console.log("No Switching Wins: " + noSwitching.noSwitchWins/(rounds/100)+ "% " + "No Switching Losses: " + noSwitching.noSwitchLosses/(rounds/100) + "%");
