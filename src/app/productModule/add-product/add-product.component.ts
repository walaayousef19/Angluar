import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    discount:['',[Validators.required]],
    Quantity:['',[Validators.required]],
    Categories:['',[Validators.required]],

  })

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
  get Image()
  {
    return this.addProductForm.get('Image')
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
           var product=new Product (this.id?.value,this.name?.value,this.Image?.value,
            this.price?.value,this.Description?.value,this.Quantity?.value,
            this.color?.value,this.Categories?.value,this.discount?.value);
           this.productServices.addProduct(product).subscribe
            (data =>
               {alert("Succesfully Added Product details")},Error => {alert("failed while adding Product details")}
           );
  }

}
