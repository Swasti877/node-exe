import { Injectable } from '@angular/core';
import { data } from '../Data/ProductData';
import { ProductModel } from '../Models/ProductModel';
import { SelectedItemService } from './selected-item.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ProductList: Array<ProductModel> = data;
  
  constructor(private selectedItemService: SelectedItemService) { }

  addProduct(obj:ProductModel){
    this.ProductList.push(obj)
  }

  QtyIncrement(ProductName:string){

    for (let i in this.ProductList) {
      if (this.ProductList[+(i)].ItemName == ProductName) {

        if (this.ProductList[+(i)].Quantity != 0) {
          let x = this.ProductList[+(i)].addedQuantity
          let y = this.ProductList[+(i)].Quantity;
          if (x != undefined) {
            x = x + 1
            y = y - 1
            this.ProductList[+(i)].addedQuantity = x;
            this.ProductList[+(i)].Quantity = y

            this.selectedItemService.OnIncrement(this.ProductList[+(i)])
          }
        }
        else{
          alert('Quantity is limited')
        }
      }
    }

  }

  QtyDecrement(ProductName:string){
    for (let i in this.ProductList) {
      if (this.ProductList[+(i)].ItemName == ProductName) {

        if (this.ProductList[+(i)].addedQuantity != 0) {
          let x = this.ProductList[+(i)].addedQuantity
          let y = this.ProductList[+(i)].Quantity;
          if (x != undefined) {
            x = x - 1
            y = y + 1
            this.ProductList[+(i)].addedQuantity = x;
            this.ProductList[+(i)].Quantity = y

            this.selectedItemService.Ondecrement(this.ProductList[+(i)])
          }
        }else{
          alert('Can not Decrease Quantity')
        }
      }
    }
  }
}
