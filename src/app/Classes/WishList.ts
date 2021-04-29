import { Product } from "./product";
import { ProductWishlist } from "./ProductWishlist";
import { User } from "./User";

export class Wishlist {
    constructor(
        public ID:number, 
        public User:User,
        public Products:ProductWishlist[]
    ){}
}