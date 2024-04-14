import { Injectable } from '@angular/core';
import { ProductModel } from '../Models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class SelectedItemService {
  selected_item_list:Array<ProductModel> = []

  constructor() { }

 Arr:Array<string> = []
  OnIncrement(obj:ProductModel){

    if(this.selected_item_list.length == 0){
      this.selected_item_list.push(obj)
      console.log("outer",this.selected_item_list)
    }
    else{
      
      for(let i in this.selected_item_list){
        
        if(obj.ItemName == this.selected_item_list[+(i)].ItemName){
          console.log("if",this.selected_item_list)
          this.selected_item_list[+(i)].addedQuantity = obj.addedQuantity
          this.selected_item_list[+(i)].Price = obj.Price
        }
        else{
          this.selected_item_list.push(obj);
        }
      }
    }
    
  }
  Ondecrement(obj:ProductModel){
    for(let i in this.selected_item_list){
      if(obj.ItemName == this.selected_item_list[+(i)].ItemName){
        this.selected_item_list[+(i)].addedQuantity = obj.addedQuantity
        this.selected_item_list[+(i)].Price = obj.Price
      }
      else{
        this.selected_item_list.push(obj)
      }
    }
  }
}
