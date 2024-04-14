import { Component , OnInit} from '@angular/core';
import {FormBuilder,FormControl,FormGroup,ReactiveFormsModule,FormsModule,Validators,AbstractControl} from'@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../Services/product.service';
import { ProductModel } from '../Models/ProductModel';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule,FormsModule]

})
export class AddProductComponent {
  productForm = new FormGroup({
    TypeofProduct: new FormControl('',Validators.required),

    ItemName: new FormControl('',Validators.required),

    Quantity: new FormControl(0,[Validators.required,Validators.min(1)]),

    Price: new FormControl(0,[Validators.required,Validators.min(1)]),

    Discount: new FormControl(0,[Validators.required,Validators.min(0),Validators.max(100)])
  })

  constructor(private productService:ProductService){

  }

  get f():{[key:string]:AbstractControl}{
    return this.productForm.controls;
  }

  OnSubmit(){
    this.productService.addProduct(<ProductModel>(this.productForm.value))
    console.log(this.productForm.value)
    this.productForm.reset()
  }
}
