
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
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
{
  path:'Category/add',component:AddCategoryComponent
},
{
  path:'Category/Index',component:IndexComponent
},
{

  path:'Category/edit/:id',component:UpdateCategoryComponent

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
  path:"productlist",component:ProductListComponent,
  children:
  [
    {
      path:"productDetails",component:ProductDetailsComponent
    }
  ]
},
{
  path:"cart",component:CartComponent
},
{
  path:"productDetails",component:ProductDetailsComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
