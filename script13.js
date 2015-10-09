function ReadError(message, cause) {
  this.message = message;
  this.cause = cause;
  this.name = 'ReadError';
  this.stack = cause.stack;
}

function readData() {
  var data = '{ bad data }';

  try {
    // ...
    JSON.parse(data);
    // ...
  } catch (e) {
    // ...
    if (e.name == 'URIError') {
      throw new ReadError("Ошибка в URI", e);
    } else if (e.name == 'SyntaxError') {
      throw new ReadError("Синтаксическая ошибка в данных", e);
    } else {
      throw e; // пробрасываем
    }
  }
}


try {
  readData();
} catch (e) {
  if (e.name == 'ReadError') {
    alert( e.message );
    alert( e.cause ); // оригинальная ошибка-причина
  } else {
    throw e;
  }
}


//____________________________________

alert("***********************");

function sum(n) {
  return n ? (n + sum(n - 1)) : 0;
}

var n = +prompt('Введите n?', 100);

var start = new Date();

try {
  var result = sum(n);
} catch (e) {
  result = 0;
} finally {
  var diff = new Date() - start;
}

alert( result ? result : 'была ошибка' );
alert( "Выполнение заняло " + diff );