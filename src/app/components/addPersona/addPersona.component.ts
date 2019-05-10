import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addPersona',
  templateUrl: './addPersona.component.html',
  styleUrls: ['./addPersona.component.scss']
})
export class AddPersonaComponent {
  
  public enteredPersonaName:string = 'algo';
  datos = {
    personaName : 'este es el objeto'
  }
  @Output() personCreated = new EventEmitter<any>();

  constructor() { }

  onAddPersona() {
    this.personCreated.emit(this.datos);
    this.datos.personaName = '';
  }

}
