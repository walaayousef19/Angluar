import {catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError } from 'rxjs';
import { Cart } from 'src/app/Classes/Cart';
@Injectable({
  providedIn: 'root'
})
export class cartService {

  constructor(private http:HttpClient) { }
  url='http://localhost:2415/api/Cart';
  addCart(prodId:number): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    //const body=JSON.stringify(cart);
 
    return this.http.post<Cart>(this.url+prodId,{headers:headers}) 
}
    
    returnAllCarts():Observable<Cart[]>
    {
       return this.http.get<Cart[]>(this.url).pipe(catchError((err)=>
        {
        
          return throwError(err.message ||"Internal Server error contact site adminstarator");
        }));
    }
    updateCart(id:any,cart:Cart): Observable<Cart> {   
      return this.http.put<Cart>(this.url+'/'+id,cart).pipe(
        catchError((err)=>{
          console.log("erro ocuured")
          return throwError(err.message ||"Internal Server error contact site adminstarator");
          
        
        })
      ); 
  }
  deleteCart(id: number):Observable<number>{
    return this.http.delete<number>(this.url+'/'+id)
    .pipe(
      catchError( (err) => {
        return throwError(err.message ||"Error deleting travellers data.");
     }));
}
getCartById(id:any):Observable<Cart>
{
  return this.http.get<Cart>(this.url+'/'+id).pipe(catchError((err)=>
  {
  
    return throwError(err.message ||"Internal Server error contact site adminstarator");
  }));
}
}

