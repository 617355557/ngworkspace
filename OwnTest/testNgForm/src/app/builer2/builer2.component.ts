import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-builer2',
  templateUrl: './builer2.component.html',
  styleUrls: ['./builer2.component.css']
})
export class Builer2Component implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  productName: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['', Validators.required],
      productName: ['', Validators.compose([Validators.required, notequals2])]
    });
    this.sku = this.myForm.controls.sku;
    this.productName = this.myForm.controls.productName;

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('subcribe change:', form);
      }
    );
  }

  ngOnInit() {
  }

  onSubmit(e: any, val: any): boolean {
    console.log('val', val);
    console.log('e', e);
    console.log('productName', this.productName.value);
    return false;
  }
}

function notequals2(val: FormControl): { [s: string]: boolean } {
  console.log(val.value !== '1')
  if (val.value !== '1') {
    return {errcode1: true};
  }
}
