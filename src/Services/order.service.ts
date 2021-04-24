import { Injectable } from '@angular/core';    
import {HttpClient} from '@angular/common/http';    
import {HttpHeaders} from '@angular/common/http';    
import { Observable, throwError } from 'rxjs';       
import { Order } from 'src/app/Classes/Order';
import { catchError } from 'rxjs/operators';
    
@Injectable({    
  providedIn: 'root'    
})    
export class OrderService {    
    
  url='http://localhost:2415/api/Order';  
  constructor(private http:HttpClient) { }    
  getOrder():Observable<Order[]>    
  {    
    return this.http.get<Order[]>(this.url ).pipe(
      catchError( (err) => {
        return throwError(err.message ||"Error while getting data.");
     }));   
  }    
  addOrder(order:Order):Observable<Order[]>    
  {    
   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };    
    return this.http.post<Order[]>(this.url , order, httpOptions) .pipe(
      catchError( (err) => {
        return throwError(err.message ||"Error adding data.");
     }));    
  }   
  updateOrder(id:number,order:Order): Observable<Order> {   
    return this.http.put<Order>(this.url+'/'+id,order).pipe(
      catchError((err)=>{
        return throwError(err.message ||"Internal Server error contact site adminstarator");
      
      })
    ); 
} 
  DeleteOrder(OrderId:number):Observable<number>    
  {    
    return this.http.delete<number>(this.url + '/'+OrderId)  .pipe(
      catchError( (err) => {
        return throwError(err.message ||"Error deleting data.");
     }));    
  }    
  getOrderById(OrderId: number): Observable<Order> {    
    return this.http.get<Order>(this.url + '/' + OrderId).pipe(
      catchError( (err) => {
        return throwError(err.message ||"Error while getting data.");
     }));   
  }    
} 