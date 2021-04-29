import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cartService } from 'src/Services/Cart.service';
import { ProductService } from 'src/Services/product.service';
import { wishlistService } from 'src/Services/wishList.service';
import { Cart } from '../Classes/Cart';
import { Product } from '../Classes/product';
import { ProductCart } from '../Classes/ProductCart';
import { ProductWishlist } from '../Classes/ProductWishlist';
import { Wishlist } from '../Classes/WishList';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  errorMsg: any;
  product:Product;
  productCart:ProductCart[];
  wishList:Wishlist;
  productWishList:ProductWishlist[];
  cart:Cart;

  constructor(private productService:ProductService, private route: ActivatedRoute ,private wishListService:wishlistService,private cartService:cartService) { }
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
  addToWishList(){
  this.wishListService.addWishlist(this.wishList).subscribe(
    (res)=>
    {
      alert(res);
      alert("Added Successfuly");
    },

    (errorResponse)=>
    {
     this.errorMsg=errorResponse; 
     alert("falied" +this.errorMsg);    
    })
  }
  addToCart(){
    this.cartService.addCart(this.cart).subscribe(
      (res)=>
      {
        alert(res);
        alert("Added Successfuly");
      },
  
      (errorResponse)=>
      {
       this.errorMsg=errorResponse; 
       alert("falied" +this.errorMsg);    
      })
  }

}
