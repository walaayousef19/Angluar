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
wishList:Product[]
  ngOnInit(): void 
  {
    console.log(localStorage.getItem("wishlist"));
    this.wishList=JSON.parse(localStorage.getItem("wishlist")||'{}')
  //  console.log(this.wishList);
  }

  cartList:Array<Product>=[]
  
  addToCart(Product:Product)
  {
this.cartList=JSON.parse(localStorage.getItem("ProductList")||'{}');
this.cartList.push(Product);
localStorage.setItem("ProductList",JSON.stringify(this.cartList))
const index: number = this.wishList.indexOf(Product);
this.wishList.splice(index, 1);
localStorage.setItem("wishlist",JSON.stringify(this.wishList));
  }
}
