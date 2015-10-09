try {
	alert("Start try");
	ololo;
	
	
	alert("Finish try");
}catch(e){
	alert("It's error" + e.name + " : " + e.message + "\n" + e.stack);
}
alert("After error");