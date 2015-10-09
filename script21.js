// Объявление
function PropertyError(property) {
  this.name = "PropertyError";

  this.property = property;
  this.message = "Error in property " + property;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor); // (*)
  } else {
    this.stack = (new Error()).stack;
  }
  
  alert("Error name : " + this.name + "\nProperty : " + this.property)

}

PropertyError.prototype = Object.create(Error.prototype);
PropertyError.prototype.constructor = PropertyError;

// generated error
function readUser(data) {

  var user = JSON.parse(data);

  if (!user.age) {
    throw new PropertyError("age");
  }

  if (!user.name) {
    throw new PropertyError("name");
  }

  return user;
}

// Block try..catch

try {
  var user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof PropertyError) {
    if (err.property == 'name') {
      // It's ok, if can be anonym
      alert( "Hello, Anonym!" );
    } else {
      alert( err.message ); // Error in property ...
    }
  } else if (err instanceof SyntaxError) {
    alert( "Error in syntax date: " + err.message );
  } else {
    throw err; // undefined error. I don't know, what doing.
  }
}

function PropertyRequiredError(property) {
  PropertyError.apply(this, arguments);
  this.name = 'PropertyRequiredError';
  this.message = 'Property is ebsent  ' + property;
}

PropertyRequiredError.prototype = Object.create(PropertyError.prototype);
PropertyRequiredError.prototype.constructor = PropertyRequiredError;

var err = new PropertyRequiredError("age");
// pass test
alert( err instanceof PropertyError ); // true
