import { Product } from "./product";
import { User } from "./User";

export class Wishlist {
    constructor(
        public ID:number, 
        public User:User,
        public Products:Product[]
    ){}
}