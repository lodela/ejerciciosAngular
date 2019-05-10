const Job = require('./componentes/job.component.js');
const job = new Job();

//lister
      job.on('done',(details)=>{
          console.log('el trabajo ha terminado: ', details.completedOn);
      });
    //   job.process();
      job.emit('start');