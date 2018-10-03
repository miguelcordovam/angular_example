import {Component, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    console.log("Country to get categories : ");
    this.productService.getProducts("")
      .subscribe(products => this.products = products['Items']);
  }
}
