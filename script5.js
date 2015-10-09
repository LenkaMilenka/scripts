function makeCount(){
	var countCur = 1;
	
	function counter(){
		return countCur++;
	}
	counter.setCount = function(value){
		countCur = value;
	}
	
	counter.reset = function(){
		countCur = 0;
	}
	
	return counter;
}

var counter = makeCount();

alert(counter());
alert(counter());
counter.setCount(12);
alert(counter());




