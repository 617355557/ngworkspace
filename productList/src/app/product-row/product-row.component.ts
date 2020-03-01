import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../inventory-app/product.model';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
  host: {'class': 'item'}
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;

  constructor() {
  }

  ngOnInit() {
  }

}
