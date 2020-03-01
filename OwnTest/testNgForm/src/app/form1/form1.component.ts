import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  aaa: string;
  constructor() {
    this.aaa = '1';
  }

  ngOnInit() {
  }

  onSumbit(formObj: any): boolean {
    console.log(formObj);
    console.log(formObj.value);
    return false;
  }
}
