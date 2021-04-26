import { Product } from "./product";

export class Cart {
    constructor(
        public ID:number, 
        public Products:Product[]
    ){}
}