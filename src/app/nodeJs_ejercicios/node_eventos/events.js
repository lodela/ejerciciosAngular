const events = require('events');
var eventEmitter = new events.EventEmitter();

// listener n1
var listener1 = function () {
    console.log('hola desde el listener no. 1');
}

//listener 2
var listener2 = function () {
    console.log('hola desde el listener no. 2');
}

//bindings here:
eventEmitter.on('connection',listener1);
eventEmitter.on('connection',listener2);

//emit event "connection"
eventEmitter.emit('connection');

//remove listeners
eventEmitter.removeListener('connection', listener1);
console.log('listener1 was removed...');

eventEmitter.emit('connection');

