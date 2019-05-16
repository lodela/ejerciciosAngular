import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class PersonaService{
    personas:string[] = ['Pedro', 'Pablo Marmol', 'hugo', 'paco', 'luis'];
    
    onAddPerson(name:string){
        console.log('se activó el servicio');
        console.log(name);
        this.personas.push(name);
        
        console.log(this.personas);
    }
}


