function Machine(power) {
  this._power = power;
  this._enabled = false;
  this._broken = false;

  var self = this;

  //Enabled machine, if machine don't broken
  this.enable = function() {
	  if(!self._enabled){
		  if(self._broken){
			 self.broken();  
		  }
		  else{ 
			self._enabled = true;
			alert("Enable");
			document.write("Enable!");
		  }
	  }
	  else{
		  alert("Machine enable later!");
		  //alert("\n\n\n\n\n\n hernya \n\n\n\n\n\n\n");
		  document.write("Machine enable later!");
	  }
  };

  //Disable machine
  this.disable = function() {
    self._enabled = false;
	alert("Disable");
	document.write("Disable!");
  };
  
  //Setting machine status "broken"
  this.broken = function(){
	  try{
		  	self._broken = true;
			self._enabled = false;
			alert("Broken");	
			document.write("Broken!");
			throw new Error("Machine broken!");
	   }catch(e){		   
		   this.repair();	 
	  }
  };
  
  //Setting machine status broken = false (repair machine)
   this.repair = function(){
			//setTimeout(1000);
			alert("Machine repair!");
			document.write("Machine repair!");
			self._broken = false;	
			self.enable();				
	};  
}

//class CoffeeMachine - machine's son   
function CoffeeMachine(power) {
  Machine.apply(this, arguments);
  this._waterAmount = 0;
}

// property and method to all class's object
CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

CoffeeMachine.prototype._getTimeToBoil = function() {
	if(this._waterAmount > 100){
		alert("CoffeeMachine have smoller 100!");
	}
	else{	
		return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
	}
};

CoffeeMachine.prototype.run = function() {
	if(!this._enabled){
		alert("CoffeeMachine disable!");
		document.write("CoffeeMachine disable!");
		
		throw new Error("CoffeeMachine disable!");

	}

  setTimeout(function() {
    alert( 'Coffee ready!' );
	document.write("Coffee ready!");
  }, this._getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function(amount) {
  this._waterAmount = amount;
};

var coffeeMachine = new CoffeeMachine(10000);
document.clear();//clear html page
coffeeMachine.broken();
coffeeMachine.enable();
coffeeMachine.enable();
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();

//coffeeMachine.disable();
