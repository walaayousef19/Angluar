import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './categoryModule/add-category/add-category.component';
import { IndexComponent } from './categoryModule/index/index.component';
import { UpdateCategoryComponent } from './categoryModule/update-category/update-category.component';
import { Category } from './Classes/category';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AddProductComponent } from './productModule/add-product/add-product.component';
import { IndexProductComponent } from './productModule/index-product/index-product.component';
import { HeaderComponent } from './header/header.component';

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
  path:'Category/edit/:id',component:UpdateCategoryComponent
=======

  path:'Category/edit/:id',component:UpdateCategoryComponent

>>>>>>> 9064a5d80d8dafc13d0d4b7413c677d68bb6d4c4
},
{
  path:'Product/add',component:AddProductComponent
},
{
  path:'Product/Index',component:IndexProductComponent
<<<<<<< HEAD
},
{
  path:"header",component:HeaderComponent
}

=======
}
>>>>>>> 9064a5d80d8dafc13d0d4b7413c677d68bb6d4c4
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
