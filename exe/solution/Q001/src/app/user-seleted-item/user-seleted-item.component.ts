import { Component,OnInit } from '@angular/core';
import { ProductModel } from '../Models/ProductModel';
import { SelectedItemService } from '../Services/selected-item.service';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms'

@Component({
  selector: 'app-user-seleted-item',
  templateUrl: './user-seleted-item.component.html',
  styleUrl: './user-seleted-item.component.css',
  standalone:true,
  imports:[FormsModule,CommonModule]
})
export class UserSeletedItemComponent {
  flag = true
  
  items:Array<ProductModel> = [];
  ngOnInit(){
   this.items = this.selectedProductService.selected_item_list;
  }
  constructor(private selectedProductService:SelectedItemService){
  }

}
