import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/personasList.service';

@Component({
  selector: 'app-personas',
  templateUrl: './persona.component.html',
  styleUrls: ['persona.component.scss']
})
export class PersonaComponent implements OnInit {
  personasList:string[];
  usersList:Object;
  
  constructor(private personas: PersonaService){}
  
  ngOnInit(){
    this.personasList = this.personas.personas;
  }
}








