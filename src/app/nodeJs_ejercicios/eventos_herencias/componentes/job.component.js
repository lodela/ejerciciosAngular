const util   = require('util');
const events = require('events');

const Job = function(){
    var job = this;
        job.process = ()=>{
            setTimeout(()=>{
                job.emit('done', {'completedOn': new Date()})
            },700);
        };
        job.on('start',()=>{
            console.log('hola desde el listener del evento "start"');
            job.process();
        });
};

util.inherits(Job, events.EventEmitter);
module.exports = Job;