
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
import { UpdateProductComponent } from './productModule/update-product/update-product.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path: '',component:DashboardComponent},

{
  path:'Category/add',component:AddCategoryComponent
},
{
  path:'Category/Index',component:IndexComponent
},
{

  path:'Category/edit/:id',component:UpdateCategoryComponent

<<<<<<< HEAD
},
{

  path:'Product/edit/:id',component:UpdateProductComponent

=======
>>>>>>> de796b276c415d92f0699c28d903a9d56d34fa44
},
{
  path:'Product/add',component:AddProductComponent
},
{
  path:'Product/Index',component:IndexProductComponent
},
{
  path:"header",component:HeaderComponent
},
{
  path:"footer",component:FooterComponent
},
{
  path:"productlist",component:ProductListComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
