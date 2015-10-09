//-------------Machine-------//
//-------Parents class!------//
function Machine(power) {
  this._power = power;
  this._enabled = false;
  this._broken = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
	alert("Enable");
  };

  this.disable = function() {
    self._enabled = false;
	alert("Disable");
  };
  
  this.broken = function(){
	self._broken = false;
	alert("Broken");	
  };
  
}

//----------Fridge---------//
//----------Class son------//

function Fridge(power) {
  Machine.apply(this, arguments);

  var food = []; // private propetry food

  // -----add
  this.addFood = function() {
    if (!this._enabled) {
		throw new Error("Fridge disable");
      alert("Fridge disabled");
    }
	if(this._broken){
		throw new Error("Fridge broken");
		alert("Fridge broken");
	}
    if (food.length + arguments.length >= this._power / 100) {
      throw new Error("Don't addition! Power smoller!");
    }
    for (var i = 0; i < arguments.length; i++) {
      food.push(arguments[i]); // addition all with arguments
    }

  };

  //-------geter
  this.getFood = function() {
    // copy information in new array
    return food.slice();
  };

  // -----filter
  this.filterFood = function(filter) {
    return food.filter(filter);
  };

  //-----remove
  this.removeFood = function(item) {
    var idx = food.indexOf(item);
    if (idx != -1) food.splice(idx, 1);
  };

  //-----disable
  var parentDisable = this.disable;
  this.disable = function() {
    if (food.length) {
		alert("Don't disable. Fridge have eat!");
      throw new Error("Don't disable. Fridge have eat!");
	  
    }
    parentDisable();
  };
}

function CoffeeMachine(power){
	Machine.apply(this, arguments);
}

var coffeMachine = new CoffeeMachine(10000);
coffeMachine.enable();

//----------------main----------//
var fridge = new Fridge(1000);
function addFoodInFridge(){
	//------elements in fridge 
	fridge.enable();
	fridge.addFood({
	  title: "meat",
	  calories: 100
	});

	fridge.addFood({
		title: "apple",
		calories: 20
	});

	/*fridge.addFood({
	  title: "juice",
	  calories: 30
	});

	fridge.addFood({
	  title: "green",
	  calories: 10
	});

	fridge.addFood({
	  title: "jam",
	  calories: 140
	});

	//I want sex! Very mach... Oh, my Gad.
	fridge.addFood({
		title: "sex",
		calories: -15
	});

	fridge.addFood({
		title: "anal",
		calories: -5
	});

	fridge.addFood({
		title: "bdsm",
		calories: -3
	});

	fridge.addFood({
		title: "masturbation",
		calories: -7
	});*/
};

addFoodInFridge();

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 60;
});

fridge.removeFood("haven't in eat!"); // without effect
alert( fridge.getFood().length ); // all (count)

dietItems.forEach(function(item) {
  alert( item.title ); // juice, green (<50 calories)
  fridge.removeFood(item);
});

//-----PROTOTIPE
function showList() {
  alert( Array.prototype.join.call(arguments, " - ") );
}

showList(" IT'S", "MY", "PROTOTYPE"); 

//-------------ARR
alert( fridge.getFood().length ); // mini calories

var arr = [1, 2, 3];

//-------REPEAT
String.prototype.repeat = function(times) {
  return new Array(times + 1).join(this);
};


alert( arr.toString().repeat(3) ); // arrarrarr (123123123)

//-----TIMEOUT
Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
}

function f() {
  alert( "Hi=)" );
}

f.defer(1000); // output "Hi!=)" with 10 seconds

fridge.broken();
 
//-----CLOSE
fridge.disable(); 

//fridge.disable();
