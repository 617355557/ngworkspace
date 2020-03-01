import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-control-demo',
  templateUrl: './form-control-demo.component.html',
  styleUrls: ['./form-control-demo.component.css']
})
export class FormControlDemoComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

  onSubmit(form: any): boolean {
    console.log('you submitted value:', form);
    return false;
  }
}
