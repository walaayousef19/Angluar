import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './categoryModule/add-category/add-category.component';
import { IndexComponent } from './categoryModule/index/index.component';
import { UpdateCategoryComponent } from './categoryModule/update-category/update-category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './productModule/add-product/add-product.component';

const routes: Routes = [
  {path: '',
  component:DashboardComponent,
},
{
path:'addproduct',component:AddProductComponent
},
{
  path:'Category/add',component:AddCategoryComponent
},
{
  path:'Category/Index',component:IndexComponent
},
{
  path:'Category/edit',component:UpdateCategoryComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
