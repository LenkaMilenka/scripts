var animal = {
	eat : true
};

var cat = {
	sleep : true
};
// в cat можно найти оба свойства
cat.__proto__ = animal;

for(var key in cat){
	alert(key + " = " + cat[key]);
};

alert(cat.hasOwnProperty('eat'));

