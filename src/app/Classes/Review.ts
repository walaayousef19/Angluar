import { Product } from "./product";
import { User } from "./User";

export class Review {
    constructor(
        public ID:number, 
        public Description:string,
        public Rating:number,
        public User:User,
        public Products:Product[]
    ){}
}