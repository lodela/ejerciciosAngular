import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  personas:string[] = ['Juan', 'pedro', 'pablo', 'hugo', 'paco', 'luis'];

}
