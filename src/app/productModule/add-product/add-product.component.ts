import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/Services/category.service';
import { ProductService } from '../../../Services/product.service';
import { Category } from '../../Classes/category';
import { Product } from '../../Classes/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  [x: string]: any;
    imageURL:string="../assets/image/img.jpeg";
    fileToUpload:File;

  constructor(private fb:FormBuilder,private productServices:ProductService,private catServicee:CategoryService) { }
  categoryList:Category[];
  productList:Product []=[];
  errorMsg: any;
  dataSaved=false;
  massage: string;
  ProductId: number=0;
  addProductForm:any;
  ngOnInit(): void {
    this.addProductForm=this.fb.group({
      name:['',[Validators.required]],
      price:['',[Validators.required]],
   // Image:['',[Validators.required]],
    color:['',[Validators.required]],
    Description:['',[Validators.required]],
    discount:['',[Validators.required]],
    Quantity:['',[Validators.required]],
    Categories:['',[Validators.required]],
    })
   this.getProduct();
  }

  getProduct(){
    this.productServices.returnAllProduct().subscribe((Data)=>{
      this.productList=Data;
    },(err)=>{
    this.errorMsg=err;
    })
  }
Reset() {
  this.addProductForm.reset();
 }
addProduct(product: Product) {
  debugger;
  product.ID = this.ProductId;
  this,this.productServices.addProduct(product).subscribe(
   () => {
    this.dataSaved = true;
    this.massage = 'Record saved Successfully';
    this.getProduct();
    this.Reset();
    this.ProductId = 0;
   });
   this.router.navigate(['/Product/Index']);
 }


}
