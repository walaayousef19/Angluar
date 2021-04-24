import { Product } from "./product";

export class Order {
    constructor(
        public ID:number, 
        public TotalPrice:number,
        public OrderDate:Date,
        public Products:Product[]
    ){}
}