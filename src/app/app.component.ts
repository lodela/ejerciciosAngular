import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngEjerciciosGMF';
  
  
  // onPersonCreated(datos:any){
  //   let newPersona:string = datos.personaName;
  //   let personasCleanArr  = this.personas;
  //       personasCleanArr.push(newPersona);
  //       personasCleanArr = personasCleanArr.filter(this.distinct);
  //   this.personas = personasCleanArr;
  //   console.log(personasCleanArr);
  // }
  
  distinct = (value, index, self) =>{
    return self.indexOf(value) === index;
  }
} 



