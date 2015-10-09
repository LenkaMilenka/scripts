//class Animal
function Animal(name){
	this.name = name;
	this.speed = 0;
};

//function addition speed
Animal.prototype.run = function(speed){
	this.speed += speed;
	alert(this.name + " run, speed = " + this.speed);
};

//function stop animal 
Animal.prototype.stop = function(){
	this.speed = 0;
	alert(this.name + " stop!");
};

//class Rubbit
function Rubbit(name){
	Animal.apply(this, arguments);
};

//function jump Rubbit
Rubbit.prototype.jump = function(speed){
	this.speed += speed;
	alert(this.name + " jump, speed = " + this.speed);
};

Rubbit.prototype.__proto__ = Animal.prototype;


var animal = new Animal("ololo");
animal.run(120);
animal.stop();

var rubbit = new Rubbit("rub");
rubbit.jump(50);
rubbit.stop();
