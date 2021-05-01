import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ImageSnipet } from 'src/app/Classes/image-snipet';
import { CategoryService } from 'src/Services/category.service';
import { ProductService } from '../../../Services/product.service';
import { Category } from '../../Classes/category';
import { Product } from '../../Classes/product';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadService } from 'src/Services/upload.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  [x: string]: any;
    imageURL:string="../assets/image/img.jpeg";
    shortLink: string = "";
    loading: boolean = false; // Flag variable
  file: File; // 

  constructor( private fileUploadService:UploadService,private fb:FormBuilder,private productServices:ProductService,private catServicee:CategoryService,private router:Router) { }
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
    Image:['',[Validators.required]],
    Description:['',[Validators.required]],
    discount:[,[Validators.required]],
    Quantity:['',[Validators.required]],
    CategoryId:[0,[Validators.required]],
    Color:['',[Validators.required]]
    })

   this.getProduct();
   this.catServicee.returnAllCategory().subscribe
   ( categoryData=>
     {
       this.categoryList=categoryData;
       for(var i=0;i<this.categoryList.length;i++){
         //console.log(this.categoryList[i]);
       // alert( this.categoryList)
       }
     },
     errorResponse=>
     {
   //   this.error=errorResponse;
   console.log('failed');
     }
   );
  }
get name()
{
  return this.addProductForm.get("name");
}
get image()
{
  return this.addProductForm.get('Image');
}
get price()
{
  return this.addProductForm.get('price')
}
get Color()
{
  return this.addProductForm.get('Color')
}
get Description()
{
  return this.addProductForm.get('Description')
}
get discount()
{
  return this.addProductForm.get('discount')
}
get Quantity()
{
  return this.addProductForm.get('Quantity')
}

get CategoryId()
{
  return this.addProductForm.get('CategoryId')
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
 onChange(event:any) {
  this.file = event.target.files[0];
  this.loading = !this.loading;
        console.log(this.file);
        alert(this.file);
        this.fileUploadService.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {
  
                    // Short link via api response
                    this.shortLink = event.link;
                       alert(event);
                       this.finalpath=event;
                    this.loading = false; // Flag variable 
                }
                alert(event);
                this.finalpath=event;
            }
        );
    }
    catId:any;
    setCat(Catid:any)
    {
      this.catId=Catid;      
    }
finalpath:string;
addProduct(product: Product) {
  
  // product.Image=this.image.value.split('\\')[2]
  product.Image=this.finalpath;
product.CategoryId=this.catId;
//alert(this.catId);
  product.ID = this.ProductId;
 // alert(product.Image);
  this,this.productServices.addProduct(product).subscribe(
   () => {
    this.dataSaved = true;
    this.massage = 'Record saved Successfully';
    this.getProduct();
  //  this.Reset();
    this.ProductId = 0;
   });
   this.router.navigate(['/Product/Index']); 
   alert("f");

 }

}