import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Classes/product';
import { ProductService } from 'src/Services/product.service';

@Component({
  selector: 'app-index-product',
  templateUrl: './index-product.component.html',
  styleUrls: ['./index-product.component.scss']
})
export class IndexProductComponent implements OnInit {

  constructor(private productService:ProductService) { }
productList:Product[]=[];

  ngOnInit(): void {
    this.productService.returnAllProducts().subscribe
    ( productyData=>
      {
        this.productList=productyData;
        for(var i=0;i<this.productList.length;i++){
          console.log(this.productList[i]);
        }   
      },
      errorResponse=>
      {
      // this.errorMsg=errorResponse;
      console.log("Error");
      }
    );
  }

}
