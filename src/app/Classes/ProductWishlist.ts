import { Product } from "./product";
import { Wishlist } from "./WishList";

export class ProductWishlist {
    constructor(
        public ID:number, 
        public Product:Product,
        public WishList:Wishlist

    ){}
}