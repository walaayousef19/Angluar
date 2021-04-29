import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/Services/product.service';
import { wishlistService } from 'src/Services/wishList.service';
import { Product } from '../Classes/product';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
product:Product;
productId:number;
  errorMsg: any;
  constructor(  private route: ActivatedRoute ,private productService:ProductService ,private router: Router,private wishListService:wishlistService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.productId= this.route.snapshot.params['id'];;
          this.productService.getProductById(this.productId).subscribe(
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
