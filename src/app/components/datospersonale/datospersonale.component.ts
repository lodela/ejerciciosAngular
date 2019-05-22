import { Component, OnInit } from '@angular/core';
import { Users }             from '../../models/useres.model';
import { UsersService }      from '../../services/users.service';

@Component({
  selector   : 'app-datospersonale',
  templateUrl: './datospersonale.component.html',
  styleUrls  : ['./datospersonale.component.scss']
})
export class DatospersonaleComponent implements OnInit {
  
  data:Users[];
  
  constructor(
    private user:UsersService
  ) { }

  ngOnInit() {
    this.get_PersonalData(3);
  }
  
  get_PersonalData(id:number){
    this.user.getPersonalData(id)
             .then(respuesta => this.data = respuesta);
  }

}
