import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './persona.component.html',
  styleUrls: ['persona.component.scss']
})
export class PersonaComponent {
  nombres = ['norberto', 'Eduardo', 'Cesar', 'Christian', 'Vicente','Edgar'];
  @Input() personasList:string[];
}








