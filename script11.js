var arr = '{ \
	"id": "123", \
    "name": "Вася", \
    "age": 25, \
	"hren": "ololo" \
}';
try{
var data = "It's Error!";
if(!arr.ololo){
	throw new SyntaxError("Date with error!");
}

var user = JSON.parse(arr);

alert(user.ololo);
}catch(e){
	alert("Error" + e.name + " : " + e.message + "\n" + e.stack);
}
