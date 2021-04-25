import {catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError } from 'rxjs';
import { Payment } from 'src/app/Classes/Payment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  url='http://localhost:2415/api/Payment';
  addPayment(payment:Payment): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(payment);
 
    return this.http.post<Payment>(this.url, body,{headers:headers}) 
}
    
    returnAllPayments():Observable<Payment[]>
    {
       return this.http.get<Payment[]>(this.url).pipe(catchError((err)=>
        {
        
          return throwError(err.message ||"Internal Server error contact site adminstarator");
        }));
    }
    updatePayment(id:any,payment:Payment): Observable<Payment> {   
      return this.http.put<Payment>(this.url+'/'+id,payment).pipe(
        catchError((err)=>{
          console.log("erro ocuured")
          return throwError(err.message ||"Internal Server error contact site adminstarator");
          
        
        })
      ); 
  }
  deletePayment(id: number):Observable<number>{
    return this.http.delete<number>(this.url+'/'+id)
    .pipe(
      catchError( (err) => {
        return throwError(err.message ||"Error deleting travellers data.");
     }));
}
getPaymentById(id:any):Observable<Payment>
{
  return this.http.get<Payment>(this.url+'/'+id).pipe(catchError((err)=>
  {
  
    return throwError(err.message ||"Internal Server error contact site adminstarator");
  }));
}
}

