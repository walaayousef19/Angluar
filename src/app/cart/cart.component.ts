import { Component, OnInit } from '@angular/core';
import { Product } from '../Classes/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList:Product[];
  constructor() { }

  ngOnInit(): void {
  console.log(JSON.parse(localStorage.getItem("ProductList")||'{}'));
    this.cartList=JSON.parse(localStorage.getItem("ProductList")||'{}');
    console.log(this.cartList);
  }


}
