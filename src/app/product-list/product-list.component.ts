import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/Services/product.service';
import { Product } from '../Classes/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  productList:Product[]=[];
  errorMsg: any;
  constructor(private productService:ProductService ,
    private router: Router) { }

  ngOnInit(): void {
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

}
