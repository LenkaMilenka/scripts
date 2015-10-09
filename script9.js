function User(fullName){
	this.fullName = fullName;
	
	Object.defineProperties(this, {
		firstName : {
			get: function(){
				return this.fullName.split(' ')[0];
			},
			
			set: function(newFirstName){
				this.fullName = newFirstName + ' ' + this.lastName;
			}
		},
		
		lastName : {
			get : function(){
				return this.fullName.split(' ')[1];
			},
			
			set: function(newLastName){
				this.fullName = this.firstName + ' ' + newLastName;
			}
		}
	});
	
}


var vasia = new User("Vasia Popkin");

alert(vasia.firstName);
alert(vasia.lastName);

vasia.lastName = "Sidorov";

alert(vasia.fullName);

vasia.firstName = "Kolia";

alert(vasia.fullName);