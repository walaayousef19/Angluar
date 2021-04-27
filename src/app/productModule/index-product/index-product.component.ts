import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Classes/category';
import { Product } from 'src/app/Classes/product';
import { ProductService } from '../../../Services/product.service';

@Component({
  selector: 'app-index-product',
  templateUrl: './index-product.component.html',
  styleUrls: ['./index-product.component.scss']
})
export class IndexProductComponent implements OnInit {

  productList:Product[]=[];
  errorMsg: any;
  categoryList:Category [];
  dataSaved=false;
  massage: string;
  ProductId: number=0;
  addProductForm:any;
  constructor(private fb: FormBuilder,private productService:ProductService, private route: ActivatedRoute ,
    private router: Router) { }

  ngOnInit(): void {
    this.addProductForm=this.fb.group({
      name:['',[Validators.required]],
      price:['',[Validators.required]],
   // Image:['',[Validators.required]],
    Description:['',[Validators.required]],
    discount:[,[Validators.required]],
    Quantity:['',[Validators.required]],
    Categories:['',[Validators.required]],
    })
    this.getProduct();
  }
  getProduct(){
    this.productService.returnAllProduct().subscribe
    ( productData=>
      {
        this.productList=productData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
    );
  }

  deleteProduct(id:any){
    if (confirm("Are You Sure To Delete this Informations")) {

    this.productService.deleteProduct(id)
    .subscribe(() => {
      console.log('Deleted');
      this.getProduct();
    }, (err) => {
      console.log(err);
    });
  }
  }


}

