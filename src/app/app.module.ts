import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateCategoryComponent } from './categoryModule/update-category/update-category.component';
import { IndexComponent } from './categoryModule/index/index.component';
import { AddProductComponent } from './productModule/add-product/add-product.component';
import { UpdateProductComponent } from './productModule/update-product/update-product.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexProductComponent } from './productModule/index-product/index-product.component';
import { UpdateOrderComponent } from './OrderModule/update-order/update-order.component';
import { AddCategoryComponent } from './categoryModule/add-category/add-category.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    IndexComponent,
    AddProductComponent,
    UpdateProductComponent,
    RegisterComponent,
    IndexProductComponent,
    UpdateOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
