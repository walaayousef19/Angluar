import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ImageSnipet } from 'src/app/Classes/image-snipet';
import { CategoryService } from 'src/Services/category.service';
import { ProductService } from '../../../Services/product.service';
import { Category } from '../../Classes/category';
import { Product } from '../../Classes/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
    imageURL:string="../assets/image/img.jpeg";
    fileToUpload:File;

  constructor(private fb:FormBuilder,private productServices:ProductService,private catServicee:CategoryService) { }
  categoryList:Category[];
  ngOnInit(): void {
    this.catServicee.returnAllCategory().subscribe
    ( categoryData=>
      {
        this.categoryList=categoryData;
        for(var i=0;i<this.categoryList.length;i++){
          console.log(this.categoryList[i]);
          alert( this.categoryList)
        }
      },
      errorResponse=>
      {
    //   this.error=errorResponse;
    console.log('failed');
      }
    );
  }
  addProductForm=this.fb.group({

    id:['',[]],
    name:['',[Validators.required]],
    price:['',[Validators.required]],
    Image:['',[Validators.required]],
    color:['',[Validators.required]],
    Description:['',[Validators.required]],
    discount:[,[Validators.required]],
    Quantity:['',[Validators.required]],
    Categories:['',[Validators.required]],
  
  })
  selectedFile:ImageSnipet;
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnipet(event.target.result, file);
      alert(this.selectedFile);
     
    });

    reader.readAsDataURL(file);
  }
  get image()
  {
    return this.addProductForm.get('Image')
  }
  get name()
  {
    return this.addProductForm.get('name')
  }
  get price()
  {
    return this.addProductForm.get('price')
  }
  get color()
  {
    return this.addProductForm.get('color')
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
 
  get Categories()
  {
    return this.addProductForm.get('Categories')
  }

  get id()
  {
    return this.addProductForm.get('id')
  }

  addProduct()
  {
   
           var product=new Product (0,this.name?.value,
            this.price?.value,this.Quantity?.value,this.discount?.value,this.color?.value,this.Description?.value
            ,this.image?.value,this.Categories?.value);
            //alert(product.Discount)
            //alert(product.Image)
               
           // alert(product.Image.src)
          //console.log(product);
           this.productServices.addProduct(product).subscribe
            (data =>
               {alert("Succesfully Added Product details")},Error => {alert("failed while adding Product details")}
           );

  }

}
