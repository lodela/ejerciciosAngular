const fs         = require('fs');
const events     = require('events');
var eventEmitter = new events.EventEmitter();

//listeners
var fileCreatedListener = function () {
  console.log('archivo fue creado, mensaje desde el listener... :D');
  let file = 'Hola.txt';
  let contenido = 'mucho texto aqui del contenido'
  eventEmitter.emit('segundoListener', {file:file,cont:contenido});
}
var listener2 = function (file) {
  console.log('hola soy el listener 2');
  console.log(file);
}

//crear archivo
fs.writeFile('../../../assets/files/test.txt', 'contenido TXT', function (err) {
  if (err) {
    console.log('ocurrió un error: ', err);
    return;
  }
  else {
    eventEmitter.emit('fileCreatedOK');
  }
});

// leer archivo recien creado

fs.readFile('../../../assets/files/test.txt', function (err, data) {
  if (err) {
    console.log('ocurrió un error: ', err);
    return;
  }
  else {
    console.log(data.toString());
  }
});

eventEmitter.on('fileCreatedOK', fileCreatedListener);
eventEmitter.on('segundoListener', listener2);

