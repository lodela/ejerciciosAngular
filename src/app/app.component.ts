import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngEjerciciosGMF';
  public personas:string[] = ['Juan', 'pedro', 'pablo', 'hugo', 'paco', 'luis', 'norberto'];
  
  onPersonCreated(datos:any){
    // this.personas.push(name);
    console.log('holoa desde el root component');
    console.log(datos);
    console.log('fin del programa... gracias');
  }
}

