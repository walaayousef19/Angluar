import { Component, OnInit } from '@angular/core';
 import { Observable} from 'rxjs';  
 import { NgForm,FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import { Order } from 'src/app/Classes/Order';
import { OrderService } from 'src/Services/order.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.scss']
})
export class UpdateOrderComponent implements OnInit {
    dataSaved = false;  
    massage: string;  
    FromOrder: any;  
    OrderId: number = 0;  
    allOrder: Observable < Order[] > ;  
    constructor(private formbulider: FormBuilder, private orderService: OrderService) {}  
    GetOrder() {  
     debugger;  
     this.allOrder = this.orderService.getOrder();  
    }  
    Reset() {  
     this.FromOrder.reset();  
    }  
    AddOrder(order: Order) {  
     debugger;  
     order.ID = this.OrderId;  
     this.orderService.addOrder(order).subscribe(  
      () => {  
       this.dataSaved = true;  
       this.massage = 'Record saved Successfully';  
       this.GetOrder();  
       this.Reset();  
       this.OrderId = 0;  
      });  
    }  
    DeleteOrder(OrderId: number) {  
     if (confirm("Are You Sure To Delete this Informations")) {  
      this.orderService.DeleteOrder(OrderId).subscribe(  
       () => {  
        this.dataSaved = true;  
        this.massage = "Deleted Successfully";  
        this.GetOrder();  
       }  
      );  
     }  
    }  
    EditOrder(OrderId: number) {  
     debugger;  
     this.orderService.getOrderById(OrderId).subscribe(Response => {  
      this.massage = "";  
      this.dataSaved = false;  
      debugger;  
      this.OrderId = Response.ID;  
      this.FromOrder.controls['TotalPrice'].setValue(Response.TotalPrice);  
      this.FromOrder.controls['OrderDate'].setValue(Response.OrderDate);  
       });  
    }  
    ngOnInit(): void {  
     this.FromOrder = this.formbulider.group({  
      TotalPrice: ['', [Validators.required]],  
      OrderDate: ['', [Validators.required]],   
     });  
     this.GetOrder();  
    }  



}
