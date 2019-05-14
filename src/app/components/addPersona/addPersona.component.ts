import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addPersona',
  templateUrl: './addPersona.component.html',
  styleUrls: ['./addPersona.component.scss']
})
export class AddPersonaComponent {
  
  public enteredPersonaName:string = 'algo';
  datos = {
    personaName : ''
  }
  @Output() personCreated = new EventEmitter<any>();

  constructor() { }

  onAddPersona(data:NgForm) {
    console.log(data);
    // this.personCreated.emit(this.datos);
    // this.datos.personaName = '';
  }
  enviarFormulario(value:NgForm){
    console.log(value);
  }

}

