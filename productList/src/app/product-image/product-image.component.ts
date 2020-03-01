import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../inventory-app/product.model';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css'],
  host: {class: 'ui small iamge'}
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product;

  constructor() {
  }

  ngOnInit() {
  }

}
