import { Cart } from "./Cart";
import { Product } from "./product";

export class ProductCart {
    constructor(
        public ID:number, 
        public Product:Product, 
        public Cart:Cart

    ){}
}