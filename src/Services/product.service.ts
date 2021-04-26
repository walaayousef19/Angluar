import {catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/Classes/product';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable ,throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  url='http://localhost:2415/api/Product';
  addProduct(product:Product): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(product);

    return this.http.post<Product>(this.url, body,{headers:headers})
}

    returnAllProduct():Observable<Product[]>
    {
       return this.http.get<Product[]>(this.url).pipe(catchError((err)=>
        {

          return throwError(err.message ||"Internal Server error contact site adminstarator");
        }));
    }
    updateProduct(id:any,product:Product): Observable<any> {
      return this.http.put<Product>(this.url+'/'+id,product).pipe(
        catchError((err)=>{
          console.log("erro ocuured")
          return throwError(err.message ||"Internal Server error contact site adminstarator");


        })
      );
  }
  deleteProduct(id: any):Observable<any>{
    return this.http.delete<Product>(this.url+'/'+id)
    .pipe(
      catchError( (err) => {
        return throwError(err.message ||"Error deleting travellers data.");
     }));
}
getProductById(id:any):Observable<Product>
{
  return this.http.get<Product>(this.url+'/'+id).pipe(catchError((err)=>
  {

    return throwError(err.message ||"Internal Server error contact site adminstarator");
  }));
}
}

