const events  = require('events');
const emitter = new events.EventEmitter();

//listeners

emitter.on('knock',()=>{
    console.log('Knock Knock...!');
});

emitter.on('knock',()=>{
    console.log('How\'s there?');
    emitter.emit('itsMe');
});

emitter.on('itsMe',()=>{
    console.log('It\'s Me...');
    emitter.emit('go');
});

emitter.on('go',()=>{
    console.log('today, they aren\'t hard tortillas, please cme back tomorrow.');
});


emitter.emit('knock');


