import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private productService:ProductService, private route: ActivatedRoute ,
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

  deleteProduct(id:any){
    this.productService.deleteProduct(id)
    .subscribe(() => {
      console.log('Deleted');
      this.getProduct();
    }, (err) => {
      console.log(err);
    });
  }


}

