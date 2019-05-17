import { Component, OnInit } from '@angular/core';
import { PersonaService }    from '../../services/personasList.service';
import { Users }             from '../../models/useres.model';
import { UsersService }      from '../../services/users.service';


@Component({
  selector: 'app-personas',
  templateUrl: './persona.component.html',
  styleUrls: ['persona.component.scss']
})
export class PersonaComponent implements OnInit {
  personasList:string[];
  
  usersList:Users[];
  
  
  constructor(
    private personas: PersonaService,
    private users:UsersService
  ){}
  
  ngOnInit(){
    this.personasList = this.personas.personas;
    this.users.getUsers()
              .then(respuesta => this.usersList = respuesta);
  }
  
}








