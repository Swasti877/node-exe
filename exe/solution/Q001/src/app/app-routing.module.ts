import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { UserSeletedItemComponent } from './user-seleted-item/user-seleted-item.component';

const routes: Routes = [
  {path:"",component:AllItemsComponent},
  {
    path:'addItem',component:AddProductComponent
  },
  {
    path:'Listing',component:UserSeletedItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
