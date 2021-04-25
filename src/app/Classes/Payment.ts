import { User } from "./User";
export class Payment {
    constructor(
        public ID:number, 
        public CardNumber:string,
        public OwnerName:string,
        public ExpDate:Date,
        public User:User
    ){}
}