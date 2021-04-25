import { Payment } from "./Payment";
export class User {
    constructor(
        public Address:string, 
        public Birthdate:Date,
        public Gender:string,
        public Country:string,
        public IsDeleted:boolean,
        public Payment:Payment[]
    ){}
}