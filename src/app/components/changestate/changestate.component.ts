import { Component, OnInit } from '@angular/core';
enum ColorState{
  on  = 'green',
  off = 'gray'
}
@Component({
  selector: 'changeState',
  templateUrl: './changestate.component.html',
  styleUrls: ['./changestate.component.scss']
})
export class ChangestateComponent implements OnInit {
  private colorState = ColorState.off;
  private btnState: boolean = false;

  constructor() { }

  private onChangeState() {
    console.clear();
    console.log('Initial colorState: ', this.colorState);
    let state = (this.colorState == ColorState.on) ? ColorState.off : ColorState.on;
    this.colorState = state;
    console.log('current colorState: ',this.colorState);
  }

  ngOnInit() {
  }

}
