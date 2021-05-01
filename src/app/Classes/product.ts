import { Category } from './category';
import { ImageSnipet } from './image-snipet';
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
        public CategoryId:Category

    ){}
}
