import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/Services/product.service';
import { Product } from '../Classes/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  errorMsg: any;
  product:Product;

  constructor(private productService:ProductService, private route: ActivatedRoute ,private router: Router) { }
 prodId:number;
  ngOnInit(): void {
       
    this.route.queryParams.subscribe(params => {
      this.prodId= this.route.snapshot.params['id'];;
          this.productService.getProductById(this.prodId).subscribe(
           (res)=>
           {
             this.product=res;
           },
         
           (errorResponse)=>
           {
            this.errorMsg=errorResponse;
            
           }
         );
     
       });
  }

}
