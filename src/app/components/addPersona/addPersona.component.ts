import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonaService } from '../../services/personasList.service';

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

  constructor(private newPersona:PersonaService) { }
  
  onAddPersona(data:NgForm) {
    console.log(data.value.name);
    this.newPersona.onAddPerson(data.value.name);
  }

}



