var user = {
	firstName: "FirstName",
	surname: "Surname",
	name: "Name"
}


Object.defineProperty(user, "fullName",{
	get: function(){
		return this.firstName + ' ' + this.surname + ' ' + this.name;
	}
});

alert(user.fullName);

