import { Category } from './category';
export class Product {
    constructor(
        public ID:number,
        public Name:string,
        public Price:number,
        public Quantity:number,
        public Discount:number,
        public Color:string,
        public Description:string,
        public Image:string,
        public Categories:Category

    ){}
}
