import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './categoryModule/add-category/add-category.component';
import { IndexComponent } from './categoryModule/index/index.component';
import { UpdateCategoryComponent } from './categoryModule/update-category/update-category.component';
import { Category } from './Classes/category';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './productModule/add-product/add-product.component';
import { IndexProductComponent } from './productModule/index-product/index-product.component';

const routes: Routes = [
  {path: '',
  component:DashboardComponent,
},

{
  path:'Category/add',component:AddCategoryComponent
},
{
  path:'Category/Index',component:IndexComponent
},
{
<<<<<<< HEAD
  path:'Category/edit',component:UpdateCategoryComponent
=======
  path:'Category/edit/:id',component:UpdateCategoryComponent
>>>>>>> f45cc1d0476b74ae2aff51d96f063acd9872a24d
},
{
  path:'Product/add',component:AddProductComponent
},
{
  path:'Product/Index',component:IndexProductComponent
},

<<<<<<< HEAD
=======

>>>>>>> f45cc1d0476b74ae2aff51d96f063acd9872a24d
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
