import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-builder1',
  templateUrl: './builder1.component.html',
  styleUrls: ['./builder1.component.css']
})
export class Builder1Component implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  productName: string;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      // sku: ['', Validators.required]
      sku: ['', Validators.compose([Validators.required, skuValidators])],
      productName: ['', Validators.required]
    });
    this.sku = this.myForm.controls.sku;

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to', value);
      });

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log(this.productName);
        console.log(this.myForm.get('productName').value);
        console.log('form changed to', form);
      }
    );
  }

  ngOnInit() {
  }

  onSubmit(obj: any, value: string): void {
    console.log('you submitted value:', value);
  }
}

function skuValidators(control: FormControl): { [s: string]: boolean } {
  if (!/^123/.test(control.value)) {
    return {invalidSku: true};
  }
}
