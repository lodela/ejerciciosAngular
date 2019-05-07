import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addPersona',
  templateUrl: './addPersona.component.html',
  styleUrls: ['./addPersona.component.scss']
})
export class AddPersonaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAddPersona(newName:string) {
    console.log('new name: ', newName);
  }

}
