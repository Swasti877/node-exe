import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../Models/ProductModel';
import { Data } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { ProductService } from '../Services/product.service';
@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrl: './all-items.component.css'
})
export class AllItemsComponent {

  ProductList: Array<ProductModel> = this.productService.ProductList;
  Qty: number = 0;

  constructor(private productService: ProductService) { }

  getNetPrice(Price: number, Discount: number) {
    return Price - (Price * Discount) / 100
  }

  IncrementQty(ProductName: string) {
    this.productService.QtyIncrement(ProductName);
  }

  DecrementQty(ProductName: string) {
    this.productService.QtyDecrement(ProductName);
  }

}
