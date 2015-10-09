/* Напишите конструктор User для создания объектов:

    С приватными свойствами имя firstName и фамилия surname.
    С сеттерами для этих свойств.
    С геттером getFullName(), который возвращает полное имя.
*/


function User() {
  var firstName;
  var surname;
  
  this.setFirstName = function(str){
	  firstName = str;
  };
  
  this.setSurname = function(str){
	  surname = str;
  };
  
  this.getFullName = function(){
	  return firstName + ' ' + surname;
  };
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов